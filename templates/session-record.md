---
schema_version: 2.0.0
session_id: YYYY-MM-DD-course-day-00
date: YYYY-MM-DD
domain: domain-name
course: course-name
day: 00
topic: topic
record_status: draft
day_status: checking
session_result: not-yet
support_level: null
start_level: L0
end_level: L0
retention_status: same-session
planned_minutes: 90
actual_minutes: null
---

# Day XX · Topic

<!--
Frontmatter 是本记录的机器摘要：
- record_status: draft | completed
- day_status: checking | completed
- session_result: not-yet | pass-with-support | independent-pass
- support_level: independent | hints | guided
- retention_status: same-session | delayed-once | maintained

`support_level: null` 只用于尚未得出结果的 draft；正式保存时按实际支持改成允许值。
一次尝试即使 `not-yet` 也可以成为 `record_status: completed` 的真实记录。

合法组合：
- not-yet → day_status: checking；support 按真实情况填写
- pass-with-support → day_status: completed；support: hints | guided
- independent-pass → day_status: completed；support: independent

学习者在看答案前的回答必须原样保存；Agent Correction 必须另列。
-->

## 1. 本次唯一可验证目标

- Provisional Outcome：
- Definition of Done：
- Out of Scope：
- Review / Diagnose 后确认或缩小的 Outcome：

## 2. 到期闭卷复习

> 必须先回答，再查看旧资料。没有到期项目时写 `None due`。

| Review ID | Closed-book Prompt | Confidence（可选） | Learner First Answer / Artifact | Hint | Result |
|---|---|---:|---|---:|---|
|  |  | 1–5 |  | 0–4 | independent-pass / hesitant-pass / hinted-pass / fail / environment-blocked |

### Agent Correction

> 只写事实纠正；调度统一写在第 11 节和 `REVIEW-QUEUE.md`。

## 3. 开始前的 Mental Model

### Diagnostic Questions and First Answers

1. 问题：
   - 学习者原始回答：
2. 问题：
   - 学习者原始回答：

### Diagnostic Decision

- Model：`no-model | fragile-model | working-model | operational-model`
- Evidence：
- 本次只补的最大短板：

## 4. 最小必要输入

- Core Concept / Decision Rule：
- Problem / Input / Output / State / Boundary：
- 正例与反例：
- Project Location / Reliable Source：

## 5. Prediction 与刻意练习

<!-- 按需复制 Task；不要粘贴整段无关对话。 -->

### Task A

- Task：
- Prediction before reveal/run：
- Confidence（可选）：1–5
- Learner First Attempt：
- Highest Hint：0–4
- Observed Result：
- Learner Explanation after result：
- Task Result：`pass | retry | not-yet`

## 6. 错误或边界 → 规则 → 变式

- Error ID：
- Source：`learner-error | designed-counterexample | boundary`
- Learning Category：`concept-gap | retrieval-gap | transfer-gap | execution-slip`
- Learner Original Prediction / Reasoning：
- Failure Evidence：
- Learner Root-Cause Explanation：
- Agent Correction / Decision Rule：
- Variant（必须改变表面场景）：
- Learner Variant Answer / Artifact：
- Variant Result：`independent-pass | hinted-pass | fail | deferred`
- Deferred Reason（仅疲劳、认知负担或安全限制）：

### Execution Incident（按需）

> 环境、依赖或工具失败写在这里，不进入 Error Card，不参与知识评分。

## 7. 无提示 Transfer / 真实场景

- New Context 与真实变化：
- Closed-book：yes / no
- Learner Answer / Artifact：
- Hint：0–4
- Result：
- 证明了什么、没有证明什么：

## 8. Evidence 与复现

| Artifact / Command | Working Directory | Expected | Observed / Exit Code | Status | Provenance |
|---|---|---|---|---|---|
| `path-or-command` | `path` |  |  | verified / inferred / proposed / unknown | learner / agent / shared / machine |

> 只记录影响复现的环境信息；不要提交凭据、巨大日志或无关系统数据。非编程 Evidence 可以是解题稿、口述记录、文章、结构图、案例判断或作品。

## 9. 学习者压缩输出与导师纠正

### 我自己的总结

> 默认由学习者闭卷写 3–8 句话；也可使用本人结构图、口述转录或代码注释。原样保存。

### 导师事实纠正

> 与学习者原文分开，只纠正必要事实并说明证据。

## 10. Session / Capability / Retention Decision

| Criterion | Evidence | Result |
|---|---|---|
| Explain |  | pass / not-yet |
| Do |  | pass / not-yet |
| Fail or Boundary |  | pass / not-yet |
| Prove |  | pass / not-yet |
| Transfer |  | pass / not-yet |

- Highest Hint in Session：0–4
- Delayed Evidence：`none | one | multiple`
- Capability Decision：`unchanged | promoted`
- Capability Evidence：
- Retention Decision：`same-session | delayed-once | maintained`
- Retention Evidence：

> `session_result` 和 `support_level` 以 frontmatter 为唯一摘要；本节只保存决策证据。Capability 晋级要求 delayed、closed-book、Hint 0、独立变式；一次延迟通过最多是 `delayed-once`。

## 11. Review Scheduling

| Review ID | Atomic Skill | Next Prompt / Variant | Stage | Next Due | Success Criteria | Queue Action |
|---|---|---|---|---|---|---|
|  |  |  | D1 / D3 / D7 / D14 / D30 / adaptive | YYYY-MM-DD |  | add / update / graduate / suspend |

> 本表保存本次调度历史；`REVIEW-QUEUE.md` 是当前日期和 lifecycle 的唯一真相来源。

## 12. AI、Provenance 与特殊 Handoff

- AI 完成了什么：
- 学习者亲自完成了什么：
- 使用过的最高提示与有效提示：
- 不能算作独立掌握的内容：
- 只有下一位 Agent 必须知道、但 `CURRENT.md` / Queue 未表达的风险或冲突：

## 13. 未解决问题

- 无则写 `None`。

## 14. Next Action

只写一个下一次 Session 可完成、可验证的动作。到期复习由 `REVIEW-QUEUE.md` 管理，不在这里创建多个 Next Action。

提交前按 [Learning Commit Template](learning-commit.md) 检查文件范围、链接、Evidence、敏感信息和 Commit message。
