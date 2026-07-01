<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

type LineTone = 'command' | 'output' | 'json' | 'success' | 'warning' | 'error' | 'score'
interface TermLine {
  id: number
  tone: LineTone
  text: string
  delay: number
}

const scripts: TermLine[][] = [
  [
    { id: 1, tone: 'command', text: '$ scp connect --server jurong-core', delay: 0 },
    { id: 2, tone: 'output', text: '✓ connected', delay: 400 },
    { id: 3, tone: 'command', text: 'POST /api/v1/review', delay: 800 },
    { id: 4, tone: 'json', text: 'Content-Type: application/json', delay: 1000 },
    { id: 5, tone: 'json', text: '{ "doc_type": "contract",', delay: 1200 },
    { id: 6, tone: 'json', text: '  "project_id": "PRJ-2025-001",', delay: 1400 },
    { id: 7, tone: 'json', text: '  "content": ... }', delay: 1700 },
    { id: 8, tone: 'output', text: '→ processing...', delay: 2100 },
    { id: 9, tone: 'json', text: '  ├─ risk-check', delay: 2400 },
    { id: 10, tone: 'json', text: '  ├─ negative-list', delay: 2600 },
    { id: 11, tone: 'json', text: '  ├─ format-check', delay: 2800 },
    { id: 12, tone: 'json', text: '  ├─ standard-align', delay: 3000 },
    { id: 13, tone: 'json', text: '  └─ scoring', delay: 3200 },
    { id: 14, tone: 'success', text: 'risk-check .............. passed', delay: 3800 },
    { id: 15, tone: 'warning', text: 'format-check ............ warning', delay: 4200 },
    { id: 16, tone: 'success', text: 'standard-align .......... passed', delay: 4600 },
    { id: 17, tone: 'score', text: 'compliance score ..... 92 / 100', delay: 5200 },
  ],
]

const streamLines = [
  { label: 'risk-check', value: 'passed', tone: 'success' as const },
  { label: 'negative-list', value: 'warning', tone: 'warning' as const },
  { label: 'format-check', value: 'passed', tone: 'success' as const },
  { label: 'standard-align', value: 'passed', tone: 'success' as const },
  { label: 'compliance_score', value: '92 / 100', tone: 'score' as const },
]

const visibleLines = ref<TermLine[]>([])
let timer: number | null = null

function runScript() {
  visibleLines.value = []
  const script = scripts[0]
  script.forEach((line) => {
    timer = window.setTimeout(() => {
      visibleLines.value = [...visibleLines.value, line].slice(-14)
    }, line.delay)
  })
  timer = window.setTimeout(runScript, script[script.length - 1].delay + 6000)
}

onMounted(() => runScript())
onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})

const toneClass: Record<LineTone, string> = {
  command: 'text-brand-gold',
  output: 'text-brand-jade-soft',
  json: 'text-ink-mute',
  success: 'text-brand-jade',
  warning: 'text-brand-amber',
  error: 'text-brand-vermilion',
  score: 'text-brand-gold font-semibold',
}
</script>

<template>
  <div class="rounded-2xl border border-hairline-strong bg-[rgba(3,5,10,0.92)] backdrop-blur-xl shadow-glow-gold-sm overflow-hidden flex flex-col md:flex-row">
    <!-- 左侧：实时日志 -->
    <div class="flex-1 flex flex-col min-w-0">
      <div class="flex items-center justify-between px-5 py-3 border-b border-hairline bg-[rgba(5,8,14,0.9)]">
        <div class="flex items-center gap-2.5">
          <span class="w-2 h-2 rounded-pill bg-brand-jade animate-glow-pulse" />
          <span class="font-mono text-[13px] text-ink-soft">句龙 Core · 实时审核运行中</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-pill bg-brand-vermilion-deep" />
          <span class="w-2.5 h-2.5 rounded-pill bg-brand-amber" />
          <span class="w-2.5 h-2.5 rounded-pill bg-brand-jade" />
        </div>
      </div>

      <div class="relative px-5 py-4 h-[300px] overflow-hidden font-mono text-[12px] leading-relaxed">
        <div
          v-for="line in visibleLines"
          :key="line.id"
          class="whitespace-pre"
          :class="toneClass[line.tone]"
        >
          {{ line.text }}
        </div>
        <span class="inline-block w-2 h-3.5 bg-brand-gold animate-glow-pulse ml-0.5 align-middle" />
        <div class="absolute inset-0 pointer-events-none opacity-25">
          <div class="h-px w-full bg-gradient-to-r from-transparent via-brand-gold to-transparent animate-scan-line" />
        </div>
      </div>
    </div>

    <!-- 右侧：模型输出流 -->
    <div class="md:w-[260px] border-t md:border-t-0 md:border-l border-hairline bg-[rgba(7,11,22,0.85)] p-5 flex flex-col gap-4">
      <div class="flex items-center justify-between border-b border-hairline-soft pb-3">
        <span class="font-sans-cn text-xs text-ink-soft">模型输出流 / streaming</span>
        <span class="w-1.5 h-1.5 rounded-pill bg-brand-jade animate-glow-pulse" />
      </div>

      <div class="flex flex-col gap-3">
        <div
          v-for="item in streamLines"
          :key="item.label"
          class="flex items-center justify-between text-[12px] font-mono pb-2 border-b border-hairline-soft last:border-0"
        >
          <span class="text-ink-mute">{{ item.label }}</span>
          <span
            class="font-semibold"
            :class="{
              'text-brand-jade': item.tone === 'success',
              'text-brand-amber': item.tone === 'warning',
              'text-brand-gold': item.tone === 'score',
            }"
          >{{ item.value }}</span>
        </div>
      </div>

      <div class="mt-auto pt-4 border-t border-hairline-soft flex flex-col gap-2">
        <div class="flex items-center justify-between text-[11px] font-mono">
          <span class="text-ink-mute">compliance</span>
          <span class="text-brand-jade flex items-center gap-1">passed <span class="text-lg">✓</span></span>
        </div>
        <div class="flex items-center justify-between text-[11px] font-mono">
          <span class="text-ink-mute">risk level</span>
          <span class="text-brand-jade-soft">low</span>
        </div>
        <div class="flex items-center justify-between text-[11px] font-mono">
          <span class="text-ink-mute">suggestion</span>
          <span class="text-brand-amber">优化条款 2 处</span>
        </div>
        <div class="mt-1 font-mono text-[10px] text-ink-faint">trace id: JR202505021238</div>
      </div>
    </div>
  </div>
</template>
