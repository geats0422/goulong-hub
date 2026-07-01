---
version: alpha
name: Goulong-Hub-Design-Analysis
description: 句龙·中枢 — 工程合规智能操作系统的产品矩阵展示门户。设计语言建立在 Neo-Chinese Cyberpunk 美学之上：以深蓝近黑为底色（{colors.canvas-deep}），以古铜金（{colors.brand-gold}）为单一主调强调色，辅以朱砂红（{colors.brand-vermilion}）作为告警/拦截信号、青绿（{colors.brand-jade}）作为合规通过信号。版面以中国传统牌坊作为"前置审核屏障"的视觉锚点，配合 Bento Grid 核心能力矩阵与阶段时间线"数字生命脉络"，融合宋体标题的雅正与等宽数据流的科技感，建立庄重、神秘、可信的工程级合规门户气质。

colors:
  canvas-deep: "#070b16"
  canvas: "#0a1020"
  canvas-soft: "#0f172e"
  surface: "#131c36"
  surface-raised: "#1a2447"
  glass: "rgba(20, 28, 56, 0.55)"
  glass-strong: "rgba(28, 38, 72, 0.75)"
  hairline: "#2a3658"
  hairline-soft: "#1d2640"
  hairline-strong: "#3d4a72"
  brand-gold: "#d4a85a"
  brand-gold-soft: "#e6c184"
  brand-gold-deep: "#a8843f"
  brand-gold-bg: "#1f1810"
  brand-gold-tint: "#3a2e1c"
  brand-vermilion: "#e84a4a"
  brand-vermilion-soft: "#f87171"
  brand-vermilion-deep: "#b83838"
  brand-jade: "#3dd4a8"
  brand-jade-soft: "#5eead4"
  brand-jade-deep: "#1a8e6e"
  brand-azure: "#5fa8d3"
  brand-amber: "#f0b85a"
  ink: "#f0e8d8"
  ink-soft: "#d4cbb8"
  ink-mute: "#a89880"
  ink-faint: "#6b6354"
  on-gold: "#1a1208"
  on-dark: "#f5edd9"
  on-dark-muted: "rgba(245, 237, 217, 0.65)"
  semantic-success: "#3dd4a8"
  semantic-warning: "#f0b85a"
  semantic-error: "#e84a4a"
  semantic-info: "#5fa8d3"

typography:
  display-xxl:
    fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'Songti SC', SimSun, serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: 0.5px
  display-xl:
    fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'Songti SC', SimSun, serif"
    fontSize: 44px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: 0.3px
  display-lg:
    fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'Songti SC', SimSun, serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: 0.2px
  heading-xl:
    fontFamily: "'Noto Serif SC', 'Source Han Serif SC', 'Songti SC', SimSun, serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: 0.2px
  heading-lg:
    fontFamily: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: 0
  heading-md:
    fontFamily: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  heading-sm:
    fontFamily: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-lg:
    fontFamily: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0.2px
  body-md:
    fontFamily: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: 0.2px
  body-sm:
    fontFamily: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: 0.1px
  data-mono:
    fontFamily: "'JetBrains Mono', 'SF Mono', 'Cascadia Code', Consolas, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  data-mono-lg:
    fontFamily: "'JetBrains Mono', 'SF Mono', 'Cascadia Code', Consolas, monospace"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.5px
  caption:
    fontFamily: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0.2px
  micro-cap:
    fontFamily: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 1.2px
  eyebrow:
    fontFamily: "'Noto Serif SC', 'Source Han Serif SC', SimSun, serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 2px
  button-md:
    fontFamily: "'Noto Sans SC', 'PingFang SC', 'Microsoft YaHei', system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1
    letterSpacing: 0.5px

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 20px
  pill: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 64px
  section-lg: 96px
  hero: 120px
  display: 160px

