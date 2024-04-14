<template>
  <div class="workspace relative min-h-dvh">
    <router-view name="topBar" #="{ Component }">
      <transition name="top-bar" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <router-view #="{ Component }">
      <transition name="default" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <router-view name="bottomBar" #="{ Component }">
      <transition name="bottom-bar" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.workspace {
  --bar-transition-duration: 0.15s;
  --default-transition-duration: 0.15s;

  --bar-transition-delay: var(--default-transition-duration);
  --default-transition-delay: var(--bar-transition-duration);
}

.default-enter-active {
  transition: var(--default-transition-duration) ease-in-out;
}

.default-leave-active {
  transition: var(--default-transition-duration) ease-in-out var(--default-transition-delay);
}

.default-enter-from,
.default-leave-to {
  opacity: 0;
  scale: 0.9;
}

.top-bar-enter-active {
  transition: var(--bar-transition-duration) ease-in-out var(--bar-transition-delay);
}

.top-bar-leave-active {
  transition: var(--bar-transition-duration) ease-in-out;
}

.top-bar-enter-from,
.top-bar-leave-to {
  transform: translateY(-110%);
}

.bottom-bar-enter-active {
  transition: var(--bar-transition-duration) ease-in-out var(--bar-transition-delay);
}

.bottom-bar-leave-active {
  transition: var(--bar-transition-duration) ease-in-out;
}

.bottom-bar-enter-from,
.bottom-bar-leave-to {
  transform: translateY(110%);
}
</style>
