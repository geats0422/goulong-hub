<script setup lang="ts">
import SectionTitle from './SectionTitle.vue'
import SvgIcon from './SvgIcon.vue'

const wenhengWizards = [
  { name: '招标 Wizard', progress: 85, color: 'bg-brand-azure' },
  { name: '投标 Wizard', progress: 72, color: 'bg-brand-jade' },
  { name: '合同 Wizard', progress: 90, color: 'bg-brand-gold' },
]

const miniCards = [
  { title: '句龙 · 枢衡', role: '统一编排工程合规 Agent · 规划中', tone: 'gold', icon: 'cube-core' },
  { title: 'MCP / Skills / CLI', role: '已上线产品支持第三方智能体调用', tone: 'azure', icon: 'layers' },
  { title: '负面清单引擎', role: '持续更新 · 精准拦截', tone: 'vermilion', icon: 'shield-error' },
  { title: '句龙 · Core', role: '面向本地部署的硬件节点 · 规划中', tone: 'gold', icon: 'cube-server' },
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
        subtitle="文衡与照胆已上线，支持 MCP / Skills / CLI 被第三方智能体调用"
      />

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10">
        <!-- 文衡（主内） -->
        <div class="rounded-xl border border-hairline bg-surface p-6 md:p-8 card-glow-gold animate-fade-in-up" style="animation-delay: 0.1s">
          <header class="flex flex-wrap items-baseline gap-3 mb-6">
            <h3 class="font-serif-cn text-2xl md:text-3xl font-semibold text-ink">文衡</h3>
            <span class="font-sans-cn text-xs text-brand-gold tracking-wider">（主内）</span>
            <span class="font-sans-cn text-sm text-ink-mute">智能合规文档分析平台，覆盖招标文件编写、投标方案编制、合同审查全链路，内置 28 部招投标法律法规知识库</span>
          </header>

          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-lg border border-hairline bg-canvas-soft/50 p-4">
              <div class="flex items-center gap-2 mb-3">
                <SvgIcon name="chart-gantt" :size="18" color="#5fa8d3" />
                <span class="font-sans-cn text-xs text-ink-soft">三套 Wizard</span>
              </div>
              <div class="flex flex-col gap-3">
                <div v-for="w in wenhengWizards" :key="w.name" class="flex flex-col gap-1.5">
                  <div class="flex items-center justify-between">
                    <span class="font-sans-cn text-[11px] text-ink-soft">{{ w.name }}</span>
                    <span class="font-mono text-[10px] text-ink-mute">{{ w.progress }}%</span>
                  </div>
                  <div class="h-2 rounded-pill bg-hairline-soft overflow-hidden">
                    <div class="h-full rounded-pill transition-all duration-500" :class="w.color" :style="{ width: `${w.progress}%` }" />
                  </div>
                </div>
              </div>
            </div>

            <div class="rounded-lg border border-hairline bg-canvas-soft/50 p-4">
              <div class="flex items-center gap-2 mb-3">
                <SvgIcon name="chart-network" :size="18" color="#3dd4a8" />
                <span class="font-sans-cn text-xs text-ink-soft">资质管理</span>
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

            <div class="col-span-2 rounded-lg border border-hairline bg-canvas-soft/50 p-4">
              <div class="flex items-center gap-2 mb-3">
                <SvgIcon name="layers" :size="18" color="#d4a85a" />
                <span class="font-sans-cn text-xs text-ink-soft">知识库 · 28 部招投标法律法规</span>
              </div>
              <div class="grid grid-cols-4 gap-2 text-[11px]">
                <div class="flex items-center gap-1.5"><div class="w-1.5 h-1.5 rounded-full bg-brand-jade" /><span class="text-ink-soft">向量检索</span></div>
                <div class="flex items-center gap-1.5"><div class="w-1.5 h-1.5 rounded-full bg-brand-azure" /><span class="text-ink-soft">PDF/DOCX 解析</span></div>
                <div class="flex items-center gap-1.5"><div class="w-1.5 h-1.5 rounded-full bg-brand-gold" /><span class="text-ink-soft">LLM 合规审查</span></div>
                <div class="flex items-center gap-1.5"><div class="w-1.5 h-1.5 rounded-full bg-brand-vermilion" /><span class="text-ink-soft">到期预警</span></div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3 mt-5">
            <button class="flex items-center gap-2 px-3 py-1.5 rounded-md border border-hairline bg-canvas-soft text-xs text-ink-soft hover:border-brand-gold/50 transition-colors">
              <SvgIcon name="chart-gantt" :size="14" color="#5fa8d3" /> 招标 Wizard
            </button>
            <button class="flex items-center gap-2 px-3 py-1.5 rounded-md border border-hairline bg-canvas-soft text-xs text-ink-soft hover:border-brand-gold/50 transition-colors">
              <SvgIcon name="chart-gantt" :size="14" color="#3dd4a8" /> 投标 Wizard
            </button>
            <button class="flex items-center gap-2 px-3 py-1.5 rounded-md border border-hairline bg-canvas-soft text-xs text-ink-soft hover:border-brand-gold/50 transition-colors">
              <SvgIcon name="chart-gantt" :size="14" color="#d4a85a" /> 合同 Wizard
            </button>
            <button class="flex items-center gap-2 px-3 py-1.5 rounded-md border border-hairline bg-canvas-soft text-xs text-ink-soft hover:border-brand-gold/50 transition-colors">
              <SvgIcon name="layers" :size="14" color="#d4a85a" /> 知识库检索
            </button>
            <a href="https://wenheng.goulong-ai.cn" target="_blank" rel="noopener noreferrer" class="ml-auto font-sans-cn text-sm text-brand-gold hover:text-brand-gold-soft transition-colors">进入「文衡」着陆页 →</a>
          </div>
        </div>

        <!-- 照胆（主外） -->
        <div class="rounded-xl border border-hairline bg-surface p-6 md:p-8 card-glow-gold animate-fade-in-up" style="animation-delay: 0.15s">
          <header class="flex flex-wrap items-baseline gap-3 mb-6">
            <h3 class="font-serif-cn text-2xl md:text-3xl font-semibold text-ink">照胆</h3>
            <span class="font-sans-cn text-xs text-brand-gold tracking-wider">（主外）</span>
            <span class="font-sans-cn text-sm text-ink-mute">工程文档智能体检平台，上传 Word/PDF/Excel 自动识别类型、解析正文、对照法规知识库输出结构化审查报告，支持 PDF 导出与历史记录回溯</span>
          </header>

          <div class="grid grid-cols-2 gap-4">
            <div class="rounded-lg border border-hairline bg-canvas-soft/50 p-4">
              <div class="flex items-center gap-2 mb-3">
                <SvgIcon name="file-contract" :size="18" color="#5fa8d3" />
                <span class="font-sans-cn text-xs text-ink-soft">文档解析</span>
              </div>
              <div class="flex flex-col gap-2 text-[11px]">
                <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-brand-azure" /><span class="text-ink-soft">DOCX 直接读取</span></div>
                <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-brand-azure" /><span class="text-ink-soft">PDF/PPTX/XLSX</span></div>
                <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-brand-azure" /><span class="text-ink-soft">MarkItDown 转换</span></div>
                <div class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-brand-azure" /><span class="text-ink-soft">噪声清理层</span></div>
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
                <span class="font-sans-cn text-xs text-ink-soft">多 Agent 审查流水线</span>
              </div>
              <div class="grid grid-cols-3 gap-3 text-[11px]">
                <div class="flex flex-col gap-1">
                  <span class="text-brand-azure font-medium">法规分析师</span>
                  <span class="text-ink-mute text-[10px]">匹配法规依据</span>
                </div>
                <div class="flex flex-col gap-1">
                  <span class="text-brand-jade font-medium">合规检查员</span>
                  <span class="text-ink-mute text-[10px]">识别风险违禁词</span>
                </div>
                <div class="flex flex-col gap-1">
                  <span class="text-brand-gold font-medium">主协调员</span>
                  <span class="text-ink-mute text-[10px]">汇总结构化报告</span>
                </div>
              </div>
            </div>

            <div class="col-span-2 rounded-lg border border-hairline bg-canvas-soft/50 p-4">
              <div class="flex items-center gap-2 mb-3">
                <SvgIcon name="layers" :size="18" color="#3dd4a8" />
                <span class="font-sans-cn text-xs text-ink-soft">知识库 · PageIndex 索引</span>
              </div>
              <div class="grid grid-cols-4 gap-2 text-[11px]">
                <div class="flex items-center gap-1.5"><div class="w-1.5 h-1.5 rounded-full bg-brand-jade" /><span class="text-ink-soft">章节智能切分</span></div>
                <div class="flex items-center gap-1.5"><div class="w-1.5 h-1.5 rounded-full bg-brand-azure" /><span class="text-ink-soft">场景化召回</span></div>
                <div class="flex items-center gap-1.5"><div class="w-1.5 h-1.5 rounded-full bg-brand-gold" /><span class="text-ink-soft">通用法规库</span></div>
                <div class="flex items-center gap-1.5"><div class="w-1.5 h-1.5 rounded-full bg-brand-vermilion" /><span class="text-ink-soft">私有知识库</span></div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3 mt-5">
            <button class="flex items-center gap-2 px-3 py-1.5 rounded-md border border-hairline bg-canvas-soft text-xs text-ink-soft hover:border-brand-gold/50 transition-colors">
              <SvgIcon name="file-contract" :size="14" color="#5fa8d3" /> 文档解析
            </button>
            <button class="flex items-center gap-2 px-3 py-1.5 rounded-md border border-hairline bg-canvas-soft text-xs text-ink-soft hover:border-brand-gold/50 transition-colors">
              <SvgIcon name="shield-check" :size="14" color="#3dd4a8" /> 智能审查
            </button>
            <button class="flex items-center gap-2 px-3 py-1.5 rounded-md border border-hairline bg-canvas-soft text-xs text-ink-soft hover:border-brand-gold/50 transition-colors">
              <SvgIcon name="chart-diff" :size="14" color="#d4a85a" /> 报告输出
            </button>
            <button class="flex items-center gap-2 px-3 py-1.5 rounded-md border border-hairline bg-canvas-soft text-xs text-ink-soft hover:border-brand-gold/50 transition-colors">
              <SvgIcon name="layers" :size="14" color="#e84a4a" /> 知识库管理
            </button>
            <a href="https://zhaodan.goulong-ai.cn" target="_blank" rel="noopener noreferrer" class="ml-auto font-sans-cn text-sm text-brand-gold hover:text-brand-gold-soft transition-colors">进入「照胆」着陆页 →</a>
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
