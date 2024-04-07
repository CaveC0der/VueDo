<script setup lang="ts">
import type { TodoItem } from '@/types/models/TodoItem';
import { fakeTodoItems, fakeTodoLists } from '@/common/constants';
import VCheckbox from '@/components/ui/VCheckbox.vue';
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline';
import { formatDate } from '@/common/utils';

const props = defineProps<{
  itemId: TodoItem['id'];
}>();

const item = fakeTodoItems.find((i) => i.id === props.itemId)!;
const list = fakeTodoLists.find((l) => l.id === item.todoListId)!;
</script>

<template>
  <div class="flex flex-col gap-3 px-5 py-20">
    <p class="overflow-x-hidden text-ellipsis text-nowrap text-sm text-neutral-500">
      {{ list.title }}
    </p>
    <div class="flex items-center gap-3">
      <v-checkbox />
      <h2 class="text-lg font-medium">{{ item.title }}</h2>
    </div>
    <p>{{ item.description }}</p>
    <div class="flex items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <exclamation-triangle-icon class="size-6" />
        <p class="text-sm text-neutral-300">Priority</p>
      </div>
      <p class="text-sm text-neutral-300">Default</p>
    </div>
    <div class="self-end text-xs">
      <p class="text-neutral-400">
        {{ formatDate(item.updatedAt) }}
      </p>
      <p v-if="item.updatedAt.getTime() !== item.createdAt.getTime()" class="text-neutral-500">
        {{ formatDate(item.createdAt) }}
      </p>
    </div>
  </div>
</template>
