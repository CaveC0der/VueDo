import type { LoginRequest } from '@/schemas/LoginRequestSchema';
import type { SignupRequest } from '@/schemas/SignupRequestSchema';
import { type User, userSchema } from '@/schemas/UserSchema';
import { type AuthResponse } from '@/schemas/AuthResponseSchema';
import api from '@/api';

export default class AuthService {
  private static tokenKey = import.meta.env.VITE_TOKEN_KEY;

  static async signup(data: SignupRequest): Promise<User> {
    const response = await api.post<AuthResponse>('auth/signup', data);

    localStorage.setItem(this.tokenKey, response.data.accessToken);
    return userSchema.cast(response.data.user);
  }

  static async login(data: LoginRequest): Promise<User> {
    const response = await api.post<AuthResponse>('auth/login', data);

    localStorage.setItem(this.tokenKey, response.data.accessToken);
    return userSchema.cast(response.data.user);
  }

  static async refresh(): Promise<User | null> {
    if (!localStorage.getItem(this.tokenKey)) {
      return null;
    }

    const response = await api.post<AuthResponse>('auth/refresh');

    localStorage.setItem(this.tokenKey, response.data.accessToken);
    return userSchema.cast(response.data.user);
  }

  static async logout(): Promise<null> {
    await api.delete('auth/logout');

    localStorage.removeItem(this.tokenKey);
    return null;
  }
}
