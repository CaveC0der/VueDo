export interface TodoItem {
  id: string;
  todoListId: string;
  title: string;
  description: string | null;
  priority: number;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
