# Learning System

## Components

- `LEARNING-AGENT-SPEC.md`：所有 Agent 通用的规范和状态机。
- `LEARNING-CONFIG.md`：学习者偏好、语言和仓库写入策略。
- `AGENTS.md`：约束 Codex 的导师行为。
- `CURRENT.md`：跨对话保存当前课程、Day、证据和下一步。
- `START-HERE.md`：学习者入口与常用对话指令。
- `TUTOR-PROTOCOL.md`：一节课的详细交互方式。
- `ASSESSMENT.md`：掌握度与验收标准。
- `AGENT-ONBOARDING.md`：切换 Agent 时使用的启动提示词。
- `AGENT-CONFORMANCE.md`：验证 Agent 是否遵守规范的情景测试。
- `journal/`：按时间记录真实学习过程。
- `domains/`：整理后的知识、实验、案例和项目。

## State transition

```text
ready
→ diagnosing
→ learning
→ practicing
→ checking
→ completed
```

某个 Day 未通过验收时保持 `checking` 或回到 `practicing`，不因为日期变化自动进入下一天。
