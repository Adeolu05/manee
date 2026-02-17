import type { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
    const base =
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed";

    const styles =
        variant === "primary"
            ? "bg-primary text-white hover:bg-primaryHover"
            : "bg-transparent text-primary hover:underline";

    return <button className={`${base} ${styles} ${className}`} {...props} />;
}
