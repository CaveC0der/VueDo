<script setup lang="ts">
import TheTodolistTopBar from '@/components/todolist/TheTodolistTopBar.vue';
import TheTodolist from '@/components/todolist/TheTodolist.vue';
import TheTodolistBottomBar from '@/components/todolist/TheTodolistBottomBar.vue';
import type { TodoList } from '@/types/models/TodoList';

defineProps<{
  listId: TodoList['id'];
}>();
</script>

<template>
  <main class="min-h-dvh">
    <the-todolist-top-bar :list-id="listId" />
    <the-todolist />
    <the-todolist-bottom-bar />
  </main>
</template>
