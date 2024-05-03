<script setup lang="ts">
import ListItem from '@/components/lists/ListItem.vue';
import { fakeTodoLists } from '@/common/constants';
</script>

<template>
  <ul class="flex flex-col gap-3 px-5 py-20">
    <list-item v-for="list in fakeTodoLists" :key="list.id" :list="list" />
  </ul>
</template>
