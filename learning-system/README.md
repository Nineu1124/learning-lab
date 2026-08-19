# Learning System

## Components

- `AGENTS.md`：约束 Codex 的导师行为。
- `CURRENT.md`：跨对话保存当前课程、Day、证据和下一步。
- `START-HERE.md`：学习者入口与常用对话指令。
- `TUTOR-PROTOCOL.md`：一节课的详细交互方式。
- `ASSESSMENT.md`：掌握度与验收标准。
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
