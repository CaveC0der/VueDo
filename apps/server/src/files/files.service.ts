import { Injectable, InternalServerErrorException, Logger, OnModuleInit } from '@nestjs/common';
import { mkdir, unlink, writeFile } from 'fs/promises';
import { existsSync } from 'fs';
import { extension } from 'mime-types';
import { join } from 'path';
import { AppConfigService } from 'src/app-config/app-config.service';
import { v4 } from 'uuid';

@Injectable()
export class FilesService implements OnModuleInit {
  constructor(private config: AppConfigService) {}

  async onModuleInit() {
    const existsPromise = new Promise((resolve) => {
      resolve(existsSync(this.config.SERVE_STATIC_PATH));
    });

    if (!(await existsPromise)) {
      await mkdir(this.config.SERVE_STATIC_PATH);
      Logger.log(
        `onModuleInit: ${this.config.SERVE_STATIC_PATH} directory was created`,
        FilesService.name,
      );
    }
  }

  async save(file: Express.Multer.File) {
    const filename = `${v4()}.${extension(file.mimetype)}`;

    try {
      await writeFile(join(this.config.SERVE_STATIC_PATH, filename), file.buffer);
      return filename;
    } catch (e) {
      Logger.error(`save: ${e.message}`, FilesService.name);
      throw new InternalServerErrorException(e.message);
    }
  }

  async delete(filename: string) {
    try {
      await unlink(join(this.config.SERVE_STATIC_PATH, filename));
    } catch (e) {
      Logger.error(`delete: ${e.message}`, FilesService.name);
      throw new InternalServerErrorException(e.message);
    }
  }
}
