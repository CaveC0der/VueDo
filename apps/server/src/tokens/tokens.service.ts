import { Injectable } from '@nestjs/common';
import { AppConfigService } from '../app-config/app-config.service';
import { TokenPayload } from './token-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokensService {
  constructor(
    private config: AppConfigService,
    private jwtService: JwtService,
  ) {}

  async signTokens(payload: TokenPayload) {
    return {
      accessToken: await this.jwtService.signAsync(payload, {
        algorithm: this.config.JWT_ALGORITHM,
        secret: this.config.JWT_ACCESS_SECRET,
        expiresIn: this.config.JWT_ACCESS_EXPIRES_IN,
      }),
      refreshToken: await this.jwtService.signAsync(payload, {
        algorithm: this.config.JWT_ALGORITHM,
        secret: this.config.JWT_REFRESH_SECRET,
        expiresIn: this.config.JWT_REFRESH_EXPIRES_IN,
      }),
    };
  }
}
