<script setup lang="ts">
import { ArrowLeftIcon, HomeIcon } from '@heroicons/vue/24/outline';
import VFixedBar from '@/components/ui/VFixedBar.vue';
</script>

<template>
  <v-fixed-bar position="top" class="grid grid-cols-[1fr_auto_1fr] grid-rows-1 items-center gap-3">
    <a class="cursor-pointer rounded p-1 focus:outline-none" @click="$router.back()">
      <arrow-left-icon class="size-6" />
    </a>
    <h1 class="text-center font-medium">Not Found</h1>
    <router-link
      :to="{ name: 'workspace' }"
      class="cursor-pointer justify-self-end rounded p-1 focus:outline-none"
    >
      <home-icon class="size-6" />
    </router-link>
  </v-fixed-bar>
</template>
