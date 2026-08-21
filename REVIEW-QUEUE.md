---
schema_version: 1.0.0
updated: 2026-08-21
default_schedule: [D0, D1, D3, D7, D14, D30]
schedule_mode: adaptive
---

# Review Queue

这是所有 Agent 共用的到期复习队列。开始新知识前先读取本文件，优先进行 1–3 个到期的 closed-book retrieval；完整回答和纠正写入当天 Journal，本文件只保存当前调度。

## Agent Rules

1. 只显示 `Retrieval Prompt`，不要先显示旧答案或总结。
2. 记录学习者回答前的信心、是否使用提示和是否通过陌生变式。
3. `independent-pass` 且通过变式才前进到更长间隔。
4. `hinted-pass` 不升级 Capability；`fail` 在纠正后安排最早有意义的 delayed retest，初始通常为 D1，但必须自适应。
5. 到期复习不替代 `CURRENT.md` 中唯一的 `Next Action`。
6. 固定阶段只是默认值，按 [Learning Method](learning-system/LEARNING-METHOD.md#spaced-review) 自适应调整。

## Stage and Lifecycle

- `Stage` 表示上一次有效结果后计划尝试的默认间隔，不是从最初学习日计算的不可变绝对日期。
- 逾期项目在下一次可用 Session 中补测；catch-up 不伪装成准时完成，也不会只因日期过去自动前进 Stage。
- `active`：仍在调度；`graduated`：已达到目标保持期并可转入按需维护；`suspended`：当前不再值得占用复习预算。
- `same-session / delayed-once / maintained` 只描述 Retention。一次 D1 通过最多为 `delayed-once`；`maintained` 需要多个与目标保持期有关的成功间隔。

## Result Codes

| Result | Meaning |
|---|---|
| `not-tested` | 尚未进行本阶段复测 |
| `independent-pass` | 闭卷、Hint Level 0 并通过变式 |
| `hesitant-pass` | 答对但不稳定或信心很低 |
| `hinted-pass` | 使用提示后完成 |
| `fail` | 无法正确提取或迁移 |
| `environment-blocked` | 环境导致无法验证，不评价知识 |

## Active Items

| ID | Atomic Skill | Retrieval Prompt | Source | Stage | Last Result | Next Due | Success Criteria | Retention | Lifecycle |
|---|---|---|---|---|---|---|---|---|---|
| `agent-layers-001` | Model / Tool Calling / Agent Loop / Harness / Runtime / Host 边界 | 不看资料画出六层关系，并判断一个新的 Agent 场景分别属于哪一层。 | [Day 01](journal/2026/08/2026-08-19-day-01.md) | D1 catch-up | `not-tested` | 2026-08-21 | closed-book、Hint 0，六层边界和新场景分类均正确 | `same-session` | `active` |
| `typescript-events-001` | interface、discriminated union、type erasure | 为 `AgentEvent` 增加一个未见过的 variant，预测 handler 行为，并解释编译后的 JavaScript 中还剩什么。 | [Day 02](journal/2026/08/2026-08-21-day-02.md) | D1 | `not-tested` | 2026-08-22 | closed-book、Hint 0，类型、handler 和 runtime 三部分均解释正确 | `same-session` | `active` |

## Review History Index

完成复测后在这里添加一行指向当天 Journal；不要复制完整回答。

| Date | Item | Result | Support | Evidence | Next Due |
|---|---|---|---|---|---|
