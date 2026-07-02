<script setup lang="ts">
import TerminalPanel from './TerminalPanel.vue'
import Button from './Button.vue'
import SvgIcon from './SvgIcon.vue'

const breadcrumbs = [
  { label: '首页', href: '/' },
  { label: '产品体系', href: '/products' },
  { label: '句龙智能体操作系统', href: '#', current: true },
]
</script>

<template>
  <section class="relative min-h-[92vh] flex flex-col justify-center pt-[120px] pb-section-lg overflow-hidden">
    <div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse 60% 45% at 20% 40%, rgba(212, 168, 90, 0.18), transparent 60%), radial-gradient(ellipse 40% 35% at 85% 30%, rgba(95, 168, 211, 0.12), transparent 55%);" />
    <div class="absolute left-0 top-1/4 w-[45%] h-[420px] pointer-events-none beam-gold opacity-60 -rotate-6" />
    <div class="absolute left-[5%] top-[20%] w-[30%] h-[300px] pointer-events-none beam-gold opacity-40 rotate-3" />
    <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(180deg, rgba(2,5,11,0) 0%, rgba(2,5,11,0.4) 60%, rgba(2,5,11,0.9) 100%);" />
    <div class="container-narrow relative z-10">
      <nav class="flex items-center gap-2 text-xs text-ink-mute mb-8 animate-fade-in-up">
        <template v-for="(item, i) in breadcrumbs" :key="item.label">
          <a :href="item.href" :class="item.current ? 'text-brand-gold' : 'hover:text-ink-soft'">{{ item.label }}</a>
          <span v-if="i < breadcrumbs.length - 1" class="text-ink-faint">/</span>
        </template>
      </nav>
      <div class="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div class="flex flex-col gap-7 animate-fade-in-up" style="animation-delay: 0.1s">
          <h1 class="font-serif-cn font-semibold leading-[1.18] text-[28px] sm:text-[34px] md:text-[42px] lg:text-[50px] text-ink tracking-wide">
            <span class="text-brand-gold text-glow-gold">句龙</span>：像神话传说中的"句龙"一样，<br class="hidden md:block" />
            为工程合规筑牢地基，<br class="hidden md:block" />
            为企业业务流程构建最后一道合规防线。
          </h1>
          <p class="font-sans-cn text-base md:text-lg text-ink-soft/90 leading-[1.8] max-w-xl">
            句龙为企业工作流提供轻量级横向的前置审核服务层，在文档进入核心系统前完成合规拦截与风险管理，让合规内化于流程之前，化繁为简，守正致远。
          </p>
          <div class="flex flex-wrap items-center gap-4 mt-1">
            <Button variant="primary-gold" size="md">
              <SvgIcon name="file-contract" :size="18" />
              <span>查看 API / MCP 文档</span>
            </Button>
            <Button variant="outline-gold" size="md">
              <SvgIcon name="check-circle" :size="18" />
              <span>提交智能体需求评估</span>
            </Button>
          </div>
        </div>
        <div class="animate-fade-in-up" style="animation-delay: 0.2s">
          <TerminalPanel />
        </div>
      </div>
    </div>
  </section>
</template>
