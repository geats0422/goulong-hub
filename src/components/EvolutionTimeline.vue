<script setup lang="ts">
import SectionTitle from './SectionTitle.vue'
import SvgIcon from './SvgIcon.vue'

interface ProductStage {
  id: string
  phase: string
  title: string
  status: string
  icon: string
  items: string[]
}

const currentProducts: ProductStage[] = [
  {
    id: 'wenheng',
    phase: '当前阶段',
    title: '句龙 · 文衡',
    status: '已上线',
    icon: 'file-contract',
    items: ['工程合规文档编制智能体', '合同与招投标文件编制', '支持 MCP / Skills / CLI'],
  },
  {
    id: 'zhaodan',
    phase: '当前阶段',
    title: '句龙 · 照胆',
    status: '已上线',
    icon: 'shield-check',
    items: ['工程合同提交系统前初审智能体', '提交前风险初审', '支持 MCP / Skills / CLI'],
  },
  {
    id: 'agent-access',
    phase: '当前阶段',
    title: '第三方智能体调用',
    status: '已支持',
    icon: 'terminal',
    items: ['已上线产品可被 Agent 调用', 'API Key 鉴权', 'MCP / Skills / CLI 接入'],
  },
]

const nextProducts: ProductStage[] = [
  {
    id: 'shuheng',
    phase: '下一阶段',
    title: '句龙 · 枢衡',
    status: '规划中',
    icon: 'cube-core',
    items: ['工程合规智能体系统', '整合所有 Agent 产品能力', '统一编排、调用与治理'],
  },
  {
    id: 'fayuan',
    phase: '下一阶段',
    title: '句龙 · 法渊',
    status: '规划中',
    icon: 'layers',
    items: ['工程合规行业知识库', '法规、规则与案例沉淀', '集成到枢衡能力体系'],
  },
  {
    id: 'guinie',
    phase: '下一阶段',
    title: '句龙 · 圭臬',
    status: '规划中',
    icon: 'shield-alert',
    items: ['招投标审查智能体', '枢衡上线后推进', '能力集成到枢衡'],
  },
  {
    id: 'fujie',
    phase: '下一阶段',
    title: '句龙 · 符节',
    status: '规划中',
    icon: 'file-approval',
    items: ['资质执照管理智能体', '枢衡上线后推进', '能力集成到枢衡'],
  },
]

const futureProducts: ProductStage[] = [
  {
    id: 'suanjing',
    phase: '未来阶段',
    title: '句龙 · 算经',
    status: '规划中',
    icon: 'chart-gauge',
    items: ['经营核算 Agent 群', '合同结算、产值计算', '经营月报与量差核算'],
  },
  {
    id: 'core',
    phase: '未来阶段',
    title: '句龙 · Core',
    status: '规划中',
    icon: 'cube-server',
    items: ['面向本地部署的句龙硬件节点', '搭载句龙 · 枢衡', '敬请期待'],
  },
]

const groups = [
  { title: '当前阶段', desc: '文衡与照胆已上线，并支持第三方智能体调用。', products: currentProducts },
  { title: '下一阶段', desc: '以枢衡为统一智能体系统，继续沉淀法渊、圭臬、符节等工程合规能力。', products: nextProducts },
  { title: '未来阶段', desc: '扩展经营核算 Agent 群，并规划面向本地部署的硬件节点。', products: futureProducts },
]

const timeline = [
  { phase: '当前阶段', title: '文衡 / 照胆上线', status: '已上线' },
  { phase: '当前阶段', title: 'MCP / Skills / CLI', status: '已支持' },
  { phase: '下一阶段', title: '枢衡 / 法渊', status: '规划中' },
  { phase: '下一阶段', title: '圭臬 / 符节', status: '规划中' },
  { phase: '未来阶段', title: '算经 / Core', status: '规划中' },
]
</script>

