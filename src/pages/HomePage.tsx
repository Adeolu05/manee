import React from "react";
import { AppShell } from "../components/layout/AppShell";
import { BalanceCard } from "../components/wallet/BalanceCard";
import { FrequentRecipients } from "../components/wallet/FrequentRecipients";
import { InviteBanner } from "../components/wallet/InviteBanner";
import { RecentTransactions } from "../components/wallet/RecentTransactions";

import profileAvatar from "../assets/avatars/profile-avatar.png";
import iconBell from "../assets/icons/icon-bell.svg";
import iconCopyAddress from "../assets/icons/icon-copy-address.svg";

export function HomePage() {
    const walletAddress = "0xBeb...323B";

    const handleCopyAddress = () => {
        navigator.clipboard.writeText("0xBeb4a2c8f9e1d7b3a5c6f0e2d4b8a1c9f3e5d323B").catch(() => { });
    };

    return (
        <AppShell>
            {/* Header row */}
            <div className="mb-5 flex items-center justify-between">
                {/* Wallet address */}
                <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold text-text">{walletAddress}</span>
                    <button
                        onClick={handleCopyAddress}
                        className="flex items-center justify-center rounded-full p-0.5 transition hover:bg-surface active:scale-95"
                        title="Copy address"
                    >
                        <img src={iconCopyAddress} alt="Copy" className="h-4 w-4" />
                    </button>
                </div>

                {/* Right: avatar + bell */}
                <div className="flex items-center gap-3">
                    <img
                        src={profileAvatar}
                        alt="Profile"
                        className="h-9 w-9 rounded-full object-cover shadow-soft"
                    />
                    <button className="relative flex items-center justify-center rounded-full p-1 transition hover:bg-surface active:scale-95">
                        <img src={iconBell} alt="Notifications" className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <div className="space-y-5 animate-slide-up">
                <BalanceCard />
                <FrequentRecipients />
                <InviteBanner />
                <RecentTransactions />
            </div>
        </AppShell>
    );
}
