import React, { useMemo, useRef, useState, useEffect } from "react";
import { AppShell } from "../components/layout/AppShell";
import { ChatBubble } from "../components/chat/ChatBubble";
import { ChatInput } from "../components/chat/ChatInput";
import { QuickActions } from "../components/chat/QuickActions";
import { TransactionDraftCard } from "../components/chat/TransactionDraftCard";
import type { ChatMessage } from "../lib/chatTypes";
import { useNavigate } from "react-router-dom";

function uid() {
    return Math.random().toString(36).slice(2);
}

export function ChatPage() {
    const navigate = useNavigate();
    const [messages, setMessages] = useState<ChatMessage[]>(() => [
        {
            id: uid(),
            role: "assistant",
            type: "text",
            content:
                "Hi Amira 👋\nStart your transactions — send money, swap, or split a bill.",
            createdAt: Date.now(),
        },
    ]);

    const listRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        listRef.current?.scrollTo({
            top: listRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messages]);

    const hasDraft = useMemo(
        () => messages.some((m) => m.type === "transaction_draft"),
        [messages]
    );

    const pushUser = (text: string) => {
        setMessages((prev) => [
            ...prev,
            { id: uid(), role: "user", type: "text", content: text, createdAt: Date.now() },
        ]);

        setTimeout(() => {
            if (text.toLowerCase().includes("send") || text.includes("$")) {
                setMessages((prev) => [
                    ...prev,
                    {
                        id: uid(),
                        role: "assistant",
                        type: "transaction_draft",
                        createdAt: Date.now(),
                        draft: {
                            title: "Transfer",
                            amount: "$5",
                            to: "+86…878",
                            network: "Celo",
                            fee: "$0.01",
                            eta: "Instant",
                        },
                    },
                ]);
            } else {
                setMessages((prev) => [
                    ...prev,
                    {
                        id: uid(),
                        role: "assistant",
                        type: "text",
                        content:
                            "Got it. Tell me the amount and recipient — I'll prepare a confirmation.",
                        createdAt: Date.now(),
                    },
                ]);
            }
        }, 400);
    };

    const confirmDraft = () => {
        const draftMsg = [...messages].reverse().find((m) => m.type === "transaction_draft");
        if (!draftMsg || draftMsg.type !== "transaction_draft") return;

        navigate("/tx-success", {
            state: {
                tx: {
                    title: `${draftMsg.draft.title} successful`,
                    amount: draftMsg.draft.amount,
                    to: draftMsg.draft.to,
                    network: draftMsg.draft.network,
                    fee: draftMsg.draft.fee,
                    eta: draftMsg.draft.eta,
                    ref: "TX-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
                },
            },
        });
    };

    const cancelDraft = () => {
        setMessages((prev) => prev.filter((m) => m.type !== "transaction_draft"));
        setMessages((prev) => [
            ...prev,
            {
                id: uid(),
                role: "assistant",
                type: "text",
                content: "No worries. Tell me what you want to do next.",
                createdAt: Date.now(),
            },
        ]);
    };

    return (
        <AppShell>
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
                <div>
                    <div className="text-sm font-semibold text-text">Manee Assistant</div>
                    <div className="mt-0.5 text-xs text-muted">Always online</div>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-primary to-amber-300 text-white text-sm font-bold shadow-soft">
                    M
                </div>
            </div>

            {/* Quick actions */}
            {!hasDraft && (
                <div className="mb-3">
                    <QuickActions onPick={pushUser} />
                </div>
            )}

            {/* Scrollable message list */}
            <div
                ref={listRef}
                className="h-[calc(100vh-240px)] overflow-y-auto rounded-2xl px-1 pb-2"
            >
                <div className="space-y-3">
                    {messages.map((m) => {
                        if (m.type === "text") return <ChatBubble key={m.id} message={m} />;

                        return (
                            <div key={m.id} className="flex justify-start">
                                <div className="max-w-[92%]">
                                    <TransactionDraftCard
                                        message={m}
                                        onConfirm={confirmDraft}
                                        onCancel={cancelDraft}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Fixed input area */}
            <div className="mt-3">
                <ChatInput onSend={pushUser} />
            </div>
        </AppShell>
    );
}
