

type Tx = {
    title: string;
    subtitle: string;
    amount: string;
    status: "Paid" | "Swapped" | "Schedule";
};

const statusColors: Record<Tx["status"], string> = {
    Paid: "text-emerald-500",
    Swapped: "text-blue-500",
    Schedule: "text-red-500",
};

const data: Tx[] = [
    { title: "Sent to 0xB...678", subtitle: "Just now", amount: "$5", status: "Paid" },
    { title: "Swapped celo to  Cusd", subtitle: "1 min ago", amount: "$5", status: "Swapped" },
    { title: "Transfer to Mum", subtitle: "Just now", amount: "$5", status: "Schedule" },
];

export function RecentTransactions() {
    return (
        <div className="mt-2">
            <div className="mb-3 text-sm font-medium text-text">Recent transactions</div>

            <div className="mx-auto max-w-xs space-y-2">
                {data.map((tx, idx) => (
                    <div
                        key={idx}
                        className="flex items-center justify-between rounded-xl bg-surface px-3 py-2.5 shadow-sm"
                    >
                        <div>
                            <div className="text-xs font-semibold text-text">{tx.title}</div>
                            <div className="mt-0.5 text-[10px] text-muted font-medium">{tx.subtitle}</div>
                        </div>

                        <div className="text-right">
                            <div className="text-xs font-bold text-text">{tx.amount}</div>
                            <div className={`mt-0.5 text-[10px] font-semibold ${statusColors[tx.status]}`}>
                                {tx.status}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
