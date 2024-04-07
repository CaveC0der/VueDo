import { type InferType, object, string } from 'yup';
import { userSchema } from '@/schemas/UserSchema';

export const authResponseSchema = object({
  user: userSchema,
  accessToken: string().required().min(1),
});

export type AuthResponse = InferType<typeof authResponseSchema>;
