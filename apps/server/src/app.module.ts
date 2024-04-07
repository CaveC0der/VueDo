import { Module } from '@nestjs/common';
import { AppConfigModule } from './app-config/app-config.module';
import { ConfigModule } from '@nestjs/config';
import { AppConfigService } from './app-config/app-config.service';
import { ThrottlerModule } from '@nestjs/throttler';
import { TokensModule } from './tokens/tokens.module';
import { TodosModule } from './todos/todos.module';
import { AuthModule } from './auth/auth.module';
import { ConfigValidationSchema } from './app-config/config-validation.schema';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: ConfigValidationSchema,
      cache: true,
    }),
    PrismaModule,
    AppConfigModule,
    ThrottlerModule.forRootAsync({
      inject: [AppConfigService],
      useFactory: (config: AppConfigService) => [config.THROTTLER_OPTIONS],
    }),
    JwtModule,
    AuthModule,
    TokensModule,
    UsersModule,
    TodosModule,
    FilesModule,
  ],
})
export class AppModule {}