components:
  button-primary-gold:
    backgroundColor: "{colors.brand-gold}"
    textColor: "{colors.on-gold}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    border: "1px solid {colors.brand-gold}"
  button-primary-gold-hover:
    backgroundColor: "{colors.brand-gold-soft}"
    border: "1px solid {colors.brand-gold-soft}"
  button-outline-gold:
    backgroundColor: "transparent"
    textColor: "{colors.brand-gold}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    border: "1px solid {colors.brand-gold}"
  button-outline-gold-hover:
    backgroundColor: "{colors.brand-gold-bg}"
    textColor: "{colors.brand-gold-soft}"
  button-ghost-nav:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  button-ghost-nav-active:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.brand-gold}"
    border: "1px solid {colors.hairline-strong}"
  nav-bar:
    backgroundColor: "rgba(10, 16, 32, 0.85)"
    textColor: "{colors.ink-soft}"
    typography: "{typography.button-md}"
    padding: "16px 48px"
    border: "0 0 1px {colors.hairline} solid"
    backdropFilter: "blur(12px)"
  card-base:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
  card-glass:
    backgroundColor: "{colors.glass}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.hairline}"
    backdropFilter: "blur(16px)"
  card-glass-gold:
    backgroundColor: "{colors.glass}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.brand-gold-deep}"
    backdropFilter: "blur(16px)"
    shadow: "0 0 24px rgba(212, 168, 90, 0.18)"
  card-feature:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline}"
  card-feature-gold-accent:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline-strong}"
    shadow: "inset 0 1px 0 rgba(212, 168, 90, 0.12)"
  card-product-wenzheng:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline-strong}"
  card-product-zhaodan:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    padding: "{spacing.xxl}"
    border: "1px solid {colors.hairline-strong}"
  card-metric:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline}"
  card-metric-vermilion:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.brand-vermilion-deep}"
    shadow: "0 0 16px rgba(232, 74, 74, 0.15)"
  card-metric-jade:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.brand-jade-deep}"
  card-stage-timeline:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
    border: "1px solid {colors.hairline}"
  card-video:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "0"
    border: "1px solid {colors.hairline}"
    overflow: "hidden"
  card-bridge-node:
    backgroundColor: "{colors.surface-raised}"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
    border: "1px solid {colors.hairline}"
  card-bridge-core:
    backgroundColor: "{colors.surface-raised}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.brand-gold-deep}"
    shadow: "0 0 32px rgba(212, 168, 90, 0.25)"
  panel-terminal:
    backgroundColor: "rgba(7, 11, 22, 0.85)"
    textColor: "{colors.ink}"
    typography: "{typography.data-mono}"
    rounded: "{rounded.lg}"
    padding: "{spacing.lg}"
    border: "1px solid {colors.hairline-strong}"
  status-pill-success:
    backgroundColor: "rgba(61, 212, 168, 0.12)"
    textColor: "{colors.brand-jade-soft}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "2px 8px"
    border: "1px solid rgba(61, 212, 168, 0.3)"
  status-pill-warning:
    backgroundColor: "rgba(240, 184, 90, 0.12)"
    textColor: "{colors.brand-amber}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "2px 8px"
    border: "1px solid rgba(240, 184, 90, 0.3)"
  status-pill-error:
    backgroundColor: "rgba(232, 74, 74, 0.12)"
    textColor: "{colors.brand-vermilion-soft}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "2px 8px"
    border: "1px solid rgba(232, 74, 74, 0.35)"
  status-pill-info:
    backgroundColor: "rgba(95, 168, 211, 0.12)"
    textColor: "{colors.brand-azure}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: "2px 8px"
    border: "1px solid rgba(95, 168, 211, 0.3)"
  badge-eyebrow-gold:
    backgroundColor: "transparent"
    textColor: "{colors.brand-gold}"
    typography: "{typography.eyebrow}"
    padding: "0"
    border: "0"
  badge-eyebrow-mute:
    backgroundColor: "transparent"
    textColor: "{colors.ink-mute}"
    typography: "{typography.eyebrow}"
    padding: "0"
    border: "0"
  link-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.brand-gold}"
    typography: "{typography.body-md}"
    padding: "0"
    textDecoration: "underline"
    textDecorationColor: "rgba(212, 168, 90, 0.4)"
  link-on-dark-muted:
    backgroundColor: "transparent"
    textColor: "{colors.ink-mute}"
    typography: "{typography.body-sm}"
    padding: "0"
  progress-bar-track:
    backgroundColor: "{colors.hairline}"
    rounded: "{rounded.pill}"
    height: "6px"
  progress-bar-fill-gold:
    backgroundColor: "{colors.brand-gold}"
    rounded: "{rounded.pill}"
    height: "6px"
    shadow: "0 0 8px rgba(212, 168, 90, 0.5)"
  progress-bar-fill-jade:
    backgroundColor: "{colors.brand-jade}"
    rounded: "{rounded.pill}"
    height: "6px"
  progress-bar-fill-azure:
    backgroundColor: "{colors.brand-azure}"
    rounded: "{rounded.pill}"
    height: "6px"
  divider-hairline:
    backgroundColor: "transparent"
    border: "0"
    borderTop: "1px solid {colors.hairline}"
    margin: "{spacing.xl} 0"
  divider-gold-glow:
    backgroundColor: "transparent"
    height: "1px"
    backgroundImage: "linear-gradient(90deg, transparent 0%, {colors.brand-gold} 50%, transparent 100%)"
    opacity: "0.6"
  footer-region:
    backgroundColor: "{colors.canvas-deep}"
    textColor: "{colors.ink-mute}"
    typography: "{typography.body-sm}"
    padding: "{spacing.section} {spacing.xxl}"
    border: "1px solid {colors.hairline} solid"
  breadcrumb-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink-mute}"
    typography: "{typography.caption}"
    padding: "0"
  breadcrumb-current:
    backgroundColor: "transparent"
    textColor: "{colors.brand-gold}"
    typography: "{typography.caption}"
    padding: "0"
  cta-banner-gold:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.xl}"
    border: "1px solid {colors.brand-gold-deep}"
    shadow: "0 0 40px rgba(212, 168, 90, 0.12)"
  qr-frame:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
    border: "1px solid {colors.hairline}"
---

## Overview

句龙·中枢是面向「句龙」产品矩阵的统一展示门户。设计语言建立在 **Neo-Chinese Cyberpunk** 美学之上——以深蓝近黑（{colors.canvas-deep}）为底色，叠加古铜金（{colors.brand-gold}）作为唯一主调强调色，并在告警/拦截位置调用朱砂红（{colors.brand-vermilion}）、在合规通过位置调用青绿（{colors.brand-jade}）。

整页以一段 **赛博山水 + 牌坊轮廓** 的全屏背景打底，将产品气质锚定在"工程级合规门户"——既古雅，又锋利。Hero 区左侧是中文化的衬线大字（"句龙：像神话传说中的'句龙'一样，为构筑工程合规筑牢地基，为企业业务流程构建最后一道合规防线"），右侧是实时审核终端（{typography.data-mono} 字体渲染流式日志、风控评分、合规概览），左下角是双 CTA（金色实心 + 金色描边）。

进入第二屏"赛博安检站"，版心中央立着一座金色发光的中国传统牌坊（{colors.brand-gold} 描边 + 辉光），左连合同文件/投标文件/审批文件三类输入，右接 OA/ERP/合同系统三类企业核心系统——上方一道青绿路径标注"合规通过 ✓"，下方一道朱砂路径标注"风险拦截 ✗"，用颜色对位承担功能对位。

第三屏"核心能力矩阵"使用 **Bento Grid** 混排：左上一"文衡（主内）"卡片为生成与规划引擎，左上一"照胆（主外）"卡片为合规与审核引擎——文衡与照胆是已有产品的对接入口，二者平分上半屏，下半屏再以 4 等分小卡（句龙 Core / Skill/MCP/CLI / 负面清单引擎 / 可私有化部署）补全能力栈。

