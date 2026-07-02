<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'

type LineTone = 'command' | 'output' | 'json' | 'success' | 'warning' | 'error' | 'score'

interface TermLine {
  id: number
  tone: LineTone
  text: string
  delay: number
}

const scripts: TermLine[][] = [
  [
    { id: 1, tone: 'command', text: '$ mcp connect --server jurong-core', delay: 0 },
    { id: 2, tone: 'success', text: '✓ connected', delay: 500 },
    { id: 3, tone: 'command', text: 'POST /api/v1/review', delay: 900 },
    { id: 4, tone: 'json', text: 'Content-Type: application/json', delay: 1100 },
    { id: 5, tone: 'json', text: '{', delay: 1300 },
    { id: 6, tone: 'json', text: '  "doc_type": "contract",', delay: 1500 },
    { id: 7, tone: 'json', text: '  "project_id": "PRJ-2025-001",', delay: 1700 },
    { id: 8, tone: 'json', text: '  "content": "..."', delay: 1900 },
    { id: 9, tone: 'json', text: '}', delay: 2100 },
    { id: 10, tone: 'output', text: '> processing...', delay: 2500 },
    { id: 11, tone: 'json', text: '  ├─ risk-check', delay: 2800 },
    { id: 12, tone: 'json', text: '  ├─ negative-list', delay: 3000 },
    { id: 13, tone: 'json', text: '  ├─ format-check', delay: 3200 },
    { id: 14, tone: 'json', text: '  ├─ standard-align', delay: 3400 },
    { id: 15, tone: 'json', text: '  └─ scoring', delay: 3600 },
  ],
]

const streamLines = [
  { label: 'risk-check', value: 'passed', tone: 'success' as const },
  { label: 'negative-list', value: 'warning', tone: 'warning' as const },
  { label: 'format-check', value: 'passed', tone: 'success' as const },
  { label: 'standard-align', value: 'passed', tone: 'success' as const },
  { label: 'compliance score', value: '92 / 100', tone: 'score' as const },
]

const visibleLines = ref<TermLine[]>([])
let timer: number | null = null

const waveformBars = computed(() => {
  const bars: number[] = []
  for (let i = 0; i < 80; i++) {
    bars.push(0.1 + Math.random() * 0.9)
  }
  return bars
})

function runScript() {
  visibleLines.value = []
  const script = scripts[0]
  script.forEach((line) => {
    timer = window.setTimeout(() => {
      visibleLines.value = [...visibleLines.value, line].slice(-16)
    }, line.delay)
  })
  timer = window.setTimeout(runScript, script[script.length - 1].delay + 7000)
}

onMounted(() => runScript())
onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})

const toneClass: Record<LineTone, string> = {
  command: 'text-[#e6c184]',
  output: 'text-[#7ec8c8]',
  json: 'text-[#6a7a6a]',
  success: 'text-[#3dd4a8]',
  warning: 'text-[#f0b85a]',
  error: 'text-[#e84a4a]',
  score: 'text-[#d4a85a] font-semibold',
}

const dotCount = (label: string) => {
  const maxLen = 16
  const dots = Math.max(3, maxLen - label.length)
  return '.'.repeat(dots)
}
</script>

