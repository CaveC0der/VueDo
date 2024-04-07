import { date, type InferType, object, string } from 'yup';

export const userSchema = object({
  username: string().required(),
  email: string().required(),
  avatar: string().required().nullable(),
  createdAt: date().required(),
  updatedAt: date().required(),
});

export type User = InferType<typeof userSchema>;
