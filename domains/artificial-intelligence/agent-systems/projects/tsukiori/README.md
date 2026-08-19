# Tsukiori

## Source Repository

https://github.com/Nineu1124/Tsukiori

Tsukiori 是 Agent Systems 学习分支下的综合实践项目。正式源代码、Issue、PR 和 Release 保留在独立仓库；这里记录本人对架构的理解、实验、提案和贡献证据。

## 学习主题

- Agent Runtime
- Harness Adapter
- Session 与 Turn
- Event Normalization
- Permission Broker
- Recovery 与 Replay
- Multi-Agent
- MCP、Skills 与 Memory
- Observability 与 Security

## 当前目标

1. 绘制项目架构。
2. 追踪一次 Codex Turn。
3. 区分现有 Runtime Core 与缺失的 Native Agent Loop。
4. 编写本人可以解释的 Native Agent Loop RFC。
5. 将正式修改通过 Tsukiori PR 交付。

## 文档

- [架构概览](architecture/overview.md)
- [Package Map](architecture/package-map.md)
- [Codex Turn Trace](traces/codex-turn.md)
- [Native Agent Loop RFC](proposals/native-agent-loop-rfc.md)
- [贡献记录](reviews/contributions.md)

## 诚实状态

项目现有大部分代码由 AI 生成。当前等级从 L0 开始，以“本人能解释、测试、故障定位和设计取舍”为升级依据。
