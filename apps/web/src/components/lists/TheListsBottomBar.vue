<script setup lang="ts">
import { AdjustmentsVerticalIcon, EllipsisVerticalIcon, PlusIcon } from '@heroicons/vue/24/outline';
import VButton from '@/components/ui/VButton.vue';
import VFixedBar from '@/components/ui/VFixedBar.vue';
</script>

<template>
  <v-fixed-bar position="bottom" class="flex items-center justify-between gap-3">
    <div class="flex gap-1">
      <v-button variant="icon">
        <adjustments-vertical-icon class="size-6" />
      </v-button>
      <v-button variant="icon">
        <ellipsis-vertical-icon class="size-6" />
      </v-button>
    </div>
    <v-button>
      <plus-icon class="size-6" />
    </v-button>
  </v-fixed-bar>
</template>
