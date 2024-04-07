<script setup lang="ts">
import type { TodoItem } from '@/types/models/TodoItem';
import VCheckbox from '@/components/ui/VCheckbox.vue';

defineProps<{
  item: TodoItem;
}>();
</script>

<template>
  <li class="flex items-center gap-3 rounded border border-neutral-700 p-3">
    <v-checkbox />
    <router-link :to="{ name: 'item', params: { itemId: item.id } }" class="flex flex-col gap-1">
      <h3 class="line-clamp-3 text-ellipsis font-medium">
        {{ item.title }}
      </h3>
      <p v-if="item.description" class="line-clamp-2 text-ellipsis text-sm text-neutral-400">
        {{ item.description }}
      </p>
    </router-link>
  </li>
</template>
