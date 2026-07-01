<script setup lang="ts">

import SectionTitle from './SectionTitle.vue'

import SvgIcon from './SvgIcon.vue'



interface Stage {

  id: string

  num: string

  quarter: string

  title: string

}



const stages: Stage[] = [

  { id: '1', num: '阶段 1', quarter: '2023 Q1', title: '基础组件' },

  { id: '2', num: '阶段 2', quarter: '2023 Q3', title: '审核引擎' },

  { id: '3', num: '阶段 3', quarter: '2024 Q1', title: '句龙 Core' },

  { id: '3.1', num: '阶段 3.1', quarter: '2024 Q3', title: '文衡 / 照胆' },

  { id: '5', num: '阶段 5', quarter: '2025 Q1', title: 'Skill / MCP / CLI' },

  { id: '6', num: '阶段 6', quarter: '未来已来', title: '全 Agent 生态' },

]



const treeData = [

  { label: '基础组件', items: ['文档解析', '格式校验', '版本对比', '知识抽取'] },

  { label: '审核引擎', items: ['风险识别', '负面清单', '标准对齐', '权责对齐'] },

  { label: '句龙 Core', items: ['API 服务体系', '流程编排', '策略路由', '权限与审计'] },

  { label: '文衡 / 照胆', items: ['生成与规划', '合规与审核', '方案编排', '标准把关'] },

  { label: 'Skill / MCP / CLI', items: ['能力插件化', '生态可扩展', '开发部署工具'] },

  { label: '全 Agent 生态', items: ['多智能体协同', '自主决策', '持续进化'] },

]




</script>



<template>

  <section class="py-section-lg">

    <div class="container-narrow">

      <SectionTitle

        eyebrow="数字生命脉络 · 架构演进"

        title="数字生命脉络"

        subtitle="从基础组件到全 Agent 生态的持续演进路径。"

      />



      <div class="mt-10">

        <div class="flex flex-col gap-8">

          <div class="rounded-xl border border-hairline bg-surface p-5 animate-fade-in-up">

            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">

              <div v-for="node in treeData" :key="node.label" class="flex flex-col gap-2 rounded-lg border border-hairline-soft bg-canvas-soft/40 p-3">

                <div class="flex items-center gap-2">

                  <span class="w-1.5 h-1.5 rounded-pill bg-brand-gold shadow-glow-gold-sm" />

                  <span class="font-sans-cn text-xs text-ink-soft font-medium">{{ node.label }}</span>

                </div>

                <ul class="flex flex-col gap-1">

                  <li v-for="item in node.items" :key="item" class="font-sans-cn text-[10px] text-ink-mute pl-3.5 border-l border-hairline-soft">{{ item }}</li>

                </ul>

              </div>

            </div>

          </div>



          <div class="relative py-6 animate-fade-in-up" style="animation-delay: 0.15s">

            <svg class="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 640 140" preserveAspectRatio="none" fill="none">

              <defs>

                <linearGradient id="snakeLine" x1="0" y1="0" x2="1" y2="0">

                  <stop offset="0%" stop-color="#d4a85a" />

                  <stop offset="50%" stop-color="#5fa8d3" />

                  <stop offset="100%" stop-color="#d4a85a" />

                </linearGradient>

              </defs>

              <path

                d="M 40 35 Q 120 35, 150 70 Q 180 105, 260 105 Q 320 105, 360 70 Q 400 35, 480 35 Q 560 35, 600 70"

                stroke="url(#snakeLine)"

                stroke-width="2.5"

                fill="none"

                stroke-dasharray="8 10"

                class="animate-data-stream"

              />

            </svg>



            <div class="grid grid-cols-6 gap-2 relative z-10">

              <div

                v-for="(s, i) in stages"

                :key="s.id"

                class="flex flex-col items-center gap-2"

                :class="i % 2 === 0 ? '-translate-y-1' : 'translate-y-12'"

              >

                <div class="relative">

                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none">

                    <polygon points="28,4 48,15 48,41 28,52 8,41 8,15" fill="rgba(212,168,90,0.1)" stroke="#d4a85a" stroke-width="1.5" />

                    <circle cx="28" cy="28" r="4" fill="#f0d198" class="animate-glow-pulse" />

                  </svg>

                </div>

                <div class="flex flex-col items-center">

                  <span class="font-mono text-[10px] text-ink-mute">{{ s.quarter }}</span>

                  <span class="font-sans-cn text-[11px] text-ink-soft text-center leading-tight">{{ s.title }}</span>

                </div>

              </div>

            </div>

          </div>



          <div class="flex flex-wrap items-center justify-center gap-6 animate-fade-in-up" style="animation-delay: 0.25s">

            <div class="flex items-center gap-2"><SvgIcon name="cube-core" :size="16" color="#d4a85a" /><span class="font-sans-cn text-xs text-ink-soft">架构演进</span></div>

            <div class="flex items-center gap-2"><SvgIcon name="chart-network" :size="16" color="#5fa8d3" /><span class="font-sans-cn text-xs text-ink-soft">深度拆解</span></div>

            <div class="flex items-center gap-2"><SvgIcon name="layers" :size="16" color="#3dd4a8" /><span class="font-sans-cn text-xs text-ink-soft">技术共建</span></div>

            <div class="flex items-center gap-2"><SvgIcon name="shield-check" :size="16" color="#e84a4a" /><span class="font-sans-cn text-xs text-ink-soft">开放生态</span></div>

          </div>

        </div>

      </div>

    </div>

  </section>

</template>

