import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AppConfigService } from '../../app-config/app-config.service';
import { TokenPayload } from '../../tokens/token-payload.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class JwtAccessStrategy extends PassportStrategy(Strategy, 'jwt-access') {
  constructor(private config: AppConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.JWT_ACCESS_SECRET,
      algorithms: [config.JWT_ALGORITHM],
    });
  }

  validate(payload: TokenPayload) {
    return payload;
  }
}
