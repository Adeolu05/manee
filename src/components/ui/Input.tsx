import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    helperText?: string;
    error?: string;
};

export function Input({ label, helperText, error, className = "", ...props }: InputProps) {
    return (
        <label className="block">
            {label ? <span className="mb-2 block text-sm text-muted">{label}</span> : null}

            <input
                className={[
                    "w-full rounded-md border bg-surface px-4 py-3 text-sm text-text outline-none",
                    error ? "border-error" : "border-border focus:border-primary",
                    className,
                ].join(" ")}
                {...props}
            />

            {error ? (
                <p className="mt-2 text-xs text-error">{error}</p>
            ) : helperText ? (
                <p className="mt-2 text-xs text-muted">{helperText}</p>
            ) : null}
        </label>
    );
}
