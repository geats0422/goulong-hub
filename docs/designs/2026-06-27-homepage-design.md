# 首页（`/`）实施设计文档

> 日期：2026-06-27
> 状态：草案 v1（待用户批准）
> 关联：`docs/designs/DESIGN.md`（视觉规范）、`reference/页面效果图/首页.png`

## 目标

按 `首页.png` 效果图，在空白项目中搭建 Vite + Vue 3 + TS 工程，实现句龙中枢首页的端到端渲染：顶部导航、Hero（实时终端）、数据指标条、赛博安检站、核心能力矩阵（Bento Grid）、数字生命脉络、跨越时代的桥梁、CTA Banner、Footer 九大区块。所有视觉决策遵循 `DESIGN.md` token 体系。

## 用户场景

- **访客**：从搜索引擎 / 友链进入首页，3 秒内理解"句龙 = 企业合规智能体产品矩阵"，并发现"照胆 / 文衡"两个产品。
- **潜在客户**：看到"预约演示" CTA 点击转化。
- **开发者**：点击顶部"开发者入口"图标按钮 + "查看 API/MCP 文档" 次 CTA，跳转到 `/developers`（本次不实现）。
- **企业架构师**：看完首页 → 跳转 `/products`（本次不实现）了解完整产品体系。

## 技术方案

### 脚手架

- **构建工具**：Vite 5（最新稳定版）
- **框架**：Vue 3.4+，Composition API + `<script setup>`
- **语言**：TypeScript 5.x（strict mode）
- **路由**：Vue Router 4（仅为后续多页准备，本次只配置 `/`）
- **状态**：Pinia 2（本次仅首页暂不创建 store，预留给后续全局状态）
- **样式**：Tailwind CSS 3.4（**不引入 Tailwind 4**，稳定 + 兼容性好）
- **图标**：lucide-vue-next（开源、轻量、与 DESIGN.md 风格契合的金线轮廓图标）

### Tailwind 配置策略

按 `DESIGN.md` 的 token 体系扩展 Tailwind config：

```ts
theme.extend.colors = {
  // 主色
  primary: { DEFAULT: '#D4A04C', bright: '#E5B96A', deep: '#A67C2E', dim: '#5C4A24' },
  // 辅色
  jade: { DEFAULT: '#1AE5C5', dim: '#0F8F7C' },
  cinnabar: { DEFAULT: '#E74C3C', dim: '#8B2E25' },
  // 表面
  canvas: { DEFAULT: '#050810', deep: '#02050B' },
  surface: { 1: '#0A1018', 2: '#0F1722', 3: '#141E2C', 4: '#1A2638' },
  // 文字
  ink: { DEFAULT: '#F5E9D4', secondary: '#D9C9A8', muted: '#B89B6E', tertiary: '#7A6A4F', disabled: '#4A4030' },
  // 状态
  success: '#1AE5C5',
  warning: '#E5B96A',
  danger: '#E74C3C',
  info: '#5BA8E5',
  online: '#3DDC97',
  // 透明色（hairline / glow）
  'gold-line': 'rgba(212,160,76,0.20)',
  'gold-line-bright': 'rgba(212,160,76,0.55)',
  'gold-glow': 'rgba(212,160,76,0.35)',
}
theme.extend.fontFamily = {
  display: ['"ZCOOL XiaoWei"', '"Source Han Serif SC"', '"Noto Serif SC"', '"Songti SC"', 'serif'],
  serif: ['"Source Han Serif SC"', '"Noto Serif SC"', '"Songti SC"', 'serif'],
  mono: ['"JetBrains Mono"', '"Fira Code"', '"Source Code Pro"', 'Consolas', 'monospace'],
  stat: ['Cinzel', '"Source Han Serif SC"', 'serif'],
}
theme.extend.boxShadow = {
  'glow-sm': '0 0 8px rgba(212,160,76,0.25)',
  'glow-md': '0 0 16px rgba(212,160,76,0.35), 0 0 32px rgba(212,160,76,0.15)',
  'glow-lg': '0 0 24px rgba(212,160,76,0.45), 0 0 48px rgba(212,160,76,0.20)',
  'card-lift': '0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(212,160,76,0.08)',
  'card-hover': '0 8px 32px rgba(0,0,0,0.75), inset 0 1px 0 rgba(212,160,76,0.15)',
}
theme.extend.borderRadius = {
  none: '0', xs: '2px', sm: '4px', md: '6px', lg: '8px', xl: '12px', pill: '9999px',
}
theme.extend.spacing = {
  section: '96px', 'section-lg': '128px',
}
```

