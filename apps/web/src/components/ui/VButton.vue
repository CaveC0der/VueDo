<script setup lang="ts">
withDefaults(
  defineProps<{
    type?: keyof typeof variantClasses;
    isPending?: boolean;
  }>(),
  {
    type: 'default',
    isPending: false,
  },
);
</script>

<template>
  <button
    class="transition-all focus:outline-none"
    :class="[variantClasses[type], { 'default-pending': isPending }]"
  >
    <slot />
  </button>
</template>

<script lang="ts">
const variantClasses = {
  default:
    'rounded bg-neutral-700 px-3 py-1.5 font-medium hover:bg-emerald-700 active:bg-emerald-600',
  icon: 'rounded p-1',
};
</script>

<style scoped lang="postcss">
.default-pending {
  @apply bg-gradient-to-l from-emerald-700 via-emerald-600 via-20% to-emerald-700;
  background-size: 200% 100%;
  animation: shine 1s linear infinite;
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>
