
import iconGift from "../../assets/icons/icon-gift.svg";
import iconCopy from "../../assets/icons/icon-copy.svg";

export function InviteBanner() {
    const referralCode = "67BGUT7";

    const handleCopy = () => {
        navigator.clipboard.writeText(referralCode).catch(() => { });
    };

    return (
        <div className="relative mt-4">
            {/* 1st Layer (Blue) - Widest, thin rim at top */}
            <div className="absolute -inset-x-1.5 -top-2 bottom-9 rounded-[22px] bg-[#D1E1FF]" />

            {/* 2nd Layer (Cream) - Slightly narrower */}
            <div className="absolute -inset-x-1.5 -top-1 bottom-8 rounded-[20px] bg-[#FFFDEC]" />

            {/* Front Card Group */}
            <div className="relative -mx-1.5 flex flex-col">
                {/* Top Section - Light Purple */}
                <div className="flex items-center justify-center gap-2.5 rounded-[16px] bg-[#F0EEFA] px-4 py-3.5">
                    <img src={iconGift} alt="" className="h-6 w-6 shrink-0" />
                    <span className="text-[13px] font-medium text-text leading-snug">
                        Earn 20 $GS for each friend you invite.
                    </span>
                </div>

                {/* Bottom Pill - Darker Purple */}
                <div className="flex items-center justify-between rounded-b-[16px] bg-[#C3BDEB] mx-3 px-4 py-2">
                    <span className="text-xs font-bold text-[#5B4E8E]">{referralCode}</span>
                    <button
                        onClick={handleCopy}
                        className="flex items-center justify-center p-0.5 transition opacity-60 hover:opacity-100 active:scale-95"
                        title="Copy referral code"
                    >
                        <img src={iconCopy} alt="Copy" className="h-4 w-4 mix-blend-multiply opacity-70" />
                    </button>
                </div>
            </div>
        </div>
    );
}
