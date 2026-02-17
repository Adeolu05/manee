
import { NavLink, useNavigate } from "react-router-dom";

import navHome from "../../assets/icons/nav-home.svg";
import navGrid from "../../assets/icons/nav-grid.svg";
import navChat from "../../assets/icons/nav-chat.svg";

export function BottomNav() {
    const navigate = useNavigate();

    return (
        <div className="fixed bottom-6 left-0 right-0 z-50">
            <div className="mx-auto flex w-full max-w-[420px] items-center justify-between px-6">
                {/* Left group: Home + icons connected by thin rail */}
                <div className="relative flex items-center">
                    {/* Thin dark connector rail behind all items */}
                    <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-3 bg-black/80 rounded-full" />

                    {/* Home pill */}
                    <NavLink
                        to="/home"
                        className="relative z-10 flex h-12 items-center gap-2 rounded-full bg-black px-4 text-white shadow-lg transition-all active:scale-95"
                    >
                        <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-white/10">
                            <img src={navHome} alt="Home" className="h-5 w-5 brightness-0 invert opacity-80" />
                        </div>
                        <span className="text-[13px] font-semibold">Home</span>
                    </NavLink>

                    {/* Dapp circle */}
                    <NavLink
                        to="/dapp"
                        className="relative z-10 ml-1 flex h-12 w-12 items-center justify-center rounded-full bg-black shadow-lg transition-all active:scale-95"
                    >
                        <img src={navGrid} alt="Dapp" className="h-5 w-5 brightness-0 invert opacity-80" />
                    </NavLink>

                    {/* Chat circle */}
                    <NavLink
                        to="/chat"
                        className="relative z-10 ml-1 flex h-12 w-12 items-center justify-center rounded-full bg-black shadow-lg transition-all active:scale-95"
                    >
                        <img src={navChat} alt="Chat" className="h-5 w-5 brightness-0 invert opacity-80" />
                    </NavLink>
                </div>

                {/* + button - pushed to far right */}
                <button
                    onClick={() => navigate("/invite")}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1a1a1a] text-white shadow-xl transition hover:bg-[#333] active:scale-95"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                    >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
