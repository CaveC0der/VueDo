<script setup lang="ts">
import VModal from '@/components/ui/VModal.vue';
import { DEFAULT_MODAL_TIMEOUT } from '@/common/constants';
</script>

<template>
  <router-view #="{ Component }">
    <transition name="view" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <v-modal position="bottom" variant="error" name="error" :timeout="DEFAULT_MODAL_TIMEOUT" />
</template>

<style scoped>
.view-enter-active,
.view-leave-active {
  height: 100dvh;
  overflow: hidden;
  transition: 0.25s ease-in-out;
}

.view-enter-from {
  transform: translateX(-110%);
}

.view-leave-to {
  transform: translateX(110%);
}
</style>
