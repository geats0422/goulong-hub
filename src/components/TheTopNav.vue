<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BrandLogo from './BrandLogo.vue'
import Button from './Button.vue'
import SvgIcon from './SvgIcon.vue'

const navItems = [
  { label: '产品体系', href: '#capability' },
  { label: '能力架构', href: '#bridge' },
  { label: '部署方案', href: '#cta' },
  { label: '开发者文档', href: '#' },
  { label: '联系我们', href: '#footer' },
]

const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 8 }
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b border-brand-gold/25 bg-[rgba(2,5,11,0.95)] backdrop-blur-xl">
    <div class="container-narrow flex items-center justify-between h-16 md:h-[72px]">
      <a href="#" class="flex items-center gap-3">
        <BrandLogo size="md" show-slogan />
      </a>

      <nav class="hidden lg:flex items-center gap-1">
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="px-4 py-2 font-sans-cn text-sm text-ink-mute hover:text-brand-gold transition-colors duration-200"
        >{{ item.label }}</a>
      </nav>

      <div class="flex items-center gap-3">
        <Button variant="outline-gold" size="sm" icon-only>
          <SvgIcon name="code" :size="16" />
          <span class="ml-1.5 hidden xl:inline">开发者入口</span>
        </Button>
        <Button variant="primary-gold" size="sm">
          <SvgIcon name="calendar" :size="16" />
          <span>预约演示</span>
        </Button>
      </div>
    </div>
  </header>
</template>
