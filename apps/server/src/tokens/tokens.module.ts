import { Global, Module } from '@nestjs/common';
import { TokensService } from './tokens.service';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [JwtModule],
  providers: [TokensService],
  exports: [TokensService],
})
export class TokensModule {}
