import { useState } from "react";

import iconEyeOpen from "../../assets/icons/icon-eye-open.svg";
import iconEyeOff from "../../assets/icons/icon-eye-off.svg";
import balanceCardBg from "../../assets/balance-card-bg.png";

export function BalanceCard() {
    const [visible, setVisible] = useState(true);

    return (
        <div
            className="relative overflow-hidden rounded-2xl p-5 text-white shadow-card"
            style={{
                background: "linear-gradient(135deg, #F59E0B 0%, #FBBF24 40%, #FCD34D 70%, #FDE68A 100%)",
            }}
        >
            {/* Decorative background image */}
            <img
                src={balanceCardBg}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30 mix-blend-overlay"
            />

            {/* Content */}
            <div className="relative z-10">
                <div className="flex items-center justify-between">
                    <div className="text-xs font-medium tracking-wider opacity-90">
                        Available Balance
                    </div>
                    <button
                        onClick={() => setVisible((v) => !v)}
                        className="flex items-center justify-center rounded-full bg-white/15 p-1.5 backdrop-blur transition hover:bg-white/25 active:scale-95"
                    >
                        <img
                            src={visible ? iconEyeOpen : iconEyeOff}
                            alt={visible ? "Hide balance" : "Show balance"}
                            className="h-4 w-4 brightness-0 invert"
                        />
                    </button>
                </div>

                <div className="mt-3 text-3xl font-bold tracking-tight">
                    {visible ? "$ 0.00" : "••••••"}
                </div>
            </div>
        </div>
    );
}
