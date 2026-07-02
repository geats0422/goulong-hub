<script setup lang="ts">
import { useRouter } from 'vue-router'
import SvgIcon from '../components/SvgIcon.vue'
import Button from '../components/Button.vue'

const router = useRouter()
const goHomeHash = (hash: string) => router.push({ path: '/', hash })
const goProducts = () => router.push('/products')
const goArchitecture = () => router.push('/architecture')

// 板块 B：支持的第三方智能体
interface Agent {
  id: string
  name: string
  en: string
  desc: string
  tags: string[]
  accent: 'azure' | 'jade' | 'gold'
}

const agents: Agent[] = [
  {
    id: 'openclaw',
    name: 'OpenClaw',
    en: 'OPEN CLAW',
    desc: '开源智能体框架，可直接注册句龙 MCP 服务，调用文衡、照胆的编制与审查能力。',
    tags: ['MCP 注册', '能力编排', '开箱即用'],
    accent: 'azure',
  },
  {
    id: 'hermes',
    name: 'Hermes Agent',
    en: 'HERMES',
    desc: '企业级智能体平台，通过 Skills 包接入句龙合规能力，实现工作流内嵌审查。',
    tags: ['Skills 集成', '工作流嵌入', '企业级'],
    accent: 'jade',
  },
  {
    id: 'wukong',
    name: '阿里悟空',
    en: 'WUKONG',
    desc: '阿里通义智能体生态，通过 CLI 与 API Key 调用句龙，完成招投标与合同的合规预审。',
    tags: ['CLI 调用', 'API Key', '云端协同'],
    accent: 'gold',
  },
]

// 板块 C：接入协议
interface Protocol {
  code: string
  name: string
  desc: string
  use: string
  icon: string
}

const protocols: Protocol[] = [
  { code: 'MCP', name: 'Model Context Protocol', desc: '标准化上下文协议，智能体可直接注册并调用句龙工具。', use: '适用于原生支持 MCP 的智能体框架', icon: 'chart-network' },
  { code: 'Skills', name: '可复用能力包', desc: '将句龙合规能力封装为插件化技能，嵌入既有工作流。', use: '适用于需要工作流内嵌的场景', icon: 'layers' },
  { code: 'CLI', name: '命令行工具', desc: '通过命令行与脚本调用句龙，适合自动化与批处理集成。', use: '适用于自动化脚本与 CI/CD', icon: 'terminal' },
]

// 板块 D：调用链节点
const chainNodes = [
  { label: '第三方 Agent', sub: 'OpenClaw / Hermes / 悟空', icon: 'cpu', accent: 'azure' },
  { label: 'API Key 鉴权', sub: '统一鉴权 · 可审计', icon: 'lock', accent: 'gold' },
  { label: 'MCP / Skills / CLI', sub: '标准化接入协议', icon: 'terminal', accent: 'azure' },
  { label: '句龙能力', sub: '文衡 · 照胆', icon: 'cube-core', accent: 'jade' },
]

const accentColor: Record<string, string> = {
  azure: '#5fa8d3',
  jade: '#3dd4a8',
  gold: '#d4a85a',
}
</script>

