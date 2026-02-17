import { useState } from "react";
import { AuthLayout } from "../components/auth/AuthLayout";
import { OTPInput } from "../components/auth/OTPInput";
import { NumericKeypad } from "../components/auth/NumericKeypad";
import { useNavigate } from "react-router-dom";


export function VerifyPage() {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [error, setError] = useState(false);
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        if (timer === 0) return;

        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);

    const handleNumberClick = (num: string) => {
        if (otp.length >= 4) return;
        const nextOtp = otp + num;
        setOtp(nextOtp);
        setError(false); // Clear error on new input

        if (nextOtp.length === 4) {
            if (nextOtp === "1234") {
                navigate("/success");
            } else {
                setError(true);
            }
        }
    };

    const handleDelete = () => {
        setOtp((prev) => prev.slice(0, -1));
        setError(false);
    };



    return (
        <div className="flex h-screen flex-col bg-white overflow-hidden">
            <div className="flex-1 overflow-y-auto">
                <div className="min-h-full">
                    <AuthLayout
                        title="Enter the code sent to"
                        subtitle="Enter the code sent to +44......976"
                        onBack={() => navigate(-1)}
                    >
                        <div className="mt-8">
                            <OTPInput value={otp} onChange={() => { }} error={error} />

                            {error && (
                                <p className="mt-4 text-[13px] font-medium text-[#EF4444]">
                                    Pin do not match
                                </p>
                            )}

                            <p className="mt-8 text-[13px] text-muted">
                                Resend the code in 00:{timer.toString().padStart(2, "0")}{" "}
                                <span className="text-primary font-medium">Email address</span>
                            </p>
                        </div>
                    </AuthLayout>
                </div>
            </div>

            {/* Keypad at bottom with gray background */}
            <div className="flex-none">
                <NumericKeypad
                    onNumberClick={handleNumberClick}
                    onDelete={handleDelete}
                />
            </div>
        </div>
    );
}
