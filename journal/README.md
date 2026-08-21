# Journal

Journal 按日期记录学习过程，知识结论最终整理回 `domains`。推荐每日短记录、每周一次完整复盘，避免把仓库变成无结构流水账。

每次对话式课程结束时，从 [Session Record](../templates/session-record.md) 创建一份正式记录，并按实际表现更新 [Review Queue](../REVIEW-QUEUE.md)。反思、第一次回答和 Prediction 由学习者先写，AI 只在独立章节纠正事实和补充证据链接。

2026-08-21 起的新记录使用 schema v2。旧记录缺少 `schema_version` 时按 v1 读取，无需回填或重写：v1 `result` 对应 v2 `session_result`，v1 `status` 对应 v2 `day_status`；缺失的 Review / Retention 数据记为 `unknown / not-recorded`，不能当作失败。Day completed、Capability Level 与 Retention Status 分开保存。
