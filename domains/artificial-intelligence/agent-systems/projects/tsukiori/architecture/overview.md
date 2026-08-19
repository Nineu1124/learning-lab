# Tsukiori Architecture Overview

状态：初始学习模板，等待本人逐项验证。

## 当前假设

```text
Desktop UI
  → Daemon / Host
  → Runtime Core
  → Runtime Adapter
  → Codex / Claude Code / OpenCode / Direct API
  → Normalized Events
  → Persistence / Replay
  → Desktop UI
```

## 验证任务

- 找到每一层的入口 package。
- 为箭头补上真实函数或协议。
- 标注进程边界、信任边界和持久化边界。
- 记录一处当前理解错误及修正过程。
