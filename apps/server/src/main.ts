import { HttpAdapterHost, NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AppConfigService } from './app-config/app-config.service';
import { PrismaClientExceptionFilter } from './prisma/prisma-client-exception.filter';
import { NestExpressApplication } from '@nestjs/platform-express';

async function start() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = app.get(AppConfigService);

  app.enableCors({ origin: config.ORIGIN, credentials: true });
  app.use(helmet());
  app.use(cookieParser());
  app.useGlobalPipes(
    new ValidationPipe({ transform: true, whitelist: true, forbidNonWhitelisted: true }),
  );
  app.useGlobalFilters(new PrismaClientExceptionFilter(app.get(HttpAdapterHost).httpAdapter));
  app.useStaticAssets(config.SERVE_STATIC_PATH, { prefix: config.SERVE_STATIC_PREFIX });

  await app.listen(config.PORT);

  Logger.log(`URL: ${await app.getUrl()}`, NestApplication.name);
}

start().then();
