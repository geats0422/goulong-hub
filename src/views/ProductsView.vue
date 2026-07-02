<script setup lang="ts">
import { useRouter } from 'vue-router'
import SvgIcon from '../components/SvgIcon.vue'
import Button from '../components/Button.vue'

const router = useRouter()
const goHome = (hash: string) => router.push({ path: '/', hash })

interface Product {
  id: string
  name: string
  pinyin: string
  phase: string
  status: 'live' | 'planned'
  statusLabel: string
  tagline: string
  desc: string
  icon: string
  accent: 'azure' | 'jade' | 'gold' | 'vermilion'
  features: string[]
  link?: { label: string; href: string }
}

const liveProducts: Product[] = [
  {
    id: 'wenheng',
    name: '文衡',
    pinyin: 'WENHENG',
    phase: '当前阶段',
    status: 'live',
    statusLabel: '已上线',
    tagline: '工程合规文档编制智能体',
    desc: '覆盖合同与招投标文件编制全链路，内置 28 部招投标法律法规知识库，提供招标 Wizard、投标 Wizard、合同 Wizard 三套生成式能力。',
    icon: 'file-contract',
    accent: 'azure',
    features: ['招标 / 投标 / 合同编制', '28 部法规知识库', 'PDF / DOCX 解析', 'LLM 合规审查', '资质管理与到期预警'],
    link: { label: '进入文衡着陆页', href: 'https://wenheng.goulong-ai.cn' },
  },
  {
    id: 'zhaodan',
    name: '照胆',
    pinyin: 'ZHAODAN',
    phase: '当前阶段',
    status: 'live',
    statusLabel: '已上线',
    tagline: '工程合同提交系统前初审智能体',
    desc: '在合同进入企业提交系统前完成风险初审，上传 Word / PDF / Excel 自动识别、解析正文，对照法规与违禁词输出结构化审查报告。',
    icon: 'shield-check',
    accent: 'jade',
    features: ['提交前风险初审', '多 Agent 审查流水线', 'PageIndex 知识库索引', '结构化审查报告', 'PDF 导出与历史回溯'],
    link: { label: '进入照胆着陆页', href: 'https://zhaodan.goulong-ai.cn' },
  },
]

const plannedProducts: Product[] = [
  {
    id: 'shuheng',
    name: '枢衡',
    pinyin: 'SHUHENG',
    phase: '下一阶段',
    status: 'planned',
    statusLabel: '规划中',
    tagline: '工程合规智能体系统',
    desc: '整合句龙所有 Agent 产品能力的智能体系统，面向工程合规领域提供统一编排、调用与治理，对标 OpenClaw、Hermes Agent、阿里悟空。',
    icon: 'cube-core',
    accent: 'gold',
    features: ['统一编排所有 Agent', '调用与治理', '工程合规领域专精', '后续上线 MCP / Skills / CLI'],
  },
  {
    id: 'fayuan',
    name: '法渊',
    pinyin: 'FAYUAN',
    phase: '下一阶段',
    status: 'planned',
    statusLabel: '规划中',
    tagline: '工程合规行业知识库',
    desc: '沉淀法规、条款、案例与规则，像藏经阁一样管理行业知识，并集成到枢衡能力体系中。',
    icon: 'layers',
    accent: 'azure',
    features: ['法规与规则沉淀', '行业案例库', '集成到枢衡'],
  },
  {
    id: 'guinie',
    name: '圭臬',
    pinyin: 'GUINIE',
    phase: '下一阶段',
    status: 'planned',
    statusLabel: '规划中',
    tagline: '招投标审查智能体',
    desc: '侧重于招投标审查，枢衡上线后推进，能力最终集成到枢衡统一体系。',
    icon: 'shield-alert',
    accent: 'vermilion',
    features: ['招投标审查', '枢衡上线后推进', '能力集成到枢衡'],
  },
  {
    id: 'fujie',
    name: '符节',
    pinyin: 'FUJIE',
    phase: '下一阶段',
    status: 'planned',
    statusLabel: '规划中',
    tagline: '资质执照管理智能体',
    desc: '侧重于资质执照管理，枢衡上线后推进，能力最终集成到枢衡统一体系。',
    icon: 'file-approval',
    accent: 'jade',
    features: ['资质执照管理', '枢衡上线后推进', '能力集成到枢衡'],
  },
  {
    id: 'suanjing',
    name: '算经',
    pinyin: 'SUANJING',
    phase: '未来阶段',
    status: 'planned',
    statusLabel: '规划中',
    tagline: '经营核算 Agent 群',
    desc: '覆盖合同结算、经济活动分析、产值计算、经营月报编制、量差核算等场景的核算 Agent 群。',
    icon: 'chart-gauge',
    accent: 'gold',
    features: ['合同结算 / 产值计算', '经济活动分析', '经营月报 / 量差核算'],
  },
  {
    id: 'core',
    name: 'Core',
    pinyin: 'CORE',
    phase: '未来阶段',
    status: 'planned',
    statusLabel: '规划中',
    tagline: '面向本地部署的句龙硬件节点',
    desc: '搭载句龙 · 枢衡的硬件产品，作为本地算力与部署载体。敬请期待。',
    icon: 'cube-server',
    accent: 'gold',
    features: ['搭载句龙 · 枢衡', '本地算力与部署载体', '敬请期待'],
  },
]

