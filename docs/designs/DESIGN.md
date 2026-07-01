---
version: alpha
name: Goulong-Hub-design-analysis
description: 句龙中枢（Goulong Hub）是面向「句龙」产品矩阵的展示门户，承载首页、产品体系、能力矩阵、部署方案、开发者文档、关于我们六大页面。设计语言为 Neo-Chinese Cyberpunk — 以「古铜金 × 深墨蓝」为骨架，在墨黑底色上铺陈金线、青绿、朱砂三色信号，把中国风图腾（龙鳞、印章、牌坊、卷轴）与终端控制台、电路扫描线、Bento Grid 融合。整体气质是「高端、合规、史诗感、企业级」，避免任何轻量/可爱/扁平化的视觉决策。所有页面共享同一设计 token，但允许单页根据内容密度局部调节节奏。

colors:
  primary: "#D4A04C"
  primary-bright: "#E5B96A"
  primary-deep: "#A67C2E"
  primary-dim: "#5C4A24"
  primary-glow: "rgba(212,160,76,0.35)"
  accent-jade: "#1AE5C5"
  accent-jade-dim: "#0F8F7C"
  accent-cinnabar: "#E74C3C"
  accent-cinnabar-dim: "#8B2E25"
  ink: "#F5E9D4"
  ink-secondary: "#D9C9A8"
  ink-muted: "#B89B6E"
  ink-tertiary: "#7A6A4F"
  ink-disabled: "#4A4030"
  canvas: "#050810"
  canvas-deep: "#02050B"
  surface-1: "#0A1018"
  surface-2: "#0F1722"
  surface-3: "#141E2C"
  surface-4: "#1A2638"
  surface-overlay: "rgba(5,8,16,0.85)"
  hairline: "#2A2418"
  hairline-strong: "#3D3520"
  hairline-gold: "rgba(212,160,76,0.20)"
  hairline-gold-bright: "rgba(212,160,76,0.55)"
  semantic-success: "#1AE5C5"
  semantic-warning: "#E5B96A"
  semantic-danger: "#E74C3C"
  semantic-info: "#5BA8E5"
  semantic-online: "#3DDC97"
  # Light theme (宣纸暖白调) — 与 dark theme 共享色相，仅交换明度
  light-canvas: "#F8F2E5"
  light-canvas-deep: "#EFE5D2"
  light-surface-1: "#FFFAF0"
  light-surface-2: "#F2E8D4"
  light-surface-3: "#E8DCC0"
  light-surface-4: "#DCCEAE"
  light-surface-overlay: "rgba(248,242,229,0.88)"
  light-ink: "#1A1208"
  light-ink-secondary: "#3D2E18"
  light-ink-muted: "#6B5A3E"
  light-ink-tertiary: "#8F7E62"
  light-ink-disabled: "#B8A988"
  light-hairline: "#D8C9A8"
  light-hairline-strong: "#B8A570"
  light-hairline-gold: "rgba(181,138,53,0.30)"
  light-hairline-gold-bright: "rgba(181,138,53,0.65)"
  light-primary: "#B58A35"
  light-primary-bright: "#C99A45"
  light-primary-deep: "#8E6A20"
  light-primary-dim: "#5C4A24"
  light-primary-glow: "rgba(181,138,53,0.30)"

typography:
  display-xxl:
    fontFamily: "ZCOOL XiaoWei, Source Han Serif SC, Noto Serif SC, Songti SC, serif"
    fontSize: 72px
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: -0.02em
  display-xl:
    fontFamily: "ZCOOL XiaoWei, Source Han Serif SC, Noto Serif SC, Songti SC, serif"
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.10
    letterSpacing: -0.02em
  display-lg:
    fontFamily: "ZCOOL XiaoWei, Source Han Serif SC, Noto Serif SC, Songti SC, serif"
    fontSize: 40px
    fontWeight: 600
    lineHeight: 1.20
    letterSpacing: -0.01em
  display-md:
    fontFamily: "ZCOOL XiaoWei, Source Han Serif SC, Noto Serif SC, Songti SC, serif"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: "ZCOOL XiaoWei, Source Han Serif SC, Noto Serif SC, Songti SC, serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.30
    letterSpacing: 0
  headline-md:
    fontFamily: "ZCOOL XiaoWei, Source Han Serif SC, Noto Serif SC, Songti SC, serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.40
    letterSpacing: 0
  headline-sm:
    fontFamily: "ZCOOL XiaoWei, Source Han Serif SC, Noto Serif SC, Songti SC, serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.40
    letterSpacing: 0
  body-lg:
    fontFamily: "Source Han Serif SC, Noto Serif SC, Songti SC, serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.75
    letterSpacing: 0.01em
  body-md:
    fontFamily: "Source Han Serif SC, Noto Serif SC, Songti SC, serif"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 1.70
    letterSpacing: 0.01em
  body-sm:
    fontFamily: "Source Han Serif SC, Noto Serif SC, Songti SC, serif"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: 0.02em
  caption:
    fontFamily: "Source Han Serif SC, Noto Serif SC, Songti SC, serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0.02em
  label-mono:
    fontFamily: "JetBrains Mono, Fira Code, Source Code Pro, Consolas, monospace"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0.08em
  label-sm-mono:
    fontFamily: "JetBrains Mono, Fira Code, Source Code Pro, Consolas, monospace"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 1.30
    letterSpacing: 0.10em
  number-stat:
    fontFamily: "Cinzel, Source Han Serif SC, Songti SC, serif"
    fontSize: 56px
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: -0.01em
  number-stat-sm:
    fontFamily: "JetBrains Mono, Fira Code, Consolas, monospace"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.00
    letterSpacing: -0.01em
  code-block:
    fontFamily: "JetBrains Mono, Fira Code, Source Code Pro, Consolas, monospace"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: 0
  button-md:
    fontFamily: "Source Han Serif SC, Noto Serif SC, Songti SC, serif"
    fontSize: 15px
    fontWeight: 500
    lineHeight: 1.00
    letterSpacing: 0.05em
  button-sm:
    fontFamily: "Source Han Serif SC, Noto Serif SC, Songti SC, serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.00
    letterSpacing: 0.05em

rounded:
  none: 0
  xs: 2px
  sm: 4px
  md: 6px
  lg: 8px
  xl: 12px
  pill: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  xxxl: 64px
  section: 96px
  section-lg: 128px

border-width:
  hairline: 1px
  strong: 1.5px
  emphasis: 2px

