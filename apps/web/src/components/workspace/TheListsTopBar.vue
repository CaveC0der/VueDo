<script setup lang="ts">
import { ArrowLeftIcon, UserIcon } from '@heroicons/vue/24/outline';
import VButton from '@/components/ui/VButton.vue';
import VFixedBar from '@/components/ui/VFixedBar.vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const logout = async () => {
  await userStore.logout();
  await router.push({ name: 'login' });
};
</script>

<template>
  <v-fixed-bar position="top" class="grid grid-cols-[1fr_auto_1fr] grid-rows-1 items-center gap-3">
    <v-button type="icon" @click="logout">
      <arrow-left-icon class="size-6" />
    </v-button>
    <h1 class="truncate text-center font-medium">Lists</h1>
    <router-link
      to="profile"
      class="cursor-pointer justify-self-end rounded p-1 focus:outline-none"
    >
      <user-icon class="size-6" />
    </router-link>
  </v-fixed-bar>
</template>
