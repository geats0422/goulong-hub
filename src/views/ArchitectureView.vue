<script setup lang="ts">
import { useRouter } from 'vue-router'
import SvgIcon from '../components/SvgIcon.vue'
import Button from '../components/Button.vue'

const router = useRouter()
const goHomeHash = (hash: string) => router.push({ path: '/', hash })
const goProducts = () => router.push('/products')

// 板块 B：中心辐射图节点
interface RadialNode {
  id: string
  label: string
  sub: string
  icon: string
  side: 'in' | 'out'
  pos: string
  delay: string
}

const nodePositions: Record<string, { x: number; y: number }> = {
  top: { x: 50, y: 12 },
  topleft: { x: 20, y: 22 },
  left: { x: 12, y: 50 },
  bottomleft: { x: 20, y: 78 },
  bottom: { x: 50, y: 88 },
  bottomright: { x: 80, y: 78 },
  right: { x: 88, y: 50 },
  topright: { x: 80, y: 22 },
}

const nodeTranslate: Record<string, string> = {
  top: '-50%, 0',
  topleft: '-80%, -20%',
  left: '-90%, -50%',
  bottomleft: '-80%, -80%',
  bottom: '-50%, -100%',
  bottomright: '-20%, -80%',
  right: '-10%, -50%',
  topright: '-20%, -20%',
}

const nodeXY = (pos: string) => nodePositions[pos] || { x: 50, y: 50 }

const nodeStyle = (pos: string) => {
  const p = nodePositions[pos] || { x: 50, y: 50 }
  return {
    left: `${p.x}%`,
    top: `${p.y}%`,
    transform: `translate(${nodeTranslate[pos] || '-50%, -50%'})`,
  }
}

const radialNodes: RadialNode[] = [
  { id: 'excel', label: '自建系统 / Excel', sub: '非结构化输入', icon: 'file-approval', side: 'in', pos: 'top', delay: '0s' },
  { id: 'oa', label: '老旧 OA', sub: '审批流改造', icon: 'building-oau', side: 'in', pos: 'topleft', delay: '0.4s' },
  { id: 'erp', label: 'ERP（旧版）', sub: '数据映射', icon: 'building-erp', side: 'in', pos: 'bottomleft', delay: '0.8s' },
  { id: 'contract', label: '合同系统（老）', sub: '接口适配', icon: 'building-contract', side: 'in', pos: 'left', delay: '1.2s' },
  { id: 'api', label: '标准 API / OpenAPI', sub: '标准化输出', icon: 'code', side: 'out', pos: 'topright', delay: '0.2s' },
  { id: 'audit', label: '安全审计追溯', sub: '全链路留痕', icon: 'lock', side: 'out', pos: 'right', delay: '0.6s' },
  { id: 'compliance', label: '实时合规校验', sub: '前置拦截', icon: 'shield-check', side: 'out', pos: 'bottomright', delay: '1.0s' },
  { id: 'micro', label: '统一微服协议', sub: '服务编排', icon: 'layers', side: 'out', pos: 'bottom', delay: '1.4s' },
]

// 板块 C：技术分层（底→顶，展示时反转）
interface TechLayer {
  id: string
  index: number
  name: string
  role: string
  tags: string[]
  products: string
  icon: string
}

const techLayers: TechLayer[] = [
  { id: 'parse', index: 1, name: '文档解析层', role: '多格式文档归一化解析，清洗噪声、提取正文结构', tags: ['PDF / DOCX / Excel 解析', 'MarkItDown 转换', '章节切分', '噪声清理'], products: '文衡 · 照胆', icon: 'file-contract' },
  { id: 'audit', index: 2, name: '审核引擎层', role: '风险识别、负面清单、标准对齐与多 Agent 审查流水线', tags: ['风险识别', '负面清单', '标准对齐', '多 Agent 流水线'], products: '文衡 · 照胆', icon: 'shield-alert' },
  { id: 'knowledge', index: 3, name: '知识库层', role: '法规、规则、案例的向量检索与场景化召回', tags: ['28 部招投标法规', '向量检索', 'PageIndex 索引', '私有知识库'], products: '文衡 · 照胆 · 未来法渊', icon: 'layers' },
  { id: 'orchestration', index: 4, name: 'Agent 编排层', role: '统一编排、调用与治理工程合规 Agent 能力', tags: ['统一编排', '调用治理', '工程合规专精', '能力集成'], products: '句龙 · 枢衡（规划中）', icon: 'cube-core' },
  { id: 'access', index: 5, name: '接入层', role: '面向第三方智能体的标准化调用入口', tags: ['MCP', 'Skills', 'CLI', 'API Key 鉴权'], products: '文衡 · 照胆', icon: 'terminal' },
]

