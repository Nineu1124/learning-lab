# Week 1 · Foundations and Tsukiori Orientation

本周目标：建立最小编程基础和 Agent Systems 层级地图，完成 Tsukiori 的第一条只读追踪。

## Day 01 · 建立真实基线

### Outcome

不用资料说出 Model、Agent Loop、Harness、Runtime、Host 的初步区别，并明确哪些是猜测。

### 对话开场

```text
开始 Day 01。请先读取 CURRENT.md。
不要讲答案，先问我三个基线问题，判断我现在对 Agent 系统的理解。
```

### Session

1. 回答：大模型为什么不能自己读取电脑文件？
2. 回答：你认为 Codex 和 DeepSeek 模型有什么区别？
3. 回答：你认为 Tsukiori 在整个系统中负责什么？
4. 导师只讲一张六层地图：Model → Tool Calling → Loop → Harness → Runtime → Host/UI。
5. 你重新画图，并为每层写一句话。
6. 导师给三个场景，你判断属于哪一层。

### Evidence

- 更新 `GLOSSARY.md` 中至少五个术语。
- 保存一张本人绘制的层级图或 Markdown 图。
- Journal 记录一个“原来理解错误”的例子。

### Check

- DeepSeek API 是否等于 DeepSeek Harness？为什么？
- Agent Loop 和 Runtime 分别控制什么？
- Tsukiori 当前已有哪一层，准备补哪一层？

### Pass

能用自己的话回答，不要求术语完美；必须明确 Harness 与模型 API 不相同。

## Day 02 · TypeScript 阅读基础

### Outcome

能读懂 Tsukiori 中常见的 `type`、`interface`、union、function、class、import/export。

### 对话开场

```text
开始 Day 02。请用三个很小的 TypeScript 片段测试我会读什么，
然后只讲我答错的部分。
```

### Session

1. 阅读一个 `Message` interface。
2. 阅读一个 discriminated union，例如 text/tool_call/tool_result。
3. 预测一个函数对不同输入返回什么。
4. 在 Lab 中手写 20–40 行类型与函数，不复制完整答案。
5. 故意传入错误类型，观察 TypeScript 诊断。

### Evidence

- 一份可运行的小 TypeScript 文件。
- 记录一个编译错误、原因和修正。
- 用自己的话解释 union 为什么适合事件类型。

### Check

- `interface` 描述的是什么？
- union 如何帮助穷尽处理事件？
- TypeScript 类型在运行时是否仍然存在？

### Pass

能读懂最小例子，并根据编译器错误修正一个类型问题。

## Day 03 · Async、Promise 与错误

### Outcome

理解异步调用、等待、异常传播和取消为什么是 Agent Runtime 的基础。

### 对话开场

```text
开始 Day 03。先给我一个 async/await 执行顺序预测题，
等我回答后再运行。
```

### Session

1. 预测同步日志、Promise 和 `await` 的输出顺序。
2. 实现一个延迟返回的 Fake Model。
3. 给 Fake Model 加入失败分支。
4. 分别观察捕获错误和未捕获错误。
5. 讨论超时和 AbortSignal，但当天不做完整实现。

### Evidence

- 一个 async 成功测试和一个失败测试。
- Journal 写出错误从哪里产生、在哪里处理。

### Check

- `await` 是否会阻塞整个 Node.js 进程？
- 为什么 Agent 的工具错误不能直接让整个 Runtime 崩溃？
- `throw` 与返回 `{ ok: false }` 的取舍是什么？

### Pass

能预测主要执行顺序，并解释一个异常的传播路径。

## Day 04 · Process、Streams 与 JSONL

### Outcome

理解 Harness Adapter 为什么经常需要处理子进程、stdout/stderr 和增量事件。

### 对话开场

```text
开始 Day 04。先通过一个生活类比解释进程和流，
然后让我预测分块读取 JSONL 时会出现什么问题。
```

