import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/onboarding/onboarding-1.png";
import img2 from "../assets/onboarding/onboarding-2.png";

type Slide = {
    title: string;
    subtitle: string;
    image: string;
};

const slides: Slide[] = [
    {
        image: img1,
        title: "Made to fit around real life",
        subtitle:
            "Fast payment across border, schedule and speak with Ai agent 24/7.",
    },
    {
        image: img2,
        title: "Split bill with friends",
        subtitle:
            "Easily split bills among friend and keep in check with reminders.",
    },
];

export function OnboardingPage() {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0);

    const goTo = (index: number) => {
        setCurrent(index);
    };



    const slide = slides[current];

    // Touch handling for swipe
    const [touchStart, setTouchStart] = useState<number | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (touchStart === null) return;
        const diff = touchStart - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (diff > 0 && current < slides.length - 1) goTo(current + 1);
            if (diff < 0 && current > 0) goTo(current - 1);
        }
        setTouchStart(null);
    };

    return (
        <div
            className="flex min-h-screen flex-col bg-white"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            {/* Status bar spacer (matches Figma) */}
            <div className="h-12" />

            <div className="mx-auto flex w-full max-w-[420px] flex-1 flex-col px-6 pb-10 pt-4">

                {/* Illustration area */}
                <div className="flex flex-1 flex-col items-center justify-end p-4">
                    <div key={current} className="animate-fade-in flex flex-col items-center">
                        <img
                            src={slide.image}
                            className="mb-4 w-full max-w-[280px] object-contain drop-shadow-xl"
                            alt=""
                        />
                    </div>
                </div>

                {/* Dots */}
                <div className="mb-6 flex justify-center gap-2">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={[
                                "h-1.5 rounded-full transition-all duration-300",
                                i === current
                                    ? "w-8 bg-primary"
                                    : "w-1.5 bg-gray-200",
                            ].join(" ")}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                {/* Text Content */}
                <div key={current + "-text"} className="animate-slide-up mb-10 text-center">
                    <h2 className="text-2xl font-bold text-text">
                        {slide.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted px-4">
                        {slide.subtitle}
                    </p>
                </div>

                {/* CTAs */}
                <div className="space-y-4">
                    <button
                        onClick={() => navigate("/signup")}
                        className="w-full rounded-full bg-primary py-4 text-base font-semibold text-white shadow-[0_4px_14px_rgba(245,158,11,0.4)] transition hover:bg-primaryHover active:scale-[0.98]"
                    >
                        Sign Up
                    </button>

                    <button
                        onClick={() => navigate("/login")}
                        className="w-full rounded-full bg-[#FFF9F0] py-4 text-base font-semibold text-[#D97706] transition hover:bg-[#FFF0D4] active:scale-[0.98]"
                    >
                        Log In
                    </button>

                    <p className="mt-4 px-4 text-center text-[10px] leading-tight text-gray-400">
                        By signing in to Manee you agree to our <span className="font-bold text-primary">Terms and Conditions</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
