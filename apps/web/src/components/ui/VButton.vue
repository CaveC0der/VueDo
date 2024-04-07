<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: keyof typeof variantClasses;
  }>(),
  {
    type: 'default',
  },
);
</script>

<template>
  <button class="focus:outline-none" :class="variantClasses[type]">
    <slot />
  </button>
</template>

<script lang="ts">
const variantClasses = {
  default:
    'rounded bg-neutral-700 px-3 py-1.5 font-medium transition hover:bg-emerald-700 active:bg-emerald-600',
  icon: 'rounded p-1',
};
</script>
