# Assessment

## Capability Level

| 等级 | 能力 | 最低证据 |
|---|---|---|
| L0 | 识别术语 | 能指出它属于哪一层，但解释可能不准确 |
| L1 | 准确解释 | 不看资料说清问题、输入、输出和边界，并通过辨析题 |
| L2 | 可复现实践 | 独立完成可复现实践，覆盖正常路径和至少一个重要边界 |
| L3 | 调试与修复 | 复现失败、提出假设、定位原因并验证修复 |
| L4 | 真实应用 | 在真实环境交付经过验证的作品、决策或变更；证据可为测试、报告、部署、Commit 或其他领域等价物 |
| L5 | 设计与评测 | 比较多个方案，建立 Benchmark/Eval，并解释权衡 |

## 每日验收

Day 的完成条件同时包含：

1. `Explain`：本人解释核心概念。
2. `Do`：完成阅读、命令、实验或代码任务。
3. `Fail`：观察一个失败、边界或反例。
4. `Prove`：留下文件、测试、Commit 或可复现命令。
5. `Transfer`：回答一个不同场景的迁移问题。

这些标准判断 `session_result`，不是对长期记忆的即时声明。

## 评分

| 结果 | 含义 |
|---|---|
| Not yet | 依赖答案或无法解释关键边界，继续当前 Day |
| Pass with support | 在提示下完成，进入下一 Day，但等级暂不提升 |
| Independent pass | Hint Level 0 完成当天验收；进入 delayed capability review，有延迟证据时才升级 |

## Session Result、Capability 与 Retention

这三个字段回答不同的问题，不能互相替代：

- `session_result`：学习者在当天是否满足 Explain、Do、Fail、Prove、Transfer。
- `capability_level`：学习者能够独立完成哪类行为；晋级证据要求之后的 Session 中 closed-book、`highest_hint_level = 0` 并通过变化场景。
- `retention_status`：该能力只在当天出现、延迟通过一次，还是在多个有意义间隔上保持。

同一天的 `independent-pass` 只证明当前表现，Retention 为 `same-session`。提升 Capability Level 至少还需要一次 delayed retrieval evidence，通常在 D1 或更晚进行；固定日期按表现自适应调整。一次独立延迟通过只把 Retention 标为 `delayed-once`；要标为 `maintained`，需要在与目标保持期限有关的多个有意义间隔上再次通过。

Delayed evidence 必须记录：

1. 与原学习日分开的复测日期。
2. 学习者在查看旧答案前的原始回答或 Artifact。
3. 使用的最高提示等级；用于晋级的独立 delayed evidence 必须为 0。
4. 一个不只是替换变量名的 variant / Transfer。
5. Review Queue 与 Evidence 链接。

Day 已真实完成后，不因新增 delayed evidence 规则追溯改成未完成；只保持或调整 Capability 与 Retention。

## Weekly Assessment

默认每完成七个 Course Session 进行一次限时、闭卷、混合检验，至少记录：

- 正确率与完成时间
- 提示次数和最高提示等级
- 错误类型分布
- Transfer 和真实任务结果
- 三个主要短板
- 下周增加、减少和保持的学习策略

混合检验用于决定后续计划，不能用学习时长、连续打卡或主观熟悉感替代。

## 防止虚假进度

以下情况不能作为 Capability 晋级或 Retention 保持证据：

- 只阅读完资料。
- 只复制 AI 总结。
- 代码运行成功但无法解释。
- 测试是 AI 写的且本人不知道测试证明什么。
- 没有记录真实命令或文件位置的“已经验证”。
- 同一天刚看过答案后复述正确。
- 只重复原题、没有变化场景的“迁移”。
- 仅凭学习时长、打卡天数或 AI 评价声称 `maintained`。
