# Learning Lab

这是我的长期个人学习仓库，用来系统记录不同知识领域的学习过程、实验、案例分析和真实项目。

当前重点是 **Artificial Intelligence → Agent Systems → Tsukiori**。Agent 只是整个知识树中的一条分支，未来可以继续扩展计算机科学、软件工程、数学、产品设计、商业、人文和语言等领域。

## 开始学习

本仓库已经配置成对话式学习系统。第一次使用请打开 [START-HERE](START-HERE.md)；以后在对话中说“继续学习”，导师会根据 [CURRENT](CURRENT.md) 恢复课程位置。

## 统一学习闭环

无论使用 Codex、Claude Code、OpenCode 或其他能够读取仓库的 Agent，都执行同一条闭环：

```text
可验证目标
→ 到期主动回忆
→ 最小必要输入
→ 闭卷刻意练习
→ 即时信息性反馈
→ 错误纠正与立即变式
→ 间隔复测
→ 混合与真实场景检验
```

默认一节课 90 分钟，以输入约 30%、输出与练习约 70% 为方向；时间比例和 D0、D1、D3、D7、D14、D30 复习阶段都是可自适应的初始值。**Day completed 只表示当天验收完成；Capability 晋级要求之后的闭卷、Hint Level 0、变化场景证据，Retention 另行记录。**

```text
5 分钟目标 → 10 分钟到期复习 → 15 分钟诊断与最小输入
→ 40 分钟闭卷练习 → 10 分钟纠错与变式 → 5 分钟迁移总结 → 5 分钟记录
```

执行细节见 [Evidence-Based Learning Method](learning-system/LEARNING-METHOD.md)。每天结束使用 [Session Record](templates/session-record.md) 和 [Learning Commit Template](templates/learning-commit.md)，到期知识统一维护在 [Review Queue](REVIEW-QUEUE.md)。

### 给任何新 Agent

最短指令：

```text
按照 LEARNING-AGENT-SPEC.md 接管学习。读取 CURRENT.md 和 REVIEW-QUEUE.md，
先进行到期闭卷复习，再从唯一 Next Action 继续；结束时使用 session-record 模板并更新队列。
```

仓库文件是跨 Agent 的唯一持久上下文；Agent 不得依赖上一段对话的隐藏记忆，也不能把 AI 完成的代码当成学习者掌握。

## 学习系统

```text
inbox 临时记录
  → domains 知识整理
  → labs 最小实验
  → case-studies 真实系统分析
  → projects 综合实践
  → portfolio 成果展示
  → PROGRESS 能力与保持状态更新
```

## 当前主线

```text
Learning Lab
└─ Artificial Intelligence
   └─ Agent Systems
      ├─ Agent Foundations
      ├─ Agent Loop
      ├─ Agent Harness
      ├─ Agent Runtime
      ├─ Tools & MCP
      ├─ Context & Memory
      ├─ Multi-Agent
      ├─ Evals & Observability
      ├─ Security & Permissions
      └─ Projects
         └─ Tsukiori
```

## 导航

- [完整知识树](LEARNING-MAP.md)
- [长期路线](ROADMAP.md)
- [全局进度](PROGRESS.md)
- [AI 使用原则](AI-USAGE.md)
- [对话式学习入口](START-HERE.md)
- [跨 Agent 学习规范](LEARNING-AGENT-SPEC.md)
- [新 Agent 接管提示](learning-system/AGENT-ONBOARDING.md)
- [学习者配置](LEARNING-CONFIG.md)
- [统一学习方法](learning-system/LEARNING-METHOD.md)
- [当前学习状态](CURRENT.md)
- [间隔复习队列](REVIEW-QUEUE.md)
- [导师与验收协议](learning-system/README.md)
- [Agent Systems](domains/artificial-intelligence/agent-systems/README.md)
- [Tsukiori 学习分支](domains/artificial-intelligence/agent-systems/projects/tsukiori/README.md)
- [每日正式模板](templates/session-record.md)
- [每日提交模板](templates/learning-commit.md)
- [全部学习模板](templates/README.md)

## Capability Level

| 等级 | 判断标准 |
|---|---|
| L0 | 能识别术语和所属层级 |
| L1 | 能闭卷解释并区分相似概念 |
| L2 | 能完成可复现实践，并覆盖正常路径和重要边界 |
| L3 | 能复现、定位并修复失败 |
| L4 | 能在真实环境交付经过验证的作品、决策或变更 |
| L5 | 可以设计方案、建立评测并解释取舍 |

代码由 AI 生成不代表已经掌握。只有能解释、测试、破坏、修复并迁移到新问题，才提升等级。

Retention 另行记录：`same-session` 表示只有当天证据，`delayed-once` 表示至少一次无提示延迟变式通过，`maintained` 表示在与目标保持期限有关的多个间隔上再次通过。完整标准见 [Assessment](learning-system/ASSESSMENT.md)。

## 当前学习周期

第一周期为 2026-08-19 至 2026-09-17，目标是理解 Agent Systems 的基本层级，完成最小 Agent Loop，并写出 Tsukiori Native Agent Loop 的第一版 RFC。
