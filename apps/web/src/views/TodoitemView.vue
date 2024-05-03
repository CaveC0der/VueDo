<script setup lang="ts">
import TheTodoitemTopBar from '@/components/todoitem/TheTodoitemTopBar.vue';
import TheTodoitem from '@/components/todoitem/TheTodoitem.vue';
import type { TodoItem } from '@/types/models/TodoItem';

defineProps<{
  itemId: TodoItem['id'];
}>();
</script>

<template>
  <main class="min-h-dvh">
    <the-todoitem-top-bar :item-id="itemId" />
    <the-todoitem :item-id="itemId" />
  </main>
</template>
