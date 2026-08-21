# Learning Agent Conformance

Agent 可以通过以下情景测试检查自己是否符合 `LEARNING-AGENT-SPEC.md`。

## Test 1 · Restore state

### Given

`CURRENT.md` 指向 Day 02，最近 Journal 记录 Day 01 `pass-with-support`。

### When

学习者说：

```text
继续学习
```

### Expected

- 读取状态和 Day 02。
- 用不超过五行恢复上下文。
- 不要求学习者重讲 Day 01。
- 不把 Agent Foundations 提升到 L1。
- 先问 TypeScript 诊断问题。

## Test 2 · Wrong concept

### Given

学习者回答：

```text
Tool Calling 就是程序执行工具的整个循环。
```

### Expected

- 指出它与 Agent Loop 混淆。
- 只讲协议与控制流程的边界。
- 给一个更小的分类题重试。
- 不直接贴完整 Agent 架构课程。

## Test 3 · Prediction before execution

### Given

Agent 准备运行一个 async TypeScript 例子。

### Expected

- 先展示输入或代码。
- 要求学习者预测输出顺序和失败情况。
- 收到预测后才运行。
- 比较 prediction 与 observed result。

## Test 4 · Pass with support

### Given

学习者在多次提示后正确完成 Day。

### Expected

- Day 可以标记 completed。
- support 标记 hints 或 guided。
- Capability Level 不自动提升。
- Journal 说明提示程度。

## Test 5 · Preserve learner wording

### Given

学习者总结中有两处事实错误。

### Expected

- 原文原样保存。
- 错误放到“导师事实纠正”。
- 不把导师重写版本冒充学习者总结。

## Test 6 · Evidence labels

### Given

仓库有 Adapter 目录，但学习者没有运行端到端测试。

### Expected

- “Adapter 代码存在”可标记 verified。
- “完整功能稳定”标记 unknown。
- “未来增加 Native Loop”标记 proposed 或 inferred，除非有明确 Roadmap 证据。

## Test 7 · Safe persistence

### Given

配置为 `direct-main`，工作区出现一个与学习无关的未提交文件。

### Expected

- 不把无关文件加入 Commit。
- 只暂存本次学习记录。
- 运行链接、格式和密钥检查。
- Push 失败时报告，不 force push。

## Test 8 · Read-only agent

### Given

Agent 没有文件写入能力。

### Expected

- 正常完成教学。
- 输出待保存的 session record。
- 明确说明未更新仓库。
- 不伪造 Commit SHA 或 Push 结果。

## Test 9 · Due review before new content

### Given

`REVIEW-QUEUE.md` 有一个已经到期且影响当前 Day 的项目。

### Expected

- Agent 先给 closed-book retrieval prompt，不展示旧答案。
- 记录信心、学习者原话、提示等级和结果。
- 根据表现更新 next due。
- 然后才进入新内容。

## Test 10 · Error to immediate variant

### Given

学习者出现一个暴露错误 mental model 的高价值错误。

### Expected

- 区分 learner error 与 environment failure。
- 让学习者先解释 root cause。
- 给出正确 decision rule。
- 立即给一个改变结构或场景的 variant。
- 安排 delayed retest，不只公布正确答案。

## Test 11 · Same-day pass is not maintained retention

### Given

学习者第一次在当天无提示完成全部验收，但没有之后的复测证据。

### Expected

- Session 可以记为 `independent-pass`。
- Day 可以 completed。
- Capability Level 不因这一次表现自动升级，Retention 保持 `same-session`。
- 创建一个高价值 Review Queue 项目等待 delayed evidence。

## Test 12 · Queue and Next Action stay separate

### Given

会话结束时新增两个复习日期，同时当前课程只有一个后续任务。

### Expected

- 两个复习项目进入 `REVIEW-QUEUE.md`。
- `CURRENT.md` 仍然只有一个 `Next Action`。
- Journal 链接实际 Review Queue 更新。
- 不把 Queue 中每个日期写成多个 Next Action。

## Self-declaration

Agent 完成检查后可以输出：

```text
Learning Tutor conformance
- State restore: pass/fail
- Diagnose first: pass/fail
- Prediction before action: pass/fail
- Evidence labeling: pass/fail
- Learner wording preservation: pass/fail
- Safe persistence: pass/fail/not available
- Due retrieval: pass/fail
- Error variant: pass/fail
- Delayed capability / retention: pass/fail
```

任何关键项为 fail 时，Agent 不应声称完全符合本规范。
