<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { UserIcon } from '@heroicons/vue/24/outline';
import { STATIC_ASSETS_URL } from '@/common/constants';
import { formatDate } from '@/common/utils';

const userStore = useUserStore();
</script>

<template>
  <div class="flex flex-col items-center gap-3 px-5 py-20">
    <figure class="size-64 overflow-hidden rounded-full border border-neutral-700">
      <img
        v-if="userStore.User.avatar"
        :src="`${STATIC_ASSETS_URL}/${userStore.User.avatar}`"
        alt="avatar"
        class="size-full"
        crossorigin="use-credentials"
      />
      <user-icon v-else class="size-full stroke-1 p-5" />
    </figure>
    <h2 class="text-2xl font-semibold">{{ userStore.User.username }}</h2>
    <p>{{ userStore.User.email }}</p>
    <div class="text-xs">
      <p class="text-neutral-400">
        {{ formatDate(userStore.User.updatedAt) }}
      </p>
      <p
        v-if="userStore.User.updatedAt.getTime() !== userStore.User.createdAt.getTime()"
        class="text-neutral-500"
      >
        {{ formatDate(userStore.User.createdAt) }}
      </p>
    </div>
  </div>
</template>
