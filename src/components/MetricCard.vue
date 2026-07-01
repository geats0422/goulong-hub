<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'

withDefaults(defineProps<{
  icon?: string
  label: string
  value: string
  tone?: 'default' | 'danger' | 'success' | 'gold'
}>(), {
  icon: 'zap',
  tone: 'default',
})

const toneRing: Record<string, string> = {
  default: 'border-hairline bg-surface/95 hover:border-brand-gold/50',
  danger: 'border-brand-vermilion-deep/70 bg-surface/95 shadow-glow-vermilion hover:border-brand-vermilion',
  success: 'border-brand-jade-deep/70 bg-surface/95 shadow-glow-jade hover:border-brand-jade',
  gold: 'border-brand-gold-deep/70 bg-surface/95 shadow-glow-gold-sm hover:border-brand-gold',
}

const toneIcon: Record<string, string> = {
  default: '#a89880',
  danger: '#e84a4a',
  success: '#3dd4a8',
  gold: '#d4a85a',
}

const toneValue: Record<string, string> = {
  default: 'text-ink',
  danger: 'text-brand-vermilion',
  success: 'text-brand-jade',
  gold: 'text-brand-gold',
}
</script>

<template>
  <div class="group flex items-center gap-4 rounded-xl border px-5 py-4 transition-all duration-300" :class="toneRing[tone]">
    <div class="flex items-center justify-center w-11 h-11 rounded-lg border border-hairline bg-canvas-soft/60 shrink-0">
      <SvgIcon :name="icon" :size="22" :color="toneIcon[tone]" class="group-hover:scale-110 transition-transform" />
    </div>
    <div class="flex flex-col gap-1">
      <span class="font-sans-cn text-xs text-ink-mute tracking-wide">{{ label }}</span>
      <span class="font-mono text-[28px] font-semibold leading-none tracking-tight" :class="toneValue[tone]">{{ value }}</span>
    </div>
  </div>
</template>
