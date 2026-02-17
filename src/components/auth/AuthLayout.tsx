import React from "react";

type Props = {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
    onBack?: () => void;
};

export function AuthLayout({ title, subtitle, children, onBack }: Props) {
    return (
        <div className="min-h-screen bg-bg">
            <div className="mx-auto w-full max-w-[420px] px-5 py-10">
                {/* Status bar spacer */}
                <div className="h-4" />

                {onBack ? (
                    <button
                        onClick={onBack}
                        className="mb-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface text-lg shadow-soft transition hover:shadow-card active:scale-95"
                        aria-label="Go back"
                    >
                        ‹
                    </button>
                ) : (
                    <div className="mb-10 h-10" />
                )}

                <h1 className="text-2xl font-semibold text-text">{title}</h1>
                {subtitle ? (
                    <p className="mt-2 text-sm font-medium text-primary">{subtitle}</p>
                ) : null}

                <div className="mt-10">{children}</div>
            </div>
        </div>
    );
}
