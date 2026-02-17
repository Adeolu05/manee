import React from "react";
import { Button } from "../components/ui/Button";
import { useNavigate } from "react-router-dom";
import checkIcon from "../assets/icons/checkmark-circle.svg";

export function SuccessPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-surface flex flex-col">
            <div className="mx-auto flex h-full w-full max-w-[420px] flex-1 flex-col px-6 pt-12 pb-24">

                {/* Main Content Centered */}
                <div className="flex flex-1 flex-col items-center justify-center text-center">
                    {/* Checkmark */}
                    <div className="mb-8 flex items-center justify-center animate-slide-up">
                        <img
                            src={checkIcon}
                            alt="Success"
                            className="h-20 w-20 object-contain drop-shadow-sm"
                        />
                    </div>

                    <h1 className="text-[22px] font-extrabold tracking-tight text-black animate-slide-up" style={{ animationDelay: "0.1s" }}>
                        Account created
                        <br />
                        successfully
                    </h1>

                    <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-muted animate-slide-up" style={{ animationDelay: "0.2s" }}>
                        You have successfully created a new account,
                        click below to homepage
                    </p>
                </div>

                {/* Button at Bottom */}
                <div className="animate-slide-up w-full" style={{ animationDelay: "0.3s" }}>
                    <Button
                        className="w-full h-14 rounded-2xl text-[17px] font-medium shadow-none bg-[#F59E0B] hover:bg-[#D97706] text-white"
                        onClick={() => navigate("/home")}
                    >
                        Go to homepage
                    </Button>
                </div>
            </div>
        </div>
    );
}
