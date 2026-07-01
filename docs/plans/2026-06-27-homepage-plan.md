# 首页（`/`）实施计划

> 日期：2026-06-27
> 设计文档：`docs/designs/2026-06-27-homepage-design.md`
> 视觉规范：`docs/designs/DESIGN.md`
> 参考图：`reference/页面效果图/首页.png`
> 总任务数：21 | 预估总时长：~75 分钟

## 总览

在空白项目中搭建 Vite + Vue 3 + TS 工程，按 `首页.png` 实现 9 大区块（顶部导航 / Hero / 赛博安检站 / 能力矩阵 / 数字生命脉络 / 跨越桥梁 / CTA Banner / Footer）。重点：**暗 / 亮 / 系统三主题切换**、**终端流式输出模拟**、**衬线中文 + 等宽英文双字体栈**、**1px 金线替阴影**。所有视觉决策遵循 `DESIGN.md` token。

## 前置准备

- [x] `docs/designs/DESIGN.md` 已批准（包含主题系统章节）
- [x] `docs/designs/2026-06-27-homepage-design.md` 已批准
- [ ] Node 22+ / npm 11+ 已就绪（已确认）
- [ ] 工作目录为空（除 README + .gitignore + docs/）

---

## 阶段 1：脚手架与基础设施

### 任务 1：初始化 Vite + Vue 3 + TS 项目骨架（~3 min）
- **描述**：在当前目录初始化 Vite Vue+TS 项目，安装核心依赖
- **文件**：
  - 创建 `package.json`、`vite.config.ts`、`tsconfig.json`、`tsconfig.node.json`、`index.html`、`src/main.ts`、`src/App.vue`、`env.d.ts`
- **命令**：
  - `npm create vite@latest . -- --template vue-ts`
  - `npm install`
  - 删除 Vite 模板自带的 `src/components/HelloWorld.vue`、`src/style.css`、`src/assets/vue.svg`、`public/vite.svg`
- **验证**：`npm run dev` 能成功启动并显示空白页
- **依赖**：无

### 任务 2：安装运行时与开发依赖（~3 min）
- **描述**：安装路由、状态、样式、图标、工具库、测试框架
- **文件**：
  - 修改 `package.json`（添加依赖）
- **命令**：
  - `npm install vue-router@4 pinia@2 lucide-vue-next @vueuse/core`
  - `npm install -D tailwindcss@3 postcss autoprefixer vitest @vitest/ui jsdom @vue/test-utils`
  - `npx tailwindcss init -p`（生成 `tailwind.config.js`、`postcss.config.js`）
- **验证**：`package.json` 中包含上述依赖；`tailwind.config.js` 和 `postcss.config.js` 已生成
- **依赖**：任务 1

### 任务 3：扩展 Tailwind 配置 + main.css（CSS 变量双轨）（~5 min）
- **描述**：按 `DESIGN.md` token 体系扩展 Tailwind，并配置 CSS 变量支持主题切换
- **文件**：
  - 修改 `tailwind.config.js`：扩展 colors / fontFamily / boxShadow / borderRadius / spacing
  - 创建 `src/assets/styles/main.css`：CSS 变量（:root dark 默认 + .light 覆盖）、Tailwind 三层 directive、全局 body 样式、自定义工具类
- **关键 token 同步**：
  - colors: primary / jade / cinnabar / canvas / surface-1~4 / ink-* / gold-line / gold-glow / semantic-*
  - fontFamily: display / serif / mono / stat
  - boxShadow: glow-sm / glow-md / glow-lg / card-lift / card-hover
- **验证**：编写 `<div class="bg-canvas text-ink font-serif">test</div>` 测试类名生效
- **依赖**：任务 2

### 任务 4：index.html 引入 Google Fonts + 主题防闪烁脚本（~3 min）
- **描述**：引入 ZCOOL XiaoWei + Source Han Serif SC + JetBrains Mono + Cinzel；嵌入同步脚本防止亮色主题用户首屏闪烁
- **文件**：
  - 修改 `index.html`
