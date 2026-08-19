# Week 2 · Build a Deterministic Mini Agent Loop

本周目标：不依赖真实模型 API，用 Fake Model 亲手构建一个可预测、可测试的 Agent Loop。

## Day 08 · Contract First

### Outcome

定义 Message、ModelOutput、ToolCall、ToolResult 和 LoopState，并解释每个字段存在的理由。

### 对话开场

```text
开始 Day 08。先让我尝试设计数据结构。
你只通过问题指出遗漏，不要直接给最终 TypeScript 类型。
```

### Session

1. 根据“一次计算器工具调用”手写输入输出样例。
2. 从样例归纳类型，而不是先设计万能抽象。
3. 使用 discriminated union 区分 final/tool_call。
4. 加入一个无效状态，观察类型是否能阻止。
5. 讨论 serialization，但不提前实现 Runtime 协议。

### Evidence

- `mini-agent-loop` 中的第一组类型。
- 类型测试或 `tsc` 失败示例。
- 一张合法/非法状态表。

### Check

- 为什么 ToolCall 不应直接包含可执行函数？
- `unknown` 为什么通常比 `any` 更适合工具参数？
- 哪些状态可以在类型层阻止？

### Pass

能解释所有字段，并用编译器阻止至少一个非法状态。

## Day 09 · Fake Model

### Outcome

实现行为固定的 Fake Model，理解确定性测试为什么应先于真实 API。

### 对话开场

```text
开始 Day 09。先让我写出 Fake Model 的行为表，
再根据行为表设计接口和测试。
```

### Session

1. 写行为：用户问 `1+2` → 请求 calculator。
2. 收到结果 `3` → 返回最终答案。
3. 未知输入 → 返回固定说明或错误。
4. 记录调用次数和收到的消息。
5. 测试行为，而不是测试实现细节。

### Evidence

- Fake Model 实现。
- 至少三个固定测试。
- 一段说明：为什么现在不接 DeepSeek/OpenAI API。

### Check

- Fake 与 mock 的目的是什么？
- 如果 Fake 行为随机，测试会发生什么？
- 模型接口最小需要哪些输入输出？

### Pass

测试重复运行结果一致，且能通过调用记录解释上下文传递。

## Day 10 · Tool Registry

### Outcome

实现工具注册、查找、参数验证和统一结果，不让模型直接执行任意函数。

### 对话开场

```text
开始 Day 10。请先给我三个 Tool Registry 的错误设计，
让我判断风险，然后再开始实现。
```

### Session

1. 定义 Tool 的 name、description、schema、execute。
2. 注册 `calculator`。
3. 对未知工具 fail closed。
4. 对无效参数返回结构化错误。
5. 区分工具错误和 Agent Loop 自身错误。

### Evidence

- Tool Registry 与 calculator。
- unknown tool、invalid args、execution error 测试。
- 一张错误分类表。

### Check

- Tool description 给谁看？
- 为什么注册表不能直接信任模型参数？
- 工具异常应该变成消息还是终止循环？

### Pass

能够解释完整的工具查找和验证路径，并覆盖三类失败。

## Day 11 · First Complete Loop

### Outcome

把 Fake Model 和 Tool Registry 连接成第一条完整循环。

### 对话开场

```text
开始 Day 11。先让我画状态机和预测调用顺序，
通过后再逐步实现循环，每次只加一个状态转换。
```

### Session

1. 画 `call_model → final | tool_call`。
2. 实现只支持 final 的版本并测试。
3. 加入一次 tool call。
4. 将 ToolResult 放回 messages。
5. 再次调用模型并返回 final。
6. 输出可读事件日志。

### Evidence

- 端到端 `1+2 → calculator → 3` 测试。
- 实际事件序列。
- 本人解释每次 messages 如何变化。

### Check

- 谁决定循环继续？
- 工具结果为什么要回到模型？
- final answer 和 tool result 的语义区别是什么？

### Pass

能够不看代码说出调用次数、每次输入和状态变化。

## Day 12 · Stop, Timeout and Cancel

### Outcome

防止无限循环，并区分正常结束、预算结束、超时、取消和失败。

### 对话开场

```text
开始 Day 12。先让我列出 Agent Loop 可能永远不结束的原因，
再设计停止策略。
```

### Session

1. 增加最大步骤数。
2. Fake Model 永远请求同一工具，观察停止行为。
3. 增加超时或 deadline。
4. 增加 AbortSignal 取消。
5. 定义统一终止原因。

### Evidence

- max steps、timeout、cancel 三个测试。
- 终止原因类型和状态图。
- 一次 race condition 或边界讨论。

### Check

- Timeout 和 Cancel 谁触发？
- 为什么不能只依赖 Prompt 告诉模型停止？
- 达到最大步骤应该返回 final 还是失败状态？

### Pass

所有终止路径可区分、可测试，且不会遗留未处理异步任务。

## Day 13 · Permission Boundary

### Outcome

在执行工具前加入权限决策，理解审批是执行层约束而不是 Prompt 建议。

### 对话开场

```text
开始 Day 13。请先给我 read_file、write_file、run_command 三个场景，
让我设计权限等级和拒绝行为。
```

### Session

1. 定义 allow/ask/deny。
2. 为 calculator 设置 allow。
3. 为 read_file 设置 ask。
4. 为危险示例设置 deny。
5. 权限拒绝后让模型收到明确结果。
6. 记录 permission requested/decided 事件。

### Evidence

- Permission Gate。
- allow、deny、ask approved、ask rejected 测试。
- 一段说明：为什么 Prompt 不是安全边界。

### Check

- 模型能否绕过执行器中的 deny？
- 用户拒绝工具后 Loop 应如何继续？
- Worktree 隔离是否等于安全沙箱？

### Pass

权限检查发生在工具执行前，拒绝路径没有实际副作用。

## Day 14 · Test Matrix and Week Review

### Outcome

整理 Mini Agent Loop，使用测试矩阵证明正常和失败行为，并完成本人讲解。

### 对话开场

```text
开始 Day 14。本次不增加主要功能。
请先随机抽查 Agent Loop，然后让我根据状态机设计测试矩阵。
```

### Session

1. 不看代码画状态机。
2. 建立状态 × 输入 × 预期事件 × 终止原因矩阵。
3. 补齐缺失测试。
4. 故意引入一个 bug，先读失败再修复。
5. 编写 Lab README 的运行方式和限制。
6. 做 5 分钟口头演示。

### Evidence

- 可重复测试结果。
- 测试矩阵。
- 一个 bug 的失败/修复记录。
- Week 2 复盘与本人总结。

### Check

- 测试覆盖了哪些保证？
- 哪些生产问题仍没有解决？
- 将它接入真实 API 前最担心什么？

### Pass

Mini Agent Loop 可由新环境运行；本人可以从输入到终止完整解释，达到 Agent Loop L2 的候选证据。
