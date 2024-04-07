import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import TodoListCreateDto from '../dtos/list/todo-list-create.dto';
import { PrismaService } from '../../prisma/prisma.service';
import TodoListUpdateDto from '../dtos/list/todo-list-update.dto';
import TodoListQueryDto from '../dtos/list/todo-list-query.dto';
import AccessGuard from '../../auth/guards/access.guard';
import { User } from '../../auth/decorators/user.decorator';
import { stringToBoolean } from '../../common/utils';
import NotEmptyObjectPipe from '../../common/pipes/not-empty-object.pipe';

@UseGuards(AccessGuard)
@Controller('todo-lists')
export class TodoListsController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async create(@User('id') id: string, @Body() dto: TodoListCreateDto) {
    return this.prisma.todoList.create({ data: { ...dto, user: { connect: { id } } } });
  }

  @Get()
  async getAll(@User('id') userId: string, @Query() dto: TodoListQueryDto) {
    return this.prisma.todoList.findMany({
      where: { userId },
      include: stringToBoolean(dto.eager) ? { todoItems: true } : undefined,
    });
  }

  @Get(':id')
  async get(@Param('id') id: string, @User('id') userId: string) {
    return this.prisma.todoList.findUniqueOrThrow({ where: { id, userId } });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @User('id') userId: string,
    @Body(NotEmptyObjectPipe) dto: TodoListUpdateDto,
  ) {
    await this.prisma.todoList.update({ where: { id, userId }, data: dto });
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @User('id') userId: string) {
    await this.prisma.todoList.delete({ where: { id, userId } });
  }
}
