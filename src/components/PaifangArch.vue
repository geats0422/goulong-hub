<script setup lang="ts">
withDefaults(defineProps<{
  width?: number
  height?: number
  withGlow?: boolean
}>(), {
  width: 280,
  height: 260,
  withGlow: true,
})
</script>

<template>
  <div class="inline-block" :style="{ filter: withGlow ? 'drop-shadow(0 0 15px rgba(212,168,90,0.6)) drop-shadow(0 0 35px rgba(212,168,90,0.25))' : 'none' }">
    <svg :width="width" :height="height" viewBox="0 0 280 260" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pfGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f0d198"/>
          <stop offset="50%" stop-color="#d4a85a"/>
          <stop offset="100%" stop-color="#a8843f"/>
        </linearGradient>
        <linearGradient id="pfShield" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="rgba(240,209,152,0.3)"/>
          <stop offset="100%" stop-color="rgba(168,132,63,0.05)"/>
        </linearGradient>
        <radialGradient id="pfGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(212,168,90,0.3)"/>
          <stop offset="100%" stop-color="rgba(212,168,90,0)"/>
        </radialGradient>
      </defs>

      <!-- 底部光晕 -->
      <ellipse cx="140" cy="240" rx="110" ry="14" fill="url(#pfGlow)"/>

      <g stroke="url(#pfGold)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <!-- 屋顶 - 歇山顶 -->
        <path d="M140 8 L30 50" stroke-width="2"/>
        <path d="M140 8 L250 50" stroke-width="2"/>
        <path d="M15 55 L265 55" stroke-width="2.5"/>
        <!-- 屋檐翘角 -->
        <path d="M15 55 L5 65" stroke-width="1.5"/>
        <path d="M265 55 L275 65" stroke-width="1.5"/>
        <!-- 屋脊装饰 -->
        <circle cx="140" cy="5" r="3.5" fill="#f0d198" stroke="none"/>
        <path d="M50 42 L50 30 L65 30 L65 42" fill="rgba(212,168,90,0.12)" stroke-width="1.2"/>
        <path d="M230 42 L230 30 L215 30 L215 42" fill="rgba(212,168,90,0.12)" stroke-width="1.2"/>

        <!-- 第二层屋檐 -->
        <path d="M140 18 L55 45" stroke-width="1.2" opacity="0.6"/>
        <path d="M140 18 L225 45" stroke-width="1.2" opacity="0.6"/>
        <path d="M40 48 L240 48" stroke-width="1.5" opacity="0.7"/>

        <!-- 横梁 -->
        <rect x="45" y="55" width="190" height="10" rx="1" fill="url(#pfGold)" opacity="0.2" stroke-width="1.2"/>
        <rect x="30" y="110" width="220" height="8" rx="1" fill="url(#pfGold)" opacity="0.15" stroke-width="1"/>

        <!-- 匾额 -->
        <rect x="85" y="60" width="110" height="32" rx="2" fill="rgba(212,168,90,0.08)" stroke-width="1.5"/>
        <text x="140" y="82" text-anchor="middle" fill="#f0d198" font-family="'Noto Serif SC','Songti SC',SimSun,serif" font-size="15" font-weight="700" letter-spacing="4" stroke="none">前置审核</text>

        <!-- 四柱 -->
        <line x1="50" y1="55" x2="50" y2="235" stroke-width="2"/>
        <line x1="100" y1="65" x2="100" y2="235" stroke-width="1.5"/>
        <line x1="180" y1="65" x2="180" y2="235" stroke-width="1.5"/>
        <line x1="230" y1="55" x2="230" y2="235" stroke-width="2"/>

        <!-- 柱础 -->
        <rect x="40" y="235" width="20" height="10" rx="1" stroke-width="1.2"/>
        <rect x="90" y="235" width="20" height="10" rx="1" stroke-width="1"/>
        <rect x="170" y="235" width="20" height="10" rx="1" stroke-width="1"/>
        <rect x="220" y="235" width="20" height="10" rx="1" stroke-width="1.2"/>

        <!-- 中央龙纹盾牌 -->
        <path d="M140 90 Q185 90 195 140 Q185 195 140 215 Q95 195 85 140 Q95 90 140 90Z" fill="url(#pfShield)" stroke-width="2"/>
        <!-- 盾牌内圈 -->
        <path d="M140 110 Q165 110 172 140 Q165 175 140 190 Q115 175 108 140 Q115 110 140 110Z" fill="rgba(240,209,152,0.08)" stroke-width="1.2"/>
        <!-- 龙身 -->
        <path d="M128 120 Q140 108 152 120 Q168 142 150 160 Q132 178 148 192" fill="none" stroke="#f0d198" stroke-width="2"/>
        <circle cx="128" cy="120" r="3" fill="#f0d198" stroke="none"/>
        <!-- 龙鳞 -->
        <circle cx="140" cy="135" r="1.8" fill="#d4a85a" opacity="0.6" stroke="none"/>
        <circle cx="152" cy="148" r="1.8" fill="#d4a85a" opacity="0.6" stroke="none"/>
        <circle cx="140" cy="162" r="1.8" fill="#d4a85a" opacity="0.6" stroke="none"/>
        <circle cx="148" cy="176" r="1.8" fill="#d4a85a" opacity="0.6" stroke="none"/>

        <!-- 底部基座 -->
        <path d="M20 248 L260 248" stroke-width="2"/>
        <path d="M20 248 L20 256" stroke-width="1.5"/>
        <path d="M260 248 L260 256" stroke-width="1.5"/>
        <path d="M10 256 L270 256" stroke-width="2"/>
      </g>
    </svg>
  </div>
</template>