- **关键改动**：
  - `<head>` 加 `<link rel="preconnect">` 和 Google Fonts `<link>`
  - `<script>` 同步读取 `localStorage['goulong-theme']`，立即设置 `<html class="dark|light">`
- **验证**：浏览器 console 无 404；HTML 渲染时已带正确 class
- **依赖**：任务 1

---

## 阶段 2：主题系统

### 任务 5：实现 useTheme composable（~5 min）
- **描述**：管理 dark/light/system 三态主题，localStorage 持久化，监听系统偏好
- **文件**：
  - 创建 `src/composables/useTheme.ts`
- **接口**：
  - `mode: Ref<'dark' | 'light' | 'system'>`
  - `resolvedTheme: ComputedRef<'dark' | 'light'>`
  - `cycle()`: 循环切换 dark → light → system → dark
  - `init()`: 读取 localStorage 并应用
  - 使用 `useMediaQuery('(prefers-color-scheme: dark)')` 监听 system 模式
- **验证**：单元测试覆盖 cycle 顺序、localStorage 读写、system 模式下媒体查询响应（见任务 21）
- **依赖**：任务 2（@vueuse/core）

### 任务 6：实现 ThemeToggle 组件（~3 min）
- **描述**：Sun/Moon/Monitor 三态切换按钮，system 模式下加 jade 圆点指示
- **文件**：
  - 创建 `src/components/ThemeToggle.vue`
- **关键实现**：
  - 调用 `useTheme()` 读取 mode 和 cycle
  - 图标：`Sun`（light）/ `Moon`（dark）/ `Monitor`（system）
  - system 模式：图标右下角加 2px jade 圆点（绝对定位）
  - 添加 `aria-label` 可访问性
- **验证**：在 App.vue 中临时挂载，点击三次循环三态，class 正确切换
- **依赖**：任务 5

---

## 阶段 3：数据层

### 任务 7：定义类型与静态数据（~5 min）
- **描述**：编写首页所有静态数据的 TS 类型定义和数据文件
- **文件**：
  - 创建 `src/types/terminal.ts`：`TerminalLine` 接口
  - 创建 `src/data/nav.ts`：5 项主导航
  - 创建 `src/data/metrics.ts`：hero 4 项指标
  - 创建 `src/data/capabilities.ts`：8 张能力卡（Bento Grid）
  - 创建 `src/data/terminalScripts.ts`：3 组终端剧本，每组 10-15 行
  - 创建 `src/data/evolution.ts`：6 个时间轴节点
  - 创建 `src/data/footer.ts`：footer 链接组 + 联系方式
- **验证**：所有文件通过 `vue-tsc --noEmit` 类型检查
- **依赖**：无（纯数据）

---

## 阶段 4：基础组件与 composable

### 任务 8：实现 SectionDivider + ScrollReveal + BrandLogo（~5 min）
- **描述**：三个高频复用的基础组件
- **文件**：
  - 创建 `src/components/SectionDivider.vue`：1px 金线 + 居中印章图标 + 可选标题
  - 创建 `src/components/ScrollReveal.vue`：IntersectionObserver 包装器，进入视口时淡入
  - 创建 `src/components/BrandLogo.vue`："句龙" 衬线字标（`font-display`）
- **验证**：在临时页面挂载，肉眼可见样式符合 DESIGN.md
- **依赖**：任务 3

### 任务 9：实现 useTerminalStream composable（~5 min）
- **描述**：管理终端流式输出：逐行延迟渲染、cleanup、可暂停/重置
- **文件**：
  - 创建 `src/composables/useTerminalStream.ts`
- **接口**：
  - `visibleLines: Ref<TerminalLine[]>`
  - `isPlaying: Ref<boolean>`
  - `play() / pause() / reset() / switchScript(index)`
  - 内部 `setTimeout` 链式调度，超出 30 行移除头部
- **验证**：单元测试覆盖播放顺序、时间间隔、cleanup（onUnmounted 清空定时器）
- **依赖**：任务 7

---

## 阶段 5：顶部导航

