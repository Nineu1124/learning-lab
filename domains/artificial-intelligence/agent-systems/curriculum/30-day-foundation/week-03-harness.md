# Week 3 · Study Agent Harnesses

本周目标：建立统一研究框架，用事实和运行证据比较 Codex、Claude Code、OpenCode 与 DeepSeek 路径。

## Day 15 · Build the Comparison Model

### Outcome

建立 Model / Loop / Harness / Runtime / Host 的责任矩阵，作为后续案例统一模板。

### 对话开场

```text
开始 Day 15。先用五个边界案例测试我是否真正区分这些层，
然后让我自己建立比较表。
```

### Session

1. 为每层填写 owns / does not own。
2. 判断模型发出 ToolCall 后谁执行。
3. 判断 Session persistence 属于哪层或可能跨哪些层。
4. 区分 product feature 与 protocol capability。
5. 建立八个统一比较维度。

### Evidence

- 一张责任矩阵。
- 一份案例研究模板。
- 至少两个“边界取决于实现”的例子。

### Check

- Harness 一定包含 UI 吗？
- Runtime 一定包含模型调用吗？
- 同一模型能否被多个 Harness 使用？

### Pass

面对新工具时能提出边界问题，而不是根据产品名称直接分类。

## Day 16 · Codex Case Study

### Outcome

通过官方文档、实际版本和 Tsukiori Adapter 研究 Codex 的输入输出与能力边界。

### 对话开场

```text
开始 Day 16。请先确认当前 Codex 版本和本次允许阅读的官方资料，
再让我根据证据填写案例，不要凭记忆介绍功能。
```

### Session

1. 记录版本、运行形态和来源日期。
2. 研究 Session/Turn、工具、MCP、权限和沙箱。
3. 观察一次最小运行的事件或输出。
4. 对照 Tsukiori `adapter-codex` 的 capability probe 与事件映射。
5. 标记 verified / inferred / unknown。

### Evidence

- `case-studies/codex/README.md` 的第一版研究记录。
- 版本与官方链接。
- 一个真实事件或命令证据。

### Check

- Codex 的模型、Harness 和 Tsukiori Adapter 分别是什么？
- 哪些能力是版本敏感的？
- Permission 与 sandbox 有何不同？

### Pass

关键事实有来源，且不会把 Codex 产品行为错误归因于底层模型。

## Day 17 · Claude Code Case Study

### Outcome

使用同一模板研究 Claude Code，而不是写一份不可比较的功能介绍。

### 对话开场

```text
开始 Day 17。先复用 Day 15 的统一问题，
让我预测 Claude Code 与 Codex 哪些部分可能不同，再查证。
```

### Session

1. 记录版本和资料来源。
2. 研究 stream/structured output、工具、Hooks、权限与 Session。
3. 查看 Tsukiori `adapter-claude` 的启动参数和事件映射。
4. 找一个与 Codex 相同的任务进行观察。
5. 记录共同点、差异和未知项。

### Evidence

- `case-studies/claude-code/README.md` 研究记录。
- 至少一项预测被证实或推翻。
- 一张 Codex / Claude Code 差异表。

### Check

- “两个 Harness 都能改代码”是否说明内部协议相同？
- Hook 与 MCP Tool 是同一种扩展点吗？
- Adapter 为什么要做事件归一化？

### Pass

所有比较使用相同维度，并能指出一个表面相似但语义不同的能力。

## Day 18 · OpenCode Case Study

### Outcome

研究开放、多 Provider Harness 的结构，并理解开放源码带来的可验证性与复杂性。

### 对话开场

```text
开始 Day 18。先让我从仓库结构猜测 OpenCode 的主要边界，
然后通过源码或文档逐项验证。
```

### Session

1. 记录研究的具体仓库和 commit/version。
2. 找 Provider abstraction、Loop、Tool、Session 和 Permission 入口。
3. 跟踪一个最小 Turn。
4. 对照 Tsukiori OpenCode Adapter。
5. 讨论开放源码事实与产品运行事实的区别。

### Evidence

- `case-studies/opencode/README.md` 研究记录。
- 五个真实文件或符号。
- 一条执行链和一项未知。

### Check

- 多 Provider Harness 如何避免模型差异泄漏到所有层？
- Adapter 与 Provider Adapter 是否同一层？
- 可以读源码是否意味着行为已被测试证明？

### Pass

能够给出带 commit/version 的可复现研究结论。

## Day 19 · DeepSeek: Provider or Harness?

### Outcome

准确区分 DeepSeek 模型/API、OpenAI-compatible API、Agent Loop 和具体 Harness 项目。

### 对话开场

```text
开始 Day 19。请先给我四个“支持 DeepSeek”的不同说法，
让我判断每句话实际支持到了哪一层。
```

### Session

1. 画 Provider → Model Adapter → Loop → Harness → Tsukiori Adapter。
2. 检查 Tsukiori Direct API 当前支持的能力。
3. 找到 tool call 返回后当前路径如何处理。
4. 若研究具体 DeepSeek Harness，固定仓库和版本；否则明确标记不存在该研究对象。
5. 写出“模型接入”和“Harness 接入”两份验收标准。

### Evidence

- `case-studies/deepseek/README.md` 更新。
- 一张两类接入对比表。
- 一个真实代码或运行证据。

### Check

- OpenAI-compatible 是否代表工具语义完全相同？
- Direct API 能聊天是否代表已有 Agent Loop？
- Tsukiori 该增加 Model Adapter 还是 Harness Adapter，取决于什么？

### Pass

不再使用“接了 DeepSeek”这种模糊表述，能够准确说明接入层级。

## Day 20 · Design a Fair Benchmark

### Outcome

设计一个规模小、可重复、能比较 Harness 而非只比较模型能力的任务集。

### 对话开场

```text
开始 Day 20。先让我提出三个测试任务，
你通过追问帮助我排除不公平或无法复现的设计。
```

### Session

1. 定义任务输入、初始仓库状态和成功条件。
2. 固定环境、权限、时间和重试规则。
3. 选择 bug fix、代码追踪、工具失败恢复三个任务。
4. 定义成功率、步骤、工具错误、权限、时间、成本和恢复指标。
5. 设计人工判分和自动判分边界。

### Evidence

- `projects/harness-benchmark/` 的 Benchmark Spec。
- 三个任务与评分 rubric。
- 一份已知限制。

### Check

- 模型不同会怎样影响 Harness 比较？
- 只比较最终成功是否足够？
- 如何防止测试数据被运行间污染？

### Pass

另一个人可以根据 Spec 重复实验，并得到结构相同的结果数据。

## Day 21 · Harness Review and Report

### Outcome

完成第一版比较报告，并通过不看资料的综合辨析。

### 对话开场

```text
开始 Day 21。本次不增加新案例。
请随机给我边界题和反例，然后审核我的比较报告是否混淆层级。
```

### Session

1. 不看资料解释四条路径。
2. 审计表格中所有“支持/不支持”的证据。
3. 把 unknown 与 unsupported 分开。
4. 选择一项结论设计反证实验。
5. 给 Week 3 做五分钟讲解。

### Evidence

- Harness Comparison v1。
- 来源和版本清单。
- 一项反证实验设计。
- Week 3 本人复盘。

### Check

- 哪些差异来自模型，哪些来自 Harness？
- 哪些结论可能随版本变化？
- Tsukiori 的统一 Adapter Contract 带来什么价值和信息损失？

### Pass

报告没有把 unknown 写成 unsupported，所有关键结论可追溯到来源或实验。
