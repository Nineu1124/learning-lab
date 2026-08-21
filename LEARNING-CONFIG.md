---
spec_version: 1.1.0
primary_language: zh-CN
technical_terms_language: en
learning_style: dialogue-and-practice
progression: capability-and-retention-based
default_session_minutes: 90
default_max_due_review_minutes: 10
default_review_schedule_days: [0, 1, 3, 7, 14, 30]
review_schedule_mode: adaptive
practice_output_ratio_guideline: 0.7
default_weekly_assessment_interval_sessions: 7
capability_promotion_requires_delayed_evidence: true
retention_status_values: [same-session, delayed-once, maintained]
session_result_values: [not-yet, pass-with-support, independent-pass]
support_level_values: [independent, hints, guided]
review_result_values: [not-tested, independent-pass, hesitant-pass, hinted-pass, fail, environment-blocked]
learning_error_values: [concept-gap, retrieval-gap, transfer-gap, execution-slip]
execution_incident_values: [environment-failure]
max_new_core_concepts_per_round: 1
diagnostic_questions_min: 2
diagnostic_questions_max: 3
default_hint_level: 1
learner_summary_required: true
preserve_learner_wording: true
require_prediction_before_execution: true
require_failure_or_boundary_analysis: true
repository_write_policy: direct-main
product_repository: https://github.com/Nineu1124/Tsukiori
learning_repository: https://github.com/Nineu1124/learning-lab
---

# Learning Configuration

## Learner profile

- 当前按编程和 Agent Systems 零基础或初级水平教学。
- 学习者拥有 AI 生成的复杂项目，但不将项目存在视为本人掌握。
- 讲解使用中文，保留准确的 English technical terms。
- 学习者希望通过持续对话学习，并由仓库承担跨 Agent 的持久记忆。

## Tutor preferences

- 先诊断，不直接倾倒答案。
- 新课前先处理 `REVIEW-QUEUE.md` 中影响当前课程的到期项目。
- 一次只纠正最关键的 1–2 个问题。
- 使用场景辨析、预测、失败和迁移题。
- 高价值错误使用“原始判断 → 原因 → 正确规则 → 立即变式 → 延迟复测”。
- 允许学习者表达不准确，再逐步校准。
- 反馈必须说明当前状态和依据。
- 学习者总结保留原文，导师修正单独记录。

## Timing and review heuristics

- 90 分钟是默认 timebox；时间不足时缩小范围，不伪造完成。
- 输出与练习约占 70% 是设计方向，不是每节课必须精确满足的评分规则。
- 默认复习阶段为 D0、D1、D3、D7、D14、D30；Agent 必须按答题正确性、信心、提示程度和目标保持时间缩短或延长。
- 当天 `independent-pass` 不自动提升 Capability Level；需要之后的 closed-book、Hint Level 0 且含变式证据。一次延迟通过只记为 `delayed-once`，不能写成长期稳定。
- 每七个课次进行一次限时、闭卷、混合和真实任务检验，不要求固定在某个星期几。
- 状态或时间不适合完成 90 分钟时，优先保护睡眠并缩小任务，不用熬夜补进度。

## Persistence

- Day 完成后使用 `templates/session-record.md` 更新 Journal，并同步 Review Queue、Course Progress、Glossary（如需要）和 `CURRENT.md`。
- 本仓库经过检查后直接提交到 `main`，不默认创建 PR。
- 正式 Tsukiori 代码仍保留在产品仓库；本仓库只保存学习证据和贡献链接。

## Safety

- 不提交 API Key、Token、完整凭据、私密 Prompt 或敏感源代码。
- 不覆盖学习者未提交的修改。
- 不通过 force push、history rewrite 或危险 Git 操作解决普通同步问题。
