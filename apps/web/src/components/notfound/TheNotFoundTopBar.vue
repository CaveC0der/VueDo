<script setup lang="ts">
import { ArrowLeftIcon, HomeIcon } from '@heroicons/vue/24/outline';
import VFixedBar from '@/components/ui/VFixedBar.vue';
import VLinkIcon from '@/components/ui/VLinkIcon.vue';
</script>

<template>
  <v-fixed-bar position="top" class="grid grid-cols-[1fr_auto_1fr] grid-rows-1 items-center gap-3">
    <v-link-icon @click="$router.back()">
      <arrow-left-icon class="size-6" />
    </v-link-icon>
    <h1 class="text-center font-medium">Not Found</h1>
    <v-link-icon :to="{ name: 'workspace' }" class="justify-self-end">
      <home-icon class="size-6" />
    </v-link-icon>
  </v-fixed-bar>
</template>
