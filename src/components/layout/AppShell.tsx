import React from "react";
import { BottomNav } from "./BottomNav";

type Props = {
    children: React.ReactNode;
};

export function AppShell({ children }: Props) {
    return (
        <div className="min-h-screen bg-bg">
            <div className="mx-auto min-h-screen w-full max-w-[420px] px-4 pb-24 pt-4">
                {children}
            </div>

            {/* fixed bottom nav */}
            <BottomNav />
        </div>
    );
}