第四屏"数字生命脉络"是阶段时间线：阶段 1（2023 Q1）→ 阶段 2（2023 Q3）→ 阶段 3（2024 Q1）→ 阶段 3.1（2024 Q3）→ 阶段 5（2025 Q1）→ 阶段 6（未来已来），每个节点六边形图标 + 阶段编号 + 季度标签，配文版/技术版双行注解。右侧是 3 张视频卡片（焕羽·产品演进 / 业务逻辑拆解 / Build in public）。

第五屏"跨越时代的桥梁"是技术架构图：左列老旧系统接入 → 中部"句龙核心 · 智能合规中枢"金色发光核心 → 右列企业核心系统接入 + 本地化部署 Core 图示。线条是青色发光流线（{colors.brand-azure} + 1px + 微辉光）。

最后一屏是 CTA Banner（"让句龙成为企业业务流程的合规守门人"）+ 预约演示 / 联系销售 双 CTA + 多列 Footer。

**Key Characteristics:**
- **深蓝近黑底色 + 金色唯一主调**：{colors.canvas-deep} + {colors.brand-gold} 是品牌唯一的视觉主轴。所有 CTA、强调、徽标、辉光皆为金色；其余颜色仅承担语义角色。
- **衬线中文标题 + 无衬线正文 + 等宽数据流**：{typography.display-xxl} → {typography.heading-xl} 用 Noto Serif SC；{typography.body-lg} → {typography.body-md} 用 Noto Sans SC；终端/数据/进度数值用 {typography.data-mono}。
- **古建筑牌坊作为"前置审核屏障"的视觉锚点**：第二屏中央的牌坊是整页的语义中心，所有文件输入 → 牌坊 → 企业系统的流向都从此处分叉。
- **Bento Grid 核心能力矩阵**：文衡（主内）+ 照胆（主外）平分上半屏；4 个能力小卡平分下半屏；混排不齐整但功能区域清晰。
- **阶段时间线"数字生命脉络"**：六边形节点 + 编号 + 季度 + 双向注解（文版/技术版），传达产品演进轨迹。
- **朱砂红 = 拦截 / 告警**，**青绿 = 合规通过**，**天青 = 桥接 / 流式**——三种语义色仅在功能位置出现，绝不作为装饰。
- **玻璃磨砂 + 金色细描边** 是所有卡片的统一范式：{colors.glass} + {colors.hairline} 或 {colors.hairline-strong} 1px 边框，必要时叠加金色辉光（0 0 24px rgba(212,168,90,0.18)）。
- **古铜金徽章 + 中文小字 eyebrow**："产品体系 / 能力架构 / 部署方案" 等章节标题上方皆有金色衬线小字眉标（{typography.eyebrow}），强化品牌仪式感。

## Colors

> **来源页面**：产品体系首页（reference/页面效果图/首页.png）。

### 主调强调 — 古铜金
- **Brand Gold**（{colors.brand-gold} — `#d4a85a`）：唯一主调强调色。用于：CTA 实心按钮背景、CTA 描边、Hero 大标题点缀、牌坊描边、章节 eyebrow、链接 on-dark、核心中枢辉光、Footer logo wordmark。
- **Brand Gold Soft**（{colors.brand-gold-soft} — `#e6c184`）：主调高亮态——按钮 hover、金色描边的浅色变体。
- **Brand Gold Deep**（{colors.brand-gold-deep} — `#a8843f`）：主调深态——描边变体、金色辉光的内核色。
- **Brand Gold BG**（{colors.brand-gold-bg} — `#1f1810`）：极深褐金——按钮 hover/pressed 背景，描边按钮的填充态。
- **Brand Gold Tint**（{colors.brand-gold-tint} — `#3a2e1c`）：金色柔化——装饰背景的填充。

### 画布与表面
- **Canvas Deep**（{colors.canvas-deep} — `#070b16`）：页面根底色——Footer、装饰性深色段、Hero 远景层。
- **Canvas**（{colors.canvas} — `#0a1020`）：主画布——页面正色背景，深蓝近黑。
- **Canvas Soft**（{colors.canvas-soft} — `#0f172e`）：画布浅态——分节背景、Hero 远景中层。
- **Surface**（{colors.surface} — `#131c36`）：卡片主表面——所有 card-* 默认底色。
- **Surface Raised**（{colors.surface-raised} — `#1a2447`）：抬高表面——bridge-node、bridge-core、hero 内嵌图表的底色。
- **Glass**（{colors.glass} — `rgba(20, 28, 56, 0.55)`）：玻璃磨砂——透明卡片底色，配合 16px backdrop-blur。
- **Glass Strong**（{colors.glass-strong} — `rgba(28, 38, 72, 0.75)`）：玻璃加深——重要面板的玻璃态。

### 语义色 — 仅承担功能对位
- **Brand Vermilion**（{colors.brand-vermilion} — `#e84a4a`）：朱砂红——风险拦截信号、告警徽章、`card-metric-vermilion` 的描边与辉光。
- **Brand Vermilion Soft**（{colors.brand-vermilion-soft} — `#f87171`）：朱砂浅态——文字态、轻微告警。
- **Brand Vermilion Deep**（{colors.brand-vermilion-deep} — `#b83838`）：朱砂深态——描边态。
- **Brand Jade**（{colors.brand-jade} — `#3dd4a8`）：青绿——合规通过信号、通过率指标、`card-metric-jade` 描边、`progress-bar-fill-jade`。
- **Brand Jade Soft**（{colors.brand-jade-soft} — `#5eead4`）：青绿浅态——通过文字、徽章字符。
- **Brand Jade Deep**（{colors.brand-jade-deep} — `#1a8e6e`）：青绿深态——描边态。
- **Brand Azure**（{colors.brand-azure} — `#5fa8d3`）：天青——桥接流线、流式数据、阶段时间线底色、终端日志辅助色。
- **Brand Amber**（{colors.brand-amber} — `#f0b85a`）：琥珀——次级告警、待办警示。

