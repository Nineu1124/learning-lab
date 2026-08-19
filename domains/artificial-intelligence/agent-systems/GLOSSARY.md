# Glossary

| 术语 | 当前理解 | 待验证问题 |
|---|---|---|
| Model | 根据 Context 生成文本或结构化 ToolCall；自身不执行本地工具 | 模型自身是否持久化会话？ |
| Tool Calling | Model 与外部程序之间描述工具、参数和结果的通信协议 | 谁负责验证参数和真正执行工具？ |
| Agent Loop | 在一个 Turn 内控制模型调用、工具执行、结果回传和停止条件 | 如何防止无限循环？ |
| Harness | 将 Agent Loop、工具、上下文、权限和工作方式封装成可用软件 | 是否以及如何包含 Session 管理？ |
| Runtime | 管理 Session、Turn、Event、Cancel、Recovery 和 Replay 等执行生命周期 | 是否拥有 Agent Loop？ |
| Host / UI | Host 启动、连接和协调 Runtime/Harness；UI 是用户交互界面 | Tsukiori 中 Host 与 Daemon 的边界是什么？ |
| Session | 一组连续交互的逻辑容器 | 如何恢复和分叉？ |
| Turn | 一次用户请求到 Agent 完成的过程 | 一个 Turn 可以有多少工具步骤？ |
| MCP | 模型与外部工具/资源之间的开放协议 | Host 与 Server 各自负责什么？ |

每次确认理解后，用自己的语言更新，不直接复制资料定义。
