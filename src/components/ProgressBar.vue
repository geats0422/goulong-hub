<script setup lang="ts">
withDefaults(defineProps<{
  value: number
  tone?: 'gold' | 'jade' | 'azure'
}>(), {
  tone: 'gold',
})

const fillClass: Record<string, string> = {
  gold: 'bg-brand-gold shadow-glow-gold-sm',
  jade: 'bg-brand-jade shadow-glow-jade',
  azure: 'bg-brand-azure shadow-glow-azure',
}
</script>

<template>
  <div class="relative h-1.5 w-full rounded-pill bg-hairline overflow-hidden">
    <div
      class="absolute left-0 top-0 h-full rounded-pill transition-all duration-500"
      :class="fillClass[tone]"
      :style="{ width: `${Math.max(0, Math.min(100, value))}%` }"
    />
  </div>
</template>