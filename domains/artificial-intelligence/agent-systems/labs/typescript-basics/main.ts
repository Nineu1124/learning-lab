import type { Message, AgentEvent } from "./types";

function describeEvent(event: AgentEvent): string {
  switch (event.type) {
    case "text":
      return event.text;
    case "tool_call":
      return `调用工具：${event.name}`;
  }
}

class Session {
  id: string;
  status: "idle" | "running" = "idle";

  constructor(id: string) {
    this.id = id;
  }

  start(): void {
    this.status = "running";
  }
}

const message: Message = {
  role: "user",
  content: "你好，帮我查一下天气",
};

const textEvent: AgentEvent = {
  type: "text",
  text: "正在为你查询天气…",
};

const toolEvent: AgentEvent = {
  type: "tool_call",
  name: "describeEvent",
  arguments: {
    event: "tool_call",
  },
};

const session = new Session("session-1");

session.start();

console.log(describeEvent(textEvent)); // 正在为你查询天气…
console.log(session.status); // "running"
console.log(describeEvent(toolEvent));
