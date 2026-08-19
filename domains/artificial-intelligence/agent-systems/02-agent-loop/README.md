# 02 · Agent Loop

## 学习目标

- 定义 Model Adapter、Tool Registry 和 Loop State。
- 理解模型输出、工具请求、工具结果和最终答案。
- 实现最大步数、超时、取消、错误和重复调用检测。

## 最小循环

```text
接收任务
→ 调用模型
→ 判断最终答案或工具调用
→ 执行/拒绝工具
→ 将结果加入上下文
→ 再次调用模型
→ 满足停止条件
```

## 对应实验

[mini-agent-loop](../labs/mini-agent-loop/README.md)
