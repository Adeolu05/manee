import { useState } from "react";

type Props = {
    onSend: (text: string) => void;
};

export function ChatInput({ onSend }: Props) {
    const [text, setText] = useState("");

    const send = () => {
        const t = text.trim();
        if (!t) return;
        onSend(t);
        setText("");
    };

    return (
        <div className="rounded-full bg-surface p-2 shadow-soft">
            <div className="flex items-center gap-2">
                <button
                    className="h-10 w-10 rounded-full bg-primary/15 text-primary hover:bg-primary/25"
                    title="Voice"
                    type="button"
                >
                    🎙
                </button>

                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type a message…"
                    className="w-full bg-transparent px-2 text-sm text-text outline-none"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") send();
                    }}
                />

                <button
                    className="h-10 w-10 rounded-full bg-primary text-white hover:bg-primaryHover"
                    type="button"
                    onClick={send}
                    title="Send"
                >
                    ➤
                </button>
            </div>
        </div>
    );
}
