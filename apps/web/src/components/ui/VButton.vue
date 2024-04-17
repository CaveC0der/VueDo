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
    class="rounded p-1 transition focus:outline-none"
    :class="[variantClasses[variant].initial, { [variantClasses[variant].pending]: pending }]"
  >
    <slot />
  </button>
</template>

<script lang="ts">
const variantClasses = {
  default: {
    initial: 'bg-neutral-700 font-medium hover:bg-emerald-700 active:bg-emerald-600',
    pending: 'animate-shine',
  },
  icon: {
    initial: 'size-fit hover:text-emerald-500',
    pending: 'animate-pulse',
  },
};
</script>
