import {
  Body,
  Controller,
  Delete,
  InternalServerErrorException,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AppConfigService } from '../app-config/app-config.service';
import { Response } from 'express';
import RefreshGuard from './guards/refresh.guard';
import SignupDto from './dtos/signup.dto';
import LoginDto from './dtos/login.dto';
import AccessGuard from './guards/access.guard';
import { User } from './decorators/user.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private config: AppConfigService,
  ) {}

  @Post('signup')
  async signup(@Body() dto: SignupDto, @Res({ passthrough: true }) res: Response) {
    const { user, accessToken, refreshToken } = await this.authService.signup(dto);

    res.cookie(this.config.COOKIE_NAME, refreshToken, {
      maxAge: this.config.COOKIE_MAX_AGE,
      httpOnly: true,
      sameSite: 'strict',
    });

    return { user, accessToken };
  }

  @Post('login')
  async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: Response) {
    const { user, accessToken, refreshToken } = await this.authService.login(dto);

    res.cookie(this.config.COOKIE_NAME, refreshToken, {
      maxAge: this.config.COOKIE_MAX_AGE,
      httpOnly: true,
      sameSite: 'strict',
    });

    return { user, accessToken };
  }

  @UseGuards(RefreshGuard)
  @Post('refresh')
  async refresh(@User() u: Express.User, @Res({ passthrough: true }) res: Response) {
    if (!u.refreshToken) {
      throw new InternalServerErrorException();
    }

    const { user, accessToken, refreshToken } = await this.authService.refresh(
      u.id,
      u.refreshToken,
    );

    res.cookie(this.config.COOKIE_NAME, refreshToken, {
      maxAge: this.config.COOKIE_MAX_AGE,
      httpOnly: true,
      sameSite: 'strict',
    });

    return { user, accessToken };
  }

  @UseGuards(AccessGuard)
  @Delete('logout')
  async logout(@User('id') id: string, @Res({ passthrough: true }) res: Response) {
    await this.authService.logout(id);
    res.clearCookie(this.config.COOKIE_NAME, { sameSite: 'strict', httpOnly: true });
  }
}
