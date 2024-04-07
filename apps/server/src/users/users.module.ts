import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { FilesModule } from '../files/files.module';

@Module({
  imports: [FilesModule],
  controllers: [UsersController],
})
export class UsersModule {}
