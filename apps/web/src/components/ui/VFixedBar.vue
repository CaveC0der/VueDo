<script setup lang="ts">
defineProps<{
  position: keyof typeof variantClasses;
}>();
</script>

<template>
  <div
    class="fixed inset-x-0 bg-neutral-900/75 p-3 backdrop-blur"
    :class="variantClasses[position]"
  >
    <slot />
  </div>
</template>

<script lang="ts">
const variantClasses = {
  top: 'top-0 border-b border-b-neutral-700',
  bottom: 'bottom-0 border-t border-t-neutral-700',
};
</script>
