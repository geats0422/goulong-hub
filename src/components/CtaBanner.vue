<script setup lang="ts">
import Button from './Button.vue'
import SvgIcon from './SvgIcon.vue'
</script>

<template>
  <section class="py-section" id="cta">
    <div class="container-narrow">
      <div
        class="relative rounded-2xl border border-brand-gold/50 overflow-hidden animate-fade-in-up"
        style="background: linear-gradient(135deg, rgba(42, 30, 14, 0.95) 0%, rgba(19, 28, 54, 0.95) 100%);"
      >
        <div class="absolute inset-0 pointer-events-none">
          <div class="absolute top-0 right-0 w-1/2 h-full opacity-50" style="background: radial-gradient(ellipse 60% 80% at 80% 50%, rgba(212,168,90,0.22), transparent 70%);" />
          <div class="absolute bottom-0 left-0 w-1/2 h-full opacity-35" style="background: radial-gradient(ellipse 50% 60% at 20% 80%, rgba(95,168,211,0.15), transparent 70%);" />
        </div>

        <div class="relative z-10 px-8 md:px-14 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div class="flex flex-col gap-4 max-w-2xl">
            <span class="eyebrow text-glow-gold">让句龙成为企业业务流程的合规守门人</span>
            <h2 class="font-serif-cn text-2xl md:text-4xl font-semibold text-ink leading-snug">
              一句话落地 · 全流程嵌入 · <span class="text-brand-gold text-glow-gold">Agent 可调用</span>
            </h2>
            <p class="font-sans-cn text-sm md:text-base text-ink-soft/90 leading-relaxed">
              从文档编制、风险识别到合规校验，已上线产品支持通过 MCP / Skills / CLI 接入第三方智能体。
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-4 shrink-0">
            <Button variant="primary-gold" size="lg">
              <SvgIcon name="calendar" :size="18" />
              <span>预约演示</span>
            </Button>
            <Button variant="outline-gold" size="lg">
              <SvgIcon name="mail" :size="18" />
              <span>联系销售</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
