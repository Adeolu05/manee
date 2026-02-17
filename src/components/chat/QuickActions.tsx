import React from "react";

const actions = [
    "Send $5 to +86…878",
    "Swap Celo to Duro",
    "Split bill with friends",
];

export function QuickActions({ onPick }: { onPick: (t: string) => void }) {
    return (
        <div className="flex gap-2 overflow-x-auto pb-2">
            {actions.map((a) => (
                <button
                    key={a}
                    onClick={() => onPick(a)}
                    className="shrink-0 rounded-full bg-surface px-3 py-2 text-xs text-text shadow-soft hover:bg-primary/10"
                >
                    {a}
                </button>
            ))}
        </div>
    );
}