<template>
  <div class="flex flex-col gap-3">
    <!-- 终端主面板 -->
    <div class="relative rounded-lg border border-[#1a2a3a]/80 bg-[rgba(2,4,10,0.97)] overflow-hidden"
         style="box-shadow: 0 0 20px rgba(212,168,90,0.06), 0 0 40px rgba(95,168,211,0.03), inset 0 1px 0 rgba(212,168,90,0.08);">

      <!-- 电路板纹理背景 -->
      <div class="absolute inset-0 pointer-events-none opacity-[0.03]"
           style="background-image: linear-gradient(rgba(95,168,211,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(95,168,211,0.3) 1px, transparent 1px); background-size: 20px 20px;" />

      <!-- 顶部装饰线 -->
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a85a]/30 to-transparent" />

      <!-- 标题栏 -->
      <div class="relative flex items-center justify-between px-4 py-2 border-b border-[#1a2a3a] bg-[rgba(4,8,16,0.9)]">
        <div class="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" class="shrink-0">
            <path d="M8 1C5 1 3 3 3 6c0 2 1.5 3.5 3 4-.5.5-1.5 1-2.5.5 1 1.5 3 2 4.5 1.5 2-.5 3.5-2 3.5-4 0-2-1.5-3.5-3.5-3.5-1 0-1.5.5-1.5 1.5s.5 1.5 1.5 1.5c.5 0 1-.5 1-1" stroke="#d4a85a" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
          <span class="font-mono text-[11px] text-[#a0a8b0] tracking-wide">文衡 / 照胆 · 实时审核运行中</span>
        </div>
        <div class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-[#b83838]" />
          <span class="w-2.5 h-2.5 rounded-full bg-[#f0b85a]" />
          <span class="w-2.5 h-2.5 rounded-full bg-[#3dd4a8]" />
        </div>
      </div>

      <!-- 内容区：左右分栏 -->
      <div class="relative flex flex-col md:flex-row">
        <!-- 左侧：终端日志 -->
        <div class="flex-1 flex flex-col min-w-0 relative">
          <div class="relative px-4 py-3 min-h-[240px] font-mono text-[11px] leading-[1.6]">
            <div v-for="line in visibleLines" :key="line.id" class="whitespace-pre" :class="toneClass[line.tone]">
              {{ line.text }}
            </div>
            <span class="inline-block w-[6px] h-[13px] bg-[#d4a85a] animate-glow-pulse ml-0.5 align-middle" />

            <!-- 扫描线 -->
            <div class="absolute inset-0 pointer-events-none opacity-15">
              <div class="h-px w-full bg-gradient-to-r from-transparent via-[#5fa8d3]/50 to-transparent animate-scan-line" />
            </div>

            <!-- 底部波形可视化 -->
            <div class="absolute bottom-0 left-0 right-0 h-[50px] flex items-end gap-[1px] px-4 pb-0.5">
              <div v-for="(h, i) in waveformBars" :key="i"
                   class="flex-1 rounded-t-[1px]"
                   :style="{
                     height: `${h * 100}%`,
                     background: `linear-gradient(to top, rgba(95,168,211,${0.05 + h * 0.25}), rgba(95,168,211,${0.01 + h * 0.06}))`,
                   }" />
            </div>
          </div>
        </div>

        <!-- 右侧：模型输出流 -->
        <div class="md:w-[260px] border-t md:border-t-0 md:border-l border-[#1a2a3a] bg-[rgba(4,8,18,0.6)] px-4 py-3 flex flex-col">
          <!-- 标题 -->
          <div class="flex items-center justify-between pb-2 mb-2 border-b border-[#1a2a3a]">
            <span class="font-mono text-[10px] text-[#6a8a9a] tracking-wide">模型输出流 / streaming</span>
            <span class="w-1.5 h-1.5 rounded-full bg-[#3dd4a8] animate-glow-pulse" />
          </div>

          <!-- 检查项列表 -->
          <div class="flex flex-col gap-2 flex-1">
            <div v-for="item in streamLines" :key="item.label"
                 class="flex items-baseline text-[11px] font-mono">
              <span class="text-[#5a7a8a] shrink-0">{{ item.label }}</span>
              <span class="text-[#2a3a4a] mx-1 shrink-0 whitespace-pre">{{ dotCount(item.label) }}</span>
              <span class="font-semibold shrink-0"
                    :class="{
                      'text-[#3dd4a8]': item.tone === 'success',
                      'text-[#f0b85a]': item.tone === 'warning',
                      'text-[#d4a85a]': item.tone === 'score',
                    }">{{ item.value }}</span>
            </div>
          </div>

          <!-- 底部合规信息 -->
          <div class="mt-3 pt-2 border-t border-[#1a2a3a] flex flex-col gap-1">
            <div class="flex items-center justify-between text-[10px] font-mono">
              <span class="text-[#5a7a8a]">compliance</span>
              <span class="text-[#3dd4a8] font-semibold">passed <span class="text-[12px]">✓</span></span>
            </div>
            <div class="flex items-center justify-between text-[10px] font-mono">
              <span class="text-[#5a7a8a]">risk level</span>
              <span class="text-[#5eead4]">low</span>
            </div>
            <div class="flex items-center justify-between text-[10px] font-mono">
              <span class="text-[#5a7a8a]">suggestion</span>
              <span class="text-[#f0b85a]">优化条款 2 处</span>
            </div>
            <div class="mt-0.5 font-mono text-[9px] text-[#3a4a5a]">trace id: JR202505021238</div>
          </div>
        </div>
      </div>

      <!-- 底部装饰线 -->
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4a85a]/15 to-transparent" />
    </div>

    <!-- 底部指标条 -->
    <div class="flex items-center gap-0 rounded-lg border border-[#1a2a3a]/60 bg-[rgba(2,4,10,0.9)] overflow-hidden">
      <!-- 请求数 -->
      <div class="flex items-center gap-2.5 px-4 py-2.5 flex-1 border-r border-[#1a2a3a]/60">
        <div class="w-7 h-7 rounded-full border border-[#2a3a5a] bg-[rgba(10,16,32,0.6)] flex items-center justify-center shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a89880" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
          </svg>
        </div>
        <div class="flex flex-col">
          <span class="font-sans-cn text-[9px] text-[#6a7080] tracking-wide leading-none">请求数 / 今日</span>
          <span class="font-mono text-[18px] font-bold leading-tight text-[#c8c0b0]">12,842</span>
        </div>
      </div>

      <!-- 拦截风险 -->
      <div class="flex items-center gap-2.5 px-4 py-2.5 flex-1 border-r border-[#1a2a3a]/60">
        <div class="w-7 h-7 rounded-full border border-[#b83838]/60 bg-[rgba(184,56,56,0.08)] flex items-center justify-center shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e84a4a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
        </div>
        <div class="flex flex-col">
          <span class="font-sans-cn text-[9px] text-[#6a7080] tracking-wide leading-none">拦截风险 / 今日</span>
          <span class="font-mono text-[18px] font-bold leading-tight text-[#e84a4a]">327</span>
        </div>
      </div>

      <!-- 合规通过率 -->
      <div class="flex items-center gap-2.5 px-4 py-2.5 flex-1 border-r border-[#1a2a3a]/60">
        <div class="w-7 h-7 rounded-full border border-[#1a8e6e]/60 bg-[rgba(61,212,168,0.06)] flex items-center justify-center shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3dd4a8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <div class="flex flex-col">
          <span class="font-sans-cn text-[9px] text-[#6a7080] tracking-wide leading-none">合规通过率</span>
          <span class="font-mono text-[18px] font-bold leading-tight text-[#3dd4a8]">97.3%</span>
        </div>
      </div>

      <!-- 平均响应 -->
      <div class="flex items-center gap-2.5 px-4 py-2.5 flex-1">
        <div class="w-7 h-7 rounded-full border border-[#a8843f]/60 bg-[rgba(212,168,90,0.06)] flex items-center justify-center shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4a85a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        </div>
        <div class="flex flex-col">
          <span class="font-sans-cn text-[9px] text-[#6a7080] tracking-wide leading-none">平均响应</span>
          <span class="font-mono text-[18px] font-bold leading-tight text-[#d4a85a]">1.28s</span>
        </div>
      </div>
    </div>
  </div>
</template>
