# Evidence-Based Learning Method

Status: Normative implementation guide; subordinate to `LEARNING-CONFIG.md` and `LEARNING-AGENT-SPEC.md`

本文件定义本仓库的学习闭环。任何 Agent 可以改变讲解风格，但不得跳过这里规定的学习证据、延迟复测和记录边界。跨 Agent 的完整约束仍以根目录的 [Learning Agent Specification](../LEARNING-AGENT-SPEC.md) 为准。

## 核心闭环

```text
可验证目标
→ 到期主动回忆
→ 最小必要输入
→ 闭卷刻意练习
→ 即时信息性反馈
→ 错误纠正与立即变式
→ 间隔复测
→ 适用时的混合辨析与真实场景检验
```

这套系统优化的是长期、独立、可迁移的能力，不是当次对话中的流畅感。

## 六条执行原则

### 1. 目标必须可验证

目标写成学习者在限定条件下能够完成的行为，而不是“了解”或“学会”。

```text
弱目标：理解 Agent Loop。
可验证目标：不看资料解释一次 Loop 的停止条件，并为一个陌生事件序列指出是否还会再次调用 Model。
```

每次还要写明 `Definition of Done` 和本次明确不做什么，防止范围膨胀。

### 2. 先提取，再输入

开始新内容前先读取 [Review Queue](../REVIEW-QUEUE.md)，对到期项目进行闭卷检索。记录学习者原始回答、信心、提示程度和结果，之后才能显示资料或纠正。

主动回忆不是只背定义，也包括：

- 预测程序输出
- 从空白处画结构图
- 区分容易混淆的概念
- 在陌生代码中定位一个模式
- 不看旧 Lab 重新完成最小实现

### 3. 输入只服务于当前短板

Agent 先诊断，再只讲解决当前任务必需的一个核心概念。默认希望练习和输出多于输入，但“输入 30%、输出 70%”只是方向，不是评分公式。

### 4. 练习必须产生可检查行为

优先使用：解释、分类、预测、手写代码、运行命令、调试、测试和真实项目检索。学习者必须在揭示结果前做出尝试；AI 生成且学习者无法解释的产物不计为掌握证据。

### 5. 反馈之后必须重新尝试

反馈统一使用规范中的唯一结构：

```text
Correct
→ Correction
→ Reason / Decision Rule
→ Retry / Variant
→ Result and Support Status
```

只收到正确答案不算完成纠错。高价值错误必须经过：

```text
原始预测 → Observed Result → Root Cause → 正确规则 → 立即变式 → 延迟复测
```

这里的“即时”表示学习者已经提交第一次答案后，在错误固化或继续重复之前获得纠正；它不是所有学科、所有任务都必须使用相同秒级延迟的定律。

### 6. 当天完成、能力等级与保持状态分开

- `session_result` 判断本次 Day 是否完成。
- `capability_level` 使用 L0–L5 表示能够完成哪类行为。
- `retention_status` 使用 `same-session / delayed-once / maintained` 表示这种能力经过了什么时间跨度的验证。

同一天的 `independent-pass` 仍然只是 `same-session`。之后一次独立 delayed retrieval 只能标记为 `delayed-once`；要称为 `maintained`，还需要在与目标保持期限有关的多个有意义间隔上成功。Capability 晋级标准见 [Assessment](ASSESSMENT.md)。

## 默认 90 分钟会话

| 时间 | 阶段 | 产物 |
|---:|---|---|
| 5 分钟 | 今日目标 | 一个 Outcome、Definition of Done、Out of Scope |
| 10 分钟 | 到期复习 | 闭卷回答、信心、提示、Review Queue 决策 |
| 15 分钟 | 诊断与最小输入 | 当前 mental model、一个判断规则、正反例 |
| 40 分钟 | 刻意练习 | Prediction、Attempt、命令或 artifact |
| 10 分钟 | 纠错与立即变式 | Error Card、修正、variant result |
| 5 分钟 | 迁移与压缩 | 新场景回答、学习者 3–8 句总结 |
| 5 分钟 | 调度与保存 | Review Queue、Evidence、一个 Next Action |

