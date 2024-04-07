<script setup lang="ts"></script>

<template>
  <div class="relative min-h-dvh">
    <router-view name="topBar" />
    <router-view />
    <router-view name="bottomBar" />
  </div>
</template>
