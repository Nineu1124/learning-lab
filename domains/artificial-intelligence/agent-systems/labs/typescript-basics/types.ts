export interface Message {
  role: "user" | "assistant";
  content: string;
  createdAt?: number;
}

export type AgentEvent =
  | { type: "text"; text: string }
  | { type: "tool_call"; name: string; arguments: Record<string, unknown> };
