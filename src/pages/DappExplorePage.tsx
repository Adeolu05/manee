
import { AppShell } from "../components/layout/AppShell";
import { HeaderBar } from "../components/layout/HeaderBar";

export function DappExplorePage() {
    return (
        <AppShell>
            <HeaderBar
                title="Explore"
                right={<div className="h-8 w-8 rounded-full bg-surface shadow-soft" />}
            />

            {/* Hero Banner */}
            <div className="mb-5 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-500 p-5 text-white shadow-card">
                <p className="text-lg font-semibold leading-snug">
                    Explore the world
                    <br />
                    of Celo chain
                </p>
                <p className="mt-2 text-xs opacity-80">
                    Discover decentralized apps and services on the Celo network.
                </p>
            </div>

            {/* Quick actions */}
            <div className="mb-5">
                <div className="mb-3 text-sm font-medium text-text">Quick Actions</div>
                <div className="grid grid-cols-2 gap-3">
                    <ActionCard emoji="🎲" label="Dice" desc="Play & earn" />
                    <ActionCard emoji="🍦" label="Scoop" desc="Earn rewards" />
                </div>
            </div>

            {/* Balance */}
            <div className="rounded-2xl bg-gradient-to-r from-primary to-amber-400 p-5 text-white shadow-card">
                <div className="text-xs opacity-80">Your Balance</div>
                <div className="mt-1 text-3xl font-bold">$ 0.00</div>
                <div className="mt-3 text-xs opacity-70">Celo Network</div>
            </div>

            {/* Recent Dapp Activity */}
            <div className="mt-5">
                <div className="mb-3 text-sm font-medium text-text">Recent Activity</div>
                <div className="rounded-2xl bg-surface p-5 text-center text-sm text-muted shadow-soft">
                    No dapp activity yet
                </div>
            </div>
        </AppShell>
    );
}

function ActionCard({ emoji, label, desc }: { emoji: string; label: string; desc: string }) {
    return (
        <button className="flex flex-col items-center gap-1 rounded-2xl bg-surface p-4 shadow-soft transition hover:shadow-card active:scale-[0.98]">
            <span className="text-2xl">{emoji}</span>
            <span className="text-sm font-medium text-text">{label}</span>
            <span className="text-xs text-muted">{desc}</span>
        </button>
    );
}
