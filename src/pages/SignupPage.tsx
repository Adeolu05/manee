import React, { useState } from "react";
import { AuthLayout } from "../components/auth/AuthLayout";
import { Input } from "../components/ui/Input";
import { PasswordInput } from "../components/ui/PasswordInput";
import { Button } from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../assets/icons/icon-google.svg";
import appleIcon from "../assets/icons/icon-apple.svg";

export function SignupPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <AuthLayout
            title="Let's set your account up"
            subtitle="Enter your credentials to set up account."
            onBack={() => navigate(-1)}
        >
            <div className="space-y-5">
                <Input
                    label="Email address"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <PasswordInput
                    label="Password"
                    placeholder="Enter password"
                    value={password}
                    onChange={setPassword}
                />

                <div className="pt-8 flex justify-center">
                    <Button
                        className="w-full max-w-[200px]"
                        onClick={() => navigate("/verify")}
                    >
                        Continue
                    </Button>
                </div>

                <div className="pt-10 text-center text-sm text-muted">
                    <p className="mb-4">Or sign up with</p>

                    <div className="flex justify-center gap-4">
                        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-surface shadow-soft transition hover:shadow-card active:scale-95">
                            <img src={googleIcon} alt="Google" className="h-6 w-6" />
                        </button>
                        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-surface shadow-soft transition hover:shadow-card active:scale-95">
                            <img src={appleIcon} alt="Apple" className="h-6 w-6" />
                        </button>
                    </div>

                    <p className="mt-8">
                        Already have an account?{" "}
                        <Link to="/login" className="font-medium text-primary hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </AuthLayout>
    );
}
