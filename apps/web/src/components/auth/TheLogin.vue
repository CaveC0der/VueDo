<script setup lang="ts">
import VButton from '@/components/ui/VButton.vue';
import VInput from '@/components/ui/VInput.vue';
import { useUserStore } from '@/stores/user';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { type LoginRequest } from '@/schemas/LoginRequestSchema';
import { formatError } from '@/common/utils';
import useAsyncState from '@/composables/useAsyncState';
import { useModalsStore } from '@/stores/modals';

const userStore = useUserStore();
const router = useRouter();
const data = ref<LoginRequest>({ email: '', password: '' });
const { showMessage } = useModalsStore().use('error');

const { run, pending } = useAsyncState(
  (data: LoginRequest) => userStore.login(data),
  (authenticated: boolean) => {
    if (authenticated) {
      router.push({ name: 'lists' });
    }
  },
  (e) => {
    showMessage(formatError(e));
  },
);

const submit = () => {
  run(data.value);
};
</script>

<template>
  <section class="flex flex-col gap-5">
    <h2 class="text-center text-xl font-medium">Welcome back</h2>
    <form class="relative flex flex-col gap-3" @submit.prevent="submit">
      <v-input v-model="data.email" type="text" placeholder="your@mail.com" required />
      <v-input v-model="data.password" type="password" placeholder="password" required />
      <v-button class="mt-1 w-1/2 self-center py-1.5" :pending="pending">Login</v-button>
    </form>
    <p class="text-center text-sm text-neutral-500">
      Don't have an account yet?&nbsp;
      <router-link
        to="signup"
        class="text-neutral-400 underline transition hover:text-neutral-300 active:text-white"
      >
        Sign up
      </router-link>
    </p>
  </section>
</template>
