<script setup lang="ts">
const model = defineModel();
</script>

<template>
  <input
    v-model="model"
    v-bind="$attrs"
    class="w-full rounded bg-neutral-800 px-3 py-1.5 placeholder-neutral-400 transition focus:outline-none focus:ring-1 focus:ring-emerald-600"
  />
</template>
