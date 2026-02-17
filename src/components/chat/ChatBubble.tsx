import React from "react";
import type { ChatMessage } from "../../lib/chatTypes";

export function ChatBubble({ message }: { message: ChatMessage }) {
    if (message.type !== "text") return null;

    const isUser = message.role === "user";

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
            <div
                className={[
                    "max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-soft",
                    isUser
                        ? "bg-pink-100 text-text"
                        : "bg-mint-100 text-text",
                ].join(" ")}
            >
                {message.content}
            </div>
        </div>
    );
}
