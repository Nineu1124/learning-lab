# Roadmap

## 当前周期：Agent Systems 基础

时间：2026-08-19 至 2026-09-17。

### Week 1：建立地图并读懂一次请求

- 运行并验证 Tsukiori
- 补齐 TypeScript、异步、进程、流、Git 和测试的最低基础
- 绘制 Tsukiori 架构图
- 追踪一次 Codex Turn
- 脱离 AI 复述请求路径

### Week 2：最小 Agent Loop

- 定义 Message、ToolCall 和 ToolResult
- 实现 Fake Model
- 实现 Tool Registry
- 实现循环、停止条件、超时和取消
- 增加权限门和确定性测试

### Week 3：Agent Harness 对比

- 区分模型 API、Agent Loop、Harness、Runtime 和 Host
- 研究 Codex、Claude Code、OpenCode 与 DeepSeek 路径
- 使用相同任务比较事件、工具、权限、取消和恢复
- 输出 Harness Comparison v1

### Week 4：进入 Tsukiori

- 编写 Native Agent Loop RFC
- 建立 Fake Model 驱动的最小骨架
- 设计 Runtime Event 映射
- 设计 Permission Broker 接入
- 用 `search_notes` 作为 Evidence Agent 的第一个工具场景

## 后续周期

1. Native Agent Loop 与 MCP 工具执行。
2. DeepSeek provider 与具体 Harness 适配边界。
3. Evidence Research Agent。
4. Harness Benchmark、Evals、Observability 与 Security。
5. 继续添加新的非 Agent 学习领域。