<template>
  <section class="py-section-lg">
    <div class="container-narrow">
      <SectionTitle
        eyebrow="产品演进路径 · 工程合规智能体操作系统"
        title="产品演进路径"
        subtitle="从已上线的文衡、照胆，到枢衡、法渊、圭臬、符节、算经与 Core，逐步构建工程合规智能体操作系统。"
      />

      <div class="mt-10 flex flex-col gap-8">
        <div class="rounded-2xl border border-hairline bg-surface p-5 animate-fade-in-up md:p-6">
          <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
            <div v-for="group in groups" :key="group.title" class="flex flex-col gap-4 rounded-xl border border-hairline-soft bg-canvas-soft/40 p-4">
              <div>
                <div class="mb-1 flex items-center gap-2">
                  <span class="h-1.5 w-1.5 rounded-pill bg-brand-gold shadow-glow-gold-sm" />
                  <h3 class="font-serif-cn text-base font-semibold text-brand-gold">{{ group.title }}</h3>
                </div>
                <p class="font-sans-cn text-[12px] leading-relaxed text-ink-mute">{{ group.desc }}</p>
              </div>

              <div class="flex flex-col gap-3">
                <div
                  v-for="product in group.products"
                  :key="product.id"
                  class="rounded-lg border border-hairline-soft bg-[#0b1428]/80 p-3"
                >
                  <div class="mb-2 flex items-start justify-between gap-3">
                    <div class="flex items-center gap-2">
                      <SvgIcon :name="product.icon" :size="16" color="#d4a85a" />
                      <span class="font-sans-cn text-sm font-medium text-ink-soft">{{ product.title }}</span>
                    </div>
                    <span
                      class="shrink-0 rounded-full border px-2 py-0.5 font-mono text-[10px]"
                      :class="product.status === '已上线' || product.status === '已支持' ? 'border-brand-jade/35 text-brand-jade' : 'border-brand-gold/35 text-brand-gold'"
                    >
                      {{ product.status }}
                    </span>
                  </div>
                  <ul class="flex flex-col gap-1">
                    <li v-for="item in product.items" :key="item" class="border-l border-hairline-soft pl-3 font-sans-cn text-[11px] leading-relaxed text-ink-mute">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative py-6 animate-fade-in-up" style="animation-delay: 0.15s">
          <svg class="absolute inset-0 h-full w-full pointer-events-none" viewBox="0 0 640 140" preserveAspectRatio="none" fill="none">
            <defs>
              <linearGradient id="snakeLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#3dd4a8" />
                <stop offset="45%" stop-color="#5fa8d3" />
                <stop offset="100%" stop-color="#d4a85a" />
              </linearGradient>
            </defs>
            <path
              d="M 45 42 Q 145 20, 230 78 Q 300 126, 380 68 Q 470 10, 595 76"
              stroke="url(#snakeLine)"
              stroke-width="2.5"
              fill="none"
              stroke-dasharray="8 10"
              class="animate-data-stream"
            />
          </svg>

          <div class="relative z-10 grid grid-cols-2 gap-4 md:grid-cols-5">
            <div
              v-for="(s, i) in timeline"
              :key="`${s.phase}-${s.title}`"
              class="flex flex-col items-center gap-2"
              :class="i % 2 === 0 ? 'md:-translate-y-1' : 'md:translate-y-10'"
            >
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                <polygon points="28,4 48,15 48,41 28,52 8,41 8,15" fill="rgba(212,168,90,0.1)" stroke="#d4a85a" stroke-width="1.5" />
                <circle cx="28" cy="28" r="4" fill="#f0d198" class="animate-glow-pulse" />
              </svg>
              <div class="flex flex-col items-center">
                <span class="font-mono text-[10px] text-ink-mute">{{ s.phase }}</span>
                <span class="font-sans-cn text-center text-[11px] leading-tight text-ink-soft">{{ s.title }}</span>
                <span class="mt-1 font-mono text-[10px] text-brand-gold">{{ s.status }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-6 animate-fade-in-up" style="animation-delay: 0.25s">
          <div class="flex items-center gap-2"><SvgIcon name="shield-check" :size="16" color="#3dd4a8" /><span class="font-sans-cn text-xs text-ink-soft">已上线产品</span></div>
          <div class="flex items-center gap-2"><SvgIcon name="terminal" :size="16" color="#5fa8d3" /><span class="font-sans-cn text-xs text-ink-soft">Agent 调用</span></div>
          <div class="flex items-center gap-2"><SvgIcon name="layers" :size="16" color="#d4a85a" /><span class="font-sans-cn text-xs text-ink-soft">规划中能力</span></div>
          <div class="flex items-center gap-2"><SvgIcon name="cube-server" :size="16" color="#e84a4a" /><span class="font-sans-cn text-xs text-ink-soft">本地部署敬请期待</span></div>
        </div>
      </div>
    </div>
  </section>
</template>
