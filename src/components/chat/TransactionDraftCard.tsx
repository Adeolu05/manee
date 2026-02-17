
import { Button } from "../ui/Button";
import type { ChatMessage } from "../../lib/chatTypes";

type Props = {
    message: Extract<ChatMessage, { type: "transaction_draft" }>;
    onConfirm: () => void;
    onCancel: () => void;
};

export function TransactionDraftCard({ message, onConfirm, onCancel }: Props) {
    const d = message.draft;

    return (
        <div className="rounded-2xl bg-surface p-4 shadow-soft">
            <div className="text-sm font-semibold text-text">{d.title}</div>

            <div className="mt-3 space-y-2 text-sm">
                <Row label="Amount" value={d.amount} />
                <Row label="To" value={d.to} />
                <Row label="Network" value={d.network} />
                <Row label="Fee" value={d.fee} />
                <Row label="ETA" value={d.eta} />
            </div>

            <div className="mt-4 flex gap-3">
                <Button className="w-full" onClick={onConfirm}>
                    Confirm order
                </Button>
                <Button
                    className="w-full"
                    variant="ghost"
                    onClick={onCancel}
                >
                    Cancel
                </Button>
            </div>
        </div>
    );
}

function Row({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex items-center justify-between">
            <span className="text-muted">{label}</span>
            <span className="font-medium text-text">{value}</span>
        </div>
    );
}
