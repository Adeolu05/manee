import React from "react";

type Props = {
    onNumberClick: (num: string) => void;
    onDelete: () => void;
};

export function NumericKeypad({ onNumberClick, onDelete }: Props) {
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

    return (
        <div className="bg-[#F9FAFB] pb-8 pt-6 px-6">
            <div className="grid grid-cols-3 gap-3">
                {numbers.map((num) => (
                    <button
                        key={num}
                        onClick={() => onNumberClick(num)}
                        className="h-[46px] w-full rounded-lg bg-white text-xl font-bold text-text shadow-sm transition hover:shadow-md active:scale-[0.98]"
                    >
                        {num}
                    </button>
                ))}

                <div /> {/* Empty slot */}

                <button
                    onClick={() => onNumberClick("0")}
                    className="h-[46px] w-full rounded-lg bg-white text-xl font-bold text-text shadow-sm transition hover:shadow-md active:scale-[0.98]"
                >
                    0
                </button>

                <button
                    onClick={onDelete}
                    className="flex h-[46px] w-full items-center justify-center rounded-lg bg-white text-lg font-medium text-text shadow-sm transition hover:shadow-md active:scale-[0.98]"
                >
                    <span className="text-xl">⌫</span>
                </button>
            </div>
        </div>
    );
}
