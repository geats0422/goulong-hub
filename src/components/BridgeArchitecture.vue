<script setup lang="ts">
import SectionTitle from './SectionTitle.vue'
import SvgIcon from './SvgIcon.vue'

const legacySystems = [
  { label: '老旧 OA', icon: 'building-oau' },
  { label: 'ERP（旧版）', icon: 'building-erp' },
  { label: '合同系统（老）', icon: 'building-contract' },
  { label: '自建系统 / Excel', icon: 'file-approval' },
]

const modernSystems = [
  { label: '标准 API / OpenAPI', icon: 'code' },
  { label: '统一微服协议', icon: 'layers' },
  { label: '实时合规校验', icon: 'shield-check' },
  { label: '安全审计追溯', icon: 'lock' },
]

const coreTags = ['本地化', '高性能', '高可用', '安全合规']
</script>

<template>
  <section class="py-section-lg" id="bridge">
    <div class="container-narrow">
      <SectionTitle
        eyebrow="跨越时代的桥梁 · 数字化转型与部署区"
        title="跨越时代的桥梁"
        subtitle="以本地化部署为基石，保护企业数据安全与隐私，平滑打通新旧系统、构建标准化、可持续的数字化转型桥梁。"
      />

      <div class="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-6 lg:gap-4 items-stretch">
        <div class="flex flex-col gap-3">
          <span class="eyebrow text-ink-mute mb-1">老旧系统与孤岛</span>
          <div
            v-for="(s, i) in legacySystems"
            :key="s.label"
            class="flex items-center gap-3 rounded-lg border border-hairline bg-surface px-4 py-3 hover:border-brand-gold/50 transition-colors animate-fade-in-up"
            :style="{ animationDelay: `${0.1 + i * 0.06}s` }"
          >
            <SvgIcon :name="s.icon" :size="26" color="#a89880" />
            <div class="flex-1 flex flex-col gap-0.5">
              <span class="font-sans-cn text-sm text-ink-soft">{{ s.label }}</span>
              <span class="font-mono text-[10px] text-ink-faint">标准接口适配 / 老旧 API 改造</span>
            </div>
          </div>
        </div>

        <div class="relative flex flex-col items-center justify-center px-4 animate-fade-in-up" style="animation-delay: 0.2s">
          <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 320" preserveAspectRatio="none" fill="none">
            <defs>
              <linearGradient id="bridgeBeam" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="rgba(95,168,211,0)" />
                <stop offset="50%" stop-color="rgba(95,168,211,0.5)" />
                <stop offset="100%" stop-color="rgba(95,168,211,0)" />
              </linearGradient>
            </defs>
            <g class="animate-data-stream" stroke="url(#bridgeBeam)" stroke-width="2.5">
              <line x1="0" y1="60" x2="160" y2="115" />
              <line x1="0" y1="120" x2="150" y2="135" />
              <line x1="0" y1="180" x2="150" y2="170" />
              <line x1="0" y1="240" x2="160" y2="205" />
            </g>
            <g class="animate-data-stream" stroke="url(#bridgeBeam)" stroke-width="2.5">
              <line x1="400" y1="60" x2="240" y2="115" />
              <line x1="400" y1="120" x2="250" y2="135" />
              <line x1="400" y1="180" x2="250" y2="170" />
              <line x1="400" y1="240" x2="240" y2="205" />
            </g>
            <g stroke="#5fa8d3" stroke-width="1" stroke-dasharray="4 6" class="animate-data-stream">
              <line x1="0" y1="60" x2="160" y2="115" />
              <line x1="0" y1="120" x2="150" y2="135" />
              <line x1="0" y1="180" x2="150" y2="170" />
              <line x1="0" y1="240" x2="160" y2="205" />
              <line x1="400" y1="60" x2="240" y2="115" />
              <line x1="400" y1="120" x2="250" y2="135" />
              <line x1="400" y1="180" x2="250" y2="170" />
              <line x1="400" y1="240" x2="240" y2="205" />
            </g>
          </svg>

          <div class="relative flex flex-col items-center gap-5 rounded-2xl border border-brand-gold/50 bg-surface p-8 shadow-glow-gold-lg card-glow-gold">
            <svg width="150" height="150" viewBox="0 0 150 150" fill="none" class="animate-float">
              <defs>
                <linearGradient id="cubeTop2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stop-color="rgba(240,209,152,0.5)" />
                  <stop offset="100%" stop-color="rgba(212,168,90,0.2)" />
                </linearGradient>
                <linearGradient id="cubeSide2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="rgba(212,168,90,0.3)" />
                  <stop offset="100%" stop-color="rgba(168,132,63,0.1)" />
                </linearGradient>
              </defs>
              <polygon points="75,15 130,42 75,70 20,42" fill="url(#cubeTop2)" stroke="#f0d198" stroke-width="1.5" />
              <polygon points="20,42 75,70 75,135 20,108" fill="url(#cubeSide2)" stroke="#d4a85a" stroke-width="1.5" />
              <polygon points="130,42 75,70 75,135 130,108" fill="url(#cubeSide2)" stroke="#a8843f" stroke-width="1.5" />
              <path d="M75 55Q92 50 100 75Q90 100 75 110Q60 100 50 75Q58 50 75 55Z" fill="rgba(240,209,152,0.2)" stroke="#f0d198" stroke-width="1.5" />
              <path d="M75 65Q85 62 90 75Q84 92 75 98Q66 92 60 75Q65 62 75 65Z" fill="none" stroke="#d4a85a" stroke-width="1" />
              <circle cx="75" cy="75" r="3.5" fill="#f0d198" class="animate-glow-pulse" />
              <line x1="35" y1="85" x2="55" y2="95" stroke="#d4a85a" stroke-width="1" opacity="0.6" />
              <line x1="35" y1="98" x2="55" y2="108" stroke="#d4a85a" stroke-width="1" opacity="0.6" />
            </svg>
            <div class="flex flex-col items-center gap-1">
              <h3 class="font-serif-cn text-2xl font-semibold text-brand-gold text-glow-gold">句龙核心</h3>
              <span class="font-sans-cn text-xs text-ink-soft tracking-[3px]">智能合规中枢</span>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-3">
            <span class="eyebrow text-ink-mute mb-1">企业核心系统</span>
            <div
              v-for="(s, i) in modernSystems"
              :key="s.label"
              class="flex items-center gap-3 rounded-lg border border-hairline bg-surface px-4 py-3 hover:border-brand-gold/50 transition-colors animate-fade-in-up"
              :style="{ animationDelay: `${0.15 + i * 0.06}s` }"
            >
              <SvgIcon :name="s.icon" :size="26" color="#5fa8d3" class="drop-shadow-[0_0_6px_rgba(95,168,211,0.4)]" />
              <div class="flex-1 flex flex-col gap-0.5">
                <span class="font-sans-cn text-sm text-ink-soft">{{ s.label }}</span>
                <span class="font-mono text-[10px] text-ink-faint">统一接入</span>
              </div>
            </div>
            <a href="#" class="self-end font-sans-cn text-xs text-brand-gold hover:text-brand-gold-soft transition-colors">更多系统 →</a>
          </div>

          <div class="rounded-xl border border-brand-gold/50 bg-surface p-5 flex flex-col gap-4 shadow-glow-gold-sm card-glow-gold animate-fade-in-up" style="animation-delay: 0.4s">
            <div class="flex items-center justify-between">
              <div class="flex flex-col gap-1">
                <span class="eyebrow text-brand-gold">本地部署 Core</span>
                <span class="font-sans-cn text-xs text-ink-mute">数据不出域，安全可控</span>
              </div>
              <SvgIcon name="cube-server" :size="56" color="#d4a85a" class="drop-shadow-[0_0_12px_rgba(212,168,90,0.35)] animate-float" />
            </div>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in coreTags" :key="tag" class="font-sans-cn text-[10px] px-2 py-1 rounded-xs border border-brand-gold/50 text-brand-gold">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
