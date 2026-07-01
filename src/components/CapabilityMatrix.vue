<script setup lang="ts">
import SectionTitle from './SectionTitle.vue'
import SvgIcon from './SvgIcon.vue'

const wenzhengGantt = [
  { label: 'W1', phases: [{ color: 'bg-brand-azure', w: '22%' }, { color: 'bg-brand-jade', w: '42%' }] },
  { label: 'W2', phases: [{ color: 'bg-brand-azure', w: '18%' }, { color: 'bg-brand-jade', w: '50%' }] },
  { label: 'W3', phases: [{ color: 'bg-brand-azure', w: '32%' }, { color: 'bg-brand-jade', w: '38%' }] },
  { label: 'W4', phases: [{ color: 'bg-brand-azure', w: '12%' }, { color: 'bg-brand-jade', w: '58%' }] },
]

const zhaodanChecks = [
  { label: '国家标准', done: true },
  { label: '行业标准', done: true },
  { label: '企业标准', done: true },
  { label: '法规要求', done: true },
]

const riskWarnings = [
  { label: '条款缺失', level: 'high' },
  { label: '负面清单命中', level: 'high' },
  { label: '格式不一致', level: 'mid' },
  { label: '数据异常', level: 'low' },
]

const miniCards = [
  { title: '句龙 Core', role: '企业审批前 AI Agent · 初审服务层', tone: 'gold', icon: 'cube-core' },
  { title: 'Skill / MCP / CLI', role: '能力插件化 · 生态可扩展', tone: 'azure', icon: 'layers' },
  { title: '负面清单引擎', role: '持续更新 · 精准拦截', tone: 'vermilion', icon: 'shield-error' },
  { title: '可私有化部署', role: '数据不出域 · 安全可控', tone: 'gold', icon: 'cube-server' },
]

const toneRing: Record<string, string> = {
  gold: 'border-brand-gold/40 card-glow-gold hover:border-brand-gold/70',
  azure: 'border-brand-azure/40 hover:border-brand-azure/70 hover:shadow-[0_0_20px_rgba(95,168,211,0.15)]',
  vermilion: 'border-brand-vermilion/40 card-glow-vermilion hover:border-brand-vermilion/70',
}
</script>