### Session

1. 区分 process、stdin、stdout、stderr。
2. 观察一个子进程输出多行 JSONL。
3. 模拟一条 JSON 被拆成两个 chunk。
4. 实现按换行缓冲后再解析。
5. 故意加入一条无效 JSON，设计错误处理。

### Evidence

- `streaming-jsonl` 最小实验。
- 至少覆盖 split chunk 和 invalid JSON 两个测试。

### Check

- chunk 是否一定等于一条消息？
- stderr 是否一定代表进程失败？
- 为什么 Runtime Event 需要 sequence 或 ordering？

### Pass

能解释 chunk/message 的区别，并修复一次跨 chunk 解析失败。

## Day 05 · Git、pnpm、Turborepo 与测试

### Outcome

能安全地在 Monorepo 中定位 package、运行局部命令并理解 Git diff。

### 对话开场

```text
开始 Day 05。不要修改代码，先让我根据 package.json 和 workspace 文件
判断仓库如何组织、怎样只测试一个 package。
```

### Session

1. 阅读根 `package.json` 与 workspace 配置。
2. 找到一个 package 的入口、脚本和依赖。
3. 运行全局与局部 typecheck/test，比较差异。
4. 创建一个无害的小变更，阅读 `git diff` 后撤销或保留。
5. 解释 commit、branch、PR 各自解决的问题。

### Evidence

- 记录三个真实命令及其作用。
- 截取或摘要一次局部测试结果。
- 写出一次 `git diff` 解读。

### Check

- Monorepo 为什么不等于一个巨大 package？
- Lockfile 解决什么问题？
- Test 通过能证明什么、不能证明什么？

### Pass

能独立找到一个 package 并运行其相关验证，不执行危险 Git 命令。

## Day 06 · Tsukiori Package Map

### Outcome

能用“职责、输入、输出、依赖”描述至少五个核心 package。

### 对话开场

```text
开始 Day 06。请读取 Tsukiori 学习分支的 package-map 模板。
一次只带我研究一个 package，不要替我填写整张表。
```

### Session

按照顺序研究：`domain` → `runtime-core` → `adapter-codex` → `permission-broker` → `recovery-manager`。

每个 package 都回答：

1. 它拥有哪类状态或行为？
2. 谁调用它？
3. 它调用谁？
4. 失败时由谁处理？
5. 哪条结论有代码位置证明？

### Evidence

- 填写 `projects/tsukiori/architecture/package-map.md` 至少五行。
- 每行包含至少一个真实文件或导出符号。
- 标记 verified / inferred / unknown。

### Check

导师随机选择两个 package，要求比较它们的边界，而不是复述名称。

### Pass

至少三行达到 verified；不能将 Adapter、Runtime Core 和 Domain 混为一体。

## Day 07 · Trace a Codex Turn + Week Review

### Outcome

追踪一次用户请求从 Desktop 到 Codex，再通过事件返回 UI 的主路径。

### 对话开场

```text
开始 Day 07。本次是检索复习和代码追踪，不学习新的大概念。
先随机抽查本周内容，再和我一起追踪一个 Codex Turn。
```

### Session

1. 不看资料复述六层地图。
2. 预测一次 Turn 需要经过的主要 package。
3. 从一个真实入口逐步追踪，不允许跳过箭头。
4. 为每个箭头记录函数、消息或协议。
5. 选择 Cancel、Permission denied 或 Adapter crash 中一个失败路径。
6. 完成本周口头复述。

### Evidence

- 填写 `projects/tsukiori/traces/codex-turn.md`。
- 一张调用链图。
- 一个失败路径。
- 更新 Week 1 Journal。

### Check

- 哪一步跨进程？
- 哪一步把原生事件转换成统一事件？
- 如果 UI 重启，哪些状态不应丢失？

### Pass

主路径可以不完整，但每条已写箭头必须有证据；能够指出至少两个仍未知的环节。
