<template>
  <router-view v-slot="{ Component }">
    <transition name="view" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
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