### 任务 10：实现 TheTopNav + 子组件（~5 min）
- **描述**：sticky 玻璃质感顶部导航，含主题切换、5 项导航、开发者入口图标、预约演示 CTA
- **文件**：
  - 创建 `src/components/TheTopNav.vue`：主容器，sticky top-0，backdrop-blur，scroll 监听增强背景
  - 创建 `src/components/NavLinks.vue`：5 项导航，active 态底部金线
  - 创建 `src/components/NavActions.vue`：ThemeToggle + 开发者入口图标按钮 + 预约演示主 CTA
- **验证**：滚动页面时背景透明度提升；hover 导航项变金；ThemeToggle 可切换
- **依赖**：任务 6、任务 8

---

## 阶段 6：Hero 区

### 任务 11：实现 HeroSection 全部子组件（~5 min）
- **描述**：左文案 + 右终端 + 底部 4 指标条
- **文件**：
  - 创建 `src/components/HeroBreadcrumb.vue`："首页 / 产品体系 / 句龙智能体操作系统"
  - 创建 `src/components/HeroContent.vue`：title + subtitle + 双 CTA（查看 API/MCP 文档 + 提交智能体需求评估）
  - 创建 `src/components/HeroTerminal.vue`：组合 TerminalHeader + TerminalBody + TerminalStats
  - 创建 `src/components/TerminalHeader.vue`：标签栏 + 在线指示灯
  - 创建 `src/components/TerminalBody.vue`：v-for 渲染 visibleLines，按 type 应用不同颜色类
  - 创建 `src/components/TerminalStats.vue`：右上角流式输出统计（实时审查中）
  - 创建 `src/components/HeroSection.vue`：组合以上 + MetricsBar
  - 创建 `src/components/MetricsBar.vue`：4 项指标横向排列
- **验证**：浏览器打开 `localhost:5173`，终端逐行打印 30 秒后切换剧本；指标条 4 项显示正确数字
- **依赖**：任务 9、任务 7

---

## 阶段 7：中部三个 Section

### 任务 12：实现 CyberCheckpointSection（~5 min）
- **描述**：左文件类型 → 中金色印章门 → 右企业系统
- **文件**：
  - 创建 `src/components/CyberCheckpointSection.vue`：主容器，使用 SectionDivider
  - 创建 `src/components/FileInputGroup.vue`：3 个文件类型卡（合同 .pdf/.docx、投标 .docx/.pdf、审批 .xlsx/.pdf），含图标 + 文件路径 mock
  - 创建 `src/components/CheckpointGate.vue`：中央金色印章"前置审核屏障"，含 SVG 龙纹装饰
  - 创建 `src/components/SystemOutputGroup.vue`：右上 3 个企业系统（OA/ERP/合同系统）"通过"绿色勾；右下 3 个拦截项（负面清单校验/风险拦截/格式一致性）朱砂红警示
- **验证**：左右布局正确，中间印章发光，金色/翠绿/朱砂三色按 DESIGN.md 规范分布
- **依赖**：任务 8

### 任务 13：实现 CapabilityMatrixSection + CapabilityCard（~5 min）
- **描述**：核心能力矩阵 Bento Grid（6-8 张错落卡片）
- **文件**：
  - 创建 `src/components/CapabilityCard.vue`：单张能力卡，props: title / icon / description / badge / span / variant
  - 创建 `src/components/CapabilityMatrixSection.vue`：使用 capabilities 数据渲染 Bento Grid（`grid-cols-4 col-span-{n}`）
