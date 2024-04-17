<template>
  <div class="relative flex h-dvh flex-col justify-end overflow-hidden p-5">
    <figure class="absolute inset-0 m-auto h-fit w-1/2">
      <img src="@/assets/logo.svg" alt="logo" class="drop-shadow-[0_0_1rem_rgba(16,185,129,0.5)]" />
      <figcaption>
        <h1 class="mt-5 text-center text-2xl font-bold">VueDo</h1>
      </figcaption>
    </figure>
    <router-view #="{ Component }">
      <transition name="auth-form" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.auth-form-enter-active,
.auth-form-leave-active {
  transition: 0.3s ease-in-out;
}

.auth-form-enter-from,
.auth-form-leave-to {
  transform: translateY(110%);
}
</style>
