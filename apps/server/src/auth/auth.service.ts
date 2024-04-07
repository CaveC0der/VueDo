import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { AppConfigService } from '../app-config/app-config.service';
import SignupDto from './dtos/signup.dto';
import LoginDto from './dtos/login.dto';
import { compare, hash } from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';
import { TokensService } from '../tokens/tokens.service';
import UserDto from '../users/dtos/user.dto';
import { instance } from '../common/utils';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private tokensService: TokensService,
    private config: AppConfigService,
  ) {}

  async signup({ username, email, password }: SignupDto) {
    const hashed = await hash(password, this.config.PASSWORD_SALT);
    const user = await this.prisma.user.create({ data: { username, email, password: hashed } });
    const tokens = await this.tokensService.signTokens({ id: user.id });
    await this.prisma.token.create({
      data: {
        value: await hash(tokens.refreshToken, this.config.TOKEN_SALT),
        user: { connect: { id: user.id } },
      },
    });

    return { user: instance(UserDto, user), ...tokens };
  }

  async login({ email, password }: LoginDto) {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { email },
      include: { token: true },
    });

    if (!(await compare(password, user.password))) {
      throw new BadRequestException('invalid password');
    }

    const tokens = await this.tokensService.signTokens({ id: user.id });

    if (!user.token) {
      await this.prisma.token.create({
        data: {
          value: await hash(tokens.refreshToken, this.config.TOKEN_SALT),
          user: { connect: { id: user.id } },
        },
      });
    } else {
      await this.prisma.token.update({
        where: { userId: user.id },
        data: { value: await hash(tokens.refreshToken, this.config.TOKEN_SALT) },
      });
    }

    return { user: instance(UserDto, user), ...tokens };
  }

  async refresh(id: string, token: string) {
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { id },
      include: { token: true },
    });

    if (!user.token || !(await compare(token, user.token.value))) {
      throw new UnauthorizedException();
    }

    const tokens = await this.tokensService.signTokens({ id: user.id });
    await this.prisma.token.update({
      where: { userId: user.id },
      data: { value: await hash(tokens.refreshToken, this.config.TOKEN_SALT) },
    });

    return { user: instance(UserDto, user), ...tokens };
  }

  async logout(id: string) {
    await this.prisma.token.delete({ where: { userId: id } });
  }
}
