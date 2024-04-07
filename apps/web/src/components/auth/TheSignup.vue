<script setup lang="ts">
import VButton from '@/components/ui/VButton.vue';
import VInput from '@/components/ui/VInput.vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import useNotification from '@/composables/useNotification';
import { formatError } from '@/common/utils';
import { type SignupRequest, signupRequestSchema } from '@/schemas/SignupRequestSchema';
import VNotification from '@/components/ui/VNotification.vue';

const userStore = useUserStore();
const router = useRouter();
const data = ref<SignupRequest>({ username: '', email: '', password: '' });
const { notification, showNotification, hideNotification } = useNotification();

const submit = async () => {
  try {
    if (await userStore.signup(await signupRequestSchema.validate(data.value))) {
      await router.push({ name: 'lists' });
    }
  } catch (e) {
    showNotification(formatError(e));
  }
};
</script>

<template>
  <div class="flex flex-col gap-5">
    <h2 class="text-center text-xl font-medium">Create an account</h2>
    <form class="relative flex flex-col gap-3" @submit.prevent="submit">
      <v-input v-model="data.username" placeholder="YourName" required />
      <v-input v-model="data.email" type="email" placeholder="your@mail.com" required />
      <v-input v-model="data.password" type="password" placeholder="password" required />
      <v-button class="mt-1 w-1/2 self-center">Sign up</v-button>
      <v-notification :notification="notification" @hide="hideNotification" />
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
