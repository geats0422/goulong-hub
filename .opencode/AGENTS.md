# My OpenCode Configuration

为 AI 编码助手提供结构化、可持续优化的开发方法论。

## 项目定位

**Goulong-Hub（句龙·中枢）** — 句龙产品矩阵的展示性门户页面。

整合展示两大产品：
- **句龙·照胆（Goulong-Zhaodan）** — 工程文档智能体检平台（Neo-Chinese Cyberpunk 黑金风格）
- **句龙·文衡（Goulong-Wenheng）** — 资质/评定管理平台（暖朱砂 + 青绿配色）

### Scope
- **Frontend**: 展示性页面（纯前端，无后端业务逻辑）
- **定位**: 产品矩阵门户 — 引导用户了解并进入各产品
- **技术栈**: 待 `/brainstorm` 确定后补充至此

---

## Communication Language
- **All replies must be in Chinese (中文)** unless the user explicitly requests otherwise in a non-Chinese language.
- This includes code comments, commit messages, documentation, and any written communication.

---

## 核心原则

1. **完整性优先** — 完整实现用户目标、完整验证结果、完整清理本次改动造成的副作用；不要把完整性误解为添加未请求功能。
2. **简洁优先** — 最小代码解决当前问题。不要为单次使用创建抽象，不添加未请求的灵活性或未来扩展。
3. **手术式修改** — 每一行改动都必须能追溯到用户请求。不要顺手重构、格式化、改注释或清理无关死代码。
4. **先搜索再构建** — 写代码之前，先搜索是否有现成的工具、库或模式解决同样的问题。
5. **测试驱动** — 先写测试，看它失败，再写最小代码使其通过。80%+ 测试覆盖率是底线。
6. **安全第一** — 验证所有输入，不硬编码密钥，做参数化查询。
7. **用户说了算** — AI 推荐方案，用户做最终决定。当你有强烈的建议但用户反对时，解释理由然后尊重选择。

## 关键工作流

收到任何开发任务时，按照以下流程工作：

```
用户: "帮我实现用户认证"
    ↓
/brainstorm → 设计探索 → 澄清问题 → 方案对比 → 设计文档 → 用户批准
    ↓
AI 自动评估复杂度（需求边界/技术栈/改动范围/隐藏假设/方案确定性）
    ↓                              ↓
  全部简单                    任一复杂
    ↓                              ↓
/plan                          grill me → 需求校准
    ↓                              ↓
    ↓ ←——————————————————————————————┘
    ↓
/plan → 任务分解 → 计划文档 → 用户确认
    ↓
/execute 1 → 实现(含TDD) → spec-compliance-review → code-review → 完成
/execute 2 → ...
    ↓
/finish → 验证测试 → 提交 → 合并/PR/清理
```

### 强制规则

**代码编写前：**
- 必须完成 brainstorming 并获得用户批准（适用于所有项目，无论多简单）
- 必须完成 writing-plans 并获得用户确认
- 必须显式识别假设、歧义和成功标准；不确定时先问，不要静默选择

**代码编写中：**
- 必须先写失败测试，再写实现代码（TDD）
- 禁止修改 linter/formatter 配置文件来绕过代码质量检查
- 只修改完成当前目标所必需的代码；禁止 drive-by refactor

**代码编写后：**
- 必须运行验证命令确认修改正确
- 必须进行代码审查（spec + quality 两阶段）
- 禁止提交存在安全隐患的代码（硬编码密钥、未验证的用户输入等）

## 主工作流命令（按流程顺序）

| 命令 | 对应技能 | 何时使用 |
|------|---------|---------|
| `/brainstorm` | brainstorming | 任何新功能/创意/修改行为 — 设计探索第一步 |
| `grill me` | grill-me | brainstorming 评估为"复杂"时 — AI 质问验证需求对齐 |
| `/plan` | writing-plans | 需求对齐后 — 拆解为实施计划 |
| `/execute <N>` | execute-plans | 按计划逐个执行任务（TDD + 两阶段审查） |
| `/finish` | finishing-a-branch | 所有任务完成后 — 验证、提交、交付 |

## Project Structure
- `docs/` — 文档（designs/ plans/）
- `.opencode/` — OpenCode 配置（命令系统）

## Required Verification Before Finishing
- Lint + typecheck (frontend)
- 构建验证
- 跨浏览器/响应式验证（展示页面）

## Agent Guidance
- Prefer improving shared abstractions over copying logic.
- Search for existing components/composables/constants before creating ones.
- Keep changes narrowly scoped and consistent with existing patterns.
- Do not add dependencies unless materially justified.
- 展示页面需兼顾两个产品（照胆黑金 / 文衡暖朱砂）的视觉协调性。
- Update this file if you add new commands, workflows, or conventions.
