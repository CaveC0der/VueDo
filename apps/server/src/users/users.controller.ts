import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  ParseFilePipeBuilder,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import UserUpdateDto from './dtos/user-update.dto';
import UserDto from './dtos/user.dto';
import { User } from '../auth/decorators/user.decorator';
import AccessGuard from '../auth/guards/access.guard';
import { AppConfigService } from '../app-config/app-config.service';
import { hash } from 'bcryptjs';
import { instance } from '../common/utils';
import { FilesService } from '../files/files.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { FILE_TYPE_REGEXP, MAX_FILE_SIZE } from '../common/constants';
import NotEmptyObjectPipe from '../common/pipes/not-empty-object.pipe';

@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AccessGuard)
@Controller('users/me')
export class UsersController {
  constructor(
    private prisma: PrismaService,
    private config: AppConfigService,
    private filesService: FilesService,
  ) {}

  @Get()
  async get(@User('id') id: string) {
    return instance(UserDto, await this.prisma.user.findUniqueOrThrow({ where: { id } }));
  }

  @Put()
  async update(@User('id') id: string, @Body(NotEmptyObjectPipe) dto: UserUpdateDto) {
    dto.password = dto.password ? await hash(dto.password, this.config.PASSWORD_SALT) : undefined;

    return instance(UserDto, await this.prisma.user.update({ where: { id }, data: dto }));
  }

  @Delete()
  async delete(@User('id') id: string) {
    await this.prisma.user.delete({ where: { id } });
  }

  @UseInterceptors(FileInterceptor('img'))
  @Post('avatar')
  async setAvatar(
    @User('id') id: string,
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({ fileType: FILE_TYPE_REGEXP })
        .addMaxSizeValidator({ maxSize: MAX_FILE_SIZE })
        .build(),
    )
    file: Express.Multer.File,
  ) {
    const user = await this.prisma.user.findUniqueOrThrow({ where: { id } });

    if (user.avatar) {
      await this.filesService.delete(user.avatar);
    }

    const avatar = await this.filesService.save(file);

    await this.prisma.user.update({ where: { id }, data: { avatar } });

    return { avatar };
  }

  @Delete('avatar')
  async deleteAvatar(@User('id') id: string) {
    const user = await this.prisma.user.findUniqueOrThrow({ where: { id } });

    if (user.avatar) {
      await this.filesService.delete(user.avatar);
    }
  }
}
