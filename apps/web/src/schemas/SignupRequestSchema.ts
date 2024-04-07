import { type InferType, object, string } from 'yup';

export const signupRequestSchema = object({
  username: string().required().min(1).max(50),
  email: string().required().email(),
  password: string().required().min(8),
});

export type SignupRequest = InferType<typeof signupRequestSchema>;
