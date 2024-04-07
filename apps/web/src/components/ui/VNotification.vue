<script setup lang="ts">
withDefaults(
  defineProps<{
    notification: {
      text: string;
      visible: boolean;
    };
    lines?: keyof typeof linesClasses;
  }>(),
  {
    lines: 'five',
  },
);

const emit = defineEmits<{
  (e: 'hide'): void;
}>();
</script>

<template>
  <transition name="notification">
    <div
      v-show="notification.visible"
      @click="emit('hide')"
      class="absolute -inset-0.5 flex flex-col items-center justify-center bg-neutral-900/75 p-3 backdrop-blur"
    >
      <p class="font-light capitalize text-yellow-500" :class="linesClasses[lines]">
        {{ notification.text }}
      </p>
    </div>
  </transition>
</template>

<style scoped>
.notification-enter-active,
.notification-leave-active {
  transition: opacity 0.15s ease-in-out;
}

.notification-enter-from,
.notification-leave-to {
  opacity: 0;
}
</style>

<script lang="ts">
const linesClasses = {
  one: 'truncate',
  three: 'line-clamp-3 text-ellipsis',
  five: 'line-clamp-5 text-ellipsis',
};
</script>
