<script setup lang="ts">
import TheTopNav from './components/TheTopNav.vue'
import HeroSection from './components/HeroSection.vue'
import CyberCheckpoint from './components/CyberCheckpoint.vue'
import CapabilityMatrix from './components/CapabilityMatrix.vue'
import EvolutionTimeline from './components/EvolutionTimeline.vue'
import BridgeArchitecture from './components/BridgeArchitecture.vue'
import CtaBanner from './components/CtaBanner.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheTopNav />
    <main class="flex-1">
      <HeroSection />
      <CyberCheckpoint />
      <CapabilityMatrix />
      <EvolutionTimeline />
      <BridgeArchitecture />
      <CtaBanner />
    </main>
    <SiteFooter />
  </div>
</template>