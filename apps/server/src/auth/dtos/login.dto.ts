import { Prisma } from '@prisma/client';
import { IsEmail, Length } from 'class-validator';

export default class LoginDto implements Omit<Prisma.UserCreateInput, 'username'> {
  @IsEmail()
  email: string;

  @Length(8, 64)
  password: string;
}
