<script setup lang="ts">
import { useRouter } from 'vue-router'
import SvgIcon from '../components/SvgIcon.vue'
import Button from '../components/Button.vue'

const router = useRouter()
const goHomeHash = (hash: string) => router.push({ path: '/', hash })
const goProducts = () => router.push('/products')

interface ContactCard {
  id: string
  label: string
  value: string
  href: string
  icon: string
  desc: string
  accent: 'gold' | 'azure' | 'jade'
  disabled?: boolean
}

const primaryContacts: ContactCard[] = [
  {
    id: 'business',
    label: '商务合作',
    value: 'business@goulong-ai.cn',
    href: 'mailto:business@goulong-ai.cn',
    icon: 'mail',
    desc: '私有化部署、企业合作、发票开具等商务事宜',
    accent: 'gold',
  },
  {
    id: 'support',
    label: '技术支持',
    value: 'support@goulong-ai.cn',
    href: 'mailto:support@goulong-ai.cn',
    icon: 'code',
    desc: '产品使用问题、接入集成、技术排障',
    accent: 'azure',
  },
  {
    id: 'address',
    label: '公司地址',
    value: '浙江省杭州市',
    href: '#',
    icon: 'map-pin',
    desc: '杭州焕羽格致智能科技有限公司',
    accent: 'jade',
  },
]

const feedbackChannels: ContactCard[] = [
  {
    id: 'feishu',
    label: '飞书反馈群',
    value: '待接入',
    href: '#',
    icon: 'mail',
    desc: '加入飞书群，与团队直接交流产品反馈',
    accent: 'azure',
    disabled: true,
  },
  {
    id: 'wechat',
    label: '微信群入口',
    value: '待接入',
    href: '#',
    icon: 'phone',
    desc: '扫码加入微信群，获取更新与使用答疑',
    accent: 'jade',
    disabled: true,
  },
  {
    id: 'email-feedback',
    label: '邮箱反馈',
    value: 'support@goulong-ai.cn',
    href: 'mailto:support@goulong-ai.cn?subject=句龙用户反馈',
    icon: 'mail',
    desc: '通过邮件提交产品建议与问题反馈',
    accent: 'gold',
  },
]

const products = [
  { name: '句龙 · 文衡', desc: '工程合规文档编制智能体', href: 'https://wenheng.goulong-ai.cn', icon: 'file-contract' },
  { name: '句龙 · 照胆', desc: '工程合同提交系统前初审智能体', href: 'https://zhaodan.goulong-ai.cn', icon: 'shield-check' },
]

const accentMap: Record<string, { text: string; border: string; bg: string; color: string }> = {
  gold: { text: 'text-brand-gold', border: 'border-brand-gold/40', bg: 'bg-brand-gold/10', color: '#d4a85a' },
  azure: { text: 'text-brand-azure', border: 'border-brand-azure/40', bg: 'bg-brand-azure/10', color: '#5fa8d3' },
  jade: { text: 'text-brand-jade', border: 'border-brand-jade/40', bg: 'bg-brand-jade/10', color: '#3dd4a8' },
}
</script>

