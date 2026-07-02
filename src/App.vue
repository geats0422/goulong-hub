<script setup lang="ts">
import TheTopNav from './components/TheTopNav.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="relative min-h-screen flex flex-col overflow-hidden">

    <div class="cyber-atmosphere" aria-hidden="true">
      <span
        v-for="i in 36"
        :key="i"
        :style="{
          left: `${(i * 73) % 100}%`,
          '--dx': `${((i % 7) * 18) - 52}px`,
          '--s': `${1 + (i % 3)}px`,
          '--dur': `${8 + (i % 9)}s`,
          '--delay': `${i * -0.45}s`,
        }"
      />
    </div>

    <TheTopNav />

    <main class="relative z-10 flex-1">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <SiteFooter />

  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
