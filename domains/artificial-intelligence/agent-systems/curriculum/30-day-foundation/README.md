# 30-Day Agent Systems Foundation

这是面向零基础学习者的对话式课程。课程不是按日历自动推进，而是按验收推进；“Day”代表一个课次，可以用一天或多天完成。

## 最终目标

完成后应当能够：

1. 区分 Model、Tool Calling、Agent Loop、Harness、Runtime 与 Host。
2. 用 TypeScript 实现并测试一个最小 Agent Loop。
3. 使用统一框架研究 Codex、Claude Code、OpenCode 与 DeepSeek 路径。
4. 追踪 Tsukiori 中一次 Turn 的主要执行链。
5. 写出本人能够解释的 Tsukiori Native Agent Loop RFC。

## 课程结构

| 阶段 | Days | 产出 |
|---|---:|---|
| [Week 1 · Foundations](week-01-foundations.md) | 01–07 | 概念地图、开发基础、Tsukiori Package Map 与 Turn Trace |
| [Week 2 · Mini Agent Loop](week-02-agent-loop.md) | 08–14 | 可运行、可测试的确定性 Mini Agent Loop |
| [Week 3 · Harness Study](week-03-harness.md) | 15–21 | 四类 Harness 路径案例和统一比较报告 |
| [Week 4 · Tsukiori Integration](week-04-tsukiori.md) | 22–28 | Native Loop RFC 的主要设计章节 |
| [Final · Assessment](final-assessment.md) | 29–30 | RFC 自审、口头答辩、证据索引与下一周期路线 |

进度看板：[PROGRESS](PROGRESS.md)。当前课次以仓库根目录 `CURRENT.md` 为准。

## 每个 Day 的使用方法

1. 在对话中说 `开始 Day XX`。
2. 导师读取 `AGENTS.md`、`CURRENT.md` 和当天内容。
3. 先回答诊断问题，不查资料。
4. 完成当天最小实践。
5. 回答验收问题。
6. 自己写总结。
7. 说 `结束本次学习`，由导师协助更新记录。

## 进度规则

- 未完成 Practice 和 Evidence，不进入下一 Day。
- 在大量提示下完成可进入下一 Day，但对应能力仍保持原等级。
- 每七个 Day 进行一次不学习新知识的检索复习。
- 学习者可以休息，但不能通过补写日志假装完成实践。

## 代码仓库边界

- Mini Agent Loop 代码：本仓库的 `labs/mini-agent-loop`。
- Tsukiori 正式代码：独立的 `Nineu1124/Tsukiori` 仓库。
- 对 Tsukiori 的理解、RFC、实验记录和 PR 链接：本仓库 `projects/tsukiori` 分支。
