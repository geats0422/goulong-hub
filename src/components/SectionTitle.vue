<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <header
    class="flex flex-col gap-3"
    :class="align === 'center' ? 'items-center text-center' : 'items-start text-left'"
  >
    <span class="eyebrow">{{ eyebrow }}</span>
    <h2 class="font-serif-cn text-3xl md:text-4xl font-semibold text-ink leading-tight">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="font-sans-cn text-sm md:text-base text-ink-mute leading-relaxed max-w-2xl">
      {{ subtitle }}
    </p>
  </header>
</template>