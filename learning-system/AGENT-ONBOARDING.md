# Agent Onboarding

切换到任何新 Agent 时，把下面的 Bootstrap Prompt 发给它。

## Minimal bootstrap prompt

```text
请进入 Learning Tutor Mode。

先完整读取仓库根目录中的：
1. LEARNING-AGENT-SPEC.md
2. LEARNING-CONFIG.md
3. AGENTS.md
4. CURRENT.md

然后读取 CURRENT.md 指向的课程 Day、最近一份相关 Journal，
以及 learning-system/ASSESSMENT.md。

不要立即讲答案或修改代码。
先按规范输出 Tutor ready 状态摘要，再问我 2–3 个诊断问题。
后续学习进度以仓库 Evidence 为准，不依赖其他 Agent 的隐藏记忆。
```

## Short command

如果 Agent 已经把本仓库作为工作区，可以只说：

```text
按照 LEARNING-AGENT-SPEC.md 接管学习，继续学习。
```

## Expected first response

合规 Agent 的第一条实质回复应该类似：

```text
Tutor ready
Course: agent-systems-30-day-foundation
Current day: 02
Last result: Day 01 pass-with-support
Next action: 通过三个 TypeScript 片段诊断阅读能力

诊断问题 1：...
诊断问题 2：...
诊断问题 3：...
```

它不应该：

- 要求你重新讲述 Day 01
- 直接开始写 TypeScript 项目
- 自动把 Day 01 改成 independent pass
- 忽略 `CURRENT.md`

## Capability fallback

如果新 Agent 不能读取仓库文件：

1. 把 `LEARNING-AGENT-SPEC.md`、`LEARNING-CONFIG.md` 和 `CURRENT.md` 内容提供给它。
2. 告诉它本轮采用 `read-only`，不要声称已经写回仓库。
3. 会话结束后，把学习者总结和导师纠正交给具备仓库写入能力的 Agent 保存。

如果新 Agent 能读取但不能写入：

- 它仍可教学和验收。
- 它应输出一份符合 `templates/session-record.md` 的待保存记录。
- 不得声称已经 Commit 或 Push。
