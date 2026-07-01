# 首页（`/`）实施计划（v2 · 精简）

> 日期：2026-06-27（v2 重写）
> 设计依据：`./DESIGN.md`（根目录，单主题暗色版本）
> 参考图：`reference/页面效果图/首页.png`
> 取代：`2026-06-27-homepage-plan.md`（含 router / 多主题 / 3D 立方体 / Vitest）
> 总任务数：18 | 预估总时长：~70 分钟

## 总览

在已有 Vite + Vue 3 + TS 骨架上集成 Tailwind CSS v3（PostCSS + autoprefixer），按 `./DESIGN.md` token 体系扩展 `tailwind.config.js`，按 `首页.png` 顺序还原 7 大区块（顶部导航 / Hero / 赛博安检站 / 核心能力矩阵 / 数字生命脉络 / 跨越桥梁 / CTA + Footer）。技术决策：**纯 CSS 动效 + Google Fonts CDN + 单主题暗色 + 无路由/无状态管理/无测试框架**。

## 前置准备

- [x] `DESIGN.md` 已批准（根目录版本）
- [x] 项目骨架已就绪（`package.json` / `vite.config.ts` / `tsconfig.json` / `index.html` / `src/main.ts` / `src/App.vue`）
- [x] `src/components/` 目录已存在但为空
- [ ] 确认 npm 可用

---

## 阶段 1：Tailwind 集成与设计 Token 同步

### 任务 1：安装 Tailwind v3 + PostCSS + autoprefixer（~3 min）
- **描述**：在现有项目中安装 Tailwind v3（不引入 v4）
- **文件**：修改 `package.json`
- **命令**：
  - `npm install -D tailwindcss@^3.4 postcss autoprefixer`
  - `npx tailwindcss init -p`（生成 `tailwind.config.js`、`postcss.config.js`）
- **验证**：`tailwind.config.js` 与 `postcss.config.js` 已生成
- **依赖**：无

