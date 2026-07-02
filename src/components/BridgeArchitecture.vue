<script setup lang="ts">
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

const coreTags = ['规划中', '硬件节点', '搭载枢衡', '敬请期待']
const orbitDots = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  delay: `${i * 0.12}s`,
  top: `${20 + (i % 6) * 11}%`,
}))
</script>

<template>
  <section class="relative overflow-hidden py-section-lg" id="bridge">
    <div class="absolute inset-x-0 top-1/2 h-[560px] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(95,168,211,0.12),transparent_58%)] pointer-events-none" />

    <div class="container-narrow relative">
      <div class="mb-8 max-w-3xl">
        <div class="mb-3 flex items-center gap-3">
          <span class="eyebrow">跨越时代的桥梁</span>
          <span class="font-sans-cn text-[11px] tracking-wider text-ink-faint">· 数字化转型与部署区</span>
        </div>
        <h2 class="font-serif-cn text-3xl font-semibold leading-tight text-ink md:text-4xl">跨越时代的桥梁</h2>
        <p class="mt-4 font-sans-cn text-sm leading-relaxed text-ink-soft md:text-base">
          已上线产品支持通过 MCP / Skills / CLI 被第三方智能体调用，并以 API Key 完成鉴权；后续将由枢衡统一编排工程合规 Agent 能力。
        </p>
      </div>

      <div class="bridge-console relative overflow-hidden rounded-[24px] border border-[#1e3a58] bg-[#040914]/95 p-4 shadow-[0_30px_100px_rgba(0,0,0,0.52)] md:p-5 lg:p-6">
        <div class="absolute left-5 right-5 top-4 z-10 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.24em] text-brand-azure/70">
          <span>legacy input</span>
          <span class="hidden text-brand-gold md:inline">goulong compliance kernel</span>
          <span>modern output</span>
        </div>

        <div class="relative z-20 grid min-h-[360px] gap-4 pt-8 lg:grid-cols-[260px_minmax(360px,1fr)_300px] lg:items-stretch">
          <div class="rounded-2xl border border-[#1d304d] bg-[#071226]/90 p-4">
            <div class="mb-4 flex items-center justify-between">
              <span class="eyebrow text-[11px] text-brand-gold">老旧系统与孤岛</span>
              <span class="font-mono text-[10px] text-ink-faint">ADAPT</span>
            </div>
            <div class="grid gap-2.5">
              <div
                v-for="(s, i) in legacySystems"
                :key="s.label"
                class="bridge-node group flex items-center gap-3 rounded-xl border border-brand-azure/20 bg-[#0d1830]/90 px-3 py-2.5 animate-fade-in-up"
                :style="{ animationDelay: `${0.1 + i * 0.05}s` }"
              >
                <div class="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-gold/25 bg-brand-gold/10">
                  <SvgIcon :name="s.icon" :size="20" color="#d4a85a" />
                </div>
                <div class="min-w-0 flex-1">
                  <span class="block truncate font-sans-cn text-[13px] text-ink-soft">{{ s.label }}</span>
                  <span class="font-mono text-[9px] text-ink-faint">老旧 API 改造 / 数据映射</span>
                </div>
              </div>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-2xl border border-brand-azure/25 bg-[radial-gradient(circle_at_50%_46%,rgba(95,168,211,0.22),rgba(7,16,32,0.9)_42%,rgba(4,9,20,0.98)_72%)] px-3 py-5">
            <svg class="absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 560 360" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="bridgeLineIn" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(95,168,211,0.08)" />
                  <stop offset="55%" stop-color="rgba(95,168,211,0.88)" />
                  <stop offset="100%" stop-color="rgba(212,168,90,0.28)" />
                </linearGradient>
                <linearGradient id="bridgeLineOut" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(212,168,90,0.3)" />
                  <stop offset="45%" stop-color="rgba(95,168,211,0.85)" />
                  <stop offset="100%" stop-color="rgba(61,212,168,0.12)" />
                </linearGradient>
              </defs>
              <path d="M0 58 C150 80 190 116 260 152" stroke="url(#bridgeLineIn)" stroke-width="2" class="animate-data-stream" />
              <path d="M0 126 C155 132 190 146 260 166" stroke="url(#bridgeLineIn)" stroke-width="2" class="animate-data-stream" />
              <path d="M0 196 C155 190 190 178 260 178" stroke="url(#bridgeLineIn)" stroke-width="2" class="animate-data-stream" />
              <path d="M0 268 C150 242 190 212 260 190" stroke="url(#bridgeLineIn)" stroke-width="2" class="animate-data-stream" />
              <path d="M300 148 C372 110 430 72 560 58" stroke="url(#bridgeLineOut)" stroke-width="2" class="animate-data-stream" />
              <path d="M300 164 C382 146 440 128 560 126" stroke="url(#bridgeLineOut)" stroke-width="2" class="animate-data-stream" />
              <path d="M300 181 C382 196 440 194 560 196" stroke="url(#bridgeLineOut)" stroke-width="2" class="animate-data-stream" />
              <path d="M300 198 C372 232 430 258 560 268" stroke="url(#bridgeLineOut)" stroke-width="2" class="animate-data-stream" />
            </svg>

            <div
              v-for="dot in orbitDots"
              :key="dot.id"
              class="bridge-dot absolute hidden h-1 w-1 rounded-full bg-brand-azure lg:block"
              :style="{ top: dot.top, animationDelay: dot.delay }"
            />

            <div class="relative z-10 flex h-full min-h-[300px] flex-col items-center justify-center">
              <div class="core-halo absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-azure/20" />
              <div class="core-card relative flex w-[210px] flex-col items-center gap-4 rounded-[22px] border border-brand-gold/50 bg-[#111b34]/92 px-7 py-8 shadow-glow-gold-lg">
                <div class="absolute inset-3 rounded-2xl border border-brand-azure/10" />
                <svg width="126" height="126" viewBox="0 0 150 150" fill="none" class="animate-float drop-shadow-[0_0_24px_rgba(95,168,211,0.45)]">
                  <defs>
                    <linearGradient id="cubeTopBridge" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stop-color="rgba(95,168,211,0.35)" />
                      <stop offset="50%" stop-color="rgba(240,209,152,0.4)" />
                      <stop offset="100%" stop-color="rgba(212,168,90,0.18)" />
                    </linearGradient>
                    <linearGradient id="cubeSideBridge" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stop-color="rgba(212,168,90,0.28)" />
                      <stop offset="100%" stop-color="rgba(95,168,211,0.08)" />
                    </linearGradient>
                  </defs>
                  <polygon points="75,16 130,43 75,71 20,43" fill="url(#cubeTopBridge)" stroke="#f0d198" stroke-width="1.5" />
                  <polygon points="20,43 75,71 75,135 20,108" fill="url(#cubeSideBridge)" stroke="#d4a85a" stroke-width="1.5" />
                  <polygon points="130,43 75,71 75,135 130,108" fill="url(#cubeSideBridge)" stroke="#5fa8d3" stroke-width="1.5" />
                  <path d="M75 55Q92 50 100 75Q90 100 75 110Q60 100 50 75Q58 50 75 55Z" fill="rgba(240,209,152,0.18)" stroke="#f0d198" stroke-width="1.5" />
                  <path d="M75 64Q86 61 91 75Q85 93 75 99Q65 93 59 75Q64 61 75 64Z" fill="none" stroke="#d4a85a" stroke-width="1" />
                  <circle cx="75" cy="75" r="3.5" fill="#f0d198" class="animate-glow-pulse" />
                  <path d="M37 86L55 96M37 99L55 109M113 86L95 96M113 99L95 109" stroke="#5fa8d3" stroke-width="1" opacity="0.65" />
                </svg>
                <div class="relative flex flex-col items-center gap-1">
                  <h3 class="font-serif-cn text-2xl font-semibold text-brand-gold text-glow-gold">句龙核心</h3>
                  <span class="font-sans-cn text-xs tracking-[3px] text-ink-soft">智能合规中枢</span>
                </div>
              </div>
            </div>
          </div>

          <div class="grid gap-4 lg:grid-rows-[1fr_auto]">
            <div class="rounded-2xl border border-[#1d304d] bg-[#071226]/90 p-4">
              <div class="mb-4 flex items-center justify-between">
                <span class="eyebrow text-[11px] text-brand-gold">企业核心系统</span>
                <span class="font-mono text-[10px] text-ink-faint">OUTPUT</span>
              </div>
              <div class="grid gap-2.5">
                <div
                  v-for="(s, i) in modernSystems"
                  :key="s.label"
                  class="bridge-node flex items-center gap-3 rounded-xl border border-brand-jade/20 bg-[#0d1830]/90 px-3 py-2.5 animate-fade-in-up"
                  :style="{ animationDelay: `${0.16 + i * 0.05}s` }"
                >
                  <div class="flex h-9 w-9 items-center justify-center rounded-lg border border-brand-azure/30 bg-brand-azure/10">
                    <SvgIcon :name="s.icon" :size="20" color="#5fa8d3" />
                  </div>
                  <div class="min-w-0 flex-1">
                    <span class="block truncate font-sans-cn text-[13px] text-ink-soft">{{ s.label }}</span>
                    <span class="font-mono text-[9px] text-ink-faint">统一接入 / 持续审计</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded-2xl border border-brand-gold/45 bg-[linear-gradient(135deg,rgba(31,24,16,0.92),rgba(9,15,30,0.96))] p-4 shadow-glow-gold-sm">
              <div class="mb-4 flex items-start justify-between gap-3">
                <div>
                  <span class="eyebrow text-[12px] text-brand-gold">句龙 · Core</span>
                  <p class="mt-1 font-sans-cn text-xs text-ink-mute">面向本地部署的句龙硬件节点，敬请期待</p>
                </div>
                <div class="server-rack relative h-14 w-24 rounded-lg border border-brand-gold/45 bg-[#080b12] shadow-glow-gold-sm">
                  <span class="absolute left-3 top-3 h-2 w-12 rounded-full bg-brand-gold/45" />
                  <span class="absolute bottom-3 left-3 h-2 w-14 rounded-full bg-brand-azure/25" />
                  <span class="absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-brand-gold shadow-glow-gold-sm" />
                </div>
              </div>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in coreTags" :key="tag" class="rounded-xs border border-brand-gold/45 px-2 py-1 font-sans-cn text-[10px] text-brand-gold">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>

        <p class="relative z-20 mt-5 text-center font-sans-cn text-xs leading-relaxed text-ink-mute md:text-sm">
          当前通过 MCP / Skills / CLI 接入第三方智能体；本地部署与咨询服务将在枢衡成熟后逐步开放，敬请期待。
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bridge-console::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(95, 168, 211, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(95, 168, 211, 0.04) 1px, transparent 1px),
    radial-gradient(circle at 50% 45%, rgba(95, 168, 211, 0.16), transparent 32%);
  background-size: 22px 22px, 22px 22px, 100% 100%;
  pointer-events: none;
}

