import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import JwtAccessStrategy from './strategies/jwt-access.strategy';
import JwtRefreshStrategy from './strategies/jwt-refresh.strategy';

@Module({
  providers: [AuthService, JwtAccessStrategy, JwtRefreshStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
