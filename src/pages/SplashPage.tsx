import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo/manee-logo.svg";

export function SplashPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => navigate("/onboarding"), 2200);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#FDF9F3]">
            <div className="animate-fade-in">
                <img
                    src={logo}
                    alt="MANEE"
                    className="h-12 w-auto animate-pulse-soft"
                />
            </div>
        </div>
    );
}