<template>
  <section class="py-section-lg" id="capability">
    <div class="container-narrow">
      <SectionTitle
        eyebrow="核心能力矩阵 · Bento Grid · 降维打击"
        title="核心能力矩阵"
        subtitle="句龙 Core · 六大引擎协同驱动，构建工程合规智能底座"
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <!-- 文衡（主内） -->
        <div class="rounded-xl border border-hairline bg-surface p-6 md:p-8 card-glow-gold animate-fade-in-up" style="animation-delay: 0.1s">
          <header class="flex flex-wrap items-baseline gap-3 mb-6">
            <h3 class="font-serif-cn text-2xl md:text-3xl font-semibold text-ink">文衡</h3>
            <span class="font-sans-cn text-xs text-brand-gold tracking-wider">（主内）</span>
            <span class="font-sans-cn text-sm text-ink-mute">生成与规划引擎，负责方案编排与计划生成</span>
          </header>

          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-lg border border-hairline bg-canvas-soft/50 p-4">
              <div class="flex items-center gap-2 mb-3">
                <SvgIcon name="chart-gantt" :size="18" color="#5fa8d3" />
                <span class="font-sans-cn text-xs text-ink-soft">项目甘特图</span>
              </div>
              <div class="flex flex-col gap-2">
                <div v-for="g in wenzhengGantt" :key="g.label" class="flex items-center gap-2">
                  <span class="font-mono text-[10px] text-ink-faint w-5">{{ g.label }}</span>
                  <div class="flex-1 h-2.5 rounded-pill bg-hairline-soft overflow-hidden flex">
                    <div v-for="(p, i) in g.phases" :key="i" class="h-full" :class="p.color" :style="{ width: p.w }" />
                  </div>
                </div>
              </div>
              <div class="flex items-center gap-4 mt-3 text-[10px] text-ink-mute">
                <div class="flex items-center gap-1"><div class="w-2 h-2 rounded-pill bg-brand-azure" /><span>计划</span></div>
                <div class="flex items-center gap-1"><div class="w-2 h-2 rounded-pill bg-brand-jade" /><span>进行中</span></div>
                <div class="flex items-center gap-1"><div class="w-2 h-2 rounded-pill bg-brand-gold" /><span>完成</span></div>
              </div>
            </div>

            <div class="rounded-lg border border-hairline bg-canvas-soft/50 p-4">
              <div class="flex items-center gap-2 mb-3">
                <SvgIcon name="chart-network" :size="18" color="#3dd4a8" />
                <span class="font-sans-cn text-xs text-ink-soft">依赖网络图</span>
              </div>
              <div class="relative h-24">
                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 160 96" fill="none">
                  <line x1="30" y1="24" x2="80" y2="24" stroke="#2a3658" stroke-width="1.5" />
                  <line x1="30" y1="24" x2="80" y2="72" stroke="#2a3658" stroke-width="1.5" />
                  <line x1="80" y1="24" x2="130" y2="48" stroke="#2a3658" stroke-width="1.5" />
                  <line x1="80" y1="72" x2="130" y2="48" stroke="#2a3658" stroke-width="1.5" />
                  <circle cx="30" cy="24" r="9" fill="#5fa8d3" />
                  <circle cx="80" cy="24" r="9" fill="#5fa8d3" />
                  <circle cx="80" cy="72" r="9" fill="#5fa8d3" />
                  <circle cx="130" cy="48" r="9" fill="#3dd4a8" />
                  <text x="30" y="28" text-anchor="middle" fill="#050810" font-size="9" font-weight="bold">A</text>
                  <text x="80" y="28" text-anchor="middle" fill="#050810" font-size="9" font-weight="bold">B</text>
                  <text x="80" y="76" text-anchor="middle" fill="#050810" font-size="9" font-weight="bold">C</text>
                  <text x="130" y="52" text-anchor="middle" fill="#050810" font-size="9" font-weight="bold">E</text>
                </svg>
              </div>
            </div>
          </div>

          <div class="flex items-center gap-3 mt-5">
            <button class="flex items-center gap-2 px-3 py-1.5 rounded-md border border-hairline bg-canvas-soft text-xs text-ink-soft hover:border-brand-gold/50 transition-colors">
              <SvgIcon name="chart-gantt" :size="14" color="#d4a85a" /> 计划生成
            </button>
            <button class="flex items-center gap-2 px-3 py-1.5 rounded-md border border-hairline bg-canvas-soft text-xs text-ink-soft hover:border-brand-gold/50 transition-colors">
              <SvgIcon name="chart-network" :size="14" color="#d4a85a" /> 方案编排
            </button>
            <a href="#" class="ml-auto font-sans-cn text-sm text-brand-gold hover:text-brand-gold-soft transition-colors">进入「文衡」着陆页 →</a>
          </div>
        </div>

        <!-- 照胆（主外） -->
        <div class="rounded-xl border border-hairline bg-surface p-6 md:p-8 card-glow-gold animate-fade-in-up" style="animation-delay: 0.15s">
          <header class="flex flex-wrap items-baseline gap-3 mb-6">
            <h3 class="font-serif-cn text-2xl md:text-3xl font-semibold text-ink">照胆</h3>
            <span class="font-sans-cn text-xs text-brand-gold tracking-wider">（主外）</span>
            <span class="font-sans-cn text-sm text-ink-mute">合规与审核引擎，负责标准对齐与合规把关</span>
          </header>

          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-lg border border-hairline bg-canvas-soft/50 p-4">
              <div class="flex items-center gap-2 mb-3">
                <SvgIcon name="check-circle" :size="18" color="#3dd4a8" />
                <span class="font-sans-cn text-xs text-ink-soft">标准对齐</span>
              </div>
              <div class="flex flex-col gap-2">
                <div v-for="c in zhaodanChecks" :key="c.label" class="flex items-center gap-2 text-xs">
                  <SvgIcon name="check-circle" :size="14" color="#3dd4a8" />
                  <span class="text-ink-soft">{{ c.label }}</span>
                </div>
              </div>
            </div>

            <div class="rounded-lg border border-hairline bg-canvas-soft/50 p-4">
              <div class="flex items-center gap-2 mb-3">
                <SvgIcon name="chart-gauge" :size="18" color="#d4a85a" />
                <span class="font-sans-cn text-xs text-ink-soft">风险评分</span>
              </div>
              <div class="flex flex-col items-center gap-2 py-1">
                <div class="relative w-24 h-24">
                  <svg viewBox="0 0 100 100" class="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#2a3658" stroke-width="8" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#d4a85a" stroke-width="8" stroke-dasharray="264" stroke-dashoffset="21" stroke-linecap="round" />
                  </svg>
                  <span class="absolute inset-0 flex items-center justify-center font-mono text-2xl text-brand-gold font-semibold text-glow-gold">92</span>
                </div>
                <span class="font-mono text-[10px] text-brand-jade">风险等级 · 低</span>
              </div>
            </div>

            <div class="col-span-2 rounded-lg border border-hairline bg-canvas-soft/50 p-4">
              <div class="flex items-center gap-2 mb-3">
                <SvgIcon name="shield-alert" :size="18" color="#e84a4a" />
                <span class="font-sans-cn text-xs text-ink-soft">风险提示</span>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <div v-for="r in riskWarnings" :key="r.label" class="flex items-center gap-2 text-xs">
                  <SvgIcon name="warning-triangle" :size="14" color="#e84a4a" />
                  <span class="text-ink-soft">{{ r.label }}</span>
                </div>
              </div>
            </div>

            <div class="col-span-2 rounded-lg border border-hairline bg-canvas-soft/50 p-4">
              <div class="flex items-center gap-2 mb-3">
                <SvgIcon name="chart-diff" :size="18" color="#5fa8d3" />
                <span class="font-sans-cn text-xs text-ink-soft">文档对比</span>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <div class="text-[10px] text-ink-mute mb-2 flex items-center gap-1">
                    <span>版本 A</span>
                    <span class="w-1.5 h-1.5 rounded-pill bg-brand-vermilion" />
                  </div>
                  <div class="flex flex-col gap-1">
                    <div v-for="w in [3, 7, 5, 9, 4, 8, 6]" :key="w" class="h-1 rounded-pill bg-brand-azure/40" :style="{ width: `${w * 10}%` }" />
                  </div>
                </div>
                <div>
                  <div class="text-[10px] text-ink-mute mb-2 flex items-center gap-1">
                    <span>版本 B</span>
                    <span class="w-1.5 h-1.5 rounded-pill bg-brand-jade" />
                  </div>
                  <div class="flex flex-col gap-1">
                    <div v-for="w in [4, 6, 8, 7, 5, 9, 7]" :key="w" class="h-1 rounded-pill bg-brand-jade/40" :style="{ width: `${w * 10}%` }" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3 mt-5">
            <button class="flex items-center gap-2 px-3 py-1.5 rounded-md border border-hairline bg-canvas-soft text-xs text-ink-soft hover:border-brand-gold/50 transition-colors">
              <SvgIcon name="check-circle" :size="14" color="#d4a85a" /> 标准对齐
            </button>
            <button class="flex items-center gap-2 px-3 py-1.5 rounded-md border border-hairline bg-canvas-soft text-xs text-ink-soft hover:border-brand-gold/50 transition-colors">
              <SvgIcon name="shield-check" :size="14" color="#d4a85a" /> 合规把关
            </button>
            <button class="flex items-center gap-2 px-3 py-1.5 rounded-md border border-hairline bg-canvas-soft text-xs text-ink-soft hover:border-brand-gold/50 transition-colors">
              <SvgIcon name="shield-alert" :size="14" color="#d4a85a" /> 风险提示
            </button>
            <button class="flex items-center gap-2 px-3 py-1.5 rounded-md border border-hairline bg-canvas-soft text-xs text-ink-soft hover:border-brand-gold/50 transition-colors">
              <SvgIcon name="building-contract" :size="14" color="#d4a85a" /> 前置审核
            </button>
            <a href="#" class="ml-auto font-sans-cn text-sm text-brand-gold hover:text-brand-gold-soft transition-colors">进入「照胆」着陆页 →</a>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
        <div
          v-for="(card, i) in miniCards"
          :key="card.title"
          class="group rounded-xl border bg-surface p-5 flex flex-col gap-3 transition-all duration-300 animate-fade-in-up"
          :class="toneRing[card.tone]"
          :style="{ animationDelay: `${0.2 + i * 0.06}s` }"
        >
          <div class="h-20 flex items-center justify-center rounded-lg bg-canvas-soft/40 border border-hairline-soft mb-1 group-hover:border-brand-gold/30 transition-colors">
            <SvgIcon
              :name="card.icon"
              :size="48"
              :color="card.tone === 'gold' ? '#d4a85a' : card.tone === 'azure' ? '#5fa8d3' : '#e84a4a'"
              class="drop-shadow-[0_0_12px_rgba(212,168,90,0.35)]"
            />
          </div>
          <h4 class="font-serif-cn text-lg font-semibold text-ink group-hover:text-brand-gold transition-colors">{{ card.title }}</h4>
          <p class="font-sans-cn text-xs text-ink-mute leading-relaxed">{{ card.role }}</p>
          <a href="#" class="mt-auto font-sans-cn text-xs text-brand-gold hover:text-brand-gold-soft transition-colors">了解更多 →</a>
        </div>
      </div>
    </div>
  </section>
</template>
