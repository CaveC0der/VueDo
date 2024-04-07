export interface TodoList {
  id: string;
  userId: string;
  title: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}
