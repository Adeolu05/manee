import { useState } from "react";
import eyeIcon from "../../assets/icons/icon-eye.svg";
import eyeOffIcon from "../../assets/icons/icon-eye-off.svg";

type Props = {
    label?: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
};

export function PasswordInput({ label, value, onChange, placeholder }: Props) {
    const [show, setShow] = useState(false);

    return (
        <label className="block">
            {label ? <span className="mb-2 block text-sm text-muted">{label}</span> : null}

            <div className="flex items-center gap-2 rounded-md border border-border bg-surface px-4 py-3 focus-within:border-primary transition">
                <input
                    type={show ? "text" : "password"}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full bg-transparent text-sm text-text outline-none"
                />
                <button
                    type="button"
                    onClick={() => setShow((s) => !s)}
                    className="text-muted hover:text-text transition flex items-center justify-center p-1"
                    aria-label={show ? "Hide password" : "Show password"}
                >
                    <img
                        src={show ? eyeOffIcon : eyeIcon}
                        alt={show ? "Hide" : "Show"}
                        className="h-5 w-5 opacity-70"
                    />
                </button>
            </div>
        </label>
    );
}
