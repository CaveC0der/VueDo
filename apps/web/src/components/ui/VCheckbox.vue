<script setup lang="ts">
defineProps<{
  label?: string;
}>();

defineOptions({
  inheritAttrs: false,
});

const emit = defineEmits<{
  (e: 'checked', checked: boolean): void;
}>();

const model = defineModel();
</script>

<template>
  <div class="flex items-center gap-1">
    <input
      v-bind="$attrs"
      type="checkbox"
      v-model="model"
      @change="emit('checked', ($event.target as HTMLInputElement).checked)"
      class="checkbox"
    />
    <label v-if="label" :for="$attrs.id as string" class="text-sm hover:cursor-pointer">
      {{ label }}
    </label>
  </div>
</template>

<style lang="postcss">
.checkbox {
  @apply flex appearance-none items-center justify-center rounded border-2 border-neutral-700 p-0.5;
}

.checkbox::before {
  content: '';
  @apply h-2 w-2 scale-0 rounded-sm bg-emerald-500 transition;
}

.checkbox:checked::before {
  @apply scale-100;
}
</style>
