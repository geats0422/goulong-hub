<script setup lang="ts">
withDefaults(defineProps<{
  width?: number
  height?: number
  withGlow?: boolean
}>(), {
  width: 360,
  height: 320,
  withGlow: true,
})
</script>

<template>
  <div
    class="inline-block"
    :class="withGlow ? 'animate-glow-pulse' : ''"
    :style="{ filter: withGlow ? 'drop-shadow(0 0 18px rgba(212, 168, 90, 0.75)) drop-shadow(0 0 40px rgba(212, 168, 90, 0.4)) drop-shadow(0 0 80px rgba(212, 168, 90, 0.15))' : 'none' }"
  >
    <svg
      :width="width"
      :height="height"
      viewBox="0 0 360 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="paifangGold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f0d198" />
          <stop offset="40%" stop-color="#d4a85a" />
          <stop offset="100%" stop-color="#a8843f" />
        </linearGradient>
        <linearGradient id="shieldGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="rgba(240,209,152,0.35)" />
          <stop offset="50%" stop-color="rgba(212,168,90,0.15)" />
          <stop offset="100%" stop-color="rgba(168,132,63,0.05)" />
        </linearGradient>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="rgba(212,168,90,0.35)" />
          <stop offset="100%" stop-color="rgba(212,168,90,0)" />
        </radialGradient>
      </defs>

      <!-- 底部发光圆盘 -->
      <ellipse cx="180" cy="290" rx="140" ry="18" fill="url(#coreGlow)" />

      <g stroke="url(#paifangGold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <!-- 顶部屋脊 -->
        <path d="M 180 15 L 55 55" />
        <path d="M 180 15 L 305 55" />
        <path d="M 25 60 L 335 60" />
        <path d="M 45 60 L 25 72" />
        <path d="M 315 60 L 335 72" />

        <!-- 歇山顶层次 -->
        <path d="M 180 0 L 75 38" />
        <path d="M 180 0 L 285 38" />
        <path d="M 35 42 L 325 42" />
        <path d="M 35 42 L 25 55" />
        <path d="M 325 42 L 335 55" />

        <!-- 屋脊兽 -->
        <circle cx="180" cy="6" r="4" fill="#f0d198" />
        <path d="M 70 38 L 70 22 L 90 22 L 90 38" fill="rgba(212,168,90,0.15)" />
        <path d="M 290 38 L 290 22 L 270 22 L 270 38" fill="rgba(212,168,90,0.15)" />

        <!-- 横梁 -->
        <rect x="55" y="60" width="250" height="12" fill="url(#paifangGold)" opacity="0.25" />
        <rect x="38" y="135" width="284" height="10" fill="url(#paifangGold)" opacity="0.2" />

        <!-- 四柱 -->
        <line x1="65" y1="60" x2="65" y2="295" />
        <line x1="128" y1="72" x2="128" y2="295" />
        <line x1="232" y1="72" x2="232" y2="295" />
        <line x1="295" y1="60" x2="295" y2="295" />

        <!-- 柱础 -->
        <rect x="53" y="295" width="24" height="12" />
        <rect x="116" y="295" width="24" height="12" />
        <rect x="220" y="295" width="24" height="12" />
        <rect x="283" y="295" width="24" height="12" />

        <!-- 中央龙纹盾牌 -->
        <path d="M 180 95 Q 230 95 242 150 Q 230 215 180 240 Q 130 215 118 150 Q 130 95 180 95 Z" fill="url(#shieldGold)" stroke-width="2.5" />
        <path d="M 180 120 Q 200 120 208 150 Q 200 185 180 198 Q 160 185 152 150 Q 160 120 180 120 Z" fill="rgba(240,209,152,0.12)" />
        <!-- 龙身 -->
        <path d="M 165 130 Q 180 115 195 130 Q 215 155 190 175 Q 165 195 185 210" fill="none" stroke="#f0d198" stroke-width="2.5" />
        <circle cx="165" cy="130" r="3.5" fill="#f0d198" />
        <!-- 龙鳞 -->
        <circle cx="180" cy="145" r="2" fill="#d4a85a" opacity="0.7" />
        <circle cx="195" cy="158" r="2" fill="#d4a85a" opacity="0.7" />
        <circle cx="180" cy="172" r="2" fill="#d4a85a" opacity="0.7" />
        <circle cx="188" cy="188" r="2" fill="#d4a85a" opacity="0.7" />

        <!-- 匾额 -->
        <rect x="118" y="72" width="124" height="38" rx="3" fill="rgba(212,168,90,0.1)" stroke-width="2" />
        <text
          x="180"
          y="98"
          text-anchor="middle"
          fill="#f0d198"
          font-family="'Noto Serif SC', 'Songti SC', SimSun, serif"
          font-size="18"
          font-weight="700"
          letter-spacing="5"
        >前置审核</text>

        <!-- 底部基座 -->
        <path d="M 25 308 L 335 308" />
        <path d="M 25 308 L 25 318" />
        <path d="M 335 308 L 335 318" />
        <path d="M 12 318 L 348 318" />
      </g>
    </svg>
  </div>
</template>
