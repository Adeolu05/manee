import React, { useEffect, useRef } from "react";

type OTPInputProps = {
    length?: number;
    value: string;
    onChange: (value: string) => void;
    error?: boolean;
};

export function OTPInput({
    length = 4,
    value,
    onChange,
    error = false,
}: OTPInputProps) {
    const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

    useEffect(() => {
        if (value.length === length) {
            inputsRef.current[length - 1]?.blur();
        }
    }, [value, length]);

    const handleChange = (index: number, digit: string) => {
        if (!/^\d?$/.test(digit)) return;

        const newValue =
            value.substring(0, index) +
            digit +
            value.substring(index + 1);

        onChange(newValue);

        if (digit && index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
        if (e.key === "Backspace" && !value[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    return (
        <div className="flex justify-start gap-4">
            {Array.from({ length }).map((_, index) => (
                <input
                    key={index}
                    ref={(el) => (inputsRef.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={value[index] || ""}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={[
                        "h-14 w-14 rounded-xl text-center text-2xl font-semibold outline-none transition-all duration-200",
                        error
                            ? "bg-white border text-error border-error"
                            : value[index]
                                ? "bg-white border border-primary text-text"
                                : "bg-[#FDE68A] border-none text-transparent focus:bg-white focus:border focus:border-primary focus:text-text",
                    ].join(" ")}
                />
            ))}
        </div>
    );
}