<template>
  <div class="deploy-page">
    <div class="cyber-grid" aria-hidden="true" />

    <!-- A. Hero -->
    <section class="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(212,168,90,0.16),transparent_60%)]" />
      <div class="container-narrow relative">
        <nav class="mb-8 flex items-center gap-2 font-sans-cn text-xs text-ink-mute animate-fade-in-up">
          <a href="/" class="transition-colors hover:text-brand-gold">首页</a>
          <span class="text-ink-faint">/</span>
          <span class="text-brand-gold">部署方案</span>
        </nav>

        <div class="flex max-w-4xl flex-col gap-5 animate-fade-in-up" style="animation-delay: 0.08s">
          <span class="eyebrow text-glow-gold">DEPLOYMENT · 工程合规智能体接入方案</span>
          <h1 class="font-serif-cn text-[32px] font-semibold leading-[1.15] tracking-wide text-ink sm:text-[40px] md:text-[52px]">
            <span class="text-brand-gold text-glow-gold">部署</span>方案
          </h1>
          <p class="max-w-2xl font-sans-cn text-base leading-[1.85] text-ink-soft/90 md:text-lg">
            已上线产品支持 OpenClaw、Hermes Agent、阿里悟空等智能体调用，通过 MCP / Skills / CLI 完成集成；本地部署将在句龙 · 枢衡上线之后开放。
          </p>
          <div class="mt-2 flex flex-wrap items-center gap-3">
            <Button variant="primary-gold" size="md" @click="goHomeHash('#cta')">
              <SvgIcon name="calendar" :size="18" />
              <span>预约演示</span>
            </Button>
            <Button variant="outline-gold" size="md" @click="goArchitecture">
              <SvgIcon name="chart-network" :size="18" />
              <span>查看能力架构</span>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- B. 智能体集成 -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-gold">SECTION 01</span>
            <span class="h-px w-16 bg-brand-gold/40" />
          </div>
          <h2 class="font-serif-cn text-2xl font-semibold text-ink md:text-3xl">智能体集成</h2>
          <p class="mt-3 max-w-2xl font-sans-cn text-sm leading-relaxed text-ink-mute">
            文衡、照胆已上线，可被以下主流智能体调用，将合规能力嵌入既有 Agent 工作流。
          </p>
        </div>

        <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
          <article
            v-for="(a, i) in agents"
            :key="a.id"
            class="agent-card group relative overflow-hidden rounded-2xl border bg-surface/70 p-6 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            :class="{
              'border-brand-azure/40 hover:shadow-[0_0_28px_rgba(95,168,211,0.2)]': a.accent === 'azure',
              'border-brand-jade/40 hover:shadow-[0_0_28px_rgba(61,212,168,0.2)]': a.accent === 'jade',
              'border-brand-gold/40 hover:shadow-[0_0_28px_rgba(212,168,90,0.2)]': a.accent === 'gold',
            }"
            :style="{ animationDelay: `${0.1 + i * 0.08}s` }"
          >
            <div class="mb-4 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-xl border"
                  :class="{
                    'border-brand-azure/40 bg-brand-azure/10': a.accent === 'azure',
                    'border-brand-jade/40 bg-brand-jade/10': a.accent === 'jade',
                    'border-brand-gold/40 bg-brand-gold/10': a.accent === 'gold',
                  }"
                >
                  <SvgIcon name="cpu" :size="24" :color="accentColor[a.accent]" />
                </div>
                <div>
                  <h3 class="font-serif-cn text-lg font-semibold text-ink">{{ a.name }}</h3>
                  <span class="font-mono text-[9px] tracking-[0.25em] text-ink-faint">{{ a.en }}</span>
                </div>
              </div>
              <span class="status-pill status-live">可调用</span>
            </div>
            <p class="mb-4 font-sans-cn text-xs leading-relaxed text-ink-mute">{{ a.desc }}</p>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="t in a.tags"
                :key="t"
                class="rounded-xs border px-2 py-1 font-mono text-[10px]"
                :class="{
                  'border-brand-azure/20 text-brand-azure/90': a.accent === 'azure',
                  'border-brand-jade/20 text-brand-jade/90': a.accent === 'jade',
                  'border-brand-gold/20 text-brand-gold/90': a.accent === 'gold',
                }"
              >{{ t }}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- C. 接入协议 -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-gold">SECTION 02</span>
            <span class="h-px w-16 bg-brand-gold/40" />
          </div>
          <h2 class="font-serif-cn text-2xl font-semibold text-ink md:text-3xl">接入协议</h2>
          <p class="mt-3 max-w-2xl font-sans-cn text-sm leading-relaxed text-ink-mute">
            三种标准化接入方式，统一 API Key 鉴权，按场景灵活选择。
          </p>
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div
            v-for="(p, i) in protocols"
            :key="p.code"
            class="rounded-2xl border border-[#1e3a58] bg-[#06101f]/90 p-6 transition-all duration-300 hover:border-brand-azure/40 animate-fade-in-up"
            :style="{ animationDelay: `${0.1 + i * 0.08}s` }"
          >
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-lg border border-brand-azure/30 bg-brand-azure/10">
                <SvgIcon :name="p.icon" :size="22" color="#5fa8d3" />
              </div>
              <span class="font-mono text-xl font-semibold text-brand-azure">{{ p.code }}</span>
            </div>
            <h3 class="mb-2 font-serif-cn text-base font-semibold text-ink">{{ p.name }}</h3>
            <p class="mb-3 font-sans-cn text-xs leading-relaxed text-ink-mute">{{ p.desc }}</p>
            <div class="flex items-start gap-2 rounded-lg border border-brand-azure/15 bg-brand-azure/5 px-3 py-2">
              <SvgIcon name="zap" :size="12" color="#5fa8d3" class="mt-0.5" />
              <span class="font-sans-cn text-[11px] text-ink-soft">{{ p.use }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- D. 集成调用链 -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-gold">SECTION 03</span>
            <span class="h-px w-16 bg-brand-gold/40" />
          </div>
          <h2 class="font-serif-cn text-2xl font-semibold text-ink md:text-3xl">集成调用链</h2>
          <p class="mt-3 max-w-2xl font-sans-cn text-sm leading-relaxed text-ink-mute">
            一次完整调用的数据流向：智能体发起 → API Key 鉴权 → 经接入协议 → 抵达句龙能力。
          </p>
        </div>

        <div class="chain-stage relative overflow-hidden rounded-2xl border border-[#1e3a58] bg-[#06101f]/90 p-7 md:p-10">
          <div class="pointer-events-none absolute inset-0 opacity-30" style="background-image: linear-gradient(rgba(95,168,211,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(95,168,211,0.08) 1px, transparent 1px); background-size: 28px 28px;" />

          <div class="relative z-10 grid grid-cols-1 items-center gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
            <div
              v-for="(node, i) in chainNodes"
              :key="node.label"
              class="contents"
            >
              <div class="chain-node flex flex-col items-center gap-2 rounded-xl border bg-[#0c1830]/90 px-4 py-5 text-center"
                :class="{
                  'border-brand-azure/40': node.accent === 'azure',
                  'border-brand-jade/40': node.accent === 'jade',
                  'border-brand-gold/40': node.accent === 'gold',
                }"
              >
                <div
                  class="flex h-12 w-12 items-center justify-center rounded-lg border"
                  :class="{
                    'border-brand-azure/40 bg-brand-azure/10': node.accent === 'azure',
                    'border-brand-jade/40 bg-brand-jade/10': node.accent === 'jade',
                    'border-brand-gold/40 bg-brand-gold/10': node.accent === 'gold',
                  }"
                >
                  <SvgIcon :name="node.icon" :size="24" :color="accentColor[node.accent]" />
                </div>
                <span class="font-sans-cn text-sm font-medium text-ink-soft">{{ node.label }}</span>
                <span class="font-mono text-[10px] tracking-wide text-ink-faint">{{ node.sub }}</span>
              </div>
              <svg v-if="i < chainNodes.length - 1" class="hidden h-8 w-10 md:block" viewBox="0 0 40 32" fill="none">
                <line x1="2" y1="16" x2="34" y2="16" stroke="#5fa8d3" stroke-width="1.5" stroke-dasharray="4 4" class="animate-data-stream" />
                <polygon points="34,10 38,16 34,22" fill="#5fa8d3" />
              </svg>
            </div>
          </div>

          <!-- 移动端纵向箭头提示 -->
          <div class="mt-4 text-center font-mono text-[10px] tracking-wider text-ink-faint md:hidden">↓ 数据流向</div>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- E. 本地部署（规划中） -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-gold">SECTION 04</span>
            <span class="h-px w-16 bg-brand-gold/40" />
          </div>
          <h2 class="font-serif-cn text-2xl font-semibold text-ink md:text-3xl">本地部署</h2>
        </div>

        <div class="local-card relative overflow-hidden rounded-2xl border border-brand-gold/25 bg-[#0a0f1c]/90 p-8 md:p-12">
          <div class="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-gold/8 blur-3xl" />
          <div class="relative z-10 flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div class="flex items-start gap-5">
              <div class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-brand-gold/30 bg-brand-gold/8">
                <SvgIcon name="cube-server" :size="32" color="#d4a85a" class="opacity-60" />
              </div>
              <div class="max-w-xl">
                <div class="mb-2 flex items-center gap-3">
                  <h3 class="font-serif-cn text-xl font-semibold text-ink">本地部署与咨询服务</h3>
                  <span class="status-pill status-planned">规划中</span>
                </div>
                <p class="font-sans-cn text-sm leading-relaxed text-ink-mute">
                  当前优先根据用户反馈迭代文衡、照胆进行市场验证。本地部署与相关咨询服务将在
                  <span class="text-brand-gold">句龙 · 枢衡</span> 上线之后逐步开放，敬请期待。
                </p>
              </div>
            </div>
            <div class="flex shrink-0 items-center gap-2 rounded-lg border border-brand-gold/20 bg-brand-gold/5 px-4 py-2.5">
              <SvgIcon name="clock" :size="16" color="#d4a85a" />
              <span class="font-sans-cn text-xs text-brand-gold">敬请期待</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- F. CTA -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="relative overflow-hidden rounded-2xl border border-brand-gold/50 px-8 py-12 md:px-14 md:py-16" style="background: linear-gradient(135deg, rgba(42, 30, 14, 0.95) 0%, rgba(19, 28, 54, 0.95) 100%);">
          <div class="pointer-events-none absolute inset-0">
            <div class="absolute right-0 top-0 h-full w-1/2 opacity-50" style="background: radial-gradient(ellipse 60% 80% at 80% 50%, rgba(212,168,90,0.22), transparent 70%);" />
          </div>
          <div class="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div class="max-w-2xl">
              <span class="eyebrow text-glow-gold">开始接入</span>
              <h2 class="mt-3 font-serif-cn text-2xl font-semibold leading-snug text-ink md:text-3xl">
                让智能体<span class="text-brand-gold text-glow-gold">调用句龙</span>，把合规能力嵌入工作流
              </h2>
            </div>
            <div class="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button variant="outline-gold" size="lg" @click="goProducts">
                <SvgIcon name="layers" :size="18" />
                <span>查看产品体系</span>
              </Button>
              <Button variant="primary-gold" size="lg" @click="goHomeHash('#contact')">
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
.deploy-page {
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

.agent-card {
  backdrop-filter: blur(6px);
}

.chain-node {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.chain-node:hover {
  transform: translateY(-2px);
}

.local-card {
  backdrop-filter: blur(8px);
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
</style>
