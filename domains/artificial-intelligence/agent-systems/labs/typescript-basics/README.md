# TypeScript Basics Lab

这是 Day 02 的学习证据，用一个最小程序练习阅读和编写常见 TypeScript 结构：

- `interface` 与 optional property
- string literal union
- discriminated union
- `Record<string, unknown>`
- function、class 与 instance
- `import type` / `export`
- compile-time type 与 JavaScript runtime 的区别

`types.ts` 和 `main.ts` 的主体由学习者在对话中手写，导师只提供题目、纠错与运行验证。

## 运行

```powershell
pnpm install
pnpm run check
pnpm run build
pnpm run start
```

预期输出：

```text
正在为你查询天气…
running
调用工具：describeEvent
```

## 故意失败实验

曾在 `message` 中临时加入：

```ts
createdAt: "今天",
```

运行 typecheck 得到：

```text
main.ts(28,3): error TS2322: Type 'string' is not assignable to type 'number'.
```

原因是 `Message.createdAt` 的类型是 `number`。删除错误字段后再次 typecheck，代码通过。

## Runtime 观察

编译后的 JavaScript 中没有 `Message`、`AgentEvent` 或 `import type`。它们用于 compile-time 检查，运行时已经被擦除。

## 迁移题

学习者新增了一个 `tool_call` 事件。`event.type` 只决定 `switch` 进入哪个分支；最终输出由该分支中的 `return` 表达式决定。
