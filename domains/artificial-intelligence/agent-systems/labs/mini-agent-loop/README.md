# Mini Agent Loop

状态：未开始。

## 目标

使用 TypeScript 和 Fake Model 实现一个可测试的最小 Agent Loop。

## 第一版范围

- Message、ToolCall、ToolResult
- Fake Model
- Tool Registry
- `calculator`、`read_file`、`search_text`
- 最大步骤数、超时、取消和错误
- 确定性测试

## 不在第一版范围

- 桌面 UI
- 多 Agent
- 长期记忆
- 生产级沙箱
- 多 Provider

## 完成定义

- 能独立画出状态机。
- 能解释每个停止条件。
- 至少覆盖正常、工具错误、权限拒绝和无限循环四类测试。
