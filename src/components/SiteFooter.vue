<script setup lang="ts">

import BrandLogo from './BrandLogo.vue'

import SvgIcon from './SvgIcon.vue'



interface FooterColumn {

  title: string

  links: { label: string; href: string; icon?: string; disabled?: boolean }[]

}



const columns: FooterColumn[] = [

  {

    title: '产品体系',

    links: [

      { label: '产品体系总览', href: '/products' },

      { label: '句龙 · 文衡', href: 'https://wenheng.goulong-ai.cn' },

      { label: '句龙 · 照胆', href: 'https://zhaodan.goulong-ai.cn' },

    ],

  },

  {

    title: '开发者文档',

    links: [

      { label: '快速开始', href: '/developers#quick-start', icon: 'zap' },

      { label: 'API文档', href: '/developers#api', icon: 'code' },

      { label: 'MCP文档', href: '/developers#mcp', icon: 'layers' },

      { label: 'CLI指南', href: '/developers#cli', icon: 'terminal' },

      { label: '示例与SDK', href: '/developers#examples-sdk', icon: 'cube-deploy' },

    ],

  },

  {

    title: '部署咨询',

    links: [

      { label: '云端托管方案', href: '#contact' },

      { label: '本地部署暂未开放', href: '#', icon: 'cube-server', disabled: true },

      { label: '后续开放咨询服务', href: '#', icon: 'calendar', disabled: true },

      { label: '安全合规', href: '#contact', icon: 'shield-check' },

      { label: '服务支持', href: 'mailto:support@goulong-ai.cn' },

    ],

  },

  {

    title: '联系合作',

    links: [

      { label: 'support@goulong-ai.cn', href: 'mailto:support@goulong-ai.cn', icon: 'mail' },

      { label: '浙江省杭州市', href: '#', icon: 'map-pin' },

      { label: '工作日 9:00 – 18:00', href: '#', icon: 'clock' },

    ],

  },

  {

    title: '用户反馈',

    links: [

      { label: '飞书反馈群（待接入）', href: '#', icon: 'mail', disabled: true },

      { label: '微信群入口（待接入）', href: '#', icon: 'phone', disabled: true },

      { label: '邮箱反馈', href: 'mailto:support@goulong-ai.cn?subject=句龙用户反馈', icon: 'mail' },

    ],

  },

]

</script>



<template>

  <footer class="border-t border-hairline bg-[#02050b] py-10" id="contact">

    <div class="container-narrow">

      <div class="grid grid-cols-1 gap-8 xl:grid-cols-[1.1fr_3.5fr]">

        <div class="flex flex-col gap-4">

          <BrandLogo size="lg" />

          <p class="font-sans-cn text-sm text-ink-mute leading-relaxed max-w-xs">

            工程合规智能操作系统 · 合规前置 · 风险可控 · 流程可信

          </p>

          <div class="font-mono text-[11px] text-ink-faint tracking-wide leading-relaxed">

            © 2026 杭州焕羽格致智能科技有限公司<br />

            <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" class="hover:text-brand-gold transition-colors">浙ICP备2026045389号-1</a>

            <span class="mx-1 text-ink-faint">·</span>

            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011002020045" target="_blank" rel="noopener noreferrer" class="hover:text-brand-gold transition-colors">浙公网安备33011002020045号</a>

          </div>

        </div>



        <div class="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 xl:grid-cols-5">

<div v-for="col in columns" :key="col.title" class="flex flex-col gap-3">

            <h4 class="font-serif-cn text-sm font-semibold text-brand-gold tracking-wide">{{ col.title }}</h4>

            <ul class="flex flex-col gap-2">

              <li v-for="link in col.links" :key="link.label">

                <span
                  v-if="link.disabled"
                  class="inline-flex cursor-not-allowed items-center gap-1.5 font-sans-cn text-[13px] text-ink-faint/80"
                >

                  <SvgIcon v-if="link.icon" :name="link.icon" :size="12" color="currentColor" />

                  {{ link.label }}

                </span>

                <a
                  v-else
                  :href="link.href"
                  :target="link.href.startsWith('http') ? '_blank' : undefined"
                  :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                  class="inline-flex items-center gap-1.5 font-sans-cn text-[13px] text-ink-mute transition-colors hover:text-brand-gold"
                >

                  <SvgIcon v-if="link.icon" :name="link.icon" :size="12" color="currentColor" />

                  {{ link.label }}

                </a>

              </li>

            </ul>

            <div v-if="col.title === '部署咨询'" class="mt-2 flex items-center gap-3 border-t border-hairline-soft pt-3">

              <div class="rounded-md border border-hairline bg-white p-1.5 shadow-glow-gold-sm">

                <img src="/goulong-wechat-qr.png" alt="句龙微信二维码" width="72" height="72" class="block h-[72px] w-[72px] rounded-sm" />

              </div>

              <span class="font-sans-cn text-[11px] leading-relaxed text-ink-mute">扫码关注「句龙」<br />获取更多资讯</span>

            </div>

          </div>

        </div>


</div>

    </div>

  </footer>

</template>

