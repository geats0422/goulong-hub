<script setup lang="ts">
import { useRouter } from 'vue-router'
import SvgIcon from '../components/SvgIcon.vue'
import Button from '../components/Button.vue'

const router = useRouter()
const goProducts = () => router.push('/products')
const goArchitecture = () => router.push('/architecture')

// 快速开始步骤
const quickSteps = [
  { step: '01', title: '注册账号', desc: '在文衡或照胆注册账号，完成邮箱/手机号验证。', icon: 'file-approval' },
  { step: '02', title: '创建 API Key', desc: '进入设置 → API Key 管理，选择权限模板生成 Key（格式 gl_xxx）。', icon: 'lock' },
  { step: '03', title: '选择接入方式', desc: '按场景选择 MCP / CLI / REST API，三种方式共享同一套 API Key 与权限。', icon: 'terminal' },
]

// 接入方式
const accessMethods = [
  {
    code: 'MCP',
    name: 'Model Context Protocol',
    desc: '标准 MCP 协议，原生支持 MCP 的智能体（Claude Code / Cursor / Codex）直接注册调用。',
    use: '智能体原生支持 MCP 时首选',
    icon: 'chart-network',
    endpoints: [
      { label: '文衡 MCP', url: 'https://wenheng.goulong-ai.cn/mcp' },
      { label: '照胆 MCP', url: 'https://zhaodan.goulong-ai.cn/mcp' },
    ],
  },
  {
    code: 'CLI',
    name: '命令行工具',
    desc: '通过命令行与脚本调用，适合自动化、批处理与 CI/CD 集成。',
    use: '自动化脚本与批处理场景',
    icon: 'terminal',
    endpoints: [
      { label: '环境变量', url: 'GOULONG_API_KEY=gl_xxx' },
      { label: '服务地址', url: 'GOULONG_MCP_URL=https://.../mcp' },
    ],
  },
  {
    code: 'REST API',
    name: 'HTTP API',
    desc: '任何能发送 HTTP 请求的智能体（含自研 Agent、n8n、Dify）直接调用 /api/v1/agent/* 端点。',
    use: '只能发 HTTP 请求时',
    icon: 'code',
    endpoints: [
      { label: '鉴权', url: 'Authorization: Bearer gl_xxx' },
      { label: '端点前缀', url: '/api/v1/agent/*' },
    ],
  },
]

// 参考示例代码块
const exampleConfig = `# 1. 在 Claude Desktop / Cursor 的 MCP 配置中添加
{
  "mcpServers": {
    "goulong": {
      "url": "https://wenheng.goulong-ai.cn/mcp",
      "headers": {
        "Authorization": "Bearer gl_your_api_key_here"
      }
    }
  }
}`

const exampleCli = `# 2. CLI 方式：配置环境变量后直接调用
set GOULONG_API_KEY=gl_your_api_key_here
set GOULONG_MCP_URL=https://wenheng.goulong-ai.cn/mcp

# 验证身份与权限
goulong whoami

# 查询能力清单
goulong capabilities`

const exampleHttp = `# 3. REST API 方式：任意语言/平台
curl https://wenheng.goulong-ai.cn/api/v1/agent/me \\
  -H "Authorization: Bearer gl_your_api_key_here"`

// Agent 接入
const agents = [
  { name: 'Claude Code', method: 'MCP + Skill', desc: '原生支持 MCP Server 与 Skill 加载，是句龙的最佳搭档。', icon: 'cpu' },
  { name: 'Cursor', method: 'MCP', desc: 'AI 代码编辑器，通过 MCP 配置接入句龙合规能力。', icon: 'code' },
  { name: 'Codex CLI', method: 'MCP', desc: 'OpenAI 开源命令行 Agent，支持 MCP Server。', icon: 'terminal' },
  { name: '通用 HTTP Agent', method: 'REST API', desc: '自研 Agent、n8n、Dify 等，直接调用 REST 端点。', icon: 'chart-network' },
]

// 权限模板
const scopeTemplates = [
  { name: 'mcp_readonly', desc: '只读查询（MCP / 查询类）', scopes: 'profile:read · inspection:read · knowledge:read', accent: 'azure' },
  { name: 'cli_review', desc: '查询 + AI 生成/审查（CLI）', scopes: 'profile:read · inspection:run · inspection:read · knowledge:read', accent: 'jade' },
  { name: 'agent_full_access', desc: 'Agent 完整协作（推荐）', scopes: '上述全部 + knowledge:write · settings:write', accent: 'gold' },
]

