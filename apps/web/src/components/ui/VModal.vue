<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
import useVisible from '@/composables/useVisible';
import VButton from '@/components/ui/VButton.vue';
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { useModalsStore } from '@/stores/modals';

const props = withDefaults(
  defineProps<{
    name: string;
    position?: keyof typeof positionClasses;
    variant?: keyof typeof variants;
    timeout?: number;
  }>(),
  {
    position: 'screen',
    variant: 'default',
  },
);

const { visible, show, hide, toggle } = useVisible(props.timeout);
const message = ref('');
const modalsStore = useModalsStore();

modalsStore.register(props.name, {
  visible,
  show,
  hide,
  toggle,
  setMessage: (msg: string) => {
    message.value = msg;
  },
  showMessage: (msg: string) => {
    message.value = msg;
    show();
  },
});

onUnmounted(() => {
  modalsStore.unregister(props.name);
});
</script>

<template>
  <transition name="modal">
    <div
      v-show="visible"
      class="absolute flex flex-col items-stretch justify-center rounded border bg-neutral-900/75 p-1 backdrop-blur"
      :class="[positionClasses[position], variants[variant].classes]"
    >
      <div class="flex items-center justify-between gap-5">
        <div class="p-1">
          <component :is="variants[variant].icon" class="size-6" />
        </div>
        <v-button variant="icon" @click="hide()">
          <x-mark-icon class="size-6" />
        </v-button>
      </div>
      <p class="p-2">
        {{ message }}
      </p>
    </div>
  </transition>
</template>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: 0.15s ease-in-out;
}

.modal-enter-from,
.modal-leave-to {
  scale: 0.9;
  opacity: 0;
}
</style>

<script lang="ts">
import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/vue/24/outline';

const positionClasses = {
  screen: 'inset-0',
  top: 'inset-x-10 top-5',
  bottom: 'inset-x-10 bottom-5',
};

const variants = {
  default: {
    icon: null,
    classes: 'border-neutral-700',
  },
  success: {
    icon: CheckCircleIcon,
    classes: 'border-emerald-700 text-emerald-500',
  },
  error: {
    icon: ExclamationCircleIcon,
    classes: 'border-yellow-700 text-yellow-500',
  },
};
</script>
