export type ChatRole = "user" | "assistant";

export type ChatMessage =
    | {
        id: string;
        role: ChatRole;
        type: "text";
        content: string;
        createdAt: number;
    }
    | {
        id: string;
        role: "assistant";
        type: "transaction_draft";
        createdAt: number;
        draft: {
            title: string; // e.g. "Transfer"
            amount: string; // "$5"
            to: string; // "+86…878"
            network: string; // "Celo"
            fee: string; // "$0.01"
            eta: string; // "Instant"
        };
    };
