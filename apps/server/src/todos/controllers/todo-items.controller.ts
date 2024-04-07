import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import TodoItemCreateDto from '../dtos/item/todo-item-create.dto';
import TodoItemUpdateDto from '../dtos/item/todo-item-update.dto';
import AccessGuard from '../../auth/guards/access.guard';
import { User } from '../../auth/decorators/user.decorator';
import NotEmptyObjectPipe from '../../common/pipes/not-empty-object.pipe';

@UseGuards(AccessGuard)
@Controller('todo-lists')
export class TodoItemsController {
  constructor(private prisma: PrismaService) {}

  @Post(':listId/todo-items')
  async create(
    @Param('listId') listId: string,
    @User('id') userId: string,
    @Body() dto: TodoItemCreateDto,
  ) {
    return this.prisma.todoItem.create({
      data: { ...dto, todoList: { connect: { id: listId, userId } } },
    });
  }

  @Get(':listId/todo-items')
  async getAll(@Param('listId') listId: string, @User('id') userId: string) {
    return this.prisma.todoItem.findMany({
      where: { todoList: { id: listId, userId } },
    });
  }

  @Get(':listId/todo-items/:itemId')
  async get(
    @Param('listId') listId: string,
    @Param('itemId') itemId: string,
    @User('id') userId: string,
  ) {
    return this.prisma.todoItem.findUniqueOrThrow({
      where: { id: itemId, todoList: { id: listId, userId } },
    });
  }

  @Put(':listId/todo-items/:itemId')
  async update(
    @Param('listId') listId: string,
    @Param('itemId') itemId: string,
    @User('id') userId: string,
    @Body(NotEmptyObjectPipe) dto: TodoItemUpdateDto,
  ) {
    await this.prisma.todoItem.update({
      where: { id: itemId, todoList: { id: listId, userId } },
      data: dto,
    });
  }

  @Delete(':listId/todo-items/:itemId')
  async delete(
    @Param('listId') listId: string,
    @Param('itemId') itemId: string,
    @User('id') userId: string,
  ) {
    await this.prisma.todoItem.delete({
      where: { id: itemId, todoList: { id: listId, userId } },
    });
  }
}
