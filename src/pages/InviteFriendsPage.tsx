import React from "react";
import { AppShell } from "../components/layout/AppShell";
import { Button } from "../components/ui/Button";

export function InviteFriendsPage() {
    const copyLink = () => {
        navigator.clipboard.writeText("https://manee.app/invite/ref123").catch(() => { });
    };

    return (
        <AppShell>
            <div className="flex min-h-[calc(100vh-160px)] flex-col items-center justify-center text-center">
                {/* Illustration */}
                <div className="mb-6 flex items-center gap-2">
                    <span className="text-6xl">🤝</span>
                </div>

                <h1 className="text-xl font-semibold text-text">Invite friends</h1>
                <p className="mt-2 max-w-[280px] text-sm text-muted">
                    Earn <span className="font-semibold text-primary">$20</span> for each
                    friend you invite to Manee.
                </p>

                <div className="mt-8 w-full max-w-[300px] space-y-3">
                    <Button className="w-full" onClick={copyLink}>
                        Copy invite link
                    </Button>

                    <Button className="w-full" variant="ghost">
                        Share via...
                    </Button>
                </div>

                {/* Referral stats */}
                <div className="mt-10 flex gap-6">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary">0</div>
                        <div className="text-xs text-muted">Invited</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-success">$0</div>
                        <div className="text-xs text-muted">Earned</div>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}
