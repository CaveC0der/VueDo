<script setup lang="ts">
import { ArrowLeftIcon, UserIcon } from '@heroicons/vue/24/outline';
import VButton from '@/components/ui/VButton.vue';
import VLinkIcon from '@/components/ui/VLinkIcon.vue';
import VFixedBar from '@/components/ui/VFixedBar.vue';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';
import { formatError } from '@/common/utils';
import { useModalsStore } from '@/stores/modals';

const userStore = useUserStore();
const router = useRouter();
const { showMessage } = useModalsStore().use('error');

const logout = () => {
  userStore.logout().catch((error) => {
    showMessage(formatError(error));
  });
  router.push({ name: 'login' });
};
</script>

<template>
  <v-fixed-bar position="top" class="grid grid-cols-[1fr_auto_1fr] grid-rows-1 items-center gap-3">
    <v-button variant="icon" @click="logout">
      <arrow-left-icon class="size-6" />
    </v-button>
    <h1 class="truncate text-center font-medium">Lists</h1>
    <v-link-icon to="profile" class="justify-self-end">
      <user-icon class="size-6" />
    </v-link-icon>
  </v-fixed-bar>
</template>
