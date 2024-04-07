<script setup lang="ts">
import type { TodoList } from '@/types/models/TodoList';

defineProps<{
  list: TodoList;
}>();
</script>

<template>
  <li class="rounded border border-neutral-700 p-3">
    <router-link :to="{ name: 'list', params: { listId: list.id } }" class="flex flex-col gap-1">
      <h3 class="truncate font-medium">{{ list.title }}</h3>
      <p v-if="list.description" class="truncate text-sm text-neutral-400">
        {{ list.description }}
      </p>
    </router-link>
  </li>
</template>