字体通过 `index.html` 引入 Google Fonts（含中文子集）：`?family=ZCOOL+XiaoWei&family=Noto+Serif+SC:wght@400;600;700&family=JetBrains+Mono:wght@400;500;600&family=Cinzel:wght@600`。

### 暗色模式

Tailwind `darkMode: 'class'`，Hub 支持 **dark / light / system** 三态主题切换，详见 `DESIGN.md` 的"Theme System"章节。

### 全局样式

`src/assets/styles/main.css` 包含：
1. Tailwind 三层 directive
2. CSS 变量同步 DESIGN.md 关键 token（便于 Tailwind 与原生 CSS 共用）—— `:root` 定义 dark 主题，`.light` class 覆盖
3. 全局 `body` 背景、文字、字体栈
4. 自定义工具类：
   - `.scrollbar-gold`：滚动条金色化
   - `.glow-text`：金色发光文字
   - `.scanline`：终端扫描线动画（伪元素背景动画）
   - `.chamfer-btn`：按钮两端 45° 斜切（可选）
   - `.theme-transition`：所有主题相关颜色 200ms `transition-colors` 平滑切换

## 数据模型

### 终端流式输出状态

```ts
// src/types/terminal.ts
export interface TerminalLine {
  id: number
  type: 'command' | 'output' | 'status' | 'json' | 'success' | 'warning' | 'error'
  content: string
  timestamp?: string
  delay?: number  // 毫秒延迟，模拟打字机效果
}
```

预置三组"剧本"轮播（每组 8-15 行）：

```ts
// src/data/terminalScripts.ts
export const terminalScripts: TerminalLine[][] = [
  [
    { id: 1, type: 'command', content: '$ scp connect --server jurong-core', delay: 0 },
    { id: 2, type: 'output', content: '✓ connected', delay: 400 },
    { id: 3, type: 'command', content: 'POST /api/v1/review', delay: 800 },
    { id: 4, type: 'output', content: 'Content-Type: application/json', delay: 1000 },
    { id: 5, type: 'json', content: '{', delay: 1200 },
    { id: 6, type: 'json', content: '  "doc_type": "contract",', delay: 1300 },
    // ...
    { id: 12, type: 'status', content: 'risk_check ......... passed', delay: 2800 },
    { id: 13, type: 'status', content: 'compliance score ... 92 / 100', delay: 3000 },
  ],
  // ... 第二组：审计流
  // ... 第三组：模型输出流
]
```

### 数据指标条

```ts
// src/data/metrics.ts
export const heroMetrics = [
  { label: '审查任务 / 今日', value: '12,842', icon: 'FileCheck', tone: 'default' },
  { label: '拦截风险 / 今日', value: '327', icon: 'ShieldAlert', tone: 'danger' },
  { label: '合规通过率', value: '97.3%', icon: 'CheckCircle', tone: 'success' },
  { label: '平均响应', value: '1.28s', icon: 'Zap', tone: 'gold' },
]
```

### 能力矩阵数据

```ts
// src/data/capabilities.ts
export interface CapabilityCard {
  id: string
  icon: string  // lucide 图标名
  title: string
  subtitle?: string  // 标题右侧的金色弱化标签
  description: string
  badge?: { label: string; tone: 'gold' | 'jade' | 'cinnabar' | 'soft' }
  cta?: { label: string; href: string }
  variant?: 'default' | 'featured'  // featured 加金色 glow
  span?: 'col-1' | 'col-2' | 'col-3' | 'row-2'  // Bento Grid 跨格
}
```

预置 8 张卡（首页核心能力矩阵：句龙 Core / Skill·MCP·CLI / 负面清单引擎 / 可私有化部署 / 文衡 / 照胆 / 路径演进 / 集成架构）。

### 导航数据

```ts
// src/data/nav.ts
export const navItems = [
  { label: '产品体系', href: '/products' },
  { label: '能力矩阵', href: '/capabilities' },
  { label: '部署方案', href: '/deployment' },
  { label: '开发者文档', href: '/developers' },
  { label: '关于我们', href: '/about' },
]
```

## 组件树