- **关键实现**：
  - 4 列响应式：`grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
  - 跨格：`col-span-2 row-span-2` 让核心能力（如"句龙 Core"）占据 2x2
  - featured 卡加 `glow-gold-sm`
- **验证**：8 张卡正确分布；hover 时金线变亮、glow 加深
- **依赖**：任务 7、任务 8

### 任务 14：实现 EvolutionSection + TimelineNode（~5 min）
- **描述**：数字生命脉络横向时间轴（6 节点）
- **文件**：
  - 创建 `src/components/TimelineNode.vue`：单个节点，含金色印章 + 阶段编号 + 标题 + 时间
  - 创建 `src/components/EvolutionSection.vue`：横向滚动时间轴，使用 evolution 数据
- **关键实现**：
  - 移动端：横向滚动；桌面端：均分 6 列
  - 节点间连线：CSS `::before` 伪元素 + 金色 hairline
  - ScrollReveal 包装，进入视口时从下方淡入
- **验证**：6 个节点按时间顺序排列；连线连续；徽章颜色（已上线/规划中）正确
- **依赖**：任务 7、任务 8

---

## 阶段 8：底部三个区块

### 任务 15：实现 BridgeSection + 3D 立方体（~5 min）
- **描述**：跨越时代的桥梁 —— 左老旧系统 → 中句龙 Core → 右本地部署
- **文件**：
  - 创建 `src/components/LegacySystemTree.vue`：左侧 4-5 个老旧系统图标（老旧 OA / ERP 旧版 / 合同系统老 / 自建系统 Excel）
  - 创建 `src/components/CoreCube3D.vue`：中央 3D 立方体（纯 CSS `transform-style: preserve-3d` + 旋转动画）
  - 创建 `src/components/OnPremCube.vue`：右侧本地部署设备图（金色边框立方体 + 端口纹路）
  - 创建 `src/components/BridgeSection.vue`：组合三块 + 连接线 SVG
- **关键实现**：
  - CSS 3D 立方体：6 面 `transform: rotateY/X translateZ`
  - `@keyframes rotate` 缓慢旋转（30s 周期）
  - 连接线：从左树 → 中立方体 → 右部署，使用 SVG `<path stroke="rgba(212,160,76,0.4)">`
- **验证**：立方体缓慢旋转；连线流畅；左右图标对齐到中心
- **依赖**：任务 8

### 任务 16：实现 CtaBanner + SiteFooter（~5 min）
- **描述**：底部 CTA Banner + 全站 Footer
- **文件**：
  - 创建 `src/components/CtaBanner.vue`：金边大容器，背景金色 glow，文案"让句龙成为企业业务流程的合规守门人" + 双 CTA
  - 创建 `src/components/SiteFooter.vue`：主容器，5 列布局
  - 创建 `src/components/FooterBrand.vue`：左品牌信息（句龙字标 + 一句话描述 + ICP 备案号）
  - 创建 `src/components/FooterColumns.vue`：4 列链接组（产品体系 / 能力接入 / 部署与支持 / 联系我们）
  - 创建 `src/components/FooterContact.vue`：右联系卡片（二维码占位 SVG + 电话 + 邮箱 + 工作时间）
- **验证**：Footer 5 列对齐；二维码占位显示；链接 hover 变亮
- **依赖**：任务 7、任务 8

---

## 阶段 9：页面装配

### 任务 17：装配 HomeView + 路由配置（~3 min）
- **描述**：把所有 Section 串到 HomeView，配置 router
- **文件**：
  - 创建 `src/views/HomeView.vue`：依次渲染 TheTopNav + HeroSection + CyberCheckpointSection + CapabilityMatrixSection + EvolutionSection + BridgeSection + CtaBanner + SiteFooter
  - 创建 `src/router/index.ts`：createRouter + createWebHistory，仅注册 `/` → HomeView
  - 修改 `src/main.ts`：注册 router 和 pinia，导入 main.css
  - 修改 `src/App.vue`：`<RouterView />` + 在 setup() 中调用 `useTheme().init()`
- **验证**：`npm run dev` 打开 `localhost:5173`，所有 Section 顺序正确，无报错
- **依赖**：任务 10-16

---

## 阶段 10：打磨与质量门

### 任务 18：响应式打磨（~4 min）
- **描述**：三档断点（768px / 1024px / 1440px）逐一调试
- **文件**：
  - 涉及所有 Section 组件的微调（按需）
- **重点**：
  - 移动端 hero 字号 56→32、终端变静态截图占位
  - 平板 4 列 Bento → 2 列
  - 桌面 hero 区扩展至 1440px
- **验证**：Chrome DevTools 三档断点逐一目视检查；无横向滚动条
- **依赖**：任务 17

### 任务 19：主题切换打磨（~3 min）
- **描述**：验证 dark/light/system 三态切换无闪烁、终端控制台在两主题下保持暗色、卡片边框正确切换
- **文件**：
  - 涉及所有使用主题相关颜色的组件微调
- **重点**：
  - 首屏不闪烁（已由任务 4 同步脚本保证）
  - 终端区域强制使用 dark 变量（即使在 light 主题）
  - glow 在 light 主题下不溢出（`gold-glow` 透明度降低）
- **验证**：依次切换三态，目视无异常；终端始终暗色
- **依赖**：任务 18

### 任务 20：编写 composable 单测（~5 min）
- **描述**：为 useTerminalStream 和 useTheme 编写 Vitest 单测
- **文件**：
  - 创建 `src/composables/__tests__/useTerminalStream.spec.ts`
  - 创建 `src/composables/__tests__/useTheme.spec.ts`
  - 创建 `vitest.config.ts`
- **测试覆盖**：
  - useTerminalStream：顺序播放、时间间隔准确、cleanup 无残留定时器
  - useTheme：cycle 顺序、localStorage 读写、system 模式下 mediaQuery 响应
- **验证**：`npm run test:unit` 全部通过
- **依赖**：任务 5、任务 9

### 任务 21：类型检查 + Lint + 构建三连（~3 min）
- **描述**：最终质量门
- **文件**：
  - 修改 `package.json` scripts（添加 `lint`、`test:unit`、`type-check`）
  - 可能微调各文件类型问题
- **命令**：
  - `npm run type-check`（vue-tsc --noEmit）
  - `npm run lint`（eslint .）
  - `npm run test:unit`（vitest run）
  - `npm run build`（vite build）
- **验证**：四命令全部 exit code 0
- **依赖**：任务 20

---

## 并行机会

- 任务 7（数据层）可与任务 5、6（主题系统）并行：纯数据与 composable 无依赖
- 任务 12、13、14、15、16（中下部 5 个 Section）相互独立，可由 5 个 agent 并行实现

## 风险 & 缓解

| 风险 | 概率 | 影响 | 缓解措施 |
|---|---|---|---|
| Google Fonts 国内访问失败 | 中 | 中 | 任务 4 中已准备 fallback 栈；后期可换 `@fontsource` |
| Tailwind dark 变体覆盖不全 | 中 | 高 | 任务 3 中严格按 DESIGN.md 列 token；任务 19 打磨 |
| 终端流式输出性能 | 低 | 中 | 任务 9 已限制最大可见 30 行 |
| 3D 立方体旋转影响性能 | 低 | 低 | 使用 `will-change: transform` + 30s 慢速 |
| 首屏闪烁 | 中 | 中 | 任务 4 同步脚本已防；任务 19 验证 |
| 字体重叠导致 LCP > 4s | 中 | 中 | `font-display: swap` + 关键文字立即可见 |

## 测试策略

| 层级 | 内容 | 覆盖目标 |
|---|---|---|
| 单元测试 | `useTerminalStream`、`useTheme` composable | 100% 关键分支 |
| 类型检查 | `vue-tsc --noEmit` | 全项目严格模式通过 |
| Lint | `eslint .` | 0 warning |
| E2E | 跳过（营销页视觉验证靠人工比对设计稿） | - |
| 视觉验证 | 浏览器目视对比 `首页.png` | 9 大区块全部还原 |

## 验收标准

- [ ] `npm run dev` 启动无报错
- [ ] 首页 9 大区块全部渲染，视觉与 `首页.png` 高度一致
- [ ] 顶部导航 ThemeToggle 三态切换正常，class 切换无残留
- [ ] 终端区域每秒打印一行，30 秒切换剧本
- [ ] 响应式：768 / 1024 / 1440 三档断点无横向滚动条、无元素溢出
- [ ] 字体加载完成后所有 display / headline / body 文字为衬线中文
- [ ] `npm run type-check` / `lint` / `test:unit` / `build` 四命令全部通过
- [ ] 所有 Section 在暗 / 亮主题下视觉对比保持（仅明度切换，结构一致）
