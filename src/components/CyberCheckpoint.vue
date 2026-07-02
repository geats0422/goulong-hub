<script setup lang="ts">
import PaifangArch from './PaifangArch.vue'
import SvgIcon from './SvgIcon.vue'

const inputs = [
  { type: '合同文件', formats: '.pdf / .docx', count: '8.2K', icon: 'file-contract' },
  { type: '投标文件', formats: '.docx / .pdf', count: '3.4K', icon: 'file-bid' },
  { type: '审批文件', formats: '.xlsx / .pdf', count: '5.1K', icon: 'file-approval' },
]

const targetSystems = [
  { label: 'OA', icon: 'building-oau' },
  { label: 'ERP', icon: 'building-erp' },
  { label: '合同系统', icon: 'building-contract' },
]

const intercepts = [
  { label: '负面清单校验', value: '12', icon: 'shield-error' },
  { label: '风险条款拦截', value: '7', icon: 'shield-alert' },
  { label: '格式一致性复核', value: '19', icon: 'warning-triangle' },
]

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  delay: `${(i % 8) * 0.18}s`,
  y: `${18 + (i % 7) * 10}%`,
  size: `${i % 3 === 0 ? 3 : 2}px`,
}))
</script>

<template>
  <section class="relative overflow-hidden py-section-lg" id="checkpoint">
    <div
      class="absolute inset-0 pointer-events-none"
      style="background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,168,90,0.08), transparent 65%);"
    />

    <div class="container-narrow relative">
      <div class="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div class="mb-2 flex items-center gap-3">
            <span class="eyebrow">赛博安检站</span>
            <span class="font-sans-cn text-[11px] tracking-wider text-ink-faint">· 业务场景切片区</span>
          </div>
          <h2 class="font-serif-cn text-3xl font-semibold leading-tight text-ink md:text-4xl">赛博安检站</h2>
        </div>
      </div>

      <div class="checkpoint-stage relative overflow-hidden rounded-[28px] border border-[#243653] bg-[#050914]/90 px-4 py-6 shadow-[0_28px_90px_rgba(0,0,0,0.45)] md:px-8 md:py-8 lg:px-10">
        <div class="absolute left-6 right-6 top-5 z-10 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.28em] text-ink-faint">
          <span>document queue</span>
          <span class="hidden text-brand-gold md:inline">pre-audit gateway</span>
          <span>system routing</span>
        </div>

        <div class="relative z-20 grid gap-6 pt-10 lg:grid-cols-[255px_minmax(360px,1fr)_300px] lg:items-center lg:gap-8">
          <div class="relative flex flex-col gap-3">
            <div class="rounded-2xl border border-[#203552] bg-[#071124]/90 p-4 shadow-[inset_0_1px_0_rgba(95,168,211,0.12)]">
              <div class="mb-4 flex items-center justify-between">
                <span class="eyebrow text-[11px] text-brand-azure">待检文档</span>
                <span class="rounded-full border border-brand-azure/30 bg-brand-azure/10 px-2 py-0.5 font-mono text-[10px] text-brand-azure">INPUT</span>
              </div>
              <div class="flex flex-col gap-3">
                <div
                  v-for="(f, i) in inputs"
                  :key="f.type"
                  class="group relative overflow-hidden rounded-xl border border-[#1b3558] bg-[linear-gradient(135deg,rgba(12,28,55,0.96),rgba(5,12,25,0.96))] p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-azure/60 animate-fade-in-up"
                  :style="{ animationDelay: `${0.15 + i * 0.08}s` }"
                >
                  <div class="absolute inset-y-0 right-0 w-12 bg-[linear-gradient(90deg,transparent,rgba(95,168,211,0.12))]" />
                  <div class="relative flex items-center gap-3">
                    <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-brand-azure/35 bg-brand-azure/10 text-brand-azure shadow-glow-azure">
                      <SvgIcon :name="f.icon" :size="22" color="#5fa8d3" />
                    </div>
                    <div class="min-w-0 flex-1">
                      <div class="flex items-center justify-between gap-2">
                        <span class="font-sans-cn text-[13px] font-medium text-ink">{{ f.type }}</span>
                        <span class="font-mono text-[10px] text-brand-gold">{{ f.count }}</span>
                      </div>
                      <div class="mt-1 flex items-center gap-2 font-mono text-[10px] text-ink-faint">
                        <span>{{ f.formats }}</span>
                        <span class="h-px flex-1 bg-brand-azure/20" />
                        <span>queued</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative min-h-[360px] overflow-hidden rounded-[24px] border border-brand-gold/30 bg-[radial-gradient(circle_at_50%_40%,rgba(212,168,90,0.14),rgba(7,11,22,0.78)_45%,rgba(4,8,16,0.95)_72%)] px-3 py-8 md:min-h-[430px]">
            <div class="absolute inset-x-8 top-1/2 hidden h-px bg-[linear-gradient(90deg,transparent,rgba(95,168,211,0.85),rgba(212,168,90,0.75),rgba(61,212,168,0.75),transparent)] lg:block" />
            <svg class="absolute inset-0 hidden h-full w-full lg:block" viewBox="0 0 520 430" fill="none" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gateIn" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(95,168,211,0)" />
                  <stop offset="45%" stop-color="rgba(95,168,211,0.75)" />
                  <stop offset="100%" stop-color="rgba(212,168,90,0.12)" />
                </linearGradient>
                <linearGradient id="gatePass" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(212,168,90,0.1)" />
                  <stop offset="100%" stop-color="rgba(61,212,168,0.88)" />
                </linearGradient>
                <linearGradient id="gateBlock" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(212,168,90,0.1)" />
                  <stop offset="100%" stop-color="rgba(232,74,74,0.88)" />
                </linearGradient>
              </defs>
              <path d="M0 155 C118 170 145 195 238 210" stroke="url(#gateIn)" stroke-width="2" class="animate-data-stream" />
              <path d="M0 215 C120 215 145 215 238 215" stroke="url(#gateIn)" stroke-width="3" class="animate-data-stream" />
              <path d="M0 275 C118 260 145 235 238 220" stroke="url(#gateIn)" stroke-width="2" class="animate-data-stream" />
              <path d="M282 195 C355 150 420 128 520 112" stroke="url(#gatePass)" stroke-width="2.5" class="animate-data-stream" />
              <path d="M282 235 C355 282 420 304 520 318" stroke="url(#gateBlock)" stroke-width="2.5" class="animate-data-stream" />
            </svg>

            <div
              v-for="p in particles"
              :key="p.id"
              class="gate-particle absolute hidden rounded-full bg-brand-azure lg:block"
              :style="{ width: p.size, height: p.size, top: p.y, animationDelay: p.delay }"
            />

            <div class="absolute left-1/2 top-5 h-[calc(100%-40px)] w-[86px] -translate-x-1/2 rounded-full bg-brand-gold/10 blur-2xl" />
            <div class="scan-beam absolute left-1/2 top-20 hidden h-[260px] w-[52px] -translate-x-1/2 rounded-full bg-[linear-gradient(180deg,transparent,rgba(240,209,152,0.22),transparent)] lg:block" />

            <div class="relative z-10 flex h-full min-h-[300px] flex-col items-center justify-center">
              <span class="eyebrow text-glow-gold mb-4 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1 text-[11px]">前置审核屏障</span>
              <div class="relative">
                <div class="absolute inset-x-7 bottom-5 h-10 rounded-full bg-brand-gold/25 blur-xl" />
                <PaifangArch :width="320" :height="300" />
                <div class="absolute left-1/2 top-[48%] flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-brand-gold/45 bg-[#080d18]/80 shadow-glow-gold-md">
                  <SvgIcon name="shield-check" :size="28" color="#f0d198" />
                </div>
              </div>
              <div class="mt-3 grid w-full max-w-[360px] grid-cols-3 gap-2 font-mono text-[10px] text-ink-faint">
                <span class="rounded-full border border-brand-azure/20 bg-brand-azure/10 px-2 py-1 text-center text-brand-azure">parse</span>
                <span class="rounded-full border border-brand-gold/25 bg-brand-gold/10 px-2 py-1 text-center text-brand-gold">audit</span>
                <span class="rounded-full border border-brand-jade/20 bg-brand-jade/10 px-2 py-1 text-center text-brand-jade">route</span>
              </div>
            </div>
          </div>

          <div class="grid gap-4">
            <div class="rounded-2xl border border-brand-jade/30 bg-[linear-gradient(135deg,rgba(7,28,28,0.95),rgba(5,13,20,0.95))] p-4 shadow-[inset_0_1px_0_rgba(61,212,168,0.14)]">
              <div class="mb-4 flex items-center justify-between">
                <span class="eyebrow text-[11px] text-brand-jade">合规放行</span>
                <span class="font-mono text-[10px] text-brand-jade">PASS 96.8%</span>
              </div>
              <div class="grid grid-cols-3 gap-2.5">
                <div
                  v-for="(s, i) in targetSystems"
                  :key="s.label"
                  class="flex flex-col items-center gap-2 rounded-xl border border-brand-jade/20 bg-brand-jade/10 px-3 py-4 animate-fade-in-up"
                  :style="{ animationDelay: `${0.25 + i * 0.08}s` }"
                >
                  <SvgIcon :name="s.icon" :size="26" color="#3dd4a8" class="drop-shadow-[0_0_8px_rgba(61,212,168,0.45)]" />
                  <span class="font-sans-cn text-[11px] text-ink-soft">{{ s.label }}</span>
                </div>
              </div>
            </div>

            <div class="rounded-2xl border border-brand-vermilion/35 bg-[linear-gradient(135deg,rgba(42,10,12,0.95),rgba(12,7,12,0.95))] p-4 shadow-[inset_0_1px_0_rgba(232,74,74,0.14)]">
              <div class="mb-4 flex items-center justify-between">
                <span class="eyebrow text-[11px] text-brand-vermilion-soft">拦截反馈</span>
                <span class="font-mono text-[10px] text-brand-vermilion-soft">BLOCK</span>
              </div>
              <div class="flex flex-col gap-2.5">
                <div
                  v-for="(item, i) in intercepts"
                  :key="item.label"
                  class="flex items-center gap-3 rounded-xl border border-brand-vermilion/20 bg-brand-vermilion/10 px-3 py-2.5 animate-fade-in-up"
                  :style="{ animationDelay: `${0.32 + i * 0.08}s` }"
                >
                  <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-vermilion/15">
                    <SvgIcon :name="item.icon" :size="18" color="#f87171" />
                  </div>
                  <span class="flex-1 font-sans-cn text-[12px] text-ink-soft">{{ item.label }}</span>
                  <span class="font-mono text-[11px] text-brand-vermilion-soft">{{ item.value }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p class="relative z-20 mx-auto mt-7 max-w-3xl text-center font-sans-cn text-sm leading-relaxed text-ink-mute/75">
          在文档与数据进入企业核心系统前完成全维度合规预审与风险拦截，杜绝不合规风险流入，保障业务安全与流程可信。
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.checkpoint-stage::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(95, 168, 211, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(95, 168, 211, 0.035) 1px, transparent 1px),
    radial-gradient(circle at 50% 45%, rgba(212, 168, 90, 0.12), transparent 38%);
  background-size: 28px 28px, 28px 28px, 100% 100%;
  pointer-events: none;
}

.checkpoint-stage::after {
  content: '';
  position: absolute;
  inset: 20px;
  border: 1px solid rgba(212, 168, 90, 0.16);
  border-radius: 22px;
  pointer-events: none;
}

.gate-particle {
  left: 2%;
  box-shadow: 0 0 10px rgba(95, 168, 211, 0.85);
  animation: gateParticle 2.3s linear infinite;
}

.scan-beam {
  animation: scanGate 3.2s ease-in-out infinite;
}

@keyframes gateParticle {
  0% { left: 3%; opacity: 0; transform: translateY(0) scale(0.75); }
  10% { opacity: 1; }
  52% { opacity: 1; transform: translateY(8px) scale(1); }
  100% { left: 97%; opacity: 0; transform: translateY(-10px) scale(0.75); }
}

@keyframes scanGate {
  0%, 100% { opacity: 0.38; transform: translateX(-50%) scaleY(0.84); }
  50% { opacity: 0.92; transform: translateX(-50%) scaleY(1.08); }
}

@media (max-width: 1023px) {
  .checkpoint-stage::after {
    inset: 12px;
  }
}
</style>
