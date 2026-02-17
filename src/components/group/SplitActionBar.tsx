import React, { useState } from "react";

type Props = {
    onSend: (text: string) => void;
    onSplit: (amount: string) => void;
};

export function SplitActionBar({ onSend, onSplit }: Props) {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    return (
        <div className="rounded-2xl bg-surface p-3 shadow-soft">
            <div className="flex gap-2">
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Message the group…"
                    className="w-full rounded-xl border border-border bg-bg px-3 py-3 text-sm text-text outline-none focus:border-primary"
                />
                <button
                    className="shrink-0 rounded-xl bg-primary px-4 text-sm font-medium text-white hover:bg-primaryHover"
                    type="button"
                    onClick={() => {
                        const t = text.trim();
                        if (!t) return;
                        onSend(t);
                        setText("");
                    }}
                >
                    Send
                </button>
            </div>

            <div className="mt-3 flex gap-2">
                <input
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Split amount (e.g. 20)"
                    className="w-full rounded-xl border border-border bg-bg px-3 py-3 text-sm text-text outline-none focus:border-primary"
                />
                <button
                    className="shrink-0 rounded-xl bg-primary/15 px-4 text-sm font-medium text-primary hover:bg-primary/25"
                    type="button"
                    onClick={() => {
                        const a = amount.trim();
                        if (!a) return;
                        onSplit(a);
                        setAmount("");
                    }}
                >
                    Split
                </button>
            </div>
        </div>
    );
}