.bridge-node {
  box-shadow: inset 0 1px 0 rgba(95, 168, 211, 0.08);
}

.core-halo {
  animation: corePulse 4s ease-in-out infinite;
}

.core-card {
  box-shadow:
    inset 0 1px 0 rgba(240, 209, 152, 0.14),
    0 0 44px rgba(95, 168, 211, 0.18),
    0 0 32px rgba(212, 168, 90, 0.16);
}

.bridge-dot {
  left: 4%;
  box-shadow: 0 0 10px rgba(95, 168, 211, 0.9);
  animation: bridgeDot 2.4s linear infinite;
}

.server-rack::before {
  content: '';
  position: absolute;
  inset: 7px;
  border: 1px solid rgba(212, 168, 90, 0.22);
  border-radius: 6px;
}

@keyframes bridgeDot {
  0% { left: 3%; opacity: 0; transform: translateY(0) scale(0.75); }
  12% { opacity: 1; }
  55% { opacity: 1; transform: translateY(4px) scale(1); }
  100% { left: 96%; opacity: 0; transform: translateY(-6px) scale(0.75); }
}

@keyframes corePulse {
  0%, 100% { opacity: 0.28; transform: translate(-50%, -50%) scale(0.92); }
  50% { opacity: 0.76; transform: translate(-50%, -50%) scale(1.08); }
}
</style>