### 任务 2：扩展 Tailwind config 同步 DESIGN.md Token（~5 min）
- **描述**：按根目录 `DESIGN.md` 的颜色/字体/圆角/间距/阴影 token 扩展 `tailwind.config.js`
- **文件**：修改 `tailwind.config.js`
- **关键扩展**：
  - `theme.extend.colors`：
    - 主调：`brand-gold` (#d4a85a)、`brand-gold-soft` (#e6c184)、`brand-gold-deep` (#a8843f)、`brand-gold-bg` (#1f1810)
    - 语义三色：`brand-vermilion` (#e84a4a)、`brand-jade` (#3dd4a8)、`brand-azure` (#5fa8d3)、`brand-amber` (#f0b85a)
    - 画布与表面：`canvas-deep` (#070b16)、`canvas` (#0a1020)、`canvas-soft` (#0f172e)、`surface` (#131c36)、`surface-raised` (#1a2447)
    - 描边：`hairline` (#2a3658)、`hairline-soft` (#1d2640)、`hairline-strong` (#3d4a72)
    - 文字：`ink` (#f0e8d8)、`ink-soft` (#d4cbb8)、`ink-mute` (#a89880)、`ink-faint` (#6b6354)、`on-gold` (#1a1208)、`on-dark` (#f5edd9)
  - `theme.extend.fontFamily`：
    - `serif-cn`: `['"Noto Serif SC"', '"Source Han Serif SC"', '"Songti SC"', 'SimSun', 'serif']`
    - `sans-cn`: `['"Noto Sans SC"', '"PingFang SC"', '"Microsoft YaHei"', 'system-ui', 'sans-serif']`
    - `mono`: `['"JetBrains Mono"', '"SF Mono"', 'Cascadia Code', 'Consolas', 'monospace']`
  - `theme.extend.borderRadius`：`xs:4px sm:6px md:8px lg:12px xl:16px xxl:20px pill:9999px`
  - `theme.extend.spacing`：`xxs:4px xs:8px sm:12px md:16px lg:24px xl:32px xxl:48px section:64px section-lg:96px hero:120px`
  - `theme.extend.boxShadow`：
    - `glow-gold-sm`: `0 0 16px rgba(212, 168, 90, 0.18)`
    - `glow-gold-md`: `0 0 24px rgba(212, 168, 90, 0.25)`
    - `glow-gold-lg`: `0 0 40px rgba(212, 168, 90, 0.30)`
    - `glow-vermilion`: `0 0 16px rgba(232, 74, 74, 0.15)`
    - `glow-jade`: `0 0 12px rgba(61, 212, 168, 0.30)`
    - `glow-azure`: `0 0 8px rgba(95, 168, 211, 0.50)`
  - `content`: `['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']`
- **验证**：`grep brand-gold tailwind.config.js` 输出命中
- **依赖**：任务 1

### 任务 3：创建 main.css + 全局样式 + 自定义工具类（~4 min）
- **描述**：创建 `src/assets/styles/main.css`，按 Tailwind 三层 directive + DESIGN.md 全局 body 样式 + 自定义工具类
- **文件**：创建 `src/assets/styles/main.css`
- **关键内容**：
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* 全局 body */
  html, body {
    @apply bg-canvas-deep text-ink font-sans-cn antialiased;
    font-feature-settings: "tnum";
  }
  body { line-height: 1.6; }

  /* 自定义工具类 */
  @layer utilities {
    .text-glow-gold { text-shadow: 0 0 12px rgba(212, 168, 90, 0.5); }
    .scrollbar-gold::-webkit-scrollbar { @apply w-2; }
    .scrollbar-gold::-webkit-scrollbar-thumb { @apply bg-brand-gold-deep rounded-pill; }
    .scrollbar-gold::-webkit-scrollbar-track { @apply bg-canvas-deep; }
    .eyebrow { @apply font-serif-cn text-[13px] font-medium tracking-[2px] text-brand-gold; }
    .hairline-divider { @apply border-t border-hairline; }
  }

  /* 全局背景纹理（赛博山水 + 网格） */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212, 168, 90, 0.06), transparent),
      linear-gradient(rgba(212, 168, 90, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(212, 168, 90, 0.03) 1px, transparent 1px);
    background-size: 100% 100%, 48px 48px, 48px 48px;
    pointer-events: none;
    z-index: -1;
  }

  /* 入场动画 keyframes */
  @keyframes glow-pulse { 0%,100% { opacity: 0.6; } 50% { opacity: 1; } }
  @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes scan-line { 0% { transform: translateY(-100%); } 100% { transform: translateY(100%); } }
  .animate-glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
  .animate-fade-in-up { animation: fade-in-up 0.6s ease-out both; }
  ```
- **验证**：`npm run dev` 启动后 body 背景为深蓝近黑 + 网格纹理
- **依赖**：任务 2

### 任务 4：index.html 引入 Google Fonts + 更新标题（~3 min）
- **描述**：引入 Noto Serif SC + Noto Sans SC + JetBrains Mono；改中文标题；调整 lang
- **文件**：修改 `index.html`
- **关键改动**：
  - `<html lang="zh-CN">`
  - `<title>句龙·中枢 — 工程合规智能操作系统</title>`
  - `<link rel="preconnect" href="https://fonts.googleapis.com">` + `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
  - `<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;600&family=Noto+Serif+SC:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">`
  - `<link rel="icon" type="image/svg+xml" href="/favicon.svg">`（创建 `public/favicon.svg`，内容：金色"句"字 SVG 简化版）
- **验证**：浏览器 console 无 404；HTML 渲染中文标题
- **依赖**：无

### 任务 5：在 main.ts 引入 main.css（~1 min）
- **描述**：注册全局样式
- **文件**：修改 `src/main.ts`
- **关键改动**：增加 `import './assets/styles/main.css'`
- **验证**：`npm run dev` 全局样式生效
- **依赖**：任务 3

---

## 阶段 2：基础组件

### 任务 6：通用原子组件（Button / SectionTitle / BrandLogo / MetricCard）（~5 min）
- **描述**：高频复用原子组件
- **文件**：
  - 创建 `src/components/Button.vue`：props: `variant: 'primary-gold' | 'outline-gold' | 'ghost-nav'`；渲染带样式的 `<button>` 或 `<a>`
  - 创建 `src/components/SectionTitle.vue`：props: `eyebrow: string`、`title: string`、`subtitle?: string`；eyebrow 使用 `.eyebrow` 类
  - 创建 `src/components/BrandLogo.vue`：渲染金色衬线"句龙" + 可选英文 wordmark
  - 创建 `src/components/MetricCard.vue`：props: `icon: string`、`label: string`、`value: string`、`tone?: 'default' | 'danger' | 'success' | 'gold'`；不同 tone 使用对应发光色
- **验证**：临时在 App.vue 渲染 `<MetricCard label="测试" value="12,842" />`，肉眼可见金色描边卡片
- **依赖**：任务 3

### 任务 7：状态徽章 + 进度条组件（~3 min）
- **描述**：语义状态徽章与进度条
- **文件**：
  - 创建 `src/components/StatusPill.vue`：props: `tone: 'success' | 'warning' | 'error' | 'info'`；渲染带半透明背景 + 1px 描边的徽章
  - 创建 `src/components/ProgressBar.vue`：props: `value: number` (0-100)、`tone: 'gold' | 'jade' | 'azure'`；渲染 6px 高的进度条
- **验证**：在临时页面渲染 4 种 tone 的 StatusPill，视觉对位金色 / 青绿 / 朱砂 / 天青
- **依赖**：任务 3

### 任务 8：牌坊 SVG 组件（PaifangArch）（~4 min）
- **描述**：实现 `首页.png` 赛博安检站中央的金色发光牌坊 SVG（歇山顶 + 檐柱 + 匾额），承担"前置审核屏障"语义锚点
- **文件**：创建 `src/components/PaifangArch.vue`
- **关键实现**：
  - 内联 SVG，宽 320 / 高 240，stroke `#d4a85a`，stroke-width 1.5
  - 牌坊结构：左右各 2 根柱子 + 上方歇山顶（5 段折线）+ 中央匾额（带"前置审核"文字）
  - 外发光：`filter: drop-shadow(0 0 12px rgba(212, 168, 90, 0.6))`
  - 入场动画：脉冲辉光 `animate-glow-pulse`
- **验证**：在临时页面渲染，肉眼可见金色发光牌坊轮廓
- **依赖**：任务 3

### 任务 9：终端面板组件（TerminalPanel）（~5 min）
- **描述**：Hero 右侧实时审核终端，渲染 mock 数据流
- **文件**：创建 `src/components/TerminalPanel.vue`
- **关键实现**：
  - 三组 mock 剧本（每组 8-10 行），每 8 秒循环切换
  - 逐行延迟渲染（200-400ms 间隔）
  - 行类型 → 颜色：command → 金色 / output → 青绿 / json → 灰金 / status → 金色右对齐值 / score → 朱砂
  - 顶部标签栏："句龙 Core · 实时审核运行中" + 在线指示灯（绿色闪烁点）
  - 底部合规概览：compliance score 92 / risk level: low / suggestion / trace id
- **验证**：浏览器打开 8 秒一轮切换，行逐步出现
- **依赖**：任务 6

---

## 阶段 3：区块组件

### 任务 10：顶部导航 TheTopNav（~4 min）
- **描述**：sticky 玻璃质感顶部导航
- **文件**：创建 `src/components/TheTopNav.vue`
- **关键实现**：
  - sticky top-0 z-50，半透明深色背景 `rgba(10,16,32,0.85)` + backdrop-blur(12px) + 1px hairline 底边
  - 左：BrandLogo（句龙）；中：5 项导航（产品体系 / 能力架构 / 部署方案 / 开发者文档 / 联系我们）；右：开发者入口图标按钮 + 预约演示 CTA（金色实心）
  - 导航项 hover：金色 + 1px 金线描边
- **验证**：滚动页面，背景维持半透明；hover 导航项变金
- **依赖**：任务 6

### 任务 11：Hero 区块（HeroSection + MetricsBar）（~5 min）
- **描述**：左文 + 右终端 + 底部 4 指标条
- **文件**：
  - 创建 `src/components/HeroSection.vue`：50/50 双栏布局，桌面高度 ≥ 720px
  - 创建 `src/components/MetricsBar.vue`：底部 4 个 MetricCard 横向排列
- **关键实现**：
  - 左栏：breadcrumb（首页 / 产品体系 / 句龙智能体操作系统）+ display-xl 标题（衬线中文，含金色"句龙"字样）+ body-lg 副标 + 双 CTA（查看 API/MCP 文档 + 提交智能体需求评估，金色描边）
  - 右栏：TerminalPanel
  - 底部：MetricsBar（4 项：请求数 / 拦截风险 / 合规通过率 / 平均响应）
  - 背景：渐隐到下方的赛博山水平面
- **验证**：浏览器打开，Hero 渲染完整，左右对齐
- **依赖**：任务 9、任务 6

### 任务 12：赛博安检站 CyberCheckpoint（~5 min）
- **描述**：左文件输入 + 中牌坊 + 右企业系统
- **文件**：创建 `src/components/CyberCheckpoint.vue`
- **关键实现**：
  - 顶部：SectionTitle（eyebrow: "前置审核屏障"）
  - 左：`FileInputGroup` 内联：合同文件 (.pdf/.docx) / 投标文件 (.docx/.pdf) / 审批文件 (.xlsx/.pdf)，每个含 SVG 图标 + 文件名 + 路径
  - 中：PaifangArch 居中 + 上方青绿路径标注"合规通过 ✓" + 下方朱砂路径标注"风险拦截 ✗"
  - 右：上半 3 个企业系统（OA / ERP / 合同系统，青绿勾）+ 下半 3 个拦截项（负面清单校验 / 风险拦截 / 格式一致性，朱砂警示）
  - 底部说明文案
- **验证**：浏览器渲染，牌坊居中、左右分组、三色对位
- **依赖**：任务 8、任务 7

### 任务 13：核心能力矩阵 Bento Grid（~5 min）
- **描述**：上半文衡（主内）+ 照胆（主外）平分；下半 4 个能力小卡平分
- **文件**：
  - 创建 `src/components/ProductCard.vue`：props: `name: string`、`role: string`（主内/主外）、`features: string[]`、`ctaText: string`；渲染产品大卡，含标题、副标、3-4 个 mini 数据卡、CTA 链接
  - 创建 `src/components/MiniCard.vue`：props: `title: string`、`description: string`、`icon?: string`、`ctaText?: string`；渲染能力小卡
  - 创建 `src/components/CapabilityMatrix.vue`：组合 2 个 ProductCard + 4 个 MiniCard
- **关键实现**：
  - 文衡：项目甘特图 mini 卡 + 依赖网络图 mini 卡
  - 照胆：标准对齐 + 风险评分（92）+ 风险提示 + 文档对比
  - 4 小卡：句龙 Core / Skill · MCP · CLI / 负面清单引擎 / 可私有化部署
- **验证**：浏览器渲染 6 张卡片，混排不齐整但功能区清晰
- **依赖**：任务 6

### 任务 14：数字生命脉络 EvolutionTimeline（~5 min）
- **描述**：6 阶段横向时间线 + 右侧 3 视频卡片
- **文件**：
  - 创建 `src/components/TimelineNode.vue`：六边形 SVG 图标（天青描边）+ 阶段编号 + 阶段名 + 季度标签 + 双向注解
  - 创建 `src/components/VideoCard.vue`：16:9 缩略图（中央 ▶ 播放按钮）+ 标题 + 时长 + 描述
  - 创建 `src/components/EvolutionTimeline.vue`：组合 TimelineNode × 6 + VideoCard × 3
- **关键实现**：
  - 6 阶段：阶段 1 (2023 Q1) / 阶段 2 (2023 Q3) / 阶段 3 (2024 Q1) / 阶段 3.1 (2024 Q3) / 阶段 5 (2025 Q1) / 阶段 6（未未来已来）
  - 节点连接线：天青色 1px 流光曲线
  - 视频卡片：焕羽·产品演进 (08:32) / 业务逻辑拆解 (07:45) / Build in public (06:18)
- **验证**：浏览器渲染 6 节点 + 3 视频卡对齐
- **依赖**：任务 6

### 任务 15：跨越时代的桥梁 BridgeArchitecture（~5 min）
- **描述**：左老旧系统 → 中金色句龙核心 → 右企业系统 + 本地部署 Core
- **文件**：创建 `src/components/BridgeArchitecture.vue`
- **关键实现**：
  - 左列：老旧系统接入（老旧 OA / ERP（旧版）/ 合同系统（老）/ 自建系统 / Excel），每个图标 + 名称
  - 中部：金色发光"句龙核心 · 智能合规中枢"卡片（bridge-core 样式），中央配 SVG 牌坊小图标
  - 右列：企业核心系统接入（标准 API/OpenAPI / 统一微服协议 / 实时合规校验 / 安全审计追溯）+ 末列本地部署 Core 图示（金色边框立方体 SVG）
  - 桥接线条：天青色 1px + 微辉光
- **验证**：浏览器渲染，5 节点连线流畅
- **依赖**：任务 8

### 任务 16：CTA Banner + Footer（~5 min）
- **描述**：底部 CTA Banner + 多列 Footer
- **文件**：
  - 创建 `src/components/CtaBanner.vue`：金色辉光大容器，左大标题"让句龙成为企业业务流程的合规守门人" + 双 CTA（预约演示 + 联系销售）
  - 创建 `src/components/SiteFooter.vue`：6 列布局（句龙 logo + 5 列链接组）
- **关键实现**：
  - CTA Banner：使用 `bg-surface` + 1px brand-gold-deep 描边 + glow-gold-lg
  - Footer：6 列（产品体系 / 开发者文档 / 部署咨询 / 联系合作 / 二维码占位 + ICP 备案行）
- **验证**：浏览器渲染底部 CTA + Footer
- **依赖**：任务 6

---

## 阶段 4：页面装配与验证

### 任务 17：装配 App.vue + 验证（~4 min）
- **描述**：把 7 个区块按顺序装配到 App.vue
- **文件**：修改 `src/App.vue`
- **关键改动**：
  ```vue
  <template>
    <div class="min-h-screen">
      <TheTopNav />
      <main>
        <HeroSection />
        <CyberCheckpoint />
        <CapabilityMatrix />
        <EvolutionTimeline />
        <BridgeArchitecture />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  </template>
  ```
- **验证**：`npm run dev` 打开 localhost:5173，7 大区块顺序渲染
- **依赖**：任务 10-16

### 任务 18：响应式打磨 + 构建验证（~5 min）
- **描述**：三档断点调试 + 类型检查 + 构建
- **文件**：各组件微调
- **重点**：
  - 移动端 hero 字号 56→32、双栏 → 单列堆叠
  - 平板 Bento Grid 4 列 → 2 列
  - 时间线 mobile 改纵向
  - 桌面扩展至 1440px
- **命令**：
  - `npm run build`（必须 exit 0）
- **验证**：Chrome DevTools 三档断点逐一检查；构建无错误
- **依赖**：任务 17

---

## 并行机会

- 任务 8（牌坊 SVG）+ 任务 9（终端面板）可与任务 6、7（原子组件）并行：无依赖
- 任务 10（Nav）+ 任务 11（Hero）→ 任务 12-16（区块）可拆给多个 agent 并行实现

## 风险 & 缓解

| 风险 | 概率 | 影响 | 缓解措施 |
|---|---|---|---|
| Google Fonts 国内访问失败 | 中 | 中 | 已有系统字体 fallback 栈；后期可换 `@fontsource` |
| 牌坊 SVG 细节偏离参考图 | 中 | 低 | 任务 8 完成后立即与参考图比对 |
| 终端面板动画卡顿 | 低 | 中 | 限制最大可见 30 行；用 CSS keyframes 而非 JS 频繁更新 |
| Tailwind JIT 未扫描到动态类名 | 中 | 中 | 任务 2 中 `content` 配置包含 `.vue`；后续如出现补 safelist |
| 首屏 LCP 受字体加载影响 | 中 | 中 | `font-display: swap` + 字体 preload |

## 测试策略

| 层级 | 内容 | 覆盖目标 |
|---|---|---|
| 单元测试 | 跳过（纯展示页面，无业务逻辑） | - |
| 类型检查 | `vue-tsc --noEmit` 必通过 | 全项目 |
| 构建 | `vite build` 必通过 | 全项目 |
| 视觉验证 | 浏览器目视对比 `首页.png` | 7 大区块全部还原 |

## 验收标准

- [ ] `npm run dev` 启动无报错
- [ ] 首页 7 大区块（Nav / Hero / 安检站 / Bento / 脉络 / 桥梁 / CTA + Footer）全部渲染
- [ ] 视觉与 `首页.png` 高度一致（金色唯一主调 + 衬线中文标题 + 牌坊居中）
- [ ] `npm run build` exit 0
- [ ] `vue-tsc --noEmit` 通过
- [ ] 响应式：768 / 1024 / 1440 三档断点无横向滚动条、无元素溢出

---

## 修订历史

| 版本 | 日期 | 变更 |
|---|---|---|
| v1 | 2026-06-27 | 初版（含 router / 多主题 / 3D 立方体 / Vitest，已弃用） |
| v2 | 2026-06-27 | 精简：仅 Vue + Tailwind v3 + 单主题暗色 + 纯 CSS 动效 + Google Fonts CDN，无 router/pinia/测试 |