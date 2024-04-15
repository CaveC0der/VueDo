import { defineStore } from 'pinia';
import { computed, shallowRef } from 'vue';
import type { User } from '@/schemas/UserSchema';
import AuthService from '@/services/auth';
import type { LoginRequest } from '@/schemas/LoginRequestSchema';
import { loginRequestSchema } from '@/schemas/LoginRequestSchema';
import { nonNullable } from '@/common/utils';
import type { SignupRequest } from '@/schemas/SignupRequestSchema';
import { signupRequestSchema } from '@/schemas/SignupRequestSchema';

export const useUserStore = defineStore('user', () => {
  const user = shallowRef<User | undefined>();

  const User = computed(() => nonNullable(user.value));
  const authenticated = computed(() => Boolean(user.value));

  const signup = async (data: SignupRequest) => {
    data = await signupRequestSchema.validate(data);

    user.value = await AuthService.signup(data);
  };

  const login = async (data: LoginRequest) => {
    data = await loginRequestSchema.validate(data);

    user.value = await AuthService.login(data);
  };

  const refresh = async () => {
    user.value = await AuthService.refresh();
  };

  const logout = async () => {
    user.value = await AuthService.logout();
  };

  return {
    user,
    User,
    authenticated,
    signup,
    login,
    refresh,
    logout,
  };
});