90 分钟是默认 timebox，不是通过条件。时间不足或状态不好时应缩小今日范围，不能通过跳过预测、反馈、复述或睡眠来制造进度。

## Error Card

只记录会影响未来判断的高价值错误：错误 mental model、重复错误、transfer failure 或高信心错误。普通拼写、一次性手误和外部网络失败不进入长期错题系统。

错误分类：

| Category | Meaning |
|---|---|
| `concept-gap` | 判断规则或概念模型错误 |
| `retrieval-gap` | 学过但闭卷无法提取 |
| `transfer-gap` | 原题会，变化场景不会 |
| `execution-slip` | 理解正确但操作失误 |
| `environment-failure` | 工具、依赖或环境失败；作为 Execution Incident 单独记录，不进入长期 Error Card |

每张 Error Card 只保存五个核心问题：

1. 我错在哪里？
2. 为什么会错？
3. 正确判断规则是什么？
4. 立即变式是否通过？
5. 什么时候闭卷复测？

学习者的原因分析保留原文；Agent 的 root-cause 解释单独记录。

## Spaced Review

初始调度使用：

```text
D0 → D1 → D3 → D7 → D14 → D30
```

这是可执行起点，不是普适最优间隔。每次根据实际表现调整：

| Review Result | Scheduling Decision |
|---|---|
| 独立正确，并通过变式 | 前进到下一个更长间隔 |
| 正确但犹豫 | 保持当前阶段或小幅延长 |
| 使用提示后正确 | 缩短间隔，不升级 Capability Level |
| 错误 | 先纠正；通常从 D1 开始，但按重要性、风险、目标保持期和队列负担安排最早有意义的复测 |
| 环境失败 | 不评价知识，重新安排可运行环境 |

每次会话最多优先处理 1–3 个高价值到期项；如果积压过多，先处理最影响当前课程的项目。Review Queue 保存当前调度，完整回答与历史证据保存在当天 Journal，避免重复维护两份日志。

## Weekly Assessment

默认每完成七个 Course Session 进行一次闭卷、限时综合检验；学习者也可以明确要求提前进行。这里的 mixed assessment 用来检查学习者能否自行选择规则，不等于所有训练都必须 interleaved。它不讲新知识，至少包括：

- 随机 Retrieval
- 相似概念 Discrimination
- 一个 Failure diagnosis
- 一个未见过的 Transfer
- 一个真实代码、项目或作品任务

记录：正确率、完成时间、提示次数、错误类型、迁移结果、三个主要短板，以及下周应该增加和减少什么。用结果调整计划，不用主观“感觉学会了”调整。

## 每日正式记录

完成一次教学会话后，使用 [Session Record](../templates/session-record.md)。模板综合了：

- self-regulated learning 的目标、执行与反思阶段
- retrieval / prediction 的学习者原始产出
- exam wrapper 的错误分类和策略调整
- 工程实验的 expected / observed / reproducible evidence
- GitHub 结构化模板的固定字段与完成检查

模板刻意分开：

- 学习者原文与 Agent 纠正
- Prediction 与 Observed Result
- 当天 Session Result、Capability Decision 与 Retention Decision
- 当前 Review Queue 状态与完整 Journal 历史
- 学习者完成、Agent 完成和机器验证

目前没有研究证明某一个 Markdown 排版是普适“最佳模板”。本仓库选择能让下一位 Agent 回答以下问题的最小完整结构：学习者在看答案前说了什么、使用了多少提示、哪里出错、是否通过变式、有什么可复现证据、是否经过延迟复测、下一步先测什么。

### Template / Engineering Inspirations

没有一个现成模板同时覆盖本仓库需要的零基础对话教学、可复现实验、错误变式、支持程度、间隔复测和跨 Agent 接管，因此没有直接复制某个网络模板：

- [100 Days of Code log](https://github.com/kallaway/100-days-of-code/blob/master/log.md) 提供低摩擦的日期、进展、思考和作品链接，但连续打卡不能证明理解。
- [Learning Journal Template](https://github.com/adiati98/learning-journal-template/blob/main/journal-template.md) 提供 Progress、Challenges、Resources 和 Tomorrow Goals，但缺少 Prediction、机器证据和 delayed review。
- [The Turing Way · Electronic Lab Notebooks](https://book.the-turing-way.org/reproducible-research/rdm/rdm-elns/) 强调带日期的目标、过程、结果、解释和数据链接，本仓库将其转成命令、exit code、Artifact 与 Evidence status。
- [Ten Simple Rules for a Computational Biologist's Laboratory Notebook](https://pmc.ncbi.nlm.nih.gov/articles/PMC4565690/) 强调按时间记录背景、协议、步骤和失败；本仓库保留错误证据而不只保存最终正确代码。
- [Google SRE Postmortem Culture](https://sre.google/workbook/postmortem-culture/) 提供事实导向、无责 root cause 和可验证 action item；这里只用于高价值 Error Card，避免每天写成沉重事故报告。
- [GitHub structured templates](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates) 提供固定字段和 required validation 的思想；仓库仍使用本地 Markdown 作为跨 Agent 唯一真相来源。
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 提供可搜索的 Commit 结构；本仓库使用 `learn(<scope>): complete...` 或 `record... attempt`，但 Commit 不能替代完整 Journal。

最终模板是这些工程记录实践与学习科学机制的交集，而不是最长模板。只有能改变下一次教学决策的字段才进入正式 schema。

## Learning Science Evidence

- Retrieval practice 比重复阅读更有利于延迟保持：[Roediger & Karpicke, 2006](https://pubmed.ncbi.nlm.nih.gov/16507066/)；课堂研究系统综述：[Yang et al., 2021](https://pubmed.ncbi.nlm.nih.gov/33683913/)。
- Retrieval 可以促进新推理题中的 transfer：[Butler, 2010](https://pubmed.ncbi.nlm.nih.gov/20804289/)。
- 信息性 feedback 能纠正错误和低信心的正确回答：[Butler, Karpicke & Roediger, 2008](https://pubmed.ncbi.nlm.nih.gov/18605878/)。
- 合适 spacing 随希望保持的时间而变化：[Cepeda et al., 2008](https://pubmed.ncbi.nlm.nih.gov/19076480/)。
- 多次间隔开的“练到正确”构成 successive relearning：[Rawson & Dunlosky, 2022](https://www.psychologicalscience.org/journals/current-directions/09637214221100484/)。
- 当目标需要区分相似类别且学习者已经具备每类基本规则时，可以把 interleaving 作为候选策略；效果依材料而异，对 Agent 概念和编程任务的适用性属于本仓库的 operational inference，应由复测结果决定：[Brunmair & Richter, 2019](https://doi.org/10.1037/bul0000209)；特定数学实验见 [Taylor & Rohrer, 2010](https://onlinelibrary.wiley.com/doi/10.1002/acp.1598)。
- 当下练习表现不等同于长期学习：[Soderstrom & Bjork, 2015](https://www.psychologicalscience.org/journals/perspectives/1745691615569000/)。
- Exam wrapper 强调分析错误模式和调整学习策略：[Carnegie Mellon Eberly Center](https://www.cmu.edu/teaching/designteach/teach/examwrappers/)。
- 结构化模板应固定字段、输入类型和必填验证：[GitHub Issue Forms documentation](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms)。
- 睡眠支持记忆巩固，不应以熬夜换取计划完成：[Rasch & Born, 2013](https://pubmed.ncbi.nlm.nih.gov/23589831/)。

## Operational Heuristics

上述研究支持的是 retrieval、spacing、feedback、transfer、delayed assessment 等机制；精确的 90 分钟、30/70 比例、复习日期和每周安排均是需要按表现调整的仓库默认值，不是普适定律。
