import React from "react";

type Props = {
    name: string;
    role?: "member" | "system";
    message: string;
    time: string;
    mine?: boolean;
};

export function GroupMessageBubble({ name, message, time, mine }: Props) {
    return (
        <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
            <div className="max-w-[86%]">
                {!mine ? (
                    <div className="mb-1 text-xs text-muted">{name}</div>
                ) : null}

                <div
                    className={[
                        "rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-soft",
                        mine ? "bg-pink-100 text-text" : "bg-mint-100 text-text",
                    ].join(" ")}
                >
                    {message}
                </div>

                <div className={`mt-1 text-[11px] text-muted ${mine ? "text-right" : ""}`}>
                    {time}
                </div>
            </div>
        </div>
    );
}
