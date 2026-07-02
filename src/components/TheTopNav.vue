<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import BrandLogo from './BrandLogo.vue'
import Button from './Button.vue'
import SvgIcon from './SvgIcon.vue'

const router = useRouter()

const goHomeHash = (hash: string) => {
  router.push({ path: '/', hash })
}

const goHome = () => router.push('/')

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
      <a href="#" class="flex items-center gap-3" @click.prevent="goHome">
        <BrandLogo size="md" show-slogan />
      </a>

      <nav class="hidden items-center gap-1 lg:flex">
        <router-link
          to="/products"
          class="px-4 py-2 font-sans-cn text-sm text-ink-mute transition-colors duration-200 hover:text-brand-gold"
          active-class="!text-brand-gold"
        >产品体系</router-link>

        <router-link
          to="/architecture"
          class="px-4 py-2 font-sans-cn text-sm text-ink-mute transition-colors duration-200 hover:text-brand-gold"
          active-class="!text-brand-gold"
        >能力架构</router-link>

        <router-link
          to="/deployment"
          class="px-4 py-2 font-sans-cn text-sm text-ink-mute transition-colors duration-200 hover:text-brand-gold"
          active-class="!text-brand-gold"
        >部署方案</router-link>

        <router-link
          to="/contact"
          class="px-4 py-2 font-sans-cn text-sm text-ink-mute transition-colors duration-200 hover:text-brand-gold"
          active-class="!text-brand-gold"
        >联系我们</router-link>

        <router-link
          to="/developers"
          class="px-4 py-2 font-sans-cn text-sm text-ink-mute transition-colors duration-200 hover:text-brand-gold"
          active-class="!text-brand-gold"
        >开发者文档</router-link>
      </nav>

      <div class="flex items-center gap-3">
        <Button variant="outline-gold" size="sm" icon-only @click="goHomeHash('#cta')">
          <SvgIcon name="code" :size="16" />
          <span class="ml-1.5 hidden xl:inline">开发者入口</span>
        </Button>
        <Button variant="primary-gold" size="sm" @click="goHomeHash('#cta')">
          <SvgIcon name="calendar" :size="16" />
          <span>预约演示</span>
        </Button>
      </div>
    </div>
  </header>
</template>