shadow:
  glow-gold-sm: "0 0 8px rgba(212,160,76,0.25)"
  glow-gold-md: "0 0 16px rgba(212,160,76,0.35), 0 0 32px rgba(212,160,76,0.15)"
  glow-gold-lg: "0 0 24px rgba(212,160,76,0.45), 0 0 48px rgba(212,160,76,0.20)"
  glow-jade-sm: "0 0 8px rgba(26,229,197,0.30)"
  glow-cinnabar-sm: "0 0 8px rgba(231,76,60,0.30)"
  card-lift: "0 4px 24px rgba(0,0,0,0.6), inset 0 1px 0 rgba(212,160,76,0.08)"
  card-hover: "0 8px 32px rgba(0,0,0,0.75), inset 0 1px 0 rgba(212,160,76,0.15)"

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.canvas-deep}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    border: "1px solid {colors.primary-bright}"
    boxShadow: "{shadow.glow-gold-sm}"
  button-primary-hover:
    backgroundColor: "{colors.primary-bright}"
    textColor: "{colors.canvas-deep}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    boxShadow: "{shadow.glow-gold-md}"
  button-primary-pressed:
    backgroundColor: "{colors.primary-deep}"
    textColor: "{colors.canvas-deep}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    boxShadow: "none"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    border: "1px solid {colors.primary}"
    boxShadow: "none"
  button-secondary-hover:
    backgroundColor: "rgba(212,160,76,0.10)"
    textColor: "{colors.primary-bright}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    border: "1px solid {colors.primary-bright}"
    boxShadow: "{shadow.glow-gold-sm}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.button-md}"
    rounded: "{rounded.sm}"
    padding: "12px 24px"
    border: "1px solid {colors.hairline}"
  button-icon:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
    border: "1px solid {colors.hairline-gold}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0"
  nav-link-active:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0"
    borderBottom: "2px solid {colors.primary}"
  top-nav:
    backgroundColor: "{colors.surface-overlay}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "16px 48px"
    borderBottom: "1px solid {colors.hairline}"
  card-feature:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "32px"
    border: "1px solid {colors.hairline}"
    boxShadow: "{shadow.card-lift}"
  card-feature-hover:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "32px"
    border: "1px solid {colors.hairline-gold}"
    boxShadow: "{shadow.card-hover}"
  card-feature-featured:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "32px"
    border: "1px solid {colors.hairline-gold-bright}"
    boxShadow: "{shadow.glow-gold-sm}, {shadow.card-lift}"
  card-product:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "40px"
    border: "1px solid {colors.hairline-gold}"
    boxShadow: "{shadow.glow-gold-sm}"
  card-product-featured:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: "40px"
    border: "1px solid {colors.primary}"
    boxShadow: "{shadow.glow-gold-md}"
  card-data:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "20px"
    border: "1px solid {colors.hairline}"
  card-terminal:
    backgroundColor: "{colors.canvas-deep}"
    textColor: "{colors.ink}"
    typography: "{typography.code-block}"
    rounded: "{rounded.md}"
    padding: "20px"
    border: "1px solid {colors.hairline-gold}"
  badge-online:
    backgroundColor: "rgba(61,220,151,0.12)"
    textColor: "{colors.semantic-online}"
    typography: "{typography.label-sm-mono}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
    border: "1px solid rgba(61,220,151,0.40)"
  badge-warning:
    backgroundColor: "rgba(229,185,106,0.12)"
    textColor: "{colors.semantic-warning}"
    typography: "{typography.label-sm-mono}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
    border: "1px solid rgba(229,185,106,0.40)"
  badge-danger:
    backgroundColor: "rgba(231,76,60,0.12)"
    textColor: "{colors.semantic-danger}"
    typography: "{typography.label-sm-mono}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
    border: "1px solid rgba(231,76,60,0.40)"
  badge-jade:
    backgroundColor: "rgba(26,229,197,0.12)"
    textColor: "{colors.accent-jade}"
    typography: "{typography.label-sm-mono}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
    border: "1px solid rgba(26,229,197,0.40)"
  badge-cinnabar:
    backgroundColor: "rgba(231,76,60,0.15)"
    textColor: "{colors.accent-cinnabar}"
    typography: "{typography.label-sm-mono}"
    rounded: "{rounded.sm}"
    padding: "2px 8px"
    border: "1px solid {colors.accent-cinnabar}"
  badge-soft:
    backgroundColor: "rgba(212,160,76,0.08)"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm-mono}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
    border: "1px solid {colors.hairline-gold}"
  input-text:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "10px 14px"
    border: "1px solid {colors.hairline}"
  input-text-focused:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.sm}"
    padding: "10px 14px"
    border: "1px solid {colors.primary}"
    boxShadow: "0 0 0 3px rgba(212,160,76,0.15)"
  table-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "14px 16px"
    borderBottom: "1px solid {colors.hairline}"
  table-header:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.primary}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
    borderBottom: "1px solid {colors.hairline-gold}"
  tab-default:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    border: "1px solid transparent"
  tab-selected:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.primary}"
    typography: "{typography.button-sm}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
    border: "1px solid {colors.primary}"
    boxShadow: "{shadow.glow-gold-sm}"
  divider-gold:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-sm-mono}"
    rounded: "{rounded.none}"
    padding: "0"
    borderTop: "1px solid {colors.hairline-gold}"
  divider-section:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.label-mono}"
    rounded: "{rounded.none}"
    padding: "0"
    borderBottom: "1px solid {colors.hairline-gold-bright}"
  stat-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.md}"
    padding: "20px 24px"
    border: "1px solid {colors.hairline-gold}"
  stat-number:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.number-stat-sm}"
    rounded: "{rounded.none}"
    padding: "0"
  hero-title:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.display-xl}"
    rounded: "{rounded.none}"
    padding: "0"
  hero-subtitle:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.none}"
    padding: "0"
  footer-light:
    backgroundColor: "{colors.canvas-deep}"
    textColor: "{colors.ink-muted}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.none}"
    padding: "64px 48px 32px"
    borderTop: "1px solid {colors.hairline-gold}"
  link-inline:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0"
    borderBottom: "1px solid transparent"
  link-inline-hover:
    backgroundColor: "transparent"
    textColor: "{colors.primary-bright}"
    typography: "{typography.body-md}"
    rounded: "{rounded.none}"
    padding: "0"
    borderBottom: "1px solid {colors.primary-bright}"
---

## Overview

句龙中枢的视觉语言建立在三组对比之上：**墨黑 × 古铜金**（主体张力）、**古典卷轴 × 终端控制台**（形式混搭）、**金线静态构图 × 青绿数据流光**（动静互补）。这不是一套"中国风皮肤 + Tailwind"——它是一条独立的视觉规则：**深色为底、金色为骨、衬线为魂、终端为用**。

