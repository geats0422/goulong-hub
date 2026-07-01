<script setup lang="ts">
withDefaults(defineProps<{
  name: string
  size?: number
  color?: string
}>(), {
  size: 24,
  color: 'currentColor',
})

const paths: Record<string, string> = {
  'file-contract': 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8',
  'file-bid': 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M9 13l2 2 4-4',
  'file-approval': 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M8 13h8 M8 17h5',
  'building-oau': 'M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6',
  'building-erp': 'M3 21h18M6 21V12l6-3 6 3v9M9 21v-4h6v4',
  'building-contract': 'M3 21h18M5 21V10l7-5 7 5v11M9 21v-5h6v5',
  'shield-check': 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4',
  'shield-alert': 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M12 8v5 M12 16h.01',
  'shield-error': 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 10l6 6 M15 10l-6 6',
  'cube-core': 'M21 16.5l-9 5.5-9-5.5v-11l9-5.5 9 5.5z M12 2v11 M12 13l8.5 5.5 M3.5 18.5L12 13',
  'cube-server': 'M22 17H2M7 17v4M17 17v4M4 21h16a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2zM6 14h.01M6 17h.01',
  'cube-deploy': 'M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5z M12 8v8 M8 12h8',
  'chart-gantt': 'M3 3v18h18 M6 7h8v3H6z M6 13h12v3H6z M6 19h5v2H6z',
  'chart-network': 'M18 16a3 3 0 1 0-2.24-5 4 4 0 1 0-7.52 0 3 3 0 1 0-2.24 5 4 4 0 1 0 7.52 0 3 3 0 1 0 2.24-5zM12 12v4',
  'chart-gauge': 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 6v6l4 2',
  'chart-diff': 'M3 3v18h18 M7 8h4v8H7z M14 11h4v5h-4z',
  'logo-dragon': 'M12 2C8 2 5 5 5 9c0 3 2 5 4 6-1 1-3 2-5 1 2 3 6 4 9 3 4-1 7-4 7-8 0-4-3-7-7-7-2 0-3 1-3 3s1 3 3 3c1 0 2-1 2-2',
  'zap': 'M13 2L3 14h9l-1 8 10-12h-9l1-8z',
  'check-circle': 'M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3',
  'warning-triangle': 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z M12 9v4 M12 17h.01',
  'error-circle': 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M15 9l-6 6 M9 9l6 6',
  'arrow-right': 'M5 12h14 M12 5l7 7-7 7',
  'calendar': 'M3 4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4z M16 2v4 M8 2v4 M3 10h18',
  'phone': 'M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.92z',
  'mail': 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6',
  'map-pin': 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  'clock': 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 6v6l4 2',
  'code': 'M16 18l6-6-6-6 M8 6l-6 6 6 6',
  'terminal': 'M4 17l6-6-6-6M12 19h8',
  'layers': 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
  'cpu': 'M4 4h16v16H4z M9 9h6v6H9z M9 1v3 M15 1v3 M9 20v3 M15 20v3 M20 9h3 M20 15h3 M1 9h3 M1 15h3',
  'lock': 'M19 11H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z M7 11V7a5 5 0 0 1 10 0v4',
}
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    :stroke="color"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="shrink-0"
  >
    <path v-if="paths[name]" :d="paths[name]" />
    <slot v-else />
  </svg>
</template>