const accentText: Record<string, string> = {
  azure: 'text-brand-azure',
  jade: 'text-brand-jade',
  gold: 'text-brand-gold',
}
const accentBorder: Record<string, string> = {
  azure: 'border-brand-azure/40',
  jade: 'border-brand-jade/40',
  gold: 'border-brand-gold/40',
}
const accentColor: Record<string, string> = {
  azure: '#5fa8d3',
  jade: '#3dd4a8',
  gold: '#d4a85a',
}
</script>

<template>
  <div class="dev-page">
    <div class="cyber-grid" aria-hidden="true" />

    <!-- A. Hero -->
    <section class="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(95,168,211,0.16),transparent_60%)]" />
      <div class="container-narrow relative">
        <nav class="mb-8 flex items-center gap-2 font-sans-cn text-xs text-ink-mute animate-fade-in-up">
          <a href="/" class="transition-colors hover:text-brand-azure">首页</a>
          <span class="text-ink-faint">/</span>
          <span class="text-brand-azure">开发者文档</span>
        </nav>

        <div class="flex max-w-4xl flex-col gap-5 animate-fade-in-up" style="animation-delay: 0.08s">
          <span class="eyebrow text-brand-azure" style="text-shadow: 0 0 12px rgba(95,168,211,0.55)">DEVELOPER DOCS · 句龙通用接入指南</span>
          <h1 class="font-serif-cn text-[32px] font-semibold leading-[1.15] tracking-wide text-ink sm:text-[40px] md:text-[52px]">
            <span class="text-brand-azure" style="text-shadow: 0 0 16px rgba(95,168,211,0.5)">开发者</span>文档
          </h1>
          <p class="max-w-2xl font-sans-cn text-base leading-[1.85] text-ink-soft/90 md:text-lg">
            句龙所有产品（文衡、照胆及后续产品）共享同一套接入方式：统一 API Key 鉴权，支持 MCP / Skills / CLI 三种接入。本文档以通用方式说明，并以一个参考示例演示完整调用。
          </p>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- B. 快速开始 -->
    <section id="quickstart" class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-azure">SECTION 01</span>
            <span class="h-px w-16 bg-brand-azure/40" />
          </div>
          <h2 class="font-serif-cn text-2xl font-semibold text-ink md:text-3xl">快速开始</h2>
          <p class="mt-3 max-w-2xl font-sans-cn text-sm leading-relaxed text-ink-mute">
            三步即可开始调用句龙能力。
          </p>
        </div>

        <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div
            v-for="(s, i) in quickSteps"
            :key="s.step"
            class="relative overflow-hidden rounded-2xl border border-[#1d3a5c] bg-[#06101f]/90 p-6 animate-fade-in-up"
            :style="{ animationDelay: `${0.1 + i * 0.08}s` }"
          >
            <div class="mb-4 flex items-center justify-between">
              <div class="flex h-12 w-12 items-center justify-center rounded-lg border border-brand-azure/30 bg-brand-azure/10">
                <SvgIcon :name="s.icon" :size="24" color="#5fa8d3" />
              </div>
              <span class="font-mono text-3xl font-bold text-brand-azure/30">{{ s.step }}</span>
            </div>
            <h3 class="mb-2 font-serif-cn text-base font-semibold text-ink">{{ s.title }}</h3>
            <p class="font-sans-cn text-xs leading-relaxed text-ink-mute">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- C. 接入方式 -->
    <section id="access" class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-azure">SECTION 02</span>
            <span class="h-px w-16 bg-brand-azure/40" />
          </div>
          <h2 class="font-serif-cn text-2xl font-semibold text-ink md:text-3xl">接入方式</h2>
          <p class="mt-3 max-w-2xl font-sans-cn text-sm leading-relaxed text-ink-mute">
            三种接入方式共享同一套 API Key 与权限体系，按场景灵活选择。
          </p>
        </div>

        <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div
            v-for="(m, i) in accessMethods"
            :key="m.code"
            class="rounded-2xl border border-[#1e3a58] bg-[#06101f]/90 p-6 transition-all duration-300 hover:border-brand-azure/40 animate-fade-in-up"
            :style="{ animationDelay: `${0.1 + i * 0.08}s` }"
          >
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center rounded-lg border border-brand-azure/30 bg-brand-azure/10">
                <SvgIcon :name="m.icon" :size="22" color="#5fa8d3" />
              </div>
              <span class="font-mono text-xl font-semibold text-brand-azure">{{ m.code }}</span>
            </div>
            <h3 class="mb-2 font-serif-cn text-base font-semibold text-ink">{{ m.name }}</h3>
            <p class="mb-4 font-sans-cn text-xs leading-relaxed text-ink-mute">{{ m.desc }}</p>
            <div class="mb-3 flex items-start gap-2 rounded-lg border border-brand-azure/15 bg-brand-azure/5 px-3 py-2">
              <SvgIcon name="zap" :size="12" color="#5fa8d3" class="mt-0.5" />
              <span class="font-sans-cn text-[11px] text-ink-soft">{{ m.use }}</span>
            </div>
            <div class="flex flex-col gap-1.5 border-t border-hairline-soft pt-3">
              <div v-for="e in m.endpoints" :key="e.label" class="flex items-center justify-between gap-2">
                <span class="font-sans-cn text-[10px] text-ink-faint">{{ e.label }}</span>
                <code class="truncate font-mono text-[10px] text-brand-azure/90">{{ e.url }}</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- D. 参考示例 -->
    <section id="example" class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-azure">SECTION 03</span>
            <span class="h-px w-16 bg-brand-azure/40" />
          </div>
          <h2 class="font-serif-cn text-2xl font-semibold text-ink md:text-3xl">参考示例</h2>
          <p class="mt-3 max-w-2xl font-sans-cn text-sm leading-relaxed text-ink-mute">
            以文衡为例，演示从配置到调用的完整流程。照胆及其它产品同理，只需替换服务地址。
          </p>
        </div>

        <div class="grid grid-cols-1 gap-5 lg:grid-cols-3">
          <!-- MCP 配置 -->
          <div class="code-block overflow-hidden rounded-2xl border border-[#1e3a58] bg-[#04080f]">
            <div class="flex items-center justify-between border-b border-[#1a2a3a] bg-[#070d18] px-4 py-2.5">
              <div class="flex items-center gap-2">
                <span class="h-2.5 w-2.5 rounded-full bg-[#b83838]" />
                <span class="h-2.5 w-2.5 rounded-full bg-[#f0b85a]" />
                <span class="h-2.5 w-2.5 rounded-full bg-[#3dd4a8]" />
              </div>
              <span class="font-mono text-[10px] tracking-wider text-ink-faint">MCP · claude_desktop_config.json</span>
            </div>
            <pre class="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed text-ink-soft"><code>{{ exampleConfig }}</code></pre>
          </div>

          <!-- CLI 调用 -->
          <div class="code-block overflow-hidden rounded-2xl border border-[#1e3a58] bg-[#04080f]">
            <div class="flex items-center justify-between border-b border-[#1a2a3a] bg-[#070d18] px-4 py-2.5">
              <div class="flex items-center gap-2">
                <SvgIcon name="terminal" :size="14" color="#5fa8d3" />
                <span class="font-mono text-[10px] tracking-wider text-ink-faint">CLI · 命令行调用</span>
              </div>
            </div>
            <pre class="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed text-ink-soft"><code>{{ exampleCli }}</code></pre>
          </div>

          <!-- REST API -->
          <div class="code-block overflow-hidden rounded-2xl border border-[#1e3a58] bg-[#04080f]">
            <div class="flex items-center justify-between border-b border-[#1a2a3a] bg-[#070d18] px-4 py-2.5">
              <div class="flex items-center gap-2">
                <SvgIcon name="code" :size="14" color="#5fa8d3" />
                <span class="font-mono text-[10px] tracking-wider text-ink-faint">REST · curl</span>
              </div>
            </div>
            <pre class="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed text-ink-soft"><code>{{ exampleHttp }}</code></pre>
          </div>
        </div>

        <div class="mt-5 flex items-start gap-3 rounded-xl border border-brand-azure/20 bg-brand-azure/5 px-5 py-4">
          <SvgIcon name="check-circle" :size="18" color="#5fa8d3" class="mt-0.5 shrink-0" />
          <p class="font-sans-cn text-xs leading-relaxed text-ink-soft">
            <span class="font-medium text-brand-azure">提示：</span>三种方式共享同一套 API Key 与权限体系。切换产品只需替换服务地址（文衡 → <code class="font-mono text-brand-azure">wenheng.goulong-ai.cn</code>，照胆 → <code class="font-mono text-brand-azure">zhaodan.goulong-ai.cn</code>），API Key 与调用方式完全一致。
          </p>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- E. Agent 接入 -->
    <section id="agents" class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-azure">SECTION 04</span>
            <span class="h-px w-16 bg-brand-azure/40" />
          </div>
          <h2 class="font-serif-cn text-2xl font-semibold text-ink md:text-3xl">智能体接入</h2>
          <p class="mt-3 max-w-2xl font-sans-cn text-sm leading-relaxed text-ink-mute">
            句龙能力可被主流智能体调用，将合规能力嵌入既有 Agent 工作流。
          </p>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div
            v-for="(a, i) in agents"
            :key="a.name"
            class="rounded-xl border border-[#1d3a5c] bg-[#06101f]/90 p-5 transition-all duration-300 hover:border-brand-azure/40 animate-fade-in-up"
            :style="{ animationDelay: `${0.1 + i * 0.06}s` }"
          >
            <div class="mb-3 flex h-10 w-10 items-center justify-center rounded-lg border border-brand-azure/30 bg-brand-azure/10">
              <SvgIcon :name="a.icon" :size="20" color="#5fa8d3" />
            </div>
            <h3 class="mb-1 font-serif-cn text-sm font-semibold text-ink">{{ a.name }}</h3>
            <span class="mb-2 inline-block rounded-xs border border-brand-azure/20 px-1.5 py-0.5 font-mono text-[9px] text-brand-azure">{{ a.method }}</span>
            <p class="font-sans-cn text-[11px] leading-relaxed text-ink-mute">{{ a.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- F. 权限与安全 -->
    <section id="scopes" class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-azure">SECTION 05</span>
            <span class="h-px w-16 bg-brand-azure/40" />
          </div>
          <h2 class="font-serif-cn text-2xl font-semibold text-ink md:text-3xl">权限与安全</h2>
          <p class="mt-3 max-w-2xl font-sans-cn text-sm leading-relaxed text-ink-mute">
            API Key 按权限模板签发，最小权限原则。所有 DELETE 操作被禁止，调用可审计。
          </p>
        </div>

        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div
            v-for="(t, i) in scopeTemplates"
            :key="t.name"
            class="rounded-2xl border bg-[#06101f]/90 p-6 animate-fade-in-up"
            :class="accentBorder[t.accent]"
            :style="{ animationDelay: `${0.1 + i * 0.08}s` }"
          >
            <div class="mb-3 flex items-center justify-between">
              <code class="font-mono text-sm font-semibold" :class="accentText[t.accent]">{{ t.name }}</code>
              <SvgIcon name="lock" :size="16" :color="accentColor[t.accent]" />
            </div>
            <p class="mb-3 font-sans-cn text-xs text-ink-soft">{{ t.desc }}</p>
            <div class="border-t border-hairline-soft pt-3">
              <span class="mb-1.5 block font-mono text-[9px] tracking-wider text-ink-faint">SCOPES</span>
              <p class="font-mono text-[10px] leading-relaxed text-ink-mute">{{ t.scopes }}</p>
            </div>
          </div>
        </div>

        <div class="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <div class="flex items-center gap-2 rounded-lg border border-hairline-soft bg-surface/40 px-4 py-3">
            <SvgIcon name="shield-check" :size="16" color="#3dd4a8" />
            <span class="font-sans-cn text-xs text-ink-soft">API Key 禁止 DELETE</span>
          </div>
          <div class="flex items-center gap-2 rounded-lg border border-hairline-soft bg-surface/40 px-4 py-3">
            <SvgIcon name="shield-alert" :size="16" color="#f0b85a" />
            <span class="font-sans-cn text-xs text-ink-soft">高影响操作标记 requiresCare</span>
          </div>
          <div class="flex items-center gap-2 rounded-lg border border-hairline-soft bg-surface/40 px-4 py-3">
            <SvgIcon name="check-circle" :size="16" color="#5fa8d3" />
            <span class="font-sans-cn text-xs text-ink-soft">全链路调用可审计</span>
          </div>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- G. CTA -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="relative overflow-hidden rounded-2xl border border-brand-azure/50 px-8 py-12 md:px-14 md:py-16" style="background: linear-gradient(135deg, rgba(14,28,48,0.95) 0%, rgba(19,28,54,0.95) 100%);">
          <div class="pointer-events-none absolute inset-0">
            <div class="absolute right-0 top-0 h-full w-1/2 opacity-50" style="background: radial-gradient(ellipse 60% 80% at 80% 50%, rgba(95,168,211,0.22), transparent 70%);" />
          </div>
          <div class="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div class="max-w-2xl">
              <span class="eyebrow text-brand-azure" style="text-shadow: 0 0 12px rgba(95,168,211,0.5)">开始构建</span>
              <h2 class="mt-3 font-serif-cn text-2xl font-semibold leading-snug text-ink md:text-3xl">
                用一个 API Key，<span class="text-brand-azure" style="text-shadow: 0 0 16px rgba(95,168,211,0.5)">接入整个句龙</span>
              </h2>
            </div>
            <div class="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button variant="outline-gold" size="lg" @click="goArchitecture">
                <SvgIcon name="chart-network" :size="18" />
                <span>能力架构</span>
              </Button>
              <Button variant="primary-gold" size="lg" @click="goProducts">
                <SvgIcon name="layers" :size="18" />
                <span>产品体系</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.dev-page {
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

.code-block {
  box-shadow: inset 0 1px 0 rgba(95, 168, 211, 0.06);
}
.code-block pre {
  margin: 0;
}
.code-block code {
  white-space: pre;
  color: #d4cbb8;
}
</style>
