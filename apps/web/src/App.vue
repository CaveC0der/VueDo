<script setup lang="ts">
import VModal from '@/components/ui/VModal.vue';
import { DEFAULT_MODAL_TIMEOUT } from '@/common/constants';

const beforeTransition = () => {
  document.body.classList.add('overflow-hidden');
};

const afterTransition = () => {
  document.body.classList.remove('overflow-hidden');
};
</script>

<template>
  <router-view #="{ Component }">
    <transition
      name="view"
      @before-enter="beforeTransition"
      @before-leave="beforeTransition"
      @after-enter="afterTransition"
      @after-leave="afterTransition"
    >
      <component :is="Component" />
    </transition>
  </router-view>
  <v-modal position="bottom" variant="error" name="error" :timeout="DEFAULT_MODAL_TIMEOUT" />
</template>

<style scoped>
.view-enter-active,
.view-leave-active {
  width: 100vw;
  height: 100dvh;
  overflow: hidden;
  position: absolute;
  transition: 0.25s ease-in-out;
}

.view-enter-from {
  transform: translateX(-110%);
}

.view-leave-to {
  transform: translateX(110%);
}
</style>
