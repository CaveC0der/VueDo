<script setup lang="ts">
import { ArrowLeftIcon, PencilIcon, TrashIcon } from '@heroicons/vue/24/outline';
import VButton from '@/components/ui/VButton.vue';
import VLinkIcon from '@/components/ui/VLinkIcon.vue';
import VFixedBar from '@/components/ui/VFixedBar.vue';
import { fakeTodoLists } from '@/common/constants';
import type { TodoList } from '@/types/models/TodoList';

const props = defineProps<{
  listId: TodoList['id'];
}>();

const list = fakeTodoLists.find((l) => l.id === props.listId)!;
</script>

<template>
  <v-fixed-bar position="top" class="grid grid-cols-[1fr_auto_1fr] grid-rows-1 items-center gap-3">
    <v-link-icon @click="$router.back()">
      <arrow-left-icon class="size-6" />
    </v-link-icon>
    <h1 class="overflow-x-hidden overflow-ellipsis text-nowrap text-center font-medium">
      {{ list.title }}
    </h1>
    <div class="flex gap-1 justify-self-end">
      <v-button variant="icon">
        <pencil-icon class="size-6" />
      </v-button>
      <v-button variant="icon">
        <trash-icon class="size-6" />
      </v-button>
    </div>
  </v-fixed-bar>
</template>
