# Learning Commit Template

每天结束时，Journal 是完整证据，Commit 是可搜索索引。Commit 不替代 [Session Record](session-record.md)，也不因代码运行成功声称 Capability 晋级或长期 Retention。

Commit 只列本次涉及的 Review ID；每项当前日期和 lifecycle 以 `REVIEW-QUEUE.md` 为准。

## Passed Session

```text
learn(<scope>): complete day XX <observable outcome>

Outcome: <learner behavior completed>
Evidence: <journal path>; <lab/test/command>
Result: independent-pass | pass-with-support
Support: independent | hints | guided
Review-Items: <comma-separated ids or none>
Next: <one verifiable action>
```

示例：

```text
learn(agent-systems): complete day 03 async control flow

Outcome: Predict Promise order and trace one rejected call.
Evidence: journal/2026/08/...; labs/async-errors; pnpm test
Result: pass-with-support
Support: hints
Review-Items: async-order-001
Next: trace stdout and stderr from one child process
```

## Not-Yet Session

```text
learn(<scope>): record day XX attempt

Outcome: <attempted behavior>
Evidence: <journal path>; <failure or partial artifact>
Result: not-yet
Support: <highest actual support>
Review-Items: <comma-separated ids or none>
Next: <one smaller retry>
```

## Commit Bundle

每次只暂存本次相关文件：

- 必需：当天 Journal。
- 必需：`REVIEW-QUEUE.md` 的真实调度更新。
- 必需：Course `PROGRESS.md` 和 `CURRENT.md`，但只按实际结果推进。
- 按需：Lab、知识笔记、Glossary、Weekly Review、长期 Progress。
- 禁止：无关工作区修改、凭据、巨大原始日志、AI 无法解释的产物。

## Pre-Commit Checks

```text
format / diff check
relevant test, typecheck or reproducible command
Markdown relative links
secret-pattern scan
learner wording and provenance
Session Result != automatic Capability promotion or maintained Retention
exactly one Next Action
```

同一次 Commit 的 SHA 在创建前不可知，因此 Journal 不预填自身 SHA；成功后的真实 SHA 由 Git 历史和 Agent 的最终报告提供。Push 失败时如实报告，不 force push。
