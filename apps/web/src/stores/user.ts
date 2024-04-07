import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { User } from '@/schemas/UserSchema';
import AuthService from '@/services/auth';
import type { LoginRequest } from '@/schemas/LoginRequestSchema';
import { nonNullable } from '@/common/utils';
import type { SignupRequest } from '@/schemas/SignupRequestSchema';

export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(null);

  const User = computed(() => nonNullable(user.value));

  const authenticated = computed(() => Boolean(user.value));

  const signup = async (data: SignupRequest) =>
    Boolean((user.value = await AuthService.signup(data)));

  const login = async (data: LoginRequest) => Boolean((user.value = await AuthService.login(data)));

  const refresh = async () => Boolean((user.value = await AuthService.refresh()));

  const logout = async () => !(user.value = await AuthService.logout());

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
