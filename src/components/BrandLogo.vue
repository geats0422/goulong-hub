<script setup lang="ts">
defineProps<{
  size?: 'sm' | 'md' | 'lg'
  showSlogan?: boolean
}>()
</script>

<template>
  <div class="flex flex-col">
    <span
      class="font-serif-cn font-bold tracking-tight text-brand-gold text-glow-gold"
      :class="size === 'lg' ? 'text-5xl' : size === 'sm' ? 'text-xl' : 'text-2xl'"
    >
      句龙
    </span>
    <span
      v-if="showSlogan"
      class="font-sans-cn text-[10px] tracking-[3px] text-ink-mute uppercase mt-1"
    >
      GOULONG HUB
    </span>
  </div>
</template>