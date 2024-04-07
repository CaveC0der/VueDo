import {
  createParamDecorator,
  ExecutionContext,
  InternalServerErrorException,
} from '@nestjs/common';
import { Request } from 'express';

export const User = createParamDecorator(
  (data: keyof Express.User | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<Request>();

    if (!request.user) {
      throw new InternalServerErrorException();
    }

    return data ? request.user[data] : request.user;
  },
);