整套 token 由 `{colors.canvas}` (#050810) 的深墨蓝黑起，所有正文卡片坐在 `{colors.surface-1}` (#0A1018) 上，靠 1px `{colors.hairline-gold}` (rgba(212,160,76,0.20)) 区分层次而不是阴影。品牌主色 `{colors.primary}` (#D4A04C) 是「龙鳞金」，比 Zhaodan 的 `#D4AF37` 略偏暗、略偏红，呈现**青铜时代的磨损感**而非纯金的高光。三枚辅色严格控制用量：

- **翠绿 Jade** (`{colors.accent-jade}` #1AE5C5) — 仅用于「在线/已上线/合规通过」等正向状态
- **朱砂 Cinnabar** (`{colors.accent-cinnabar}` #E74C3C) — 仅用于「拦截/异常/风险」等危险状态
- **石青 Cyan** (派生 `{colors.semantic-info}` #5BA8E5) — 仅用于「信息/链接」类语义

任何时候，**金 + 翠绿 + 朱砂** 三色同时出现不超过 2 个；金永远是主语，其他两色是信号。

字体策略以**衬线中文**为核心：`ZCOOL XiaoWei` 承载 display 与 headline，承担"古典卷轴"的厚重；`Source Han Serif SC / Noto Serif SC` 承载正文，承担"宣纸黑字"的阅读感；`JetBrains Mono` 仅出现在标签、统计数据、代码块中，承担"控制台/数据"的工程感。**绝不在 display 标题中使用 sans-serif**——它会让整套视觉立刻滑向 SaaS 通用模板。

页面节奏采用"**古建筑剪影 → 金线 Bento Grid → 数据终端 → 章节点缀 → Footer**"五段式：每个 Section 的边界由**金色分割线 + 居中图标**标记（不是单纯留白），让"卷轴章节"的呼吸感渗透到 web 结构里。

**关键特征：**
- **深墨蓝黑画布** (`{colors.canvas}` #050810)，永远不是纯黑 (`#000000`)；保留蓝色调让"夜空"质感成立
- **龙鳞金主色** (`{colors.primary}` #D4A04C) 仅承担：CTA、强调数字、品牌徽标、章节点缀；绝不作为大面积背景或卡片填色
- **1px 金线边框** (`{colors.hairline-gold}` 20% 透明) 取代阴影完成层次 — 几乎不使用 box-shadow，只有 hero、CTA、强调态允许"金晕 glow"
- **衬线字体贯穿**：display / headline / body 全部为衬线中文，sans 字体不进入产品界面（仅在标签 emoji / icon fallback 时允许）
- **Bento Grid + 古建筑章节点缀** — 卡片布局自由，但每段都以金色细分隔线 + 居中"印章式"图标收束
- **终端控制台永远是右侧/底部主角** — 任何能力展示都要伴随一个实时终端视图（流式输出、扫描线、JSON）
- **数据可视化的金色使用** — 仪表盘、进度条、Gauge 全部用金 + 翠绿 + 朱砂三色信号，禁止彩虹配色

## Colors

> 参考页面：首页、产品体系、能力矩阵、部署方案、开发者文档、关于我们（六张端到端营销页）

### Brand & Accent

- **龙鳞金** (`{colors.primary}` — #D4A04C)：唯一品牌主色，用于 CTA 填色、强调数字、品牌徽标、关键线条。**不允许**作为大面积卡片背景或长文本颜色。
- **亮金** (`{colors.primary-bright}` — #E5B96A)：金的主色 hover 态，以及作为发光描边的内侧色。
- **深金** (`{colors.primary-deep}` — #A67C2E)：pressed 态、低饱和装饰线、印章暗调。
- **墨金** (`{colors.primary-dim}` — #5C4A24)：次级分割线、灰阶背景的金色弱化版本。
- **金晕** (`{colors.primary-glow}` — rgba(212,160,76,0.35))：用于 box-shadow 发光，不可作为背景色。
- **翠玉 Jade** (`{colors.accent-jade}` — #1AE5C5)：唯一"通过 / 在线 / 已上线"信号色。
- **深翠** (`{colors.accent-jade-dim}` — #0F8F7C)：jade 的弱化版，用于次级"已配置/已完成"标签。
- **朱砂 Cinnabar** (`{colors.accent-cinnabar}` — #E74C3C)：唯一"拦截 / 异常 / 风险"信号色。
- **深朱** (`{colors.accent-cinnabar-dim}` — #8B2E25)：朱砂的弱化版，用于次级警告态。

### Surface

- **Canvas** (`{colors.canvas}` — #050810)：页面主背景，"夜空墨蓝"，禁止替换为纯黑。
- **Canvas Deep** (`{colors.canvas-deep}` — #02050B)：更深一档，用于终端/Modal/嵌入窗口的底部。
- **Surface 1** (`{colors.surface-1}` — #0A1018)：默认卡片底色，比 canvas 高 5 档亮度。
- **Surface 2** (`{colors.surface-2}` — #0F1722)：hover 态、featured 卡片底色，比 surface-1 高一档。
- **Surface 3** (`{colors.surface-3}` — #141E2C)：弹层、抽屉。
- **Surface 4** (`{colors.surface-4}` — #1A2638)：高亮态、active 强调。
- **Surface Overlay** (`{colors.surface-overlay}` — rgba(5,8,16,0.85))：sticky 导航背景的玻璃质感。

### Hairline

- **Hairline** (`{colors.hairline}` — #2A2418)：默认 1px 边框，比 surface 略亮但弱于金。
- **Hairline Strong** (`{colors.hairline-strong}` — #3D3520)：加强版边框，用于重要的次级卡片。
- **Hairline Gold** (`{colors.hairline-gold}` — rgba(212,160,76,0.20))：1px 金线，**最常用的卡片/分节线**，替代 box-shadow。
- **Hairline Gold Bright** (`{colors.hairline-gold-bright}` — rgba(212,160,76,0.55))：CTA 强调边框、featured 卡片边框。

### Text

- **Ink** (`{colors.ink}` — #F5E9D4)：默认正文，"宣纸暖白"，永远不是 #ffffff。
- **Ink Secondary** (`{colors.ink-secondary}` — #D9C9A8)：次级正文，比 ink 略暗一档。
- **Ink Muted** (`{colors.ink-muted}` — #B89B6E)：辅助文字、章节副标题。
- **Ink Tertiary** (`{colors.ink-tertiary}` — #7A6A4F)：低优先信息、注释、占位。
- **Ink Disabled** (`{colors.ink-disabled}` — #4A4030)：禁用态文字。

### Semantic

- **Success** (`{colors.semantic-success}` — #1AE5C5)：通过、合规、运行正常。
- **Warning** (`{colors.semantic-warning}` — #E5B96A)：注意、待处理、规划中。
- **Danger** (`{colors.semantic-danger}` — #E74C3C)：拦截、异常、风险。
- **Info** (`{colors.semantic-info}` — #5BA8E5)：信息、链接、提示。
- **Online** (`{colors.semantic-online}` — #3DDC97)：系统在线状态指示灯。

## Typography

### Font Family

主品牌字体策略是**全衬线中文 + 单等宽英文**的组合，避免 SaaS 模板中常见的"思源黑体 + Inter"双无衬线方案。

- **ZCOOL XiaoWei**（中文标题衬线）：来自 Google Fonts 的免费开源中文字体，提供古典印章的笔锋感；fallback 到 `Source Han Serif SC, Noto Serif SC, Songti SC, serif`。用于 `{typography.display-*}` 和 `{typography.headline-*}`。
- **Source Han Serif SC / Noto Serif SC**（中文正文衬线）：高品质开源中文字体，提供长篇阅读的舒适性；fallback 到 `Songti SC, SimSun, serif`。用于 `{typography.body-*}` 和 `{typography.caption}`。
- **JetBrains Mono**（英文等宽）：Google Fonts 开源等宽字体，承担数据/代码/标签的工程感；fallback 到 `Fira Code, Source Code Pro, Consolas, monospace`。用于 `{typography.label-mono}`、`{typography.code-block}`、`{typography.number-stat-sm}`。
- **Cinzel**（拉丁数字衬线）：用于英雄数据展示（如"126+ 部署交付项目"），提供"石刻碑文"质感；fallback 到 `Source Han Serif SC`。仅用于 `{typography.number-stat}`。

**字符级特征**：标题字号采用 -0.02em 负字距（紧密、史诗感）；正文采用 +0.01em ~ +0.02em 微正字距（呼吸感、长文阅读）。**永远不在中文衬线中应用 `font-feature-settings: "tnum"`**——中文无 tabular figures 概念；该特性仅应用于英文数字场景。

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | 用途 |
|---|---|---|---|---|---|---|
| `{typography.display-xxl}` | 72px | 700 | 1.05 | -0.02em | Hero 主标题（仅 1-2 处） |
| `{typography.display-xl}` | 56px | 700 | 1.10 | -0.02em | 章节主标题 |
| `{typography.display-lg}` | 40px | 600 | 1.20 | -0.01em | Section 副标题 |
| `{typography.display-md}` | 32px | 600 | 1.25 | -0.01em | 大卡片标题 |
| `{typography.headline-lg}` | 28px | 600 | 1.30 | 0 | 中卡片标题 |
| `{typography.headline-md}` | 22px | 600 | 1.40 | 0 | 小卡片标题、Tab 标签 |
| `{typography.headline-sm}` | 18px | 600 | 1.40 | 0 | 重要列表项 |
| `{typography.body-lg}` | 17px | 400 | 1.75 | 0.01em | Hero 副标、长引导 |
| `{typography.body-md}` | 15px | 400 | 1.70 | 0.01em | 默认正文 |
| `{typography.body-sm}` | 13px | 400 | 1.60 | 0.02em | 卡片内文、辅助说明 |
| `{typography.caption}` | 12px | 400 | 1.50 | 0.02em | 注释、版权 |
| `{typography.label-mono}` | 12px | 500 | 1.30 | 0.08em | 等宽标签、状态 |
| `{typography.label-sm-mono}` | 11px | 500 | 1.30 | 0.10em | 微型等宽标签 |
| `{typography.number-stat}` | 56px | 600 | 1.00 | -0.01em | 英雄数据 |
| `{typography.number-stat-sm}` | 28px | 600 | 1.00 | -0.01em | 卡片数据 |
| `{typography.code-block}` | 13px | 400 | 1.60 | 0 | 代码块 |
| `{typography.button-md}` | 15px | 500 | 1.00 | 0.05em | 主按钮 |
| `{typography.button-sm}` | 13px | 500 | 1.00 | 0.05em | 次按钮、Tab |

### 字体降级策略

- 若 `ZCOOL XiaoWei` 不可加载，自动 fallback 到 `Source Han Serif SC`（中英文混排体验接近）。
- 若 `Source Han Serif SC` 不可加载，自动 fallback 到 `Noto Serif SC`（Google Fonts 中文衬线）。
- 若两者均失败，使用系统 `Songti SC`（macOS/iOS）或 `SimSun`（Windows）。
- **绝对不要**降级到 sans-serif（PingFang/Noto Sans/思源黑体）——它会立刻破坏整套视觉调性。

## Layout

### 间距系统

- **基础单位**：4px（与 `{spacing.xxs}` 对齐）。
- **Token 阶梯**：`xxs 4px` · `xs 8px` · `sm 12px` · `md 16px` · `lg 24px` · `xl 32px` · `xxl 48px` · `xxxl 64px` · `section 96px` · `section-lg 128px`。
- **Section 间距**：章节间垂直留白 `{spacing.section}` (96px)，重要首页 hero 后可延伸至 `{spacing.section-lg}` (128px)。
- **卡片内边距**：默认 `{spacing.xl}` (32px)；featured 卡片 `{spacing.xxl}` (48px)；数据小卡 `{spacing.md}` (16px)。
- **按钮内边距**：主按钮 `12px 24px`；图标按钮 `8px 12px`。

### 网格与容器

- 桌面最大内容宽度 `1200px`，居中显示；hero 区可扩展到 `1440px`。
- 桌面端 **12 栏网格**，gutter `{spacing.lg}` (24px)，外侧 `{spacing.xxl}` (48px)。
- 平板（768-1280px）保持 12 栏，gutter 缩至 `{spacing.md}` (16px)，外侧 `{spacing.lg}` (24px)。
- 移动端（<768px）单栏布局，外侧 `{spacing.md}` (16px)。

### 章节分隔

- 每个 Section 顶部都有 `{components.divider-section}` —— 1px 金线 + 居中"印章式"图标（龙鳞 / 玉佩 / 卷轴）。
- 章节内部卡片之间使用 `{components.divider-gold}`（细金线）分割。
- **禁止用纯空白来代替章节边界**——必须有金色装饰线。

### 留白哲学

整套留白是"**古建筑卷轴**"式的：纵向长留白、横向克制。Bento Grid 之间留 `{spacing.lg}` (24px) 即可，不要拉到 48px；Hero 区下方留 `{spacing.section-lg}` (128px) 给章节切换喘息。

## Elevation & Depth

| 层级 | 处理方式 | 用途 |
|---|---|---|
| 0（flat） | 无阴影、无边框 | 默认正文、Hero 文字 |
| 1（卡片 lift） | `{colors.surface-1}` 背景 + 1px `{colors.hairline-gold}` | 默认卡片 |
| 2（hover lift） | `{colors.surface-2}` 背景 + 1px `{colors.hairline-gold-bright}` | hover 态、featured 卡片 |
| 3（金晕 glow） | `{shadow.glow-gold-md}` | 主 CTA、强调数字、关键按钮 |
| 4（终端嵌入） | `{colors.canvas-deep}` 背景 + 1px `{colors.hairline-gold}` | 代码块、控制台视图 |

**核心原则**：深度靠"**金线 + 表面阶梯**"承担，**几乎不使用 drop shadow**。`box-shadow` 仅允许出现在：(1) Hero 强调数字、(2) 主 CTA hover、(3) 终端控制台边缘。其他地方一律用金线边框替代阴影。

### 装饰深度

- **古建筑剪影**：每个 Section 顶部都有微弱金色古建筑剪影作为水印（透明度 ≤ 5%），位于章节背景深处。
- **电路扫描线**：能力矩阵 / 数据展示区有金色细线连接节点（透明度 10-20%），承担"信息流动"的隐喻。
- **龙形 logo 装饰**：仅出现在 footer / 章节尾部 / 角落，**禁止**作为大面积背景图案。

## Shapes

### Border Radius 阶梯

| Token | 值 | 用途 |
|---|---|---|
| `{rounded.none}` | 0 | 大型布局容器、分割线、Hero 文字 |
| `{rounded.xs}` | 2px | 极细徽章 |
| `{rounded.sm}` | 4px | 主按钮、Tab、徽章、状态标签 |
| `{rounded.md}` | 6px | 默认卡片、输入框 |
| `{rounded.lg}` | 8px | 大型容器、终端控制台 |
| `{rounded.xl}` | 12px | 极少使用，仅 hero 容器 |
| `{rounded.pill}` | 9999px | 仅限"在线状态指示灯" |

**注意**：圆角值普遍偏小（2-8px），与 Zhaodan 的 "几乎 0 圆角"策略一致；与 Wenheng 的 "温柔圆角"完全相反。**这是 Hub 的核心识别**——硬朗、克制、工程感。

### 装饰几何

- **45° 斜切角（chamfer）**：CTA 按钮两端可选斜切 4px，呼应"青铜器/玉璧"的硬切边工艺。
- **印章图案**：章节分隔的居中图标使用圆形"印章"风格（直径 32-48px），中心一个金线图标。
- **龙鳞纹理**：仅 footer 背景允许出现 0.5% 透明度的"龙鳞"图案，绝不进入主体内容区。

## Components

### Buttons

**`button-primary`** — 主 CTA，"查看方案 / 预约演示 / 进入产品"。
- 背景 `{colors.primary}`，文字 `{colors.canvas-deep}`，padding 12px 24px，圆角 `{rounded.sm}` (4px)。
- 边框 1px `{colors.primary-bright}`，金色发光 `{shadow.glow-gold-sm}`。
- Hover 态 `button-primary-hover`：背景变 `{colors.primary-bright}`，glow 加深。
- Pressed 态 `button-primary-pressed`：背景变 `{colors.primary-deep}`，glow 消失。

**`button-secondary`** — 次 CTA，"查看 API / 了解更多"。
- 透明背景，文字 `{colors.primary}`，1px `{colors.primary}` 边框，无 glow。
- Hover 态 `button-secondary-hover`：背景 `rgba(212,160,76,0.10)`，文字 `{colors.primary-bright}`，加 glow。

**`button-ghost`** — 弱化按钮，"取消 / 返回"。
- 透明背景，文字 `{colors.ink-secondary}`，1px `{colors.hairline}` 边框。

**`button-icon`** — 图标按钮（开发者入口、终端按钮）。
- `{colors.surface-1}` 背景，文字 `{colors.primary}`，padding 8px 12px，1px 金线边框。

### Navigation

**`top-nav`** — 顶部主导航。
- 背景 `{colors.surface-overlay}` (半透明深墨蓝)，sticky 定位，底部 1px `{colors.hairline}` 边框。
- padding 16px 48px，左侧"句龙"品牌字标（衬线大字），中间主导航 5 项（产品体系、能力矩阵、部署方案、开发者文档、关于我们），右侧"开发者入口"图标按钮 + "预约演示"主 CTA。
- 滚动时背景透明度提升至 0.95。

**`nav-link` / `nav-link-active`** — 导航项。
- 默认 `{colors.ink-secondary}`，hover 变 `{colors.primary}`，active 加底部 2px 金色下划线。

### Cards & Containers

**`card-feature`** — 通用能力介绍卡片。
- 背景 `{colors.surface-1}`，padding `{spacing.xl}` (32px)，圆角 `{rounded.md}` (6px)。
- 1px `{colors.hairline}` 边框，`{shadow.card-lift}`。
- 内部结构：图标（48px 金线轮廓）+ headline-md 标题 + body-md 描述 + 可选 link-inline。

**`card-feature-featured`** — featured 能力卡片（如首页"能力矩阵"中突出的"句龙 Core"）。
- 背景升为 `{colors.surface-2}`，边框换 `{colors.hairline-gold-bright}`，加 `{shadow.glow-gold-sm}`。

**`card-product`** — 产品介绍大卡（产品体系页面用）。
- padding `{spacing.xxl}` (48px)，1px 金线边框，金色 glow，适合承载产品截图 + 长描述。

**`card-product-featured`** — 主推产品卡（"文衡/照胆"主卡）。
- 边框换 `{colors.primary}` 实色，glow 升级为 `{shadow.glow-gold-md}`。

**`card-data`** — 数据小卡（Bento Grid 中的小方块）。
- padding 20px，圆角 6px，1px `{colors.hairline}` 边框，承载 icon + 数字 + 短描述。

**`card-terminal`** — 终端/代码块视图。
- 背景 `{colors.canvas-deep}`，等宽字体，圆角 `{rounded.md}`，1px 金线边框。
- 顶部可选标签栏（如 `> POST /api/review`），底部可选"实时"指示灯（jade online 徽章）。

### Inputs & Forms

**`input-text`** — 标准输入框（开发者文档、联系表单）。
- 背景 `{colors.surface-1}`，padding 10px 14px，圆角 `{rounded.sm}`，1px `{colors.hairline}` 边框。
- Focused 态 `input-text-focused`：背景 `{colors.surface-2}`，边框换 `{colors.primary}`，加 3px `rgba(212,160,76,0.15)` focus ring。

### Status & Badges

**`badge-online`** — 在线/已就绪（jade 色调）。
**`badge-warning`** — 规划中/待处理（金色调）。
**`badge-danger`** — 拦截/异常（朱砂色调）。
**`badge-jade`** — 合规通过/已上线（jade 色调，更鲜艳）。
**`badge-cinnabar`** — 风险拦截（朱砂色调，更强）。
**`badge-soft`** — 通用软徽标（金色弱化版，用于"独立 SaaS"等产品标签）。

所有徽标使用 `{typography.label-sm-mono}`，圆角 `{rounded.sm}`，padding 2-4px / 8-10px，1px 同色弱化边框。

### Tables

**`table-row`** — 表格行。
- 透明背景，padding 14px 16px，底部 1px `{colors.hairline}` 分隔线。

**`table-header`** — 表头。
- 背景 `{colors.surface-1}`，文字 `{colors.primary}`（金色），`{typography.label-mono}` 等宽字体，底部 1px 金色 hairline。

**`tab-default` / `tab-selected`** — Tab 切换。
- 默认透明背景 + 灰字；选中态 `{colors.surface-2}` 背景 + 金色文字 + 1px 金边 + 金色 glow。

### Dividers

**`divider-gold`** — 普通章节内分隔线。
- 顶部 1px `{colors.hairline-gold}` 透明金线，常配合左右两侧短文案。

**`divider-section`** — 章节间分隔线。
- 底部 1px `{colors.hairline-gold-bright}` 实色金线，配合居中印章图标。

### Stat Cards

**`stat-card` + `stat-number`** — 数据统计卡（部署方案的"126+ 部署交付项目"）。
- `stat-card` 是浅卡容器，`stat-number` 是金色彩色大数字（`{typography.number-stat-sm}`）。
- 用于"能力指标 / 部署规模 / 合规率"等关键数字展示。

### Hero

**`hero-title`** — Hero 主标题（`{typography.display-xl}` 56px 衬线粗体）。
**`hero-subtitle`** — Hero 副标（`{typography.body-lg}` 17px 衬线正文）。

### Footer

**`footer-light`** — 全站 footer。
- 背景 `{colors.canvas-deep}`，文字 `{colors.ink-muted}`，padding 64px 48px 32px。
- 顶部 1px `{colors.hairline-gold}` 金线。
- 5 列布局：品牌信息 / 产品体系 / 能力接入 / 部署与支持 / 联系我们 + 二维码。

### Links

**`link-inline` / `link-inline-hover`** — 行内链接。
- 默认 `{colors.primary}`，无下划线；hover 时加底部 1px 金线 + 变亮金色。

## Theme System

Hub 支持 **Dark / Light / System** 三种主题模式，由 `useTheme()` composable 管理，持久化到 `localStorage`，并在 `<html>` 根节点同步 `class="dark"` 或 `class="light"`。Tailwind 通过 `darkMode: 'class'` 启用变体，所有主题相关样式以 `dark:` 前缀编写。

### 模式定义

| 模式 | 行为 |
|---|---|
| `dark` | 强制暗色，忽略系统偏好 |
| `light` | 强制亮色，忽略系统偏好 |
| `system` | 跟随 `prefers-color-scheme` 媒体查询，实时同步 |

### 主题切换器 UI

- 位置：`TheTopNav.vue` 右上角，"开发者入口"图标按钮之前
- 形态：图标按钮（lucide：`Sun` / `Moon` / `Monitor`），点击循环切换三态
- 过渡：200ms `transition-colors`，背景与文字颜色同步平滑过渡
- 系统模式指示：图标右下角加 2px jade 小圆点，提示"跟随系统"

### Tailwind 实施要点

```ts
// tailwind.config.ts
export default {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 浅色优先 + dark 覆盖；未指定的 token 在两主题下表现一致
        canvas: 'var(--color-canvas)',
        surface: {
          1: 'var(--color-surface-1)',
          2: 'var(--color-surface-2)',
          // ...
        },
        ink: {
          DEFAULT: 'var(--color-ink)',
          secondary: 'var(--color-ink-secondary)',
          // ...
        },
        primary: {
          DEFAULT: 'var(--color-primary)',
          bright: 'var(--color-primary-bright)',
          // ...
        },
        'gold-line': 'var(--color-hairline-gold)',
        'gold-line-bright': 'var(--color-hairline-gold-bright)',
      },
    },
  },
}
```

```css
/* main.css */
:root {
  --color-canvas: #050810;
  --color-canvas-deep: #02050B;
  --color-surface-1: #0A1018;
  --color-surface-2: #0F1722;
  --color-surface-3: #141E2C;
  --color-surface-4: #1A2638;
  --color-surface-overlay: rgba(5,8,16,0.85);
  --color-ink: #F5E9D4;
  --color-ink-secondary: #D9C9A8;
  --color-ink-muted: #B89B6E;
  --color-ink-tertiary: #7A6A4F;
  --color-ink-disabled: #4A4030;
  --color-hairline: #2A2418;
  --color-hairline-strong: #3D3520;
  --color-hairline-gold: rgba(212,160,76,0.20);
  --color-hairline-gold-bright: rgba(212,160,76,0.55);
  --color-primary: #D4A04C;
  --color-primary-bright: #E5B96A;
  --color-primary-deep: #A67C2E;
  --color-primary-dim: #5C4A24;
  --color-primary-glow: rgba(212,160,76,0.35);
}

.light {
  --color-canvas: #F8F2E5;
  --color-canvas-deep: #EFE5D2;
  --color-surface-1: #FFFAF0;
  --color-surface-2: #F2E8D4;
  --color-surface-3: #E8DCC0;
  --color-surface-4: #DCCEAE;
  --color-surface-overlay: rgba(248,242,229,0.88);
  --color-ink: #1A1208;
  --color-ink-secondary: #3D2E18;
  --color-ink-muted: #6B5A3E;
  --color-ink-tertiary: #8F7E62;
  --color-ink-disabled: #B8A988;
  --color-hairline: #D8C9A8;
  --color-hairline-strong: #B8A570;
  --color-hairline-gold: rgba(181,138,53,0.30);
  --color-hairline-gold-bright: rgba(181,138,53,0.65);
  --color-primary: #B58A35;
  --color-primary-bright: #C99A45;
  --color-primary-deep: #8E6A20;
  --color-primary-dim: #5C4A24;
  --color-primary-glow: rgba(181,138,53,0.30);
}
```

### Light Theme 视觉差异

- **画布**：从「夜空墨蓝」#050810 → 「宣纸暖白」#F8F2E5；保留同一暖色调，但明度反转
- **金主色**：从 #D4A04C → **深金** #B58A35（浅色背景需要更深金才有对比度）；hover 态变 `#C99A45` 更亮
- **正文色**：从 `#F5E9D4` → **墨黑** `#1A1208`（深墨，比纯黑更暖）
- **辅助色 jade / cinnabar / info / online**：色相不变，明度在两主题下都保持高饱和以承担"信号"职责
- **金色 glow**：从 `rgba(212,160,76,0.35)` → `rgba(181,138,53,0.30)`（略降不透明度，避免在浅底上溢出）
- **金线 hairline**：透明度从 0.20 → 0.30（浅底需要更显眼的金线）
- **阴影**：亮色主题下保留金晕 glow，但降低 box-shadow 黑色深度（避免"脏污"感），改用更轻的 `0 4px 16px rgba(26,18,8,0.08)`
- **古建筑剪影 / 装饰水印**：浅色主题下加深底色（从金色 #D4A04C 5% 透明 → 深金 #B58A35 8% 透明），保证仍可见

### Light Theme 不变量

以下视觉规则**在两主题下保持一致**，不切换：

- 字体（衬线中文 + 等宽英文）
- 圆角阶梯（≤ 8px 硬朗）
- 间距与布局
- 章节结构（Bento Grid / 时间轴 / 印章分割线）
- 终端控制台（仍保持暗色，因为"终端"母题就是深色背景）
- jade / cinnabar / 状态色语义

### Light Theme 已知局限

- 终端控制台区域在两主题下均为暗色（强制保留"终端"母题），是**唯一的色彩不变量**
- 实时终端 JSON 行内的颜色（绿勾 / 金状态）在浅色背景下观察时，背景是暗色，仍可读

## Do's and Don'ts

### Do

- 把 `{colors.canvas}` #050810 当作系统的"夜空底色"，永远不要换成纯黑 `#000000`；亮色主题对应 `{colors.light-canvas}` #F8F2E5
- 把 `{colors.primary}` 龙鳞金**仅**用于：CTA 填色、强调数字、品牌徽标、关键线条、章节点缀；亮色主题使用 `{colors.light-primary}` #B58A35（深金）
- 把 1px `{colors.hairline-gold}` (rgba(212,160,76,0.20)) 当作**默认的卡片/分节线**，代替阴影
- 全站 display / headline / body 字体使用**衬线中文**（ZCOOL XiaoWei / Source Han Serif SC），让"卷轴"质感从字面渗出
- 等宽字体（JetBrains Mono）仅用于：标签、状态、统计数据、代码块、URL/路径
- 每个 Section 顶部都有**金色分割线 + 居中印章图标**作为章节标记，不靠纯空白分隔
- 任何"能力展示"页面都要包含一个**实时终端/控制台视图**（流式 JSON 输出 + 扫描线），呼应"终端控制台"的母题
- 数据可视化的进度条 / Gauge 使用**金 + 翠绿 + 朱砂**三色信号，禁止彩虹渐变
- 章节末尾允许放置**龙鳞/印章/卷轴**的微弱装饰水印（透明度 ≤ 5%），但绝不进入主体内容
- 文末 footer 用 `{colors.canvas-deep}` 比正文更深的底色，呼应"地下宫殿"的隐喻；亮色主题对应 `{colors.light-canvas-deep}` #EFE5D2
- **主题切换**：提供 dark / light / system 三态，所有主题相关样式通过 Tailwind `dark:` 前缀 + CSS 变量双轨实现，避免重复定义两套组件

### Don't

- 不要把 `{colors.primary}` 龙鳞金作为大面积背景或卡片填色——它永远是"信号色"，不是"装饰色"
- 不要在 display 标题里使用 sans-serif 字体（思源黑体 / PingFang / Inter），整套视觉会瞬间滑向通用 SaaS
- 不要用 box-shadow 做卡片阴影——只允许"金晕 glow"出现在 CTA / 强调数字 / 终端容器
- 不要让金色 + 翠绿 + 朱砂三色同时大面积出现——同时不超过 2 个，且金色永远是主语
- 不要用纯白 `#FFFFFF` 作为正文颜色——一律用 `{colors.ink}` #F5E9D4（暗）/ `{colors.light-ink}` #1A1208（亮）
- 不要用 `{rounded.lg}` / `{rounded.xl}` / `{rounded.pill}` 做按钮/卡片——Hub 的圆角全部 ≤ 8px，硬朗克制
- 不要在内容区使用饱和度高的渐变（如紫色 / 蓝色 / 粉色）——Hub 的渐变仅限金色内部（深→浅）和极弱的环境光
- 不要让 emoji 出现在产品卡片标题或核心 CTA 中——允许出现在次要说明文字和 footer 装饰
- 不要使用真实照片作为产品主视觉——所有"产品截图"应该是 UI mockup 或代码 / 终端渲染图
- 不要把"开发者入口"和"预约演示"做成视觉权重相同的按钮——前者是图标按钮（次），后者是实心 CTA（主）
- 不要在亮色主题下强行反转终端控制台配色——终端母题始终是暗色，这是品牌识别的一部分

## Responsive Behavior

### 断点

| 名称 | 宽度 | 关键变化 |
|---|---|---|
| Desktop-XL | ≥ 1440px | Hero 区扩展至 1440px，6 列 Bento Grid |
| Desktop | 1200-1440px | 默认布局，1200px 内容容器，4 列 Bento Grid |
| Tablet | 768-1200px | 12 栏 → 8 栏，Bento 变 2 列，导航折叠为汉堡 |
| Mobile | < 768px | 单列布局，Hero 字号缩 50%，所有 glow 保留 |

### 触摸目标

- 所有按钮保持 ≥ 44×44px 触摸区。
- 移动端 Tab 高度升至 48px。
- Footer 链接行高 ≥ 48px。

### 折叠策略

- **顶部导航**：768px 以下折叠为汉堡菜单，主导航项移入抽屉。
- **Bento Grid**：4 列 → 2 列（平板）→ 1 列（移动）；卡片内部顺序保持。
- **Hero 终端**：移动端缩为静态截图占位（不可滚动）；桌面端始终是实时终端。
- **章节分割线**：移动端缩短至 60% 宽度，居中保留印章图标。
- **Footer**：5 列变 2 列 → 单列堆叠（移动）。

### 字号缩放

| Token | Desktop | Tablet | Mobile |
|---|---|---|---|
| `{typography.display-xl}` | 56px | 40px | 32px |
| `{typography.display-lg}` | 40px | 32px | 28px |
| `{typography.number-stat}` | 56px | 40px | 36px |
| `{typography.body-lg}` | 17px | 16px | 15px |

## Page Compositions

### 1. 首页（`/`）

- **顶部**：`top-nav` + 面包屑"首页 / 产品体系 / 句龙智能体操作系统"
- **Hero**：左侧 `hero-title` + `hero-subtitle` + 双 CTA（"查看 API/MCP 文档" `button-secondary` + "提交智能体需求评估" `button-primary`）；右侧 `card-terminal` 实时终端视图（流式 JSON 输出 + 实时统计仪表板：审查任务 / 风险拦截 / 合规通过率 / 平均耗时）
- **赛博安检站**：左侧 4 个文件类型图标（合同 / 投标 / 审批）→ 中央"前置审核屏障"金色印章 → 右侧"企业核心系统"（OA / ERP / 合同系统）"通过/拦截"分流
- **核心能力矩阵**：Bento Grid 布局，6-8 张 `card-feature` 错落分布，2 张 `card-feature-featured` 突出
- **数字生命脉络**：横向时间轴（阶段 1-6），每个节点是金色印章 + 能力标签
- **跨越时代的桥梁**：左侧"老旧系统"图标树 → 中央"句龙核心"3D 立方体 → 右侧"本地部署 Core"硬件图标
- **CTA Banner**：金边大容器，文案"让句龙成为企业业务流程的合规守门人" + 双 CTA
- **Footer**：`footer-light` 标准 5 列布局

### 2. 产品体系（`/products`）

- **Hero**：标题"句龙工程合规智能体产品体系" + 右侧 `card-terminal`（compliance audit 流式输出）
- **产品体系总览**：3 列并排 `card-product`："文衡"（主内）+ "照胆"（主外）+ "统一用户中心"（账号同步）
- **能力与接入方式**：5 列等宽小卡（API Key / MCP / Skill / CLI / 独立 Agent）
- **业务场景切片**：左（业务输入）→ 中（金色"前置审核门"印章）→ 右（企业系统 + 风险复检 / 人工处理 / 规则化 / 结果追踪）
- **架构演进**：横向 4 阶段时间线，文衡 → 照胆 → 能力接口层 → 句龙系统（规划中）
- **企业部署与集成**：左侧企业系统图标 + 中央"句龙核心"立方体 + 右侧标准接口与安全标签
- **Footer**：标准

### 3. 能力矩阵（`/capabilities`）

- **Hero**：标题 + 右侧"句龙 Core"3D 立方体 + 周围发散节点（文衡 / 照胆 / MCP / Skill / API / CLI）
- **数据指标条**：4 个 `stat-card`（2 核心产品 / 30+ 核心能力 / MCP Skill CLI / 多种部署方式）
- **能力矩阵总览**：大型表格，行 = 能力分类（生成与创作 / 审查与风控 / 知识与检索 / 集成与扩展），列 = 产品（文衡 / 照胆 / 句龙系统 / MCP / Skill / CLI），单元格用 `{typography.label-sm-mono}` 渲染"已支持/规划中"点阵
- **能力接入方式**：5 列 `card-feature`（同产品页）
- **企业部署与集成**：复用产品页模式
- **CTA Banner** + **Footer**

### 4. 部署方案（`/deployment`）

- **Hero**：标题 + 右侧"部署拓扑总览"3D 网络图（句龙 Core 居中，4 侧连接产品 + 部署能力）
- **数据指标条**：4 个 `stat-card`（126+ 部署交付项目 / 2-4 周平均接入周期 / 99.9% 系统可用性 / 私有/混合/本地）
- **部署模式总览**：4 列 `card-feature`（SaaS 部署 / 私有化部署 / 混合部署 / 本地部署 Core），每张卡顶部有"快速启动 / 高安全 / 灵活平衡 / 高控制"金边标签
- **部署架构与系统集成**：横向流程图（企业系统 → 句龙 Core → 能力输出），含 6 个能力图标
- **安全与治理保障**：4 列 `card-feature`（统一权限控制 / 审计日志与留痕 / 数据隔离与加密 / 角色与订阅治理）
- **实施路径**：5 阶段横向时间线（需求评估 → 环境梳理 → 接口适配 → 试点上线 → 正式交付），每节点是金色印章
- **部署方式对比**：表格，5 列对比维度（上线速度 / 安全等级 / 定制程度 / 运维要求 / 适用企业），4 行对比 4 种模式
- **CTA Banner** + **Footer**

### 5. 开发者文档（`/developers`）

- **Hero**：标题 + 右侧"句龙 Core"网络图 + 右侧 "POST /api/review" 实时响应 `card-terminal`
- **数据指标条**：4 个 `stat-card`（4 类接入方式 / 30+ 核心接口 / 多语言 SDK / 企业级鉴权）
- **快速开始**：4 阶段水平步骤（注册账号 → 创建 API Key → 选择接入方式 → 发起首次调用）
- **接入方式总览**：5 列 `card-feature`（API / MCP / Skill / CLI / Webhook SDK）
- **API 参考**：表格，列出方法 / 路径 / 说明 / 鉴权 / 响应状态（4 行示例）
- **鉴权与权限**：2 列对比（Product Key vs System Key），中央 "VS" 印章
- **代码示例**：Tab 切换（cURL / JavaScript / Python / Go），下方代码块 `card-terminal`
- **文档导航 / SDK 与工具**：网格布局，4+4 项
- **开发流程**：4 阶段水平时间线（开发测试 → 沙箱环境 → 联调验证 → 正式上线）
- **CTA Banner** + **Footer**

### 6. 关于我们（`/about`）

- **Hero**：标题"关于句龙" + 右侧"句龙 Core"网络图（带 6 个连接节点）
- **双 CTA**：了解产品体系 + 联系合作
- **四宫格价值观**：4 列 `card-feature`（我们的使命 / 我们的愿景 / 产品原则 / 价值观），每张配图标
- **为什么我们存在**：横向流程图（业务输入 → 前置合规智能层 → 企业系统），5 个步骤
- **产品生态与演进**：横向 4 阶段（文衡 → 照胆 → 能力接口层 → 句龙系统），每节点是金色印章 + "已上线/持续扩展/未来形态"状态徽章
- **我们如何构建产品**：4 列 `card-feature`（产品演进 / 业务逻辑拆解 / Build in public / 方法论）
- **企业级可信与安全保障**：6 列 `card-feature`（统一身份 / 权限隔离 / 审计留痕 / 私有化部署 / 数据安全 / 开放接口）
- **CTA Banner** + **Footer**

## Agent Prompt Guide

### 关键颜色速查

```
画布底色 canvas = #050810 (深墨蓝)
主色 primary   = #D4A04C (龙鳞金)
正文 ink       = #F5E9D4 (宣纸暖白)
通过 jade      = #1AE5C5 (翠玉)
风险 cinnabar  = #E74C3C (朱砂)
金线 hairline  = rgba(212,160,76,0.20)
```

### 关键字体速查

```
标题     = ZCOOL XiaoWei (fallback Source Han Serif SC)
正文     = Source Han Serif SC / Noto Serif SC
等宽标签 = JetBrains Mono
英雄数字 = Cinzel
```

### 一句话品牌提示

> 深墨蓝底 + 龙鳞金主色 + 衬线中文标题 + 1px 金线卡片 + 古建筑章节点缀 + 终端控制台永远是右侧主角 —— Hub 不是 SaaS 模板，是"卷轴上的青铜终端"。

### 禁止清单速查

1. 不用纯黑 `#000000`（用 `#050810`）
2. 不用纯白 `#FFFFFF`（用 `#F5E9D4`）
3. 不用 sans-serif 做 display（用 ZCOOL XiaoWei / Source Han Serif SC）
4. 不用 box-shadow 做卡片（用 1px 金线）
5. 不用 pill / 大圆角（≤ 8px）
6. 不用饱和渐变 / 多彩配色（金 + 翠绿 + 朱砂 三色足够）
7. 不用 emoji 在核心 CTA / 标题

## Iteration Guide

1. 每次新增 Section，先确定它在哪个 surface 层（canvas / surface-1 / surface-2 / surface-3）。
2. 章节之间永远用 `divider-section` + 居中印章图标分隔，不要只靠留白。
3. 默认正文使用 `{typography.body-md}` (15px Source Han Serif SC)。
4. 新增组件变体作为独立 `components.*` 条目，不要覆盖既有。
5. 金色 `primary` 永远稀缺 —— 出现一次要问"这是不是 CTA / 强调数字 / 品牌徽标？"
