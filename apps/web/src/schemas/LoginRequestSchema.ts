import { type InferType, object, string } from 'yup';

export const loginRequestSchema = object({
  email: string().required().email(),
  password: string().required().min(8),
});

export type LoginRequest = InferType<typeof loginRequestSchema>;
