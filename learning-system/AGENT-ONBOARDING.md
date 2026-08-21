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
5. learning-system/LEARNING-METHOD.md
6. REVIEW-QUEUE.md

然后读取 CURRENT.md 指向的课程 Day、最近一份相关 Journal，
learning-system/ASSESSMENT.md 和 templates/session-record.md。

不要立即讲答案或修改代码。
先按规范输出 Tutor ready 状态摘要；先做影响当前课程的到期闭卷复习，
再问本课诊断问题。运行或揭示结果前必须让我预测。
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
Current day: 03
Last result: Day 02 pass-with-support
Due reviews: agent-layers-001
Capability / retention: L0 / same-session
Next action: 预测一个 async/await 程序的执行顺序

到期闭卷问题：...
诊断问题 1：...
诊断问题 2：...
```

它不应该：

- 要求你重新提供仓库已经保存的 Day 01 上下文；到期的 closed-book retrieval 除外
- 直接开始写 TypeScript 项目
- 自动把 Day 01 改成 independent pass
- 跳过已经到期的 Review Queue 项目
- 忽略 `CURRENT.md`

## Capability fallback

如果新 Agent 不能读取仓库文件：

1. 把 `LEARNING-AGENT-SPEC.md`、`LEARNING-CONFIG.md`、`learning-system/LEARNING-METHOD.md`、`CURRENT.md`、`REVIEW-QUEUE.md`、当前 Day 和最近 Journal 内容提供给它。
2. 告诉它本轮采用 `read-only`，不要声称已经写回仓库。
3. 会话结束后，输出一份符合 `templates/session-record.md` 的记录和一份 `REVIEW-QUEUE.md` 更新建议，交给具备仓库写入能力的 Agent 保存。

如果无法提供 Review Queue、当前 Day 或最近 Journal，Agent 必须把对应状态标记为 `unknown / not-recorded`，不得推断到期项目、历史回答或 Review Queue 更新。

如果新 Agent 能读取但不能写入：

- 它仍可教学和验收。
- 它应输出一份符合 `templates/session-record.md` 的待保存记录和 Review Queue 更新建议。
- 不得声称已经 Commit 或 Push。
