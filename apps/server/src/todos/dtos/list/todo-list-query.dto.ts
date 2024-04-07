import { IsBooleanString, IsOptional } from 'class-validator';

export default class TodoListQueryDto {
  @IsOptional()
  @IsBooleanString()
  eager?: string;
}
