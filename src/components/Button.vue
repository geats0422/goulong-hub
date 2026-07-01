<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary-gold' | 'outline-gold' | 'ghost-nav'
  href?: string
  size?: 'md' | 'sm' | 'lg'
  iconOnly?: boolean
}>(), {
  variant: 'primary-gold',
  href: undefined,
  size: 'md',
  iconOnly: false,
})

const variantClass: Record<string, string> = {
  'primary-gold': 'bg-brand-gold text-on-gold border-brand-gold shadow-[0_0_16px_rgba(212,168,90,0.35)] hover:bg-brand-gold-soft hover:border-brand-gold-soft hover:shadow-[0_0_24px_rgba(212,168,90,0.5)]',
  'outline-gold': 'bg-[rgba(26,18,8,0.5)] text-brand-gold border-brand-gold/50 hover:bg-brand-gold-bg hover:text-brand-gold-soft hover:border-brand-gold hover:shadow-[0_0_16px_rgba(212,168,90,0.25)]',
  'ghost-nav': 'bg-transparent text-ink-soft border-transparent hover:text-brand-gold',
}

const sizeClass: Record<string, string> = {
  lg: 'px-8 py-4 text-sm tracking-wider',
  md: 'px-6 py-3 text-sm tracking-wide',
  sm: 'px-4 py-2 text-xs tracking-wide',
}
</script>

<template>
  <a
    v-if="href"
    :href="href"
    class="inline-flex items-center justify-center gap-2 rounded-md border font-semibold transition-all duration-200"
    :class="[variantClass[variant], iconOnly ? 'p-2.5' : sizeClass[size]]"
  >
    <slot />
  </a>
  <button
    v-else
    type="button"
    class="inline-flex items-center justify-center gap-2 rounded-md border font-semibold transition-all duration-200"
    :class="[variantClass[variant], iconOnly ? 'p-2.5' : sizeClass[size]]"
  >
    <slot />
  </button>
</template>
