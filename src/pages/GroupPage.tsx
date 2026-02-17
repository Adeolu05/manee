import { useEffect, useRef, useState } from "react";
import { TransactionDraftCard } from "../components/chat/TransactionDraftCard";
import { useNavigate } from "react-router-dom";
import { AppShell } from "../components/layout/AppShell";
import { HeaderBar } from "../components/layout/HeaderBar";
import { MemberAvatarList } from "../components/group/MemberAvatarList";
import { GroupMessageBubble } from "../components/group/GroupMessageBubble";
import { SplitActionBar } from "../components/group/SplitActionBar";

type Msg = {
    id: string;
    name: string;
    message: string;
    time: string;
    mine?: boolean;
};

function uid() {
    return Math.random().toString(36).slice(2);
}

export function GroupPage() {
    const navigate = useNavigate();
    const [draft, setDraft] = useState<null | {
        title: string;
        amount: string;
        to: string;
        network: string;
        fee: string;
        eta: string;
    }>(null);

    const [draftCreatedAt, setDraftCreatedAt] = useState<number>(0);

    const members = [
        { name: "David" },
        { name: "Amara" },
        { name: "Tomi" },
        { name: "Ife" },
        { name: "Seyi" },
        { name: "Kemi" },
    ];

    const [messages, setMessages] = useState<Msg[]>([
        { id: uid(), name: "Amara", message: "Who's paying for lunch today?", time: "12:02" },
        { id: uid(), name: "Tomi", message: "Let's just split it evenly.", time: "12:03" },
        {
            id: uid(),
            name: "Assistant",
            message: "I can split a bill. Tell me the amount and who to include.",
            time: "12:03",
        },
    ]);

    const listRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    }, [messages]);

    const send = (text: string) => {
        setMessages((prev) => [
            ...prev,
            { id: uid(), name: "You", message: text, time: now(), mine: true },
        ]);

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                {
                    id: uid(),
                    name: "Assistant",
                    message: "Got it. If you confirm the members, I'll generate the split breakdown.",
                    time: now(),
                },
            ]);
        }, 350);
    };

    const split = (amount: string) => {
        const n = members.length;
        const amt = Number(amount);

        if (!Number.isFinite(amt) || amt <= 0) return;

        setDraft({
            title: "Group split",
            amount: `$${amt.toFixed(2)}`,
            to: `${n} members`,
            network: "Celo",
            fee: "$0.02",
            eta: "Instant",
        });
        setDraftCreatedAt(Date.now());
    };

    return (
        <AppShell>
            {/* Header */}
            <HeaderBar
                title="Friends Group"
                subtitle="Group wallet and split bills"
                right={
                    <button className="h-9 w-9 rounded-full bg-surface shadow-soft transition hover:shadow-card active:scale-95">
                        ⚙
                    </button>
                }
            />

            {/* Members bar */}
            <div className="mb-4 flex items-center justify-between rounded-2xl bg-surface p-3 shadow-soft">
                <MemberAvatarList members={members} />
                <button className="rounded-full bg-primary/15 px-3 py-2 text-xs font-medium text-primary hover:bg-primary/25 transition">
                    Invite
                </button>
            </div>

            {/* Chat feed */}
            <div
                ref={listRef}
                className="h-[calc(100vh-320px)] overflow-y-auto rounded-2xl px-1 pb-2"
            >
                <div className="space-y-3">
                    {messages.map((m) => (
                        <GroupMessageBubble
                            key={m.id}
                            name={m.name}
                            message={m.message}
                            time={m.time}
                            mine={m.mine}
                        />
                    ))}
                </div>
            </div>

            {/* Action bar */}
            <div className="mt-3">
                {draft && (
                    <div className="mb-3">
                        <TransactionDraftCard
                            message={{
                                id: "group-draft",
                                role: "assistant",
                                type: "transaction_draft",
                                createdAt: draftCreatedAt,
                                draft,
                            }}
                            onConfirm={() => {
                                navigate("/tx-success", {
                                    state: {
                                        tx: {
                                            amount: draft.amount,
                                            to: draft.to,
                                            network: draft.network,
                                            fee: draft.fee,
                                            eta: draft.eta,
                                            title: "Group split successful",
                                            ref: "TX-" + Math.random().toString(36).slice(2, 8).toUpperCase(),
                                        },
                                    },
                                });
                            }}
                            onCancel={() => setDraft(null)}
                        />
                    </div>
                )}

                <SplitActionBar onSend={send} onSplit={split} />
            </div>
        </AppShell>
    );
}

function now() {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    return `${hh}:${mm}`;
}