const accessPoints = [
  { code: 'MCP', label: 'Model Context Protocol', desc: '标准协议，被第三方智能体调用' },
  { code: 'Skills', label: '可复用能力包', desc: '插件化能力封装' },
  { code: 'CLI', label: '命令行工具', desc: '脚本与自动化集成' },
]
</script>

<template>
  <div class="arch-page">
    <div class="cyber-grid" aria-hidden="true" />

    <!-- A. Hero -->
    <section class="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(95,168,211,0.16),transparent_60%)]" />
      <div class="container-narrow relative">
        <nav class="mb-8 flex items-center gap-2 font-sans-cn text-xs text-ink-mute animate-fade-in-up">
          <a href="/" class="transition-colors hover:text-brand-gold">首页</a>
          <span class="text-ink-faint">/</span>
          <span class="text-brand-azure">能力架构</span>
        </nav>

        <div class="flex max-w-4xl flex-col gap-5 animate-fade-in-up" style="animation-delay: 0.08s">
          <span class="eyebrow text-brand-azure" style="text-shadow: 0 0 12px rgba(95,168,211,0.55)">CAPABILITY ARCHITECTURE · 工程合规能力架构</span>
          <h1 class="font-serif-cn text-[32px] font-semibold leading-[1.15] tracking-wide text-ink sm:text-[40px] md:text-[52px]">
            <span class="text-brand-azure" style="text-shadow: 0 0 16px rgba(95,168,211,0.5)">句龙</span>能力架构
          </h1>
          <p class="max-w-2xl font-sans-cn text-base leading-[1.85] text-ink-soft/90 md:text-lg">
            句龙以工程合规智能体操作系统为核心，向下兼容企业旧系统，向上输出标准化合规能力。
          </p>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- B. 系统集成：中心辐射图 -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-azure">SECTION 01</span>
            <span class="h-px w-16 bg-brand-azure/40" />
          </div>
          <h2 class="font-serif-cn text-2xl font-semibold text-ink md:text-3xl">系统集成架构</h2>
          <p class="mt-3 max-w-2xl font-sans-cn text-sm leading-relaxed text-ink-mute">
            句龙 · 枢衡作为统一编排核心，向下接入企业既有系统孤岛，向上输出标准化合规与审计能力。
          </p>
        </div>

        <div class="radial-stage relative mx-auto aspect-square max-w-[640px] overflow-hidden rounded-2xl border border-[#1d3a5c] bg-[#06101f]/85 p-4 md:p-6">
          <div class="pointer-events-none absolute inset-0 opacity-30" style="background-image: linear-gradient(rgba(95,168,211,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(95,168,211,0.08) 1px, transparent 1px); background-size: 32px 32px;" />

          <svg class="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
            <line v-for="n in radialNodes.filter(x => x.side==='in')" :key="`l-${n.id}`" :x1="nodeXY(n.pos).x" :y1="nodeXY(n.pos).y" x2="50" y2="50" stroke="rgba(95,168,211,0.5)" stroke-width="0.4" class="arch-flow" :style="{ animationDelay: n.delay }" />
            <line v-for="n in radialNodes.filter(x => x.side==='out')" :key="`r-${n.id}`" x1="50" y1="50" :x2="nodeXY(n.pos).x" :y2="nodeXY(n.pos).y" stroke="rgba(212,168,90,0.5)" stroke-width="0.4" class="arch-flow-out" :style="{ animationDelay: n.delay }" />
          </svg>

          <div class="pointer-events-none absolute left-1/2 top-1/2 h-[45%] w-[45%] -translate-x-1/2 -translate-y-1/2 rounded-full" style="background: radial-gradient(circle, rgba(95,168,211,0.18), transparent 70%); animation: pulseWave 3s ease-in-out infinite;" />

          <!-- 中心节点：枢衡 + 句龙核心 -->
          <div class="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5">
            <div class="flex flex-col items-center gap-1 rounded-xl border border-brand-azure/50 bg-[#0a1830]/95 px-4 py-3 shadow-[0_0_28px_rgba(95,168,211,0.35)]">
              <SvgIcon name="cube-core" :size="24" color="#5fa8d3" />
              <span class="font-serif-cn text-sm font-semibold text-ink">句龙 · 枢衡</span>
              <span class="font-mono text-[9px] tracking-wider text-brand-azure">UNIFIED ORCHESTRATION</span>
            </div>
            <div class="h-3 w-px bg-gradient-to-b from-brand-azure/60 to-brand-gold/60" />
            <div class="rounded-lg border border-brand-gold/45 bg-[#1a1408]/95 px-3 py-1.5 shadow-[0_0_18px_rgba(212,168,90,0.3)]">
              <span class="font-serif-cn text-xs font-medium text-brand-gold">句龙核心</span>
            </div>
          </div>

          <!-- 辐射节点 -->
          <div
            v-for="n in radialNodes"
            :key="n.id"
            class="radial-node absolute z-10 flex w-[26%] max-w-[150px] flex-col items-center gap-1 rounded-lg border bg-[#0a1426]/95 px-2 py-2 text-center"
            :class="n.side === 'in' ? 'border-brand-azure/35' : 'border-brand-gold/35'"
            :style="nodeStyle(n.pos)"
          >
            <SvgIcon :name="n.icon" :size="18" :color="n.side === 'in' ? '#5fa8d3' : '#d4a85a'" />
            <span class="font-sans-cn text-[11px] font-medium leading-tight text-ink-soft">{{ n.label }}</span>
            <span class="font-mono text-[8px] tracking-wide text-ink-faint">{{ n.sub }}</span>
          </div>
        </div>

        <div class="mt-6 flex flex-wrap items-center justify-center gap-6">
          <div class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-brand-azure shadow-[0_0_8px_rgba(95,168,211,0.8)]" /><span class="font-sans-cn text-xs text-ink-mute">输入端（旧系统）</span></div>
          <div class="flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-brand-gold shadow-[0_0_8px_rgba(212,168,90,0.8)]" /><span class="font-sans-cn text-xs text-ink-mute">输出端（标准能力）</span></div>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- C. 技术能力分层 -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-azure">SECTION 02</span>
            <span class="h-px w-16 bg-brand-azure/40" />
          </div>
          <h2 class="font-serif-cn text-2xl font-semibold text-ink md:text-3xl">技术能力分层</h2>
          <p class="mt-3 max-w-2xl font-sans-cn text-sm leading-relaxed text-ink-mute">
            自底向上的五层能力栈，数据自文档解析流入，经审核、知识、编排，最终从接入层输出给智能体调用。
          </p>
        </div>

        <div class="iso-stack relative mx-auto max-w-3xl">
          <div class="pillars pointer-events-none absolute inset-0">
            <span class="pillar pillar-tl" />
            <span class="pillar pillar-tr" />
            <span class="pillar pillar-bl" />
            <span class="pillar pillar-br" />
          </div>

          <div class="relative z-10 flex flex-col gap-4 py-6">
            <div
              v-for="(layer, i) in [...techLayers].reverse()"
              :key="layer.id"
              class="iso-layer group relative overflow-hidden rounded-xl border bg-[#0a1428]/90 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 animate-fade-in-up"
              :class="layer.index === 5 ? 'border-brand-azure/50 shadow-[0_0_24px_rgba(95,168,211,0.2)]' : 'border-[#1d3a5c]'"
              :style="{ animationDelay: `${i * 0.08}s` }"
            >
              <div class="flex items-center gap-4">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border" :class="layer.index === 5 ? 'border-brand-azure/50 bg-brand-azure/10' : 'border-brand-azure/25 bg-brand-azure/5'">
                  <SvgIcon :name="layer.icon" :size="24" color="#5fa8d3" />
                </div>
                <div class="min-w-0 flex-1">
                  <div class="flex items-baseline gap-2">
                    <span class="font-mono text-[10px] tracking-wider text-brand-azure">L{{ layer.index }}</span>
                    <h3 class="font-serif-cn text-base font-semibold text-ink">{{ layer.name }}</h3>
                  </div>
                  <p class="mt-0.5 font-sans-cn text-xs text-ink-mute">{{ layer.role }}</p>
                </div>
              </div>
              <div class="mt-3 flex flex-wrap gap-1.5">
                <span v-for="t in layer.tags" :key="t" class="rounded-xs border border-brand-azure/20 bg-brand-azure/5 px-2 py-1 font-mono text-[10px] text-brand-azure/90">{{ t }}</span>
              </div>
              <div class="mt-2 flex items-center gap-1.5 font-sans-cn text-[10px] text-brand-gold/80">
                <SvgIcon name="chart-network" :size="11" color="#d4a85a" />
                <span>{{ layer.products }}</span>
              </div>
            </div>
          </div>

          <div class="mt-4 flex items-center justify-between px-2 font-mono text-[10px] tracking-wider text-ink-faint">
            <span>↓ 数据自下而上</span>
            <span>顶部 = 接入层 / 智能体调用</span>
          </div>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- D. 接入方式 -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-azure">SECTION 03</span>
            <span class="h-px w-16 bg-brand-azure/40" />
          </div>
          <h2 class="font-serif-cn text-2xl font-semibold text-ink md:text-3xl">接入方式</h2>
          <p class="mt-3 max-w-2xl font-sans-cn text-sm leading-relaxed text-ink-mute">
            已上线产品均可通过标准化协议被第三方智能体调用，统一 API Key 鉴权。
          </p>
        </div>

        <div class="rounded-2xl border border-[#1e3a58] bg-[#06101f]/90 p-7 md:p-10">
          <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div v-for="a in accessPoints" :key="a.code" class="rounded-xl border border-brand-azure/25 bg-[#0c1830]/80 p-5">
              <div class="mb-2 flex items-center gap-2">
                <span class="font-mono text-lg font-semibold text-brand-azure">{{ a.code }}</span>
                <span class="h-px flex-1 bg-brand-azure/20" />
              </div>
              <p class="font-sans-cn text-sm text-ink-soft">{{ a.label }}</p>
              <p class="mt-1 font-sans-cn text-xs text-ink-mute">{{ a.desc }}</p>
            </div>
          </div>
          <div class="mt-6 flex items-center gap-3 rounded-lg border border-brand-azure/20 bg-brand-azure/5 px-4 py-3">
            <SvgIcon name="lock" :size="16" color="#5fa8d3" />
            <span class="font-sans-cn text-xs text-ink-soft">统一 API Key 鉴权，调用可审计、可治理</span>
          </div>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- F. CTA -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="relative overflow-hidden rounded-2xl border border-brand-azure/50 px-8 py-12 md:px-14 md:py-16" style="background: linear-gradient(135deg, rgba(14,28,48,0.95) 0%, rgba(19,28,54,0.95) 100%);">
          <div class="pointer-events-none absolute inset-0">
            <div class="absolute right-0 top-0 h-full w-1/2 opacity-50" style="background: radial-gradient(ellipse 60% 80% at 80% 50%, rgba(95,168,211,0.22), transparent 70%);" />
          </div>
          <div class="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div class="max-w-2xl">
              <span class="eyebrow text-brand-azure" style="text-shadow: 0 0 12px rgba(95,168,211,0.5)">能力架构总览</span>
              <h2 class="mt-3 font-serif-cn text-2xl font-semibold leading-snug text-ink md:text-3xl">
                用一套架构，<span class="text-brand-azure" style="text-shadow: 0 0 16px rgba(95,168,211,0.5)">覆盖工程合规全链路</span>
              </h2>
            </div>
            <div class="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button variant="outline-gold" size="lg" @click="goProducts">
                <SvgIcon name="layers" :size="18" />
                <span>查看产品体系</span>
              </Button>
              <Button variant="primary-gold" size="lg" @click="goHomeHash('#cta')">
                <SvgIcon name="calendar" :size="18" />
                <span>预约演示</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.arch-page {
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

.radial-node {
  backdrop-filter: blur(6px);
  transition: box-shadow 0.3s ease;
}
.radial-node:hover {
  box-shadow: 0 0 20px rgba(95, 168, 211, 0.4);
  z-index: 15;
}

.arch-flow {
  stroke-dasharray: 2 3;
  animation: flowIn 2.5s linear infinite;
}
.arch-flow-out {
  stroke-dasharray: 2 3;
  animation: flowOut 2.5s linear infinite;
}
@keyframes flowIn {
  to { stroke-dashoffset: -10; }
}
@keyframes flowOut {
  to { stroke-dashoffset: 10; }
}

@keyframes pulseWave {
  0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(0.85); }
  50% { opacity: 0.85; transform: translate(-50%, -50%) scale(1.1); }
}

.pillars {
  z-index: 1;
}
.pillar {
  position: absolute;
  width: 2px;
  background: linear-gradient(180deg, rgba(95, 168, 211, 0.5), rgba(95, 168, 211, 0.1));
  border-radius: 2px;
  box-shadow: 0 0 8px rgba(95, 168, 211, 0.3);
}
.pillar-tl { top: 6%; left: 8%; bottom: 6%; }
.pillar-tr { top: 6%; right: 8%; bottom: 6%; }
.pillar-bl { top: 6%; left: 16%; bottom: 6%; opacity: 0.6; }
.pillar-br { top: 6%; right: 16%; bottom: 6%; opacity: 0.6; }

.iso-layer {
  box-shadow: inset 0 1px 0 rgba(95, 168, 211, 0.06);
}
</style>
