<script setup lang="ts">

import BrandLogo from './BrandLogo.vue'

import SvgIcon from './SvgIcon.vue'



interface FooterColumn {

  title: string

  links: { label: string; href: string; icon?: string }[]

}



const columns: FooterColumn[] = [

  {

    title: '产品体系',

    links: [

      { label: '句龙 Core', href: '#', icon: 'cube-core' },

      { label: '句龙 · 文衡', href: 'https://wenheng.goulong-ai.cn/' },

      { label: '句龙 · 照胆', href: 'https://zhaodan.goulong-ai.cn/' },

      { label: '负面清单引擎', href: '#', icon: 'shield-error' },

      { label: 'Skill / MCP / CLI', href: '#', icon: 'layers' },

    ],

  },

  {

    title: '开发者文档',

    links: [

      { label: '快速开始', href: '#' },

      { label: 'API 文档', href: '#', icon: 'code' },

      { label: 'MCP 文档', href: '#' },

      { label: 'CLI 指南', href: '#', icon: 'terminal' },

      { label: '示例与 SDK', href: '#' },

    ],

  },

  {

    title: '部署咨询',

    links: [

      { label: '部署方案', href: '#' },

      { label: '本地化部署', href: '#', icon: 'cube-server' },

      { label: '安全合规', href: '#', icon: 'shield-check' },

      { label: '服务支持', href: '#' },

      { label: '常见问题', href: '#' },

    ],

  },

  {

    title: '联系合作',

    links: [

      { label: '400-888-0721', href: 'tel:400-888-0721', icon: 'phone' },

      { label: 'contact@jurong.ai', href: 'mailto:contact@jurong.ai', icon: 'mail' },

      { label: '北京市 · 海淀区', href: '#', icon: 'map-pin' },

      { label: '工作日 9:00 – 18:00', href: '#', icon: 'clock' },

    ],

  },

]

</script>



<template>

  <footer class="border-t border-hairline bg-[#02050b] pt-16 pb-10" id="footer">

    <div class="container-narrow">

      <div class="grid grid-cols-1 md:grid-cols-[1.4fr_2.6fr_1fr] gap-12">

        <div class="flex flex-col gap-5">

          <BrandLogo size="lg" />

          <p class="font-sans-cn text-sm text-ink-mute leading-relaxed max-w-xs">

            工程合规智能操作系统 · 合规前置 · 风险可控 · 流程可信

          </p>

          <div class="font-mono text-[11px] text-ink-faint tracking-wide leading-relaxed">

            © 2026 杭州焕羽格致智能科技有限公司<br />

            <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" class="hover:text-brand-gold transition-colors">浙ICP备2026045389号-1</a>

          </div>

        </div>



        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div v-for="col in columns" :key="col.title" class="flex flex-col gap-4">

            <h4 class="font-serif-cn text-sm font-semibold text-brand-gold tracking-wide">{{ col.title }}</h4>

            <ul class="flex flex-col gap-2.5">

              <li v-for="link in col.links" :key="link.label">

                <a :href="link.href" class="font-sans-cn text-[13px] text-ink-mute hover:text-brand-gold transition-colors inline-flex items-center gap-1.5">

                  <SvgIcon v-if="link.icon" :name="link.icon" :size="12" color="currentColor" />

                  {{ link.label }}

                </a>

              </li>

            </ul>

          </div>

        </div>



        <div class="flex flex-col items-center md:items-end gap-4">

          <div class="rounded-md border border-hairline bg-canvas p-3 shadow-glow-gold-sm">

            <svg width="108" height="108" viewBox="0 0 108 108" fill="none">

              <rect width="108" height="108" fill="#0a1020" />

              <g fill="#d4a85a">

                <rect x="10" y="10" width="22" height="22" />

                <rect x="76" y="10" width="22" height="22" />

                <rect x="10" y="76" width="22" height="22" />

                <rect x="14" y="14" width="14" height="14" fill="#0a1020" />

                <rect x="80" y="14" width="14" height="14" fill="#0a1020" />

                <rect x="14" y="80" width="14" height="14" fill="#0a1020" />

                <rect x="19" y="19" width="4" height="4" />

                <rect x="85" y="19" width="4" height="4" />

                <rect x="19" y="85" width="4" height="4" />

                <rect x="40" y="16" width="4" height="4" />

                <rect x="52" y="16" width="4" height="4" />

                <rect x="64" y="24" width="4" height="4" />

                <rect x="40" y="34" width="4" height="4" />

                <rect x="54" y="44" width="4" height="4" />

                <rect x="68" y="34" width="4" height="4" />

                <rect x="40" y="54" width="4" height="4" />

                <rect x="50" y="64" width="4" height="4" />

                <rect x="62" y="54" width="4" height="4" />

                <rect x="76" y="64" width="4" height="4" />

                <rect x="88" y="54" width="4" height="4" />

                <rect x="40" y="78" width="4" height="4" />

                <rect x="50" y="88" width="4" height="4" />

                <rect x="60" y="78" width="4" height="4" />

                <rect x="70" y="88" width="4" height="4" />

                <rect x="80" y="78" width="4" height="4" />

                <rect x="90" y="88" width="4" height="4" />

              </g>

            </svg>

          </div>

          <span class="font-sans-cn text-xs text-ink-mute text-center md:text-right">关注「句龙」<br />获取更多资讯</span>

        </div>

      </div>



      <div class="gradient-divider mt-14" />

      <div class="flex flex-col md:flex-row items-center justify-between gap-2 mt-5 font-mono text-[10px] text-ink-faint tracking-wider">

        <span>Build with care · Neo-Chinese Cyberpunk · 句龙·中枢</span>

        <span>Made in Beijing · 2026</span>

      </div>

    </div>

  </footer>

</template>

