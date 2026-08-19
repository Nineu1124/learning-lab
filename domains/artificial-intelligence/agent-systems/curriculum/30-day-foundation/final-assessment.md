# Final · RFC Review and Assessment

## Day 29 · RFC Review and Demo Plan

### Outcome

对 RFC 做一致性审查，形成最小实现切片和可演示的用户流程。

### 对话开场

```text
开始 Day 29。请作为严格 Reviewer，先只提出问题，
不要替我改 RFC。按边界、状态、事件、权限、恢复和测试六类审查。
```

### Session

1. 检查 Problem 是否被设计真正解决。
2. 检查 Goals 与 Non-goals 是否矛盾。
3. 从状态机追踪一次正常和一次拒绝流程。
4. 检查事件是否支持恢复且不重复副作用。
5. 将实现拆成 3–5 个可独立合并的 PR。
6. 设计 3 分钟演示，但不以演示替代测试。

### Evidence

- RFC Review Comments 与修订记录。
- PR 切片计划。
- Demo script。
- 未解决风险列表。

### Check

- 第一个 PR 是否无需真实 Provider？
- 哪一项设计最可能扩大范围？
- 哪项风险必须在编码前解决？

### Pass

RFC 的每个主要设计可追溯到问题或约束，首个 PR 足够小且能独立验证。

## Day 30 · Independent Assessment and Next Cycle

### Outcome

通过综合答辩，整理证据并依据真实能力制定下一周期，而不是直接开始更多功能。

### 对话开场

```text
开始 Day 30。进入验收模式。
请不要讲新知识，也不要给答案；从概念、代码、失败和迁移四个维度考核我。
```

### Assessment

1. 白板解释 Model → Loop → Harness → Runtime → Tsukiori。
2. 不看代码讲 Mini Agent Loop 的一次完整状态变化。
3. 阅读一个失败测试并提出定位步骤。
4. 比较 Codex、Claude Code、OpenCode 和 DeepSeek 路径的层级。
5. 讲解 Tsukiori Native Loop RFC 的三项关键取舍。
6. 回答迁移题：如果换成非编码 Research Agent，哪些抽象可复用？

### Evidence

- 10–15 分钟本人讲解稿或录屏链接。
- Portfolio evidence index。
- 更新所有 Progress 文件。
- 明确哪些主题仍是 L0/L1，不强行升级。
- 下一周期最多三个目标。

### Pass

- 概念层级没有关键混淆。
- Mini Loop 达到 L2 候选证据。
- Tsukiori Runtime 达到 L1 候选证据。
- 能指出至少三项当前不知道或尚未验证的内容。

## 推荐下一周期

根据 Day 30 结果选择，不同时开展：

1. Tsukiori Native Loop 第一个无凭据 PR。
2. MCP Tool Execution 与 Permission 集成。
3. DeepSeek Provider/Harness 的明确适配任务。
4. Evidence Research Agent 与引用 Eval。