### 描边与分割
- **Hairline**（{colors.hairline} — `#2a3658`）：1px 描边主色——卡片默认描边、表格边线、分隔线。
- **Hairline Soft**（{colors.hairline-soft} — `#1d2640`）：柔化描边——表内分割线。
- **Hairline Strong**（{colors.hairline-strong} — `#3d4a72`）：加强描边——重要卡片、强调面板、终端窗口。

### 文字
- **Ink**（{colors.ink} — `#f0e8d8`）：正文主色——暖白略带米色。
- **Ink Soft**（{colors.ink-soft} — `#d4cbb8`）：次要正文。
- **Ink Mute**（{colors.ink-mute} — `#a89880`）：辅助文字、Footer 链接、徽标小字、breadcrumb。
- **Ink Faint**（{colors.in-faint} — `#6b6354`）：极弱文字、占位符、关闭态。
- **On Gold**（{colors.on-gold} — `#1a1208`）：金底色上的文字（CTA 按钮 label）。
- **On Dark**（{colors.on-dark} — `#f5edd9`）：深底上的纯文字（hero 终端、牌坊内文字）。
- **On Dark Muted**（{colors.on-dark-muted} — `rgba(245, 237, 217, 0.65)`）：深底上的弱化文字。

### 语义总览
- **Semantic Success**（{colors.semantic-success}）：直接复用 {colors.brand-jade}。
- **Semantic Warning**（{colors.semantic-warning}）：直接复用 {colors.brand-amber}。
- **Semantic Error**（{colors.semantic-error}）：直接复用 {colors.brand-vermilion}。
- **Semantic Info**（{colors.semantic-info}）：直接复用 {colors.brand-azure}。

## Typography

### Font Family

**衬线中文（标题层）**：Noto Serif SC（思源宋体）作为主衬线，回退到 Source Han Serif SC、Songti SC、SimSun。用于 display-xxl / display-xl / display-lg / heading-xl / eyebrow，承担品牌仪式感与古雅气质。

**无衬线中文（正文与 UI）**：Noto Sans SC（思源黑体）作为主无衬线，回退到 PingFang SC、Microsoft YaHei、system-ui、sans-serif。用于 heading-lg 以下所有 UI 文本，承担可读性。

