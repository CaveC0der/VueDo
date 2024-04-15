<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: keyof typeof variantClasses;
    pending?: boolean;
  }>(),
  {
    variant: 'default',
    pending: false,
  },
);
</script>

<template>
  <button
    class="transition-all focus:outline-none focus-visible:outline-none"
    :class="[variantClasses[variant], { 'animate-shine': pending }]"
  >
    <slot />
  </button>
</template>

<script lang="ts">
const variantClasses = {
  default:
    'rounded bg-neutral-700 px-3 py-1.5 font-medium hover:bg-emerald-700 active:bg-emerald-600',
  icon: 'size-fit rounded p-1',
};
</script>