const accessPoints = [
  { code: 'MCP', label: 'Model Context Protocol', desc: '标准协议，被第三方智能体调用' },
  { code: 'Skills', label: '可复用能力包', desc: '插件化能力封装' },
  { code: 'CLI', label: '命令行工具', desc: '脚本与自动化集成' },
]

const accentMap: Record<string, { text: string; border: string; bg: string; glow: string; rgb: string }> = {
  azure: { text: 'text-brand-azure', border: 'border-brand-azure/40', bg: 'bg-brand-azure/10', glow: 'rgba(95,168,211,0.35)', rgb: '95,168,211' },
  jade: { text: 'text-brand-jade', border: 'border-brand-jade/40', bg: 'bg-brand-jade/10', glow: 'rgba(61,212,168,0.35)', rgb: '61,212,168' },
  gold: { text: 'text-brand-gold', border: 'border-brand-gold/40', bg: 'bg-brand-gold/10', glow: 'rgba(212,168,90,0.35)', rgb: '212,168,90' },
  vermilion: { text: 'text-brand-vermilion-soft', border: 'border-brand-vermilion/40', bg: 'bg-brand-vermilion/10', glow: 'rgba(232,74,74,0.35)', rgb: '232,74,74' },
}
</script>

<template>
  <div class="products-page">
    <!-- 赛博背景层 -->
    <div class="cyber-grid" aria-hidden="true" />

    <!-- Hero -->
    <section class="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(212,168,90,0.14),transparent_60%)] pointer-events-none" />
      <div class="container-narrow relative">
        <nav class="mb-8 flex items-center gap-2 font-sans-cn text-xs text-ink-mute animate-fade-in-up">
          <a href="/" class="hover:text-brand-gold transition-colors">首页</a>
          <span class="text-ink-faint">/</span>
          <span class="text-brand-gold">产品体系</span>
        </nav>

        <div class="flex flex-col gap-5 max-w-4xl animate-fade-in-up" style="animation-delay: 0.08s">
          <span class="eyebrow text-glow-gold">PRODUCT MATRIX · 工程合规智能体操作系统</span>
          <h1 class="font-serif-cn font-semibold leading-[1.15] text-[32px] sm:text-[40px] md:text-[52px] text-ink tracking-wide">
            <span class="text-brand-gold text-glow-gold">句龙</span>产品体系
          </h1>
          <p class="font-sans-cn text-base md:text-lg leading-[1.85] text-ink-soft/90 max-w-2xl">
            以文衡、照胆为已上线起点，逐步构建覆盖编制、审查、知识、核算的工程合规智能体操作系统。已上线产品均支持通过 MCP / Skills / CLI 被第三方智能体调用，API Key 鉴权。
          </p>
          <div class="mt-2 flex flex-wrap items-center gap-3">
            <Button variant="primary-gold" size="md" @click="goHome('#cta')">
              <SvgIcon name="calendar" :size="18" />
              <span>预约演示</span>
            </Button>
            <Button variant="outline-gold" size="md" @click="goHome('#bridge')">
              <SvgIcon name="chart-network" :size="18" />
              <span>能力架构</span>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <!-- 当前阶段：已上线产品 -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10 flex items-end justify-between gap-4">
          <div>
            <div class="mb-2 flex items-center gap-3">
              <span class="font-mono text-[11px] tracking-[0.3em] text-brand-jade">STAGE 01</span>
              <span class="h-px w-16 bg-brand-jade/40" />
            </div>
            <h2 class="font-serif-cn text-2xl md:text-3xl font-semibold text-ink">当前阶段 · 已上线</h2>
          </div>
          <span class="hidden font-mono text-[11px] text-ink-faint md:block">2 PRODUCTS LIVE</span>
        </div>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <article
            v-for="(p, i) in liveProducts"
            :key="p.id"
            class="product-card group relative overflow-hidden rounded-2xl border bg-surface/80 p-7 md:p-9 animate-fade-in-up"
            :class="accentMap[p.accent].border"
            :style="{ '--glow': accentMap[p.accent].glow, '--rgb': accentMap[p.accent].rgb, animationDelay: `${0.1 + i * 0.1}s` }"
          >
            <div class="scan-line" />
            <div class="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl" :class="accentMap[p.accent].bg" />

            <header class="relative mb-6 flex items-start justify-between gap-4">
              <div class="flex items-center gap-4">
                <div class="flex h-14 w-14 items-center justify-center rounded-xl border" :class="[accentMap[p.accent].border, accentMap[p.accent].bg]">
                  <SvgIcon :name="p.icon" :size="28" :color="`rgb(${accentMap[p.accent].rgb})`" />
                </div>
                <div>
                  <div class="flex items-baseline gap-2">
                    <h3 class="font-serif-cn text-3xl font-semibold text-ink">句龙 · {{ p.name }}</h3>
                    <span class="font-mono text-[10px] tracking-[0.25em] text-ink-faint">{{ p.pinyin }}</span>
                  </div>
                  <p class="mt-1 font-sans-cn text-sm" :class="accentMap[p.accent].text">{{ p.tagline }}</p>
                </div>
              </div>
              <span class="status-pill status-live">已上线</span>
            </header>

            <p class="relative mb-6 font-sans-cn text-sm leading-relaxed text-ink-soft/90">{{ p.desc }}</p>

            <div class="relative mb-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <div
                v-for="f in p.features"
                :key="f"
                class="flex items-center gap-2 rounded-lg border border-hairline-soft bg-canvas-soft/40 px-3 py-2"
              >
                <SvgIcon name="check-circle" :size="14" :color="`rgb(${accentMap[p.accent].rgb})`" />
                <span class="font-sans-cn text-xs text-ink-soft">{{ f }}</span>
              </div>
            </div>

            <div v-if="p.link" class="relative">
              <a
                :href="p.link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 font-sans-cn text-sm transition-colors hover:opacity-80"
                :class="accentMap[p.accent].text"
              >
                {{ p.link.label }} <SvgIcon name="arrow-right" :size="16" :color="`rgb(${accentMap[p.accent].rgb})`" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 接入方式 -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="rounded-2xl border border-[#1e3a58] bg-[#06101f]/90 p-7 md:p-10">
          <div class="mb-8 flex items-end justify-between gap-4">
            <div>
              <span class="eyebrow">接入方式 · AGENT ACCESS</span>
              <h2 class="mt-2 font-serif-cn text-2xl font-semibold text-ink">已上线产品均可被智能体调用</h2>
            </div>
            <span class="status-pill status-key">API KEY</span>
          </div>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div
              v-for="a in accessPoints"
              :key="a.code"
              class="rounded-xl border border-brand-azure/25 bg-[#0c1830]/80 p-5"
            >
              <div class="mb-2 flex items-center gap-2">
                <span class="font-mono text-lg font-semibold text-brand-azure">{{ a.code }}</span>
                <span class="h-px flex-1 bg-brand-azure/20" />
              </div>
              <p class="font-sans-cn text-sm text-ink-soft">{{ a.label }}</p>
              <p class="mt-1 font-sans-cn text-xs text-ink-mute">{{ a.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 规划中产品 -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-gold">STAGE 02 / 03</span>
            <span class="h-px w-16 bg-brand-gold/40" />
          </div>
          <h2 class="font-serif-cn text-2xl md:text-3xl font-semibold text-ink">下一阶段 · 未来阶段（规划中）</h2>
          <p class="mt-3 max-w-2xl font-sans-cn text-sm leading-relaxed text-ink-mute">
            当前先根据用户反馈迭代与优化文衡、照胆进行市场验证；后续将以枢衡为统一智能体系统，逐步沉淀法渊、圭臬、符节，并向算经、Core 延伸。
          </p>
        </div>

        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(p, i) in plannedProducts"
            :key="p.id"
            class="planned-card group relative overflow-hidden rounded-2xl border border-hairline bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            :style="{ '--glow': accentMap[p.accent].glow, animationDelay: `${0.1 + i * 0.06}s` }"
          >
            <div class="mb-4 flex items-start justify-between gap-3">
              <div class="flex items-center gap-3">
                <div class="flex h-11 w-11 items-center justify-center rounded-lg border" :class="[accentMap[p.accent].border, accentMap[p.accent].bg]">
                  <SvgIcon :name="p.icon" :size="22" :color="`rgb(${accentMap[p.accent].rgb})`" />
                </div>
                <div>
                  <h3 class="font-serif-cn text-xl font-semibold text-ink">句龙 · {{ p.name }}</h3>
                  <span class="font-mono text-[9px] tracking-[0.25em] text-ink-faint">{{ p.pinyin }}</span>
                </div>
              </div>
              <span class="status-pill status-planned">规划中</span>
            </div>
            <p class="mb-3 font-sans-cn text-sm font-medium" :class="accentMap[p.accent].text">{{ p.tagline }}</p>
            <p class="mb-4 font-sans-cn text-xs leading-relaxed text-ink-mute">{{ p.desc }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="f in p.features"
                :key="f"
                class="rounded-xs border border-hairline-soft px-2 py-1 font-sans-cn text-[10px] text-ink-faint"
              >{{ f }}</span>
            </div>
            <div class="mt-3 font-mono text-[10px] tracking-wider text-ink-faint/70">{{ p.phase.toUpperCase() }}</div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative py-section" id="products-cta">
      <div class="container-narrow">
        <div
          class="relative overflow-hidden rounded-2xl border border-brand-gold/50 px-8 py-12 md:px-14 md:py-16"
          style="background: linear-gradient(135deg, rgba(42, 30, 14, 0.95) 0%, rgba(19, 28, 54, 0.95) 100%);"
        >
          <div class="absolute inset-0 pointer-events-none">
            <div class="absolute right-0 top-0 h-full w-1/2 opacity-50" style="background: radial-gradient(ellipse 60% 80% at 80% 50%, rgba(212,168,90,0.22), transparent 70%);" />
          </div>
          <div class="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div class="max-w-2xl">
              <span class="eyebrow text-glow-gold">加入句龙生态</span>
              <h2 class="mt-3 font-serif-cn text-2xl font-semibold leading-snug text-ink md:text-3xl">
                已上线产品支持 <span class="text-brand-gold text-glow-gold">Agent 可调用</span>，本地部署敬请期待
              </h2>
            </div>
            <div class="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button variant="primary-gold" size="lg" @click="goHome('#cta')">
                <SvgIcon name="calendar" :size="18" />
                <span>预约演示</span>
              </Button>
              <Button variant="outline-gold" size="lg" @click="goHome('#contact')">
                <SvgIcon name="mail" :size="18" />
                <span>联系我们</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.products-page {
  position: relative;
}

.cyber-grid {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    linear-gradient(rgba(95, 168, 211, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(95, 168, 211, 0.04) 1px, transparent 1px);
  background-size: 44px 44px;
  mask-image: radial-gradient(ellipse at 50% 30%, black 0 60%, transparent 90%);
}

.product-card {
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.04),
    0 0 0 1px transparent;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.product-card:hover {
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    0 0 32px var(--glow);
  transform: translateY(-2px);
}

.planned-card {
  opacity: 0.92;
}
.planned-card:hover {
  border-color: rgba(212, 168, 90, 0.4);
  box-shadow: 0 0 24px var(--glow);
  opacity: 1;
}

.scan-line {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(180deg, transparent 0%, var(--glow) 50%, transparent 100%);
  opacity: 0;
  height: 2px;
  top: 0;
}
.product-card:hover .scan-line {
  animation: scanDrop 1.6s ease-in-out infinite;
}

@keyframes scanDrop {
  0% { top: 0; opacity: 0; }
  20% { opacity: 0.6; }
  100% { top: 100%; opacity: 0; }
}

.status-pill {
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  padding: 3px 10px;
  font-family: 'Noto Sans SC', system-ui, sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.5px;
  white-space: nowrap;
  flex-shrink: 0;
}
.status-live {
  background: rgba(61, 212, 168, 0.12);
  color: #5eead4;
  border: 1px solid rgba(61, 212, 168, 0.35);
}
.status-planned {
  background: rgba(212, 168, 90, 0.12);
  color: #e6c184;
  border: 1px solid rgba(212, 168, 90, 0.35);
}
.status-key {
  background: rgba(95, 168, 211, 0.12);
  color: #5fa8d3;
  border: 1px solid rgba(95, 168, 211, 0.35);
  font-family: 'JetBrains Mono', monospace;
  letter-spacing: 1px;
}
</style>