**等宽英文（数据流与终端）**：JetBrains Mono 作为主等宽，回退到 SF Mono、Cascadia Code、Consolas、monospace。用于 data-mono、data-mono-lg、panel-terminal，承担科技感与数据可信感。

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xxl}` | 56px | 600 | 1.15 | 0.5px | Hero 主标题 |
| `{typography.display-xl}` | 44px | 600 | 1.2 | 0.3px | 章节主标题（如"核心能力矩阵"） |
| `{typography.display-lg}` | 36px | 600 | 1.25 | 0.2px | 卡片主标题（如"句龙 Core"） |
| `{typography.heading-xl}` | 28px | 600 | 1.3 | 0.2px | 二级章节标题（如"跨越时代的桥梁"） |
| `{typography.heading-lg}` | 22px | 600 | 1.35 | 0 | 子标题、CTA banner 标题 |
| `{typography.heading-md}` | 18px | 600 | 1.4 | 0 | 卡片副标题、tab 标签 |
| `{typography.heading-sm}` | 16px | 600 | 1.4 | 0 | 行内强调、表头 |
| `{typography.body-lg}` | 16px | 400 | 1.7 | 0.2px | Hero 副标题、长段落 |
| `{typography.body-md}` | 14px | 400 | 1.7 | 0.2px | 正文默认 |
| `{typography.body-sm}` | 13px | 400 | 1.6 | 0.1px | 辅助说明 |
| `{typography.data-mono}` | 14px | 400 | 1.5 | 0 | 终端日志、代码、key-value |
| `{typography.data-mono-lg}` | 28px | 600 | 1.2 | -0.5px | 大数字（如 12,842 / 327 / 92） |
| `{typography.caption}` | 12px | 400 | 1.5 | 0.2px | 标签、breadcrumb、Footer 链接 |
| `{typography.micro-cap}` | 11px | 500 | 1.4 | 1.2px | 全大写小字、版本号 |
| `{typography.eyebrow}` | 13px | 500 | 1.4 | 2px | 章节眉标（"产品体系 / 核心能力矩阵"） |
| `{typography.button-md}` | 14px | 500 | 1 | 0.5px | 按钮 label |

### Principles

- **宋体承担仪式感**：display-xxl → heading-xl 一律使用衬线中文，承载品牌古雅气质；不允许替换为无衬线。
- **正文必须 1.7 行高**：{typography.body-lg} 与 {typography.body-md} 行高统一 1.7，承担长段落可读性。
- **等宽仅用于数据**：{typography.data-mono} / {typography.data-mono-lg} 仅在终端面板、key-value 表、数据指标值、阶段编号处使用，绝不充当正文。
- **eyebrow 必须 letter-spacing 2px**：{typography.eyebrow} 的字间距是品牌仪式感的载体，统一 2px，不允许缩窄。
- **大数字启用负字距**：{typography.data-mono-lg} 在 28px 时使用 -0.5px 字距，承担数据密度的视觉紧凑。

## Layout

### Spacing System
- **Base unit**：8px（次级 4px）。token 链：`{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 64px · `{spacing.section-lg}` 96px · `{spacing.hero}` 120px · `{spacing.display}` 160px。
- **章节内边距**：Hero 使用 `{spacing.hero}` 120px 上下；普通章节 `{spacing.section-lg}` 96px；CTA / Footer `{spacing.section}` 64px。
- **卡片内边距**：feature 卡片 `{spacing.xxl}` 48px；普通卡片 `{spacing.xl}` 32px；metric 小卡 `{spacing.lg}` 24px。

### Grid & Container
- **主内容最大宽度**：1280px，左右各 48px 安全边。
- **Hero** 高度 ≥ 720px，左文 + 右终端的双栏布局（左 50% / 右 50%）。
- **核心能力矩阵** 使用 Bento Grid——文衡（主内）+ 照胆（主外）各占 50% × 60%；其下 4 个能力小卡各占 25% × 40%。
- **数字生命脉络** 左 60%（时间线）+ 右 40%（视频卡片）；视频卡片 3 列等分。
- **跨越时代的桥梁** 左 25%（老旧系统）/ 中 50%（核心中枢）/ 右 25%（企业系统）+ 末列本地部署 Core。

### Whitespace Philosophy
- **章节间大量留白**：纵向节奏保持 96px–120px，Hero 与首屏之间不留断带而是渐隐过渡到下一段。
- **Bento Grid 内间距**：混排卡片间距 24px（{spacing.lg}）。
- **永远不要紧凑**：金色仪式感品牌忌讳密集排版，宁可留白多，不可塞满。

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | 无阴影；仅 `{colors.hairline}` 1px 描边 | 默认卡片、表格行 |
| 1 (subtle) | `rgba(212, 168, 90, 0.08) 0 1px 3px` | 普通卡片 hover 轻抬 |
| 2 (card) | `rgba(7, 11, 22, 0.4) 0 8px 24px` | 浮起 feature 卡片 |
| 3 (glass) | `backdrop-filter: blur(16px)` + 1px hairline-strong | hero 内嵌终端、玻璃面板 |
| 4 (gold-glow) | `0 0 24px rgba(212, 168, 90, 0.18)` 或 `0 0 40px rgba(212, 168, 90, 0.25)` | 金色核心（牌坊、bridge-core、cta-banner-gold） |
| 5 (vermilion-glow) | `0 0 16px rgba(232, 74, 74, 0.15)` | 朱砂告警指标卡 |
| 6 (terminal) | `0 16px 48px -8px rgba(7, 11, 22, 0.6)` | Hero 终端面板 |

### Decorative Depth
- **金色辉光是品牌唯一的"浮起"语言**：所有"承担品牌仪式感"的容器（牌坊、bridge-core、cta-banner-gold）都使用金色辉光而不是普通阴影。
- **玻璃磨砂承担信息密度**：Hero 终端、glass 卡片使用 16px backdrop-blur，让深色背景下信息浮起但不沉重。
- **朱砂辉光承担告警语义**：仅在 card-metric-vermilion 等风险相关容器上启用，绝不滥用。

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | 状态徽章 (status-pill-*)、badge-tag-* |
| `{rounded.sm}` | 6px | 按钮、breadcrumb、tag |
| `{rounded.md}` | 8px | 输入、bridge-node、视频卡片、card-stage-timeline |
| `{rounded.lg}` | 12px | 主卡片、feature 卡片、metric 卡、CTA banner |
| `{rounded.xl}` | 16px | 产品大卡（文衡/照胆）、核心 feature 卡片 |
| `{rounded.xxl}` | 20px | 暂未启用，备用 |
| `{rounded.pill}` | 9999px | 进度条、tag 胶囊 |

### Geometry Philosophy
- **小圆角为主**：按钮 `{rounded.sm}`、卡片 `{rounded.lg}` 至 `{rounded.xl}`，整体保持理性、可控、克制的工程感。
- **绝不滥用大圆角**：不出现 24px 以上圆角（除品牌 logo wordmark 的局部装饰外）。
- **牌坊与古建筑装饰是例外**：金色发光描边的牌坊轮廓由 SVG 矢量绘制，不受 border-radius 约束——它本身是品牌图腾。

## Components

### 按钮

**`button-primary-gold`** — Hero 主 CTA / 关键操作。
- 背景 `{colors.brand-gold}`，文字 `{colors.on-gold}`，{typography.button-md}，`{rounded.sm}` 6px，padding `12px 24px`，1px `{colors.brand-gold}` 描边。
- hover：`button-primary-gold-hover` 背景过渡到 `{colors.brand-gold-soft}`。

**`button-outline-gold`** — 次要 CTA / Hero 备选。
- 背景透明，文字 `{colors.brand-gold}`，`{rounded.sm}` 6px，padding `12px 24px`，1px `{colors.brand-gold}` 描边。
- hover：`button-outline-gold-hover` 背景 `{colors.brand-gold-bg}`，文字 `{colors.brand-gold-soft}`。

**`button-ghost-nav`** — 顶部导航 / 顶部链接。
- 背景透明，文字 `{colors.ink-soft}`，`{rounded.sm}`，padding `8px 16px`。
- active：`button-ghost-nav-active` 背景 `{colors.surface}` + 文字 `{colors.brand-gold}` + 1px `{colors.hairline-strong}` 描边。

### 导航

**`nav-bar`** — 顶部固定导航。
- 背景 `{colors.canvas}` 的 85% 透明态（`rgba(10, 16, 32, 0.85)`），文字 `{colors.ink-soft}`，`{typography.button-md}`，padding `16px 48px`，底描边 1px `{colors.hairline}`，backdrop-filter `blur(12px)`。
- 左：句龙 logo wordmark（金色）。中：主导航（产品体系 / 能力架构 / 部署方案 / 开发者文档 / 联系我们）。右：开发者入口（描边按钮）+ 预约演示（金色实心按钮）。
- 滚动后维持玻璃态不切换样式。

### 卡片与容器

**`card-base`** — 标准内容卡片。
- 背景 `{colors.surface}`，`{rounded.lg}` 12px，padding `{spacing.xl}` 32px，1px `{colors.hairline}` 描边。

**`card-glass`** — 玻璃磨砂卡片（Hero 内嵌终端、辅助面板）。
- 背景 `{colors.glass}`，`{rounded.lg}`，padding `{spacing.xl}`，1px `{colors.hairline}` 描边，backdrop-filter `blur(16px)`。

**`card-glass-gold`** — 金色玻璃（关键信息面板 / Hero 右侧终端）。
- 背景 `{colors.glass}`，`{rounded.lg}`，padding `{spacing.xl}`，1px `{colors.brand-gold-deep}` 描边，金色辉光 `0 0 24px rgba(212, 168, 90, 0.18)`，backdrop-filter `blur(16px)`。

**`card-feature`** — 章节 feature 卡片。
- 背景 `{colors.surface}`，`{rounded.xl}` 16px，padding `{spacing.xxl}` 48px，1px `{colors.hairline}` 描边。

**`card-feature-gold-accent`** — 金色辉光 feature 卡片。
- 背景 `{colors.surface}`，`{rounded.xl}` 16px，padding `{spacing.xxl}` 48px，1px `{colors.hairline-strong}` 描边，inset 金色细线 `inset 0 1px 0 rgba(212, 168, 90, 0.12)`。

**`card-product-wenzheng` / `card-product-zhaodan`** — 文衡（主内）/ 照胆（主外）双产品大卡。
- 背景 `{colors.surface}`，`{rounded.xl}` 16px，padding `{spacing.xxl}` 48px，1px `{colors.hairline-strong}` 描边。
- 内含：产品名称 + （主内/主外）caption 副标 + 功能描述 + 多个 mini 数据卡 + `进入 [产品] 着陆页 →` 链接按钮（{typography.button-md} + 金色 link）。

**`card-metric`** — 数据指标卡（默认态）。
- 背景 `{colors.surface}`，`{rounded.lg}` 12px，padding `{spacing.lg}` 24px，1px `{colors.hairline}` 描边。
- 上：图标 + caption 标签（如"请求数 / 今日"）。下：{typography.data-mono-lg} 大数值。

**`card-metric-vermilion`** — 朱砂告警指标卡（拦截风险 / 今日）。
- 背景 `{colors.surface}`，`{rounded.lg}`，padding `{spacing.lg}`，1px `{colors.brand-vermilion-deep}` 描边，朱砂辉光 `0 0 16px rgba(232, 74, 74, 0.15)`。

**`card-metric-jade`** — 青绿通过指标卡（合规通过率 / 平均响应）。
- 背景 `{colors.surface}`，`{rounded.lg}`，padding `{spacing.lg}`，1px `{colors.brand-jade-deep}` 描边。

**`card-stage-timeline`** — 阶段时间线节点卡。
- 背景 `{colors.surface}`，`{rounded.md}` 8px，padding `{spacing.md}` 16px，1px `{colors.hairline}` 描边。
- 上：六边形图标（{colors.brand-azure} 描边发光）+ 阶段编号（{typography.micro-cap}）。中：阶段名（{typography.heading-md}）。下：季度标签（{typography.caption}）+ 注解列表（{typography.body-sm}）。

**`card-video`** — 视频卡片。
- 背景 `{colors.surface}`，`{rounded.lg}`，padding `0`，1px `{colors.hairline}` 描边，overflow hidden。
- 上：16:9 视频缩略图（含中央 ▶ 播放按钮）。下：标题（{typography.heading-md}） + 时长（{typography.data-mono} 右对齐）+ 描述（{typography.body-sm}）。

**`card-bridge-node`** — 跨越桥梁的两端节点卡。
- 背景 `{colors.surface-raised}`，`{rounded.md}`，padding `{spacing.md} {spacing.lg}`，1px `{colors.hairline}` 描边。
- 内含：图标 + 名称（{typography.body-md}）。

**`card-bridge-core`** — 跨越桥梁的中心金色核心。
- 背景 `{colors.surface-raised}`，`{rounded.lg}`，padding `{spacing.xl}`，1px `{colors.brand-gold-deep}` 描边，金色辉光 `0 0 32px rgba(212, 168, 90, 0.25)`。
- 中央：金色发光牌坊 SVG 图标 + "句龙核心 · 智能合规中枢"标题（{typography.heading-lg}）。

### 输入与表单

**`panel-terminal`** — 终端面板（Hero 右侧实时审核窗口）。
- 背景 `rgba(7, 11, 22, 0.85)`，文字 `{colors.ink}`，{typography.data-mono}，`{rounded.lg}`，padding `{spacing.lg}`，1px `{colors.hairline-strong}` 描边。
- 顶部：标题栏（"句龙 Core · 实时审核运行中"）+ 操作图标按钮组。
- 中部：流式日志（多色 key-value：青色 key、绿色 passed、琥珀 warning、红色 failed、朱砂 score 行）。
- 底部：合规概览指标行（compliance score / risk level / suggestion / trace id）。

### 状态徽章

**`status-pill-success`** — 通过状态徽章（passed / 合规通过）。
- 背景 `rgba(61, 212, 168, 0.12)`，文字 `{colors.brand-jade-soft}`，{typography.caption}，`{rounded.xs}` 4px，padding `2px 8px`，1px `rgba(61, 212, 168, 0.3)` 描边。

**`status-pill-warning`** — 告警徽章（warning / 待确认）。
- 背景 `rgba(240, 184, 90, 0.12)`，文字 `{colors.brand-amber}`，{typography.caption}，`{rounded.xs}`，padding `2px 8px`，1px `rgba(240, 184, 90, 0.3)` 描边。

**`status-pill-error`** — 错误徽章（failed / 风险拦截）。
- 背景 `rgba(232, 74, 74, 0.12)`，文字 `{colors.brand-vermilion-soft}`，{typography.caption}，`{rounded.xs}`，padding `2px 8px`，1px `rgba(232, 74, 74, 0.35)` 描边。

**`status-pill-info`** — 信息徽章（流式 / 桥接 / 提示）。
- 背景 `rgba(95, 168, 211, 0.12)`，文字 `{colors.brand-azure}`，{typography.caption}，`{rounded.xs}`，padding `2px 8px`，1px `rgba(95, 168, 211, 0.3)` 描边。

### 眉标与链接

**`badge-eyebrow-gold`** — 金色 eyebrow 眉标（章节标题上方）。
- 背景透明，文字 `{colors.brand-gold}`，{typography.eyebrow}（衬线 + letter-spacing 2px），padding `0`。
- 内容范例：`产品体系 · 能力架构 · 部署方案 · 数字生命脉络 · 跨越时代的桥梁 · 联系我们`。

**`badge-eyebrow-mute`** — 灰金 eyebrow 眉标（次级章节）。
- 背景透明，文字 `{colors.ink-mute}`，{typography.eyebrow}，padding `0`。

**`link-on-dark`** — 深底金色链接（CTA 内 / Footer 重要链接）。
- 背景透明，文字 `{colors.brand-gold}`，{typography.body-md}，padding `0`，下划线 + `text-decoration-color: rgba(212, 168, 90, 0.4)`。

**`link-on-dark-muted`** — 深底弱化链接（Footer 链接 / 弱操作）。
- 背景透明，文字 `{colors.ink-mute}`，{typography.body-sm}，padding `0`。

### 进度条

**`progress-bar-track`** + **`progress-bar-fill-gold` / `progress-bar-fill-jade` / `progress-bar-fill-azure`** — 进度条族。
- 轨道：`{colors.hairline}`，`{rounded.pill}`，height 6px。
- 填充：根据语义选择（金色 / 青绿 / 天青），`{rounded.pill}`，height 6px，金色版叠加 `0 0 8px rgba(212, 168, 90, 0.5)` 辉光。

### 分隔线

**`divider-hairline`** — 标准分隔线（章节内表格行）。
- 透明背景，无 border，border-top `1px solid {colors.hairline}`，margin `{spacing.xl}` 上下。

**`divider-gold-glow`** — 金色辉光分隔线（Footer 上方 / 章节过渡）。
- 透明背景，height 1px，`linear-gradient(90deg, transparent 0%, {colors.brand-gold} 50%, transparent 100%)`，opacity 0.6。

### 面包屑与导航辅助

**`breadcrumb-item`** + **`breadcrumb-current`** — 面包屑。
- 背景透明，文字 `{colors.ink-mute}`（{typography.caption}）；当前项 `{colors.brand-gold}` + 同 caption，分隔符用 `/`。

### CTA 与 Footer

**`cta-banner-gold`** — 底部 CTA banner（"让句龙成为企业业务流程的合规守门人"）。
- 背景 `{colors.surface}`，`{rounded.lg}`，padding `{spacing.xl}`，1px `{colors.brand-gold-deep}` 描边，金色辉光 `0 0 40px rgba(212, 168, 90, 0.12)`。
- 左：大标题 + 描述。右：预约演示（金色实心）+ 联系销售（金色描边）。

**`footer-region`** — 多列 Footer。
- 背景 `{colors.canvas-deep}`，文字 `{colors.ink-mute}`，{typography.body-sm}，padding `{spacing.section} {spacing.xxl}`，1px `{colors.hairline}` 描边。
- 列结构：句龙 logo wordmark（金色）+ 标语 / 产品体系 / 开发者文档 / 部署咨询 / 联系合作 / 二维码（联系咨询公众号）+ 备案行。

**`qr-frame`** — 二维码框架。
- 背景 `{colors.canvas}`，`{rounded.md}`，padding `{spacing.sm}`，1px `{colors.hairline}` 描边。

### 标志性组件

**古铜金牌坊 SVG** — Hero 下方"赛博安检站"章节的中央视觉锚点。
- 由 SVG 矢量绘制中国传统牌坊（歇山顶 + 檐柱 + 匾额），描边色 `{colors.brand-gold}`，stroke-width 1.5px，外发光 `0 0 32px rgba(212, 168, 90, 0.5)`，内填色透明或 `{colors.brand-gold-bg}` 极淡。
- 上方一道青绿路径（{colors.brand-jade} 1.5px + 微辉光）标注"合规通过 ✓"，下方一道朱砂路径（{colors.brand-vermilion} 1.5px + 微辉光）标注"风险拦截 ✗"。

**Bento Grid 核心能力矩阵** — 第三屏"核心能力矩阵"。
- 上半：文衡（主内）+ 照胆（主外）双卡平分（各 50% × 60%）。文衡含"项目甘特图 + 依赖网络图"，照胆含"标准对齐 + 风险评分 + 风险提示 + 文档对比"4 个 mini 卡。
- 下半：4 个能力小卡（句龙 Core / Skill · MCP · CLI / 负面清单引擎 / 可私有化部署）等分（各 25% × 40%）。

**阶段时间线（数字生命脉络）** — 第四屏。
- 横向 6 个阶段节点：阶段 1 → 阶段 2 → 阶段 3 → 阶段 3.1 → 阶段 5 → 阶段 6（未未来已来）。
- 节点图标：六边形 SVG（{colors.brand-azure} 描边 + 金色内部光点）。
- 节点之间用 `{colors.brand-azure}` 流光曲线连接，节点上下双向注解：上为产品文版，下为技术版。

**跨越桥梁架构图** — 第五屏。
- 左列：老旧系统接入（老旧 OA / ERP（旧版）/ 合同系统（老）/ 自建系统 / Excel）→ 中部：金色发光句龙核心 → 右列：企业核心系统接入（标准 API/OpenAPI / 统一微服协议 / 实时合规校验 / 安全审计追溯）+ 末列本地部署 Core 图示。
- 桥接线条：`{colors.brand-azure}` 1px + 微辉光（`0 0 6px rgba(95, 168, 211, 0.5)`）。

## Do's and Don'ts

### Do
- 始终以 `{colors.brand-gold}` 作为唯一主调强调色，承担所有 CTA、强调、徽标、辉光。
- 使用 Noto Serif SC（思源宋体）作为 display-xxl → heading-xl 的衬线中文，承载品牌仪式感。
- 让 Hero 实时审核终端使用 `{typography.data-mono}` 等宽字体，传达"工程级"的科技感。
- 用朱砂红 `{colors.brand-vermilion}` 表示拦截/告警、青绿 `{colors.brand-jade}` 表示合规通过、天青 `{colors.brand-azure}` 表示桥接/流式，绝不混用语义。
- 用 `{spacing.section-lg}` 96px 至 `{spacing.hero}` 120px 控制章节节奏，绝不紧凑。
- 让所有卡片使用 1px `{colors.hairline}` 或 `{colors.hairline-strong}` 描边 + 玻璃/金属感表面，绝不使用 0 描边的纯色块。
- 在章节标题上方使用 `{typography.eyebrow}` 金色衬线眉标（letter-spacing 2px），强化品牌仪式感。
- 让牌坊保持金色描边 + 辉光，永远是第二屏的视觉中心。
- 使用 `{typography.body-lg}` / `{typography.body-md}` 的 1.7 行高处理长段落。
- 把"文衡（主内）"与"照胆（主外）"始终平分上半屏，等权重呈现两个子产品。

### Don't
- 不要使用任何其他颜色作为主调强调色（紫、绿、蓝、红皆不可）。
- 不要把 `{colors.brand-vermilion}` / `{colors.brand-jade}` / `{colors.brand-azure}` 用作装饰色——它们只承担语义角色。
- 不要在 display-xxl / display-xl / display-lg / heading-xl 用无衬线字体。
- 不要在正文中使用 `{typography.data-mono}` 等宽字体。
- 不要把按钮圆角放大到超过 `{rounded.md}` 8px——这不是 pill 品牌。
- 不要在卡片上省略 1px `{colors.hairline}` 描边而仅靠阴影区分。
- 不要让 Hero 缺少左侧中文化大标题——它是整页仪式感的源头。
- 不要让牌坊偏离章节中央——它是"前置审核屏障"的视觉锚点。
- 不要在没有金色描边 / 金色辉光的情况下使用"核心"类语义（如"句龙核心"），金色是"核心"的视觉通行证。
- 不要把 eyebrow 字距收紧到 2px 以下——它是品牌仪式感的载体。
- 不要让 Footer 缺失金色 logo wordmark——它是品牌识别的最后一棒。

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Wide | ≥ 1440px | 完整 Bento Grid + 6 阶段时间线 + 三列视频 |
| Desktop | 1024–1439px | 完整布局但 max-width 1280px 内自适应 |
| Tablet | 768–1023px | Bento Grid 2 列，时间线改 3 + 3 折行，视频改 2 列 |
| Mobile | < 768px | 单列堆叠，Hero 文 + 终端上下排，牌坊缩小，时间线纵向，视频单列 |

### Touch Targets
- 按钮 ≥ 44×44px（padding `12px 24px` 配合 ≥14px 字号自动达成）。
- 状态徽章 `padding 2px 8px` 配合至少 11px 字号，仍保持可点击态。
- 顶部导航项 ≥ 40px 高度。

### Collapsing Strategy
- **Hero** 在 tablet 以下从 50/50 双栏 → 单列堆叠，文在上、终端在下，终端宽度撑满。
- **赛博安检站** 在 tablet 以下牌坊缩小到 60% 宽，左右文件输入/企业系统输入改 3 列 → 1 列。
- **Bento Grid** desktop 4 列 / 2 列，tablet 2 列，mobile 1 列；产品大卡始终先于能力小卡渲染。
- **数字生命脉络** 时间线 mobile 改为纵向（阶段 1 在最上、阶段 6 在最下），每个节点宽度撑满。
- **跨越桥梁** mobile 改为竖向堆叠：老旧系统 → 核心中枢 → 企业系统 → 本地部署 Core，每段之间用青色流线连接。
- **Hero 标题字号** 56 → 44 → 36 → 28 → 22。
- **Footer** 6 列 → 3 列 → 1 列，二维码在 mobile 移到顶部居中。

### Image Behavior
- 牌坊 SVG 始终保持矢量清晰度，移动端不降低描边粗细，但可缩小外发光半径。
- 视频缩略图使用 16:9 比例，移动端可切换为 4:3 以腾出版面。
- 二维码固定 96×96px，mobile 放大到 128×128px。

## Iteration Guide

1. 一次只迭代一个组件；不要批量改 token。
2. 直接引用 token 名（`{colors.brand-gold}`、`{typography.display-xxl}`、`{rounded.lg}`），不要写裸值。
3. 每次改完跑 `npx @google/design.md lint DESIGN.md` 校验。
4. 新增变体作为独立 `components:` 条目追加，不修改已有 token。
5. 正文默认 `{typography.body-md}`（14px / 1.7 行高）；终端默认 `{typography.data-mono}`（14px / 1.5 行高）。
6. 章节标题上方必加 `{typography.eyebrow}` 金色眉标，不允许遗漏。
7. 永远保留 1px 描边（`{colors.hairline}` 或 `{colors.hairline-strong}`），不允许纯色块卡片。
8. 牌坊是品牌图腾——任何文案/视觉改动都不允许偏离金色描边 + 辉光的语义。
9. 文衡（主内）与照胆（主外）永远等权重平分上半屏——这是产品矩阵对位的视觉承诺。
10. 朱砂红、青绿、天青只承担语义对位，禁止作为装饰色出现。