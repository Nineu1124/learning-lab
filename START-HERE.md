# Start Here

这个仓库支持以 AI Agent 对话为主的学习方式。仓库保存课程、上下文、练习和证据；对话负责讲解、提问、提示和验收。

## 第一次开始

在以本仓库为工作区的对话中发送：

```text
开始学习。
请按顺序完整读取 LEARNING-AGENT-SPEC.md、LEARNING-CONFIG.md、
AGENTS.md、CURRENT.md、learning-system/LEARNING-METHOD.md、
REVIEW-QUEUE.md、当前 Day 和最近 Journal。
不要直接写代码。先告诉我 provisional goal、预计时间、完成标准和到期项目，
然后进行到期闭卷复习与诊断，再确认或缩小今日目标。
```

当前课次以 [CURRENT](CURRENT.md) 为准。课程入口：

- [30 天 Agent Systems 基础课程](domains/artificial-intelligence/agent-systems/curriculum/30-day-foundation/README.md)
- [当前状态](CURRENT.md)
- [导师协议](learning-system/TUTOR-PROTOCOL.md)
- [统一学习方法](learning-system/LEARNING-METHOD.md)
- [能力、保持与验收](learning-system/ASSESSMENT.md)
- [间隔复习队列](REVIEW-QUEUE.md)
- [跨 Agent 学习规范](LEARNING-AGENT-SPEC.md)
- [学习者配置](LEARNING-CONFIG.md)

## 以后继续

每次回来只需要说：

```text
继续学习
```

导师应读取 `CURRENT.md`、`REVIEW-QUEUE.md`、当前课程和最近记录，先完成到期闭卷复习，再从上次的 `next_action` 继续。

## 切换到其他 Agent

将 [Agent Onboarding](learning-system/AGENT-ONBOARDING.md) 中的 Bootstrap Prompt 发给新 Agent。最短指令是：

```text
按照 LEARNING-AGENT-SPEC.md 接管学习，继续学习。
```

新 Agent 应以仓库为持久上下文，而不是依赖上一段对话记忆。可以用 [Conformance Checklist](learning-system/AGENT-CONFORMANCE.md) 检查它是否真正遵守规范。

## 常用对话指令

| 你说 | 导师应该做什么 |
|---|---|
| `开始 Day 03` | 读取状态和 Queue，给 provisional goal，先复习与诊断，再确认目标 |
| `继续学习` | 从 `CURRENT.md` 恢复上下文 |
| `提示一级` | 只给方向，不给答案 |
| `提示二级` | 指向相关文件或概念 |
| `提示三级` | 给最小示例，但保留核心练习 |
| `检查我的理解` | 根据你的表述追问和纠错 |
| `开始实验` | 先让你预测，再做最小实现 |
| `验收 Day 05` | 使用当天标准进行口头与实践验收 |
| `复习本周` | 随机提问、反例和迁移题，不讲新内容 |
| `记录进度` | 更新 Journal、Review Queue、Evidence 和 `CURRENT.md` |
| `结束本次学习` | 做检索与迁移验收，更新 Queue，记录证据并设置下一步 |

## 一次标准会话

默认 90 分钟，可按状态缩小范围：

```text
5 分钟   可验证目标
10 分钟  到期闭卷复习
15 分钟  诊断与最小输入
40 分钟  Prediction 与刻意练习
10 分钟  纠错与立即变式
5 分钟   Transfer 与本人总结
5 分钟   调度复习、记录证据与下一步
```

精确时间不是通过标准。时间不足时缩小学习问题，不跳过预测、验证、纠错、变式和复述，也不以熬夜换进度。

## 最重要的规则

对话结束前，你必须亲自给出一段总结。导师可以纠错，但不能替你写“我学会了什么”。

正式记录使用 [Session Record](templates/session-record.md)。Session Result、Capability Level 与 Retention Status 分开判断；未来 Agent 必须根据 [Review Queue](REVIEW-QUEUE.md) 做延迟复测。