<template>
  <div class="contact-page">
    <div class="cyber-grid" aria-hidden="true" />

    <!-- A. Hero -->
    <section class="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-24">
      <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(212,168,90,0.16),transparent_60%)]" />
      <div class="container-narrow relative">
        <nav class="mb-8 flex items-center gap-2 font-sans-cn text-xs text-ink-mute animate-fade-in-up">
          <a href="/" class="transition-colors hover:text-brand-gold">首页</a>
          <span class="text-ink-faint">/</span>
          <span class="text-brand-gold">联系我们</span>
        </nav>

        <div class="flex max-w-4xl flex-col gap-5 animate-fade-in-up" style="animation-delay: 0.08s">
          <span class="eyebrow text-glow-gold">CONTACT · 与句龙团队建立连接</span>
          <h1 class="font-serif-cn text-[32px] font-semibold leading-[1.15] tracking-wide text-ink sm:text-[40px] md:text-[52px]">
            联系<span class="text-brand-gold text-glow-gold">我们</span>
          </h1>
          <p class="max-w-2xl font-sans-cn text-base leading-[1.85] text-ink-soft/90 md:text-lg">
            无论是商务合作、技术支持还是产品反馈，我们都期待与你建立连接。已上线产品欢迎直接体验，本地部署与咨询服务将在枢衡上线后逐步开放。
          </p>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- B. 主要联系方式 -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-gold">SECTION 01</span>
            <span class="h-px w-16 bg-brand-gold/40" />
          </div>
          <h2 class="font-serif-cn text-2xl font-semibold text-ink md:text-3xl">主要联系方式</h2>
          <p class="mt-3 max-w-2xl font-sans-cn text-sm leading-relaxed text-ink-mute">
            按场景选择对应渠道，工作日 9:00 – 18:00 内我们会尽快回复。
          </p>
        </div>

        <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
          <a
            v-for="(c, i) in primaryContacts"
            :key="c.id"
            :href="c.href"
            :target="c.href.startsWith('http') || c.href.startsWith('mailto') ? '_blank' : undefined"
            :rel="c.href.startsWith('http') ? 'noopener noreferrer' : undefined"
            class="contact-card group relative overflow-hidden rounded-2xl border bg-surface/70 p-7 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
            :class="accentMap[c.accent].border"
            :style="{ animationDelay: `${0.1 + i * 0.08}s` }"
          >
            <div class="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full opacity-30 blur-3xl" :class="accentMap[c.accent].bg" />
            <div class="relative">
              <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border" :class="[accentMap[c.accent].border, accentMap[c.accent].bg]">
                <SvgIcon :name="c.icon" :size="26" :color="accentMap[c.accent].color" />
              </div>
              <span class="eyebrow text-[11px]" :class="accentMap[c.accent].text">{{ c.label }}</span>
              <p class="mt-2 font-mono text-lg font-semibold text-ink">{{ c.value }}</p>
              <p class="mt-2 font-sans-cn text-xs leading-relaxed text-ink-mute">{{ c.desc }}</p>
            </div>
          </a>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- C. 产品入口 -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-gold">SECTION 02</span>
            <span class="h-px w-16 bg-brand-gold/40" />
          </div>
          <h2 class="font-serif-cn text-2xl font-semibold text-ink md:text-3xl">直接体验已上线产品</h2>
          <p class="mt-3 max-w-2xl font-sans-cn text-sm leading-relaxed text-ink-mute">
            文衡与照胆均已上线，支持 MCP / Skills / CLI 被智能体调用。
          </p>
        </div>

        <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
          <a
            v-for="(p, i) in products"
            :key="p.name"
            :href="p.href"
            target="_blank"
            rel="noopener noreferrer"
            class="product-entry group flex items-center gap-5 rounded-2xl border border-brand-gold/30 bg-surface/70 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-gold/60 hover:shadow-[0_0_28px_rgba(212,168,90,0.18)] animate-fade-in-up"
            :style="{ animationDelay: `${0.1 + i * 0.08}s` }"
          >
            <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-brand-gold/40 bg-brand-gold/10">
              <SvgIcon :name="p.icon" :size="28" color="#d4a85a" />
            </div>
            <div class="min-w-0 flex-1">
              <h3 class="font-serif-cn text-lg font-semibold text-ink">{{ p.name }}</h3>
              <p class="mt-1 font-sans-cn text-xs text-ink-mute">{{ p.desc }}</p>
            </div>
            <SvgIcon name="arrow-right" :size="20" color="#d4a85a" class="shrink-0 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- D. 用户反馈 -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-gold">SECTION 03</span>
            <span class="h-px w-16 bg-brand-gold/40" />
          </div>
          <h2 class="font-serif-cn text-2xl font-semibold text-ink md:text-3xl">用户反馈</h2>
          <p class="mt-3 max-w-2xl font-sans-cn text-sm leading-relaxed text-ink-mute">
            你的反馈驱动产品迭代。社群渠道正在接入中，也可直接通过邮箱反馈。
          </p>
        </div>

        <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div
            v-for="(c, i) in feedbackChannels"
            :key="c.id"
            class="relative overflow-hidden rounded-2xl border bg-surface/60 p-6 animate-fade-in-up"
            :class="c.disabled ? 'border-hairline opacity-80' : accentMap[c.accent].border"
            :style="{ animationDelay: `${0.1 + i * 0.08}s` }"
          >
            <div v-if="c.disabled" class="pointer-events-none absolute right-3 top-3">
              <span class="status-pill status-planned">待接入</span>
            </div>
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border" :class="[accentMap[c.accent].border, accentMap[c.accent].bg]">
              <SvgIcon :name="c.icon" :size="22" :color="accentMap[c.accent].color" />
            </div>
            <h3 class="font-serif-cn text-base font-semibold" :class="c.disabled ? 'text-ink-soft' : 'text-ink'">{{ c.label }}</h3>
            <p class="mt-1 font-mono text-sm" :class="c.disabled ? 'text-ink-faint' : 'text-ink-soft'">{{ c.value }}</p>
            <p class="mt-2 font-sans-cn text-xs leading-relaxed text-ink-mute">{{ c.desc }}</p>
            <a
              v-if="!c.disabled"
              :href="c.href"
              class="mt-4 inline-flex items-center gap-1.5 font-sans-cn text-xs transition-colors"
              :class="accentMap[c.accent].text"
            >
              立即反馈 <SvgIcon name="arrow-right" :size="14" :color="accentMap[c.accent].color" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="container-narrow"><div class="gradient-divider" /></div>

    <!-- E. 公司信息 -->
    <section class="relative py-section">
      <div class="container-narrow">
        <div class="mb-10">
          <div class="mb-2 flex items-center gap-3">
            <span class="font-mono text-[11px] tracking-[0.3em] text-brand-gold">SECTION 04</span>
            <span class="h-px w-16 bg-brand-gold/40" />
          </div>
          <h2 class="font-serif-cn text-2xl font-semibold text-ink md:text-3xl">公司信息</h2>
        </div>

        <div class="grid grid-cols-1 gap-5 md:grid-cols-3">
          <div class="rounded-2xl border border-hairline bg-surface/70 p-6">
            <div class="mb-3 flex items-center gap-2">
              <SvgIcon name="building-oau" :size="18" color="#d4a85a" />
              <span class="eyebrow text-[11px] text-brand-gold">主体</span>
            </div>
            <p class="font-serif-cn text-base font-semibold text-ink">杭州焕羽格致智能科技有限公司</p>
          </div>
          <div class="rounded-2xl border border-hairline bg-surface/70 p-6">
            <div class="mb-3 flex items-center gap-2">
              <SvgIcon name="map-pin" :size="18" color="#d4a85a" />
              <span class="eyebrow text-[11px] text-brand-gold">所在地</span>
            </div>
            <p class="font-serif-cn text-base font-semibold text-ink">浙江省杭州市</p>
          </div>
          <div class="rounded-2xl border border-hairline bg-surface/70 p-6">
            <div class="mb-3 flex items-center gap-2">
              <SvgIcon name="shield-check" :size="18" color="#d4a85a" />
              <span class="eyebrow text-[11px] text-brand-gold">备案</span>
            </div>
            <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" class="font-mono text-sm text-ink-soft transition-colors hover:text-brand-gold">浙ICP备2026045389号-1</a>
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
              <span class="eyebrow text-glow-gold">与句龙同行</span>
              <h2 class="mt-3 font-serif-cn text-2xl font-semibold leading-snug text-ink md:text-3xl">
                让<span class="text-brand-gold text-glow-gold">工程合规</span>内化于流程之前
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
.contact-page {
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

.contact-card {
  backdrop-filter: blur(6px);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.contact-card:hover {
  box-shadow: 0 0 28px rgba(212, 168, 90, 0.18);
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
}
.status-planned {
  background: rgba(212, 168, 90, 0.12);
  color: #e6c184;
  border: 1px solid rgba(212, 168, 90, 0.35);
}
</style>
