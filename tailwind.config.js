export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Outfit", "sans-serif"],
            },
            colors: {
                bg: "#FAF7F2",
                surface: "#FFFFFF",
                text: "#1F2937",
                muted: "#6B7280",
                border: "#D1D5DB",
                primary: "#F59E0B",
                primaryHover: "#D97706",
                error: "#EF4444",
                success: "#16A34A",
                pink: {
                    50: "#FFF5F5",
                    100: "#FDE8E8",
                    200: "#FBD5D5",
                },
                mint: {
                    50: "#F0FDF4",
                    100: "#DCFCE7",
                    200: "#BBF7D0",
                },
                gold: {
                    50: "#FFFBEB",
                    100: "#FEF3C7",
                    200: "#FDE68A",
                    300: "#FCD34D",
                    400: "#FBBF24",
                    500: "#F59E0B",
                },
                amber: {
                    50: "#FFFBEB",
                    100: "#FEF3C7",
                    200: "#FDE68A",
                    300: "#FCD34D",
                    400: "#FBBF24",
                    500: "#F59E0B",
                    600: "#D97706",
                    700: "#B45309",
                },
            },
            borderRadius: {
                lg: "16px",
                md: "12px",
                sm: "10px",
            },
            boxShadow: {
                soft: "0 6px 18px rgba(0,0,0,0.06)",
                card: "0 8px 24px rgba(0,0,0,0.08)",
            },
            animation: {
                "slide-up": "slide-up 0.45s ease-out both",
                "fade-in": "fade-in 0.4s ease-out both",
                "pulse-soft": "pulse-soft 2s ease-in-out infinite",
            },
            keyframes: {
                "slide-up": {
                    from: { opacity: "0", transform: "translateY(24px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in": {
                    from: { opacity: "0" },
                    to: { opacity: "1" },
                },
                "pulse-soft": {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.05)" },
                },
            },
        },
    },
    plugins: [],
};
