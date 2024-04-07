import { Prisma } from '@prisma/client';
import { IsEmail, IsOptional, Length } from 'class-validator';

export default class UserUpdateDto implements Prisma.UserUpdateInput {
  @IsOptional()
  @Length(1, 50)
  username?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @Length(8, 64)
  password?: string;
}
