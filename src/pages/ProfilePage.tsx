import React from "react";
import { useNavigate } from "react-router-dom";
import { AppShell } from "../components/layout/AppShell";

export function ProfilePage() {
    const navigate = useNavigate();

    return (
        <AppShell>
            {/* Avatar + Name */}
            <div className="mb-6 flex flex-col items-center pt-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-amber-300 text-2xl font-bold text-white shadow-card">
                    DA
                </div>
                <h2 className="mt-3 text-lg font-semibold text-text">David Amara</h2>
                <p className="text-xs text-muted">Celo... 3218</p>
            </div>

            {/* Settings list */}
            <div className="space-y-2">
                <SettingItem emoji="🔔" label="Notifications" />
                <SettingItem emoji="🔐" label="Security" />
                <SettingItem emoji="💳" label="Payment methods" />
                <SettingItem emoji="🌐" label="Language" />
                <SettingItem emoji="ℹ️" label="About Manee" />
                <SettingItem emoji="📄" label="Terms & Privacy" />

                <div className="pt-2">
                    <button
                        onClick={() => navigate("/")}
                        className="flex w-full items-center gap-3 rounded-xl bg-error/10 px-4 py-3 text-sm font-medium text-error transition hover:bg-error/20"
                    >
                        <span>🚪</span>
                        Log out
                    </button>
                </div>
            </div>

            {/* Version */}
            <p className="mt-8 text-center text-xs text-muted">Manee v1.0.0</p>
        </AppShell>
    );
}

function SettingItem({ emoji, label }: { emoji: string; label: string }) {
    return (
        <button className="flex w-full items-center gap-3 rounded-xl bg-surface px-4 py-3 text-sm font-medium text-text shadow-soft transition hover:shadow-card active:scale-[0.99]">
            <span>{emoji}</span>
            <span className="flex-1 text-left">{label}</span>
            <span className="text-muted">›</span>
        </button>
    );
}
