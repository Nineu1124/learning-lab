# Week 4 · Design Tsukiori Native Agent Loop

本周目标：将前三周知识转化成 Tsukiori Native Agent Loop RFC。先设计与验证边界，不追求一次完成生产实现。

## Day 22 · Problem, Goals and Non-goals

### Outcome

准确说明现有 Direct API、Runtime Core 与计划中的 Native Agent Loop 之间缺少什么。

### 对话开场

```text
开始 Day 22。请先让我根据代码证据描述问题，
你只检查我是否把现象、根因和方案混在一起。
```

### Session

1. 找到 Direct API 遇到 tool calls 的当前行为。
2. 区分“不能执行工具”的现象与“缺少 Loop”的设计缺口。
3. 写三项 Goals、三项 Non-goals。
4. 列出继续依赖外部 Harness 与增加 Native Loop 的取舍。
5. 确定 v0 只用 Fake Model 还是包含真实 Provider。

### Evidence

- RFC Problem、Goals、Non-goals。
- 至少两个代码位置。
- 一张 current / proposed 对比图。

### Check

- 为什么不直接把 Codex Loop 复制进来？
- Native Loop 是否应该替代所有 Harness？
- 第一版最小价值是什么？

### Pass

问题描述不依赖预设方案，Non-goals 足够具体，能限制 AI 扩大范围。

## Day 23 · State Machine and Interfaces

### Outcome

定义可测试的状态机和最小接口，不把 UI、Provider、Tool 和 Runtime 状态混在一个类中。

### 对话开场

```text
开始 Day 23。先让我复用 Mini Agent Loop 画状态机，
再逐项判断哪些接口属于 Tsukiori，哪些应保持独立。
```

### Session

1. 定义 idle/calling_model/awaiting_permission/executing_tool/completed/failed/cancelled。
2. 为每个转换定义触发条件和事件。
3. 草拟 ModelAdapter、ToolRegistry、StopPolicy。
4. 标记纯逻辑与副作用边界。
5. 检查非法转换。

### Evidence

- RFC 状态图。
- 接口草案。
- 非法转换表。

### Check

- Permission pending 时可以再次调用模型吗？
- Cancel 在每个状态下如何表现？
- Loop State 与持久化 Session State 是否相同？

### Pass

每个转换有触发条件和输出事件，非法状态可以被识别。

## Day 24 · Fake Model Integration Plan

### Outcome

设计不依赖 API Key 的最小实现路径，确保 CI 可以重复验证 Loop 行为。

### 对话开场

```text
开始 Day 24。请先让我提出如何把 Week 2 Fake Model 接入 Tsukiori，
然后用依赖方向和测试性审查方案。
```

### Session

1. 找到 package 边界和依赖方向。
2. 决定新 package 或现有 package 的放置位置。
3. 定义 Fake Model Fixture。
4. 设计零凭据 Stage 0 测试。
5. 列出真实 Provider 接入前保留的接口。

### Evidence

- Package placement decision。
- Fixture 行为表。
- 至少五个确定性集成测试。

### Check

- 为什么 CI 第一阶段不应该依赖真实模型？
- Fake Model 应位于生产 package 还是 testkit？
- 怎样避免为了测试暴露错误的生产接口？

### Pass

方案可在无凭据环境验证核心状态机，且没有反向破坏现有依赖层次。

## Day 25 · Runtime Event Mapping

### Outcome

把 Agent Loop 内部步骤映射为稳定、可恢复的 Runtime Event。

### 对话开场

```text
开始 Day 25。先让我列出一次 tool call 的内部事件，
再和 Tsukiori 现有 Event Contract 对照，不要立即增加新事件。
```

### Session

1. 列出 turn/model/tool/permission/terminal 事件。
2. 查找现有 schema 是否已经表达。
3. 区分原生 provider event 与 normalized event。
4. 定义 ordering、dedupe 和 bounded payload 要求。
5. 设计 replay 后 UI 应恢复的状态。

### Evidence

- RFC Event Mapping 表。
- reuse / extend / unknown 决策。
- 一条乱序或重复事件测试设想。

### Check

- 为什么不能把原始 Provider Event 直接交给 UI？
- Stream sequence 与 Turn sequence 有什么区别？
- Replay 是否应该重新执行工具？

### Pass

事件语义足够稳定，重放不会重复产生外部副作用。

## Day 26 · Permission Broker Integration

### Outcome

定义 Native Loop 如何请求、等待和处理权限，同时保持 Permission Broker 为权威决策点。

### 对话开场

```text
开始 Day 26。先让我画出 model tool request 到真正 execute 之间的信任边界，
再检查每一步能否被绕过。
```

### Session

1. 识别工具元数据、Policy 和用户决策来源。
2. 定义 PermissionRequest 与关联 ID。
3. 设计 approve/deny/cancel/stale response。
4. 设计重启恢复后的 pending permission 行为。
5. 明确凭据和敏感参数的日志策略。

### Evidence

- RFC Permission Sequence。
- 威胁/失败表。
- 至少五个权限测试。

### Check

- 模型能否声明某工具“不需要权限”？
- 过期批准为什么危险？
- 用户拒绝后返回模型的信息应该包含什么？

### Pass

所有外部副作用都必须经过执行层权限检查，审批结果与具体请求绑定。

## Day 27 · Evidence Tool Scenario

### Outcome

用 `search_notes` 定义一个真实但可控的工具场景，连接 Native Loop 与 Evidence Research Agent。

### 对话开场

```text
开始 Day 27。请先让我定义 search_notes 的输入输出和引用要求，
再用一个最小文档集验证它是否适合作为第一个真实工具。
```

### Session

1. 定义 query、scope、limit。
2. 定义 source path、line/section、snippet、score。
3. 准备三份小 Markdown 文档。
4. 设计命中、无结果、无权限和恶意内容场景。
5. 让 Fake Model 使用结果生成带来源回答。

### Evidence

- `search_notes` contract。
- 固定文档 fixture。
- 至少四个工具测试和两个 Loop 测试。

### Check

- 检索结果为什么不是事实本身？
- Prompt Injection 可能藏在哪里？
- 引用验证由工具、Loop 还是最终评测负责？

### Pass

回答中的来源可以追溯，工具输出有边界，文档内容不会自动获得指令权限。

## Day 28 · Failure and Test Strategy

### Outcome

以失败模式驱动 RFC 测试策略，确认 v0 的可验证完成定义。

### 对话开场

```text
开始 Day 28。本次不增加功能。
请让我从状态机逐状态列失败模式，再审查是否有不可测试的要求。
```

### Session

1. Model failure、invalid tool call、tool failure。
2. Permission deny、timeout、cancel、max steps。
3. Duplicate/out-of-order event、daemon/UI restart。
4. 定义 unit/contract/integration/e2e 各自覆盖什么。
5. 确定 v0 release gate。

### Evidence

- Failure Matrix。
- Test Pyramid。
- RFC Testing Strategy 与验收清单。

### Check

- 哪些失败必须 fail closed？
- 哪些测试必须无 API Key？
- UI 演示成功能否替代恢复测试？

### Pass

每个关键失败至少对应一个可执行测试层级，没有“人工看起来正常”式模糊标准。