```
App.vue
└── HomeView.vue
    ├── TheTopNav.vue               # 顶部导航
    │   ├── BrandLogo.vue           # "句龙" 衬线字标
    │   ├── NavLinks.vue            # 5 项主导航
    │   ├── ThemeToggle.vue         # 主题切换按钮（dark/light/system）
    │   └── NavActions.vue          # 开发者入口图标 + 预约演示 CTA
    ├── HeroSection.vue             # Hero：左文案 + 右终端
    │   ├── HeroBreadcrumb.vue      # 面包屑
    │   ├── HeroContent.vue         # 左：标题 + 副标 + 双 CTA
    │   ├── HeroTerminal.vue        # 右：实时终端模拟流
    │   │   ├── TerminalHeader.vue  # 终端顶部标签栏
    │   │   ├── TerminalBody.vue    # 流式输出区
    │   │   └── TerminalStats.vue   # 底部统计指标
    │   └── MetricsBar.vue          # 4 项 hero 指标条
    ├── CyberCheckpointSection.vue  # 赛博安检站
    │   ├── FileInputGroup.vue      # 左：3 个文件类型卡
    │   ├── CheckpointGate.vue      # 中：金色印章门
    │   └── SystemOutputGroup.vue   # 右：企业系统 + 通过/拦截分流
    ├── CapabilityMatrixSection.vue # 核心能力矩阵 (Bento Grid)
    │   ├── SectionDivider.vue      # 章节分隔线 + 印章图标
    │   └── CapabilityCard.vue      # 单张能力卡（8 个实例）
    ├── EvolutionSection.vue        # 数字生命脉络（时间轴）
    │   └── TimelineNode.vue        # 单个时间轴节点（6 个）
    ├── BridgeSection.vue           # 跨越时代的桥梁
    │   ├── LegacySystemTree.vue    # 左：老旧系统图标树
    │   ├── CoreCube3D.vue          # 中：句龙核心 3D 立方体（CSS 实现）
    │   └── OnPremCube.vue          # 右：本地部署 3D 立方体
    ├── CtaBanner.vue               # 底部 CTA Banner
    ├── SiteFooter.vue              # 全站 Footer
    │   ├── FooterBrand.vue         # 左：品牌信息
    │   ├── FooterColumns.vue       # 4 列链接组
    │   └── FooterContact.vue       # 右：二维码 + 联系方式
    └── ScrollReveal.vue            # 通用滚动揭示包装组件（IntersectionObserver）
```

## 数据流

### 终端流式输出流程

```
TerminalBody.vue (mounted)
  ↓
useTerminalStream(script) composable
  ├─ currentLineIndex: Ref<number>
  ├─ visibleLines: ComputedRef<TerminalLine[]>
  ├─ isPlaying: Ref<boolean>
  ├─ play() / pause() / reset()
  └─ setInterval(() => push next line, line.delay - prev.delay)
  ↓
v-for render visibleLines
  ├─ command → 金色 + 闪烁光标
  ├─ output  → 翠绿 ✓
  ├─ json    → 浅灰 + 等宽
  ├─ status  → 金色 + 等宽右对齐值
  ├─ success → 翠绿 passed
  └─ warning → 朱砂 warning
```

每 60 秒循环切换下一个 script（淡出当前 → 淡入下一个）。

### 主题切换流程

```
useTheme() composable
  ├─ mode: Ref<'dark' | 'light' | 'system'>
  ├─ resolvedTheme: ComputedRef<'dark' | 'light'>   # system 模式下基于 prefers-color-scheme 解析
  ├─ cycle()                                          # 点击循环 dark → light → system → dark
  └─ applyTheme()
      ├─ 写 localStorage['goulong-theme'] = mode
      ├─ mode === 'system' → window.matchMedia('(prefers-color-scheme: dark)')
      │                     true  → root.classList = 'dark'
      │                     false → root.classList = 'dark light' (light 优先覆盖)
      ├─ mode === 'dark'  → root.classList = 'dark'
      ├─ mode === 'light' → root.classList = 'dark light'
      └─ useMediaQuery 监听系统主题变化（system 模式下实时同步）

初始化：
  - App.vue setup() → useTheme().init()
  - 读取 localStorage → 没有则默认 'system'
  - 应用到 <html> class

UI 集成：
  - ThemeToggle.vue 显示当前 mode 对应图标（Sun/Moon/Monitor）
  - iconify @iconify/vue + lucide 三态切换
  - system 模式下图标右下角加 jade 小圆点指示
```

### 滚动揭示

`ScrollReveal.vue` 接收 `threshold=0.15` 的 IntersectionObserver，子节点进入视口时添加 `opacity-100 translate-y-0` class；离开时复位（但只触发一次 `once`）。

### 路由

本次只配置 `/` → `HomeView.vue`。其他路由**不创建**（避免空文件），但 Vue Router 实例保留以便后续接入。

## 接口设计

### 组件 Props 约定

所有 Section 组件接收统一的 `id` 与 `class` Props，便于锚点跳转和扩展：

```ts
defineProps<{
  id?: string
  class?: string
}>()
```

### 组件 Emits

本次首页不涉及子→父通信，所有 Section 为纯展示组件。`HeroTerminal` 通过 `defineExpose` 暴露 `play/pause/reset` 方法（预留后续嵌入父页面控制）。

## 错误处理

