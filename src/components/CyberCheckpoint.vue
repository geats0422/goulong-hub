<script setup lang="ts">
import SectionTitle from './SectionTitle.vue'
import PaifangArch from './PaifangArch.vue'
import SvgIcon from './SvgIcon.vue'

const inputs = [
  { type: '合同文件', formats: '.pdf / .docx', icon: 'file-contract', count: '8.2K' },
  { type: '投标文件', formats: '.docx / .pdf', icon: 'file-bid', count: '3.4K' },
  { type: '审批文件', formats: '.xlsx / .pdf', icon: 'file-approval', count: '5.1K' },
]

const targetSystems = [
  { label: 'OA', icon: 'building-oau' },
  { label: 'ERP', icon: 'building-erp' },
  { label: '合同系统', icon: 'building-contract' },
]

const intercepts = [
  { label: '负面清单校验', icon: 'shield-error' },
  { label: '风险拦截', icon: 'shield-alert' },
  { label: '格式一致性', icon: 'shield-alert' },
]
</script>

<template>
  <section class="relative py-section-lg" id="checkpoint">
    <div
      class="absolute inset-0 pointer-events-none"
      style="background:
        radial-gradient(ellipse 55% 50% at 50% 55%, rgba(212, 168, 90, 0.12), transparent 60%),
        radial-gradient(ellipse 25% 25% at 50% 55%, rgba(212, 168, 90, 0.2), transparent 55%);"
    />

    <div class="container-narrow relative">
      <SectionTitle
        eyebrow="赛博安检站 · 业务场景切片"
        title="赛博安检站"
        subtitle="在文档与数据进入企业核心系统前完成全维合规预审与风险拦截，杜绝不合规风险流入，保障业务安全与流程可信。"
      />

      <div class="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-14 items-center">
        <!-- 左：文件输入 -->
        <div class="flex flex-col gap-4">
          <div
            v-for="(f, i) in inputs"
            :key="f.type"
            class="group relative flex items-center gap-4 rounded-xl border border-hairline bg-surface/95 px-6 py-5 backdrop-blur-sm card-glow-gold transition-all duration-300 hover:border-brand-gold/60 hover:translate-x-1 animate-fade-in-up"
            :style="{ animationDelay: `${0.1 + i * 0.08}s` }"
          >
            <div class="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-14 rounded-r-pill bg-gradient-to-b from-brand-gold/0 via-brand-gold/80 to-brand-gold/0 opacity-0 group-hover:opacity-100 transition-opacity" />

            <SvgIcon :name="f.icon" :size="36" color="#5fa8d3" class="drop-shadow-[0_0_10px_rgba(95,168,211,0.5)]" />
            <div class="flex-1 flex flex-col gap-1">
              <span class="font-sans-cn text-sm text-ink font-medium">{{ f.type }}</span>
              <span class="font-mono text-[11px] text-ink-mute">{{ f.formats }}</span>
            </div>
            <span class="font-mono text-xs text-brand-gold">{{ f.count }} / 今日</span>
          </div>
        </div>

        <!-- 中：牌坊 + 双路径 -->
        <div class="relative flex flex-col items-center gap-5 animate-fade-in-up" style="animation-delay: 0.3s">
          <span class="eyebrow text-glow-gold">前置审核屏障</span>

          <!-- 上：合规通过 -->
          <div class="flex items-center gap-2 w-full max-w-[280px]">
            <svg class="flex-1 h-12" viewBox="0 0 160 48" fill="none">
              <defs>
                <linearGradient id="passBeam" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(61,212,168,0)" />
                  <stop offset="50%" stop-color="rgba(61,212,168,0.6)" />
                  <stop offset="100%" stop-color="rgba(61,212,168,0)" />
                </linearGradient>
              </defs>
              <line x1="0" y1="24" x2="130" y2="24" stroke="url(#passBeam)" stroke-width="3" class="animate-data-stream" />
              <line x1="0" y1="24" x2="130" y2="24" stroke="#3dd4a8" stroke-width="1.5" stroke-dasharray="4 6" class="animate-data-stream" />
            </svg>
            <div class="flex flex-col items-center gap-1 shrink-0">
              <div class="w-11 h-11 rounded-pill border-2 border-brand-jade bg-brand-jade/15 flex items-center justify-center shadow-glow-jade">
                <SvgIcon name="check-circle" :size="20" color="#3dd4a8" />
              </div>
              <span class="font-sans-cn text-[10px] text-brand-jade-soft tracking-wider">合规通过</span>
            </div>
          </div>

          <PaifangArch :width="340" :height="300" />

          <!-- 下：风险拦截 -->
          <div class="flex items-center gap-2 w-full max-w-[280px]">
            <div class="flex flex-col items-center gap-1 shrink-0">
              <div class="w-11 h-11 rounded-pill border-2 border-brand-vermilion bg-brand-vermilion/15 flex items-center justify-center shadow-glow-vermilion">
                <SvgIcon name="shield-error" :size="20" color="#e84a4a" />
              </div>
              <span class="font-sans-cn text-[10px] text-brand-vermilion-soft tracking-wider">风险拦截</span>
            </div>
            <svg class="flex-1 h-12" viewBox="0 0 160 48" fill="none">
              <defs>
                <linearGradient id="failBeam" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="rgba(232,74,74,0)" />
                  <stop offset="50%" stop-color="rgba(232,74,74,0.6)" />
                  <stop offset="100%" stop-color="rgba(232,74,74,0)" />
                </linearGradient>
              </defs>
              <line x1="30" y1="24" x2="160" y2="24" stroke="url(#failBeam)" stroke-width="3" class="animate-data-stream" />
              <line x1="30" y1="24" x2="160" y2="24" stroke="#e84a4a" stroke-width="1.5" stroke-dasharray="4 6" class="animate-data-stream" />
            </svg>
          </div>
        </div>

        <!-- 右：企业系统输出 -->
        <div class="flex flex-col gap-5">
          <div class="flex flex-col gap-3">
            <span class="eyebrow text-ink-mute">进入企业核心系统</span>
            <div class="grid grid-cols-3 gap-3">
              <div
                v-for="(s, i) in targetSystems"
                :key="s.label"
                class="flex flex-col items-center gap-2 rounded-xl border border-brand-jade-deep/50 bg-surface/95 px-3 py-4 card-glow-jade hover:border-brand-jade/70 transition-colors animate-fade-in-up"
                :style="{ animationDelay: `${0.2 + i * 0.08}s` }"
              >
                <SvgIcon :name="s.icon" :size="32" color="#3dd4a8" class="drop-shadow-[0_0_8px_rgba(61,212,168,0.4)]" />
                <span class="font-sans-cn text-xs text-ink-soft">{{ s.label }}</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            <span class="eyebrow text-ink-mute">拦截反馈</span>
            <div class="grid grid-cols-3 gap-3">
              <div
                v-for="(item, i) in intercepts"
                :key="item.label"
                class="flex flex-col items-center gap-2 rounded-md border border-brand-vermilion-deep/60 bg-surface/95 px-3 py-3 card-glow-vermilion hover:border-brand-vermilion/80 transition-colors animate-fade-in-up"
                :style="{ animationDelay: `${0.3 + i * 0.08}s` }"
              >
                <SvgIcon :name="item.icon" :size="26" color="#e84a4a" class="drop-shadow-[0_0_8px_rgba(232,74,74,0.4)]" />
                <span class="font-sans-cn text-[11px] text-center text-ink-soft leading-tight">{{ item.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
