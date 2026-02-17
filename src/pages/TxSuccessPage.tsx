import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";

type TxSummary = {
    title: string;
    amount: string;
    to: string;
    network: string;
    fee: string;
    eta: string;
    ref?: string;
};

export function TxSuccessPage() {
    const navigate = useNavigate();
    const location = useLocation();

    const tx = (location.state as { tx?: TxSummary } | null)?.tx;

    const [randomRef] = useState(() => "TX-" + Math.random().toString(36).slice(2, 8).toUpperCase());

    const data: TxSummary = useMemo(() => tx ?? {
        title: "Transfer successful",
        amount: "$5",
        to: "+86…878",
        network: "Celo",
        fee: "$0.01",
        eta: "Instant",
        ref: randomRef,
    }, [tx, randomRef]);

    return (
        <div className="min-h-screen bg-bg">
            <div className="mx-auto flex min-h-screen w-full max-w-[420px] flex-col px-5 py-10">
                {/* MANEE header */}
                <div className="text-center">
                    <span className="text-lg font-bold tracking-wide text-primary">MANEE</span>
                </div>

                <div className="flex flex-1 flex-col items-center justify-center text-center">
                    {/* Gold checkmark */}
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-primary shadow-card animate-slide-up">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </div>

                    <h1 className="text-lg font-bold uppercase tracking-wide text-text animate-slide-up" style={{ animationDelay: "0.1s" }}>
                        Withdrawal Successful
                    </h1>

                    <p className="mt-2 text-sm text-muted animate-slide-up" style={{ animationDelay: "0.15s" }}>
                        {data.title}
                    </p>

                    {/* Receipt card — Recipient Details */}
                    <div className="mt-6 w-full animate-slide-up" style={{ animationDelay: "0.2s" }}>
                        <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4 text-left">
                            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                                Recipient Details
                            </div>
                            <Row label="To" value={data.to} />
                            <Row label="Network" value={data.network} />
                            <Row label="Amount" value={data.amount} highlight />
                        </div>
                    </div>

                    {/* Receipt card — Transaction Details */}
                    <div className="mt-3 w-full animate-slide-up" style={{ animationDelay: "0.25s" }}>
                        <div className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4 text-left">
                            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary">
                                Transaction Details
                            </div>
                            <Row label="Fee" value={data.fee} />
                            <Row label="ETA" value={data.eta} />
                            {data.ref ? <Row label="Reference" value={data.ref} /> : null}
                        </div>
                    </div>
                </div>

                {/* CTAs */}
                <div className="space-y-3 pb-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                    <Button className="w-full" onClick={() => navigate("/home")}>
                        Back to home
                    </Button>

                    <Button
                        className="w-full"
                        variant="ghost"
                        onClick={() => navigate("/chat")}
                    >
                        Make another transaction
                    </Button>
                </div>

                {/* Footer */}
                <div className="text-center text-xs text-muted">
                    Powered by{" "}
                    <span className="font-semibold text-primary">MANEE</span>
                </div>
            </div>
        </div>
    );
}

function Row({
    label,
    value,
    highlight,
}: {
    label: string;
    value: string;
    highlight?: boolean;
}) {
    return (
        <div className="flex items-center justify-between py-2">
            <span className="text-sm text-muted">{label}</span>
            <span
                className={`text-sm font-medium ${highlight ? "text-primary" : "text-text"}`}
            >
                {value}
            </span>
        </div>
    );
}
