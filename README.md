# 句龙·中枢 — 产品矩阵展示门户

> **Goulong Hub** — 句龙产品矩阵的统一展示入口。

## 项目定位

句龙·中枢是面向「句龙」产品矩阵的展示性门户页面，整合呈现两大核心产品，引导用户了解并进入各产品：

| 产品 | 定位 | 视觉风格 |
| --- | --- | --- |
| **句龙·照胆** | 工程文档智能体检平台 — 招投标/合同文件签字前风险体检 | Neo-Chinese Cyberpunk · 黑金主调 |
| **句龙·文衡** | 资质/评定管理平台 | 暖朱砂 + 青绿配色 |

## 当前状态

> 项目骨架已就绪，命令系统完整可用。展示页面的具体设计待 `/brainstorm` 确定。

## 项目结构

```
Goulong-Hub/
├── docs/                     # 文档（designs/ plans/）
│   ├── designs/              # 设计文档
│   └── plans/                # 实施计划
└── .opencode/                # OpenCode AI Agent 配置（命令系统）
    ├── opencode.json         # 配置入口
    ├── AGENTS.md             # 工作约定
    ├── commands/             # 命令系统（含 manifest.json）
    ├── agents/               # Agent 提示词
    └── ...                   # skills / rules / instructions / plugins
```

## 开发流程

本项目遵循标准工作流：

```
/brainstorm → /plan → /execute → /finish
```

1. `/brainstorm` — 设计探索：确定技术栈、视觉风格、页面结构、内容架构
2. `/plan` — 拆解为实施任务
3. `/execute` — 逐个实现（含 TDD + 两阶段审查）
4. `/finish` — 验证、提交、交付

详见 `.opencode/AGENTS.md`。
