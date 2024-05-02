<script setup lang="ts">
import VButton from '@/components/ui/VButton.vue';
import VInput from '@/components/ui/VInput.vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { formatError } from '@/common/utils';
import { type SignupRequest } from '@/schemas/SignupRequestSchema';
import useAsyncState from '@/composables/useAsyncState';
import { useModalsStore } from '@/stores/modals';

const userStore = useUserStore();
const router = useRouter();
const data = ref<SignupRequest>({ username: '', email: '', password: '' });
const { showMessage } = useModalsStore().use('error');

const { run, pending } = useAsyncState(
  (data: SignupRequest) => userStore.signup(data),
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
  <div class="flex flex-col gap-5">
    <h2 class="text-center text-xl font-medium">Create an account</h2>
    <form class="relative flex flex-col gap-3" @submit.prevent="submit">
      <v-input v-model="data.username" placeholder="YourName" required />
      <v-input v-model="data.email" type="email" placeholder="your@mail.com" required />
      <v-input v-model="data.password" type="password" placeholder="password" required />
      <v-button class="mt-1 w-1/2 self-center py-1.5" :pending="pending">Sign up</v-button>
    </form>
    <p class="text-center text-sm text-neutral-500">
      Already have an account?&nbsp;
      <router-link
        to="login"
        class="text-neutral-400 underline transition hover:text-neutral-300 active:text-white"
      >
        Login
      </router-link>
    </p>
  </div>
</template>
