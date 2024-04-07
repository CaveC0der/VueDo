<script setup lang="ts">
import { fakeTodoItems } from '@/common/constants';
import TodolistItem from '@/components/todolist/TodolistItem.vue';
</script>

<template>
  <ul class="flex flex-col gap-3 px-5 py-20">
    <todolist-item v-for="item in fakeTodoItems" :key="item.id" :item="item" />
  </ul>
</template>
