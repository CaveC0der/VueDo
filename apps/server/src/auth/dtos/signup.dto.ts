import LoginDto from './login.dto';
import { Length } from 'class-validator';
import { Prisma } from '@prisma/client';

export default class SignupDto extends LoginDto implements Prisma.UserCreateInput {
  @Length(1, 50)
  username: string;
}
