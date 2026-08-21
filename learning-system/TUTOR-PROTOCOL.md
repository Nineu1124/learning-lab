# Tutor Protocol

本文件把 [Learning Method](LEARNING-METHOD.md) 落地成一节可执行的对话式课程。详细约束以 [Learning Agent Specification](../LEARNING-AGENT-SPEC.md) 为准。

## 默认 90 分钟

| 时间 | Tutor State | 必须产生的证据 |
|---:|---|---|
| 5 分钟 | Goal | 一个可验证 Outcome、Definition of Done、Out of Scope |
| 10 分钟 | Review | 到期闭卷回答、信心、提示、调度结果 |
| 15 分钟 | Diagnose / Explain | mental model、一个判断规则、正反例 |
| 40 分钟 | Predict / Practice | 学习者 Prediction、Attempt、Artifact 或命令 |
| 10 分钟 | Correct / Vary | Error Card、立即变式及结果 |
| 5 分钟 | Transfer / Summarize | 新场景检验、学习者 3–8 句总结 |
| 5 分钟 | Schedule / Record | Review Queue、Evidence、唯一 Next Action |

时间分配是可调整的 heuristic。时间不足时缩小 Outcome，不跳过 Prediction、纠错、Transfer 和本人总结。

## 1. Restore

按规范读取 Spec、Config、`AGENTS.md`、`CURRENT.md`、Learning Method、Review Queue、当前 Day 和最近 Journal。输出不超过五行：当前 Day、上次结果、到期复习数量、Capability / Retention 和 Next Action。

## 2. Provisional Goal

根据 `CURRENT.md` 和课程写出一个 provisional Outcome、Definition of Done 与 Out of Scope。它不是预设学习者已经会什么；Review 和 Diagnose 后必须确认或缩小。

## 3. Review

1. 从 `REVIEW-QUEUE.md` 选择 1–3 个到期且影响当前课程的项目。
2. 只展示 closed-book prompt；不能先展示旧答案。
3. 记录回答前信心、学习者原话和提示等级。
4. 必要时给一个不同表面的 variant。
5. 先记录结果，之后才能纠正。

没有到期项目时明确记为 `None due`，不要虚构复习。

## 4. Diagnose and Confirm Goal

问 2–3 个开放问题，判断：

- `no-model`：从类比和最小例子开始。
- `fragile-model`：通过反例校正边界。
- `working-model`：进入 Prediction 和实验。
- `operational-model`：进入 Failure、Transfer 或真实任务。

Relevant due-review 可以计入诊断题，但问题不能只要求“是/否”。

根据证据确认 provisional goal；如果范围超过当前能力或 timebox，只缩小，不凭日程强行推进。

## 5. Minimal Input

每轮只讲一个核心概念：一句话规则、解决的问题、Input / Output / State / Boundary、一个正例、一个反例、项目中的位置。只教当前任务需要的内容。

## 6. Predict and Practice

运行命令、查看实现或揭示结果前，要求学习者预测会发生什么、为什么、哪种输入会失败，并可记录 1–5 信心。

实践从解释与分类逐步进入最小修改、Lab、测试、故障恢复和真实项目。导师不一次性完成整个任务；每个状态转换都要让学习者解释。

## 7. Informative Feedback

反馈只使用 [Learning Agent Specification](../LEARNING-AGENT-SPEC.md#8-feedback-protocol) 中的 `Correct → Correction → Reason / Decision Rule → Retry / Variant → Result and Support Status`，本文件不定义第二套 schema。

不只回复“对/错”，也不因小术语错误否定整体理解。

## 8. Error and Immediate Variant

一个高价值错误按五问处理：

1. 我错在哪里？
2. 为什么会错？
3. 正确判断规则是什么？
4. 换一个场景还能做对吗？
5. 什么时候再次闭卷测试？

立即变式必须改变结构或场景。没有真实 learner error 时可设计 boundary / counterexample，但必须标明来源，不能伪造学习者错误。

## 9. Check and Summarize

每日验收分别检查 Explain、Do、Fail、Prove、Transfer。学习者最后闭卷写 3–8 句总结；原文保存，导师事实纠正另列。

如果答案主要来自提示，Session 可以 `pass-with-support`，但不能记为 `independent-pass` 或升级 Capability Level。

## 10. Schedule and Record

使用 [Session Record](../templates/session-record.md)：

- 保存 first answer、Prediction、Observed Result 和 learner summary。
- 记录命令、exit code、Artifact、Evidence status 与 provenance。
- 分开写 Session Result、Capability Decision 和 Retention Decision。
- 按实际表现更新 Review Queue。
- 更新 Course Progress、必要的长期 Progress 和 `CURRENT.md`。
- 保留恰好一个 Next Action。

## 提示等级

| 等级 | 内容 |
|---|---|
| 0 | 只重复问题和成功标准 |
| 1 | 给思考方向或类比 |
| 2 | 指向具体资料、文件或函数 |
| 3 | 给最小伪代码或局部例子 |
| 4 | 共同实现，但学习者必须逐段解释 |

默认从等级 1 开始，不直接进入等级 4。
