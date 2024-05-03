<script setup lang="ts">
import TheListsTopBar from '@/components/lists/TheListsTopBar.vue';
import TheLists from '@/components/lists/TheLists.vue';
import TheListsBottomBar from '@/components/lists/TheListsBottomBar.vue';
</script>

<template>
  <main class="min-h-dvh">
    <the-lists-top-bar />
    <the-lists />
    <the-lists-bottom-bar />
  </main>
</template>
