<script setup lang="ts">
withDefaults(defineProps<{
  tone?: 'success' | 'warning' | 'error' | 'info'
  label: string
  pulse?: boolean
}>(), {
  tone: 'info',
  pulse: false,
})

const toneClass: Record<string, string> = {
  success: 'text-brand-jade-soft bg-brand-jade/[0.12] border-brand-jade/30',
  warning: 'text-brand-amber bg-brand-amber/[0.12] border-brand-amber/30',
  error: 'text-brand-vermilion-soft bg-brand-vermilion/[0.12] border-brand-vermilion/35',
  info: 'text-brand-azure bg-brand-azure/[0.12] border-brand-azure/30',
}

const dotClass: Record<string, string> = {
  success: 'bg-brand-jade',
  warning: 'bg-brand-amber',
  error: 'bg-brand-vermilion',
  info: 'bg-brand-azure',
}
</script>

<template>
  <span
    class="inline-flex items-center gap-1.5 rounded-xs border px-2 py-0.5 text-[12px] font-medium tracking-wide"
    :class="toneClass[tone]"
  >
    <span
      class="inline-block w-1.5 h-1.5 rounded-pill"
      :class="[dotClass[tone], pulse ? 'animate-glow-pulse' : '']"
    />
    {{ label }}
  </span>
</template>