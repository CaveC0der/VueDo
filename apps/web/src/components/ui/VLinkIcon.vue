<script setup lang="ts">
import { RouterLink, type RouterLinkProps } from 'vue-router';

withDefaults(
  defineProps<
    Partial<RouterLinkProps> & {
      pending?: boolean;
    }
  >(),
  {
    pending: false,
  },
);
</script>

<template>
  <router-link
    v-if="to"
    :to="to"
    class="size-fit cursor-pointer rounded p-1 transition hover:text-emerald-500 focus:outline-none"
    :class="{ 'animate-pulse': pending }"
  >
    <slot />
  </router-link>
  <a
    v-else
    class="size-fit cursor-pointer rounded p-1 transition hover:text-emerald-500 focus:outline-none"
    :class="{ 'animate-pulse': pending }"
  >
    <slot />
  </a>
</template>
