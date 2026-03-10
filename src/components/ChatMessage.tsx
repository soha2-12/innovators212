import { Bot, User } from "lucide-react";
import type { Message } from "@/lib/chat";

export function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-3 px-4 py-5 ${isUser ? "bg-chat-user" : "bg-chat-ai"}`}>
      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${isUser ? "bg-secondary" : "bg-primary/15"}`}>
        {isUser ? <User className="h-4 w-4 text-foreground" /> : <Bot className="h-4 w-4 text-primary" />}
      </div>
      <div className="min-w-0 flex-1 text-sm leading-relaxed text-foreground whitespace-pre-wrap break-words">
        {message.content}
        {!message.content && !isUser && (
          <span className="inline-block h-4 w-1 animate-pulse bg-primary rounded-full" />
        )}
      </div>
    </div>
  );
}
