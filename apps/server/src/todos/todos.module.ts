import { Module } from '@nestjs/common';
import { TodoListsController } from './controllers/todo-lists.controller';
import { TodoItemsController } from './controllers/todo-items.controller';

@Module({
  controllers: [TodoListsController, TodoItemsController],
})
export class TodosModule {}