- **图片资源缺失**：所有产品截图、3D 立方体均用 CSS + 渐变 + SVG 占位，不依赖外部图片资源
- **字体加载失败**：CSS 已有 fallback 栈（Source Han Serif SC → Noto Serif SC → Songti SC → serif），失败时自动降级到系统衬线字体，**不弹错**
- **路由 404**：Vue Router 配置 catch-all → 重定向到 `/`
- **终端状态错乱**：`useTerminalStream` 内置 cleanup，`onUnmounted` 清空 setInterval

## 测试策略

本次首页为**纯展示型营销页**，按项目 `rules/frontend.md` 优先级：
- **单元测试**：
  - `useTerminalStream` composable（验证流式输出顺序、时间间隔、cleanup）
  - `useTheme` composable（验证 cycle 顺序、localStorage 读写、system 模式媒体查询监听）
- **端到端测试**：跳过（营销页视觉验证靠人工 + 设计稿比对）
- **类型检查**：`vue-tsc --noEmit` 必须通过
- **Lint**：`eslint .` 必须通过

测试框架：Vitest（Vite 原生支持，零配置）。

## 实施步骤（粗粒度）

1. **脚手架初始化**：`npm create vite@latest . -- --template vue-ts` → 装 Tailwind / Vue Router / Pinia / lucide-vue-next / @vueuse/core
2. **Tailwind 配置**：扩展 `tailwind.config.ts` 同步 DESIGN.md token，使用 CSS 变量双轨策略
3. **全局样式**：`main.css` + CSS 变量（dark 默认 + `.light` 覆盖）+ 自定义工具类
4. **字体引入**：`index.html` 加 Google Fonts link
5. **路由 + Pinia 占位**：注册 router 和 pinia（不创建 store）
6. **主题 composable**：`src/composables/useTheme.ts`（cycle / apply / watch system）
7. **数据层**：`src/data/{nav,metrics,capabilities,terminalScripts}.ts` + `src/types/terminal.ts`
8. **基础组件**：先做 `SectionDivider.vue` + `ScrollReveal.vue` + `BrandLogo.vue` + `ThemeToggle.vue`
9. **章节组件**（自上而下）：
   - `TheTopNav.vue`（最复杂，因为 sticky + 玻璃质感 + 主题切换集成）
   - `HeroSection.vue` + `HeroTerminal.vue` + `useTerminalStream.ts`
   - `MetricsBar.vue`（复用于 hero 和底部）
   - `CyberCheckpointSection.vue`
   - `CapabilityMatrixSection.vue` + `CapabilityCard.vue`（Bento Grid）
   - `EvolutionSection.vue` + `TimelineNode.vue`
   - `BridgeSection.vue` + 3D 立方体 CSS 实现
   - `CtaBanner.vue`
   - `SiteFooter.vue` + Footer 三块
10. **页面装配**：`HomeView.vue` 串起所有 Section
11. **响应式打磨**：768px / 1024px / 1440px 三档断点调试
12. **主题切换打磨**：dark / light / system 三态切换无闪烁；终端控制台在两主题下保持暗色
13. **类型检查 + Lint + 构建**：`vue-tsc + eslint + vite build` 三连通过

## 已知风险

1. **Google Fonts 国内访问**：如用户部署在内网，可能需要本地化字体 → 后期可切换 `@fontsource` 方案
2. **3D 立方体 CSS 实现**：纯 CSS 3D 兼容性 IE11 不可用（项目本身已放弃 IE），无需担心
3. **Bento Grid 跨格**：Tailwind 默认 grid-cols-* 不支持跨格自适应 → 用 `col-span-{n}` 显式标注
4. **终端流式输出性能**：长 JSON 行频繁更新 DOM → 用 `v-for` + 稳定 `:key` + 限制最大可见行数（超过 30 行就移除头部）
5. **中文字体加载性能**：Source Han Serif SC 字体文件大（~5MB），首屏可能 FOUT → 用 `font-display: swap` 接受视觉抖动，但加 `.font-loading` class 在加载完成前降低对比度
6. **主题切换闪烁**：首屏渲染时若 localStorage 已存 light 主题，但 CSS 变量默认值是 dark，会出现一闪而过的深色背景 → 在 `index.html` 的 `<head>` 内嵌入同步脚本（避免 Vue 启动延迟），立即读取 localStorage 设置 class
7. **亮色主题下金主色对比度**：浅色背景下 #B58A35 在 surface-1 上的对比度为 5.2:1，满足 AA 但未达 AAA → 重要文字使用 `primary-deep` (#8E6A20) 可升至 7.1:1
8. **system 模式 + 浏览器默认深色**：用户可能没主动设置但浏览器默认深色 → useMediaQuery 初始读取 `prefers-color-scheme` 时即应用，不等 mount
