import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                chart: {
                    "1": "hsl(var(--chart-1))",
                    "2": "hsl(var(--chart-2))",
                    "3": "hsl(var(--chart-3))",
                    "4": "hsl(var(--chart-4))",
                    "5": "hsl(var(--chart-5))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            animation: {
                show: "cycleImages 10s ease-in-out infinite",
            },
            keyframes: {
                cycleImages: {
                    "0%": {
                        bg: 'bg-[url("/public/images/clinic/sincere_0.png")]',
                    },
                    "20%": {
                        bg: 'bg-[url("/public/images/clinic/sincere_1.png")]',
                    },
                    "40%": {
                        bg: 'bg-[url("/public/images/clinic/sincere_2.png")]',
                    },
                    "60%": {
                        bg: 'bg-[url("/public/images/clinic/sincere_3.png")]',
                    },
                    "80%": {
                        bg: 'bg-[url("/public/images/clinic/sincere_4.png")]',
                    },
                    "100%": {
                        bg: 'bg-[url("/public/images/clinic/sincere_0.png")]',
                    },
                },
				boo: {
                    "0%": {
                        bg: 'bg-red-500',
                    },
					"50%": {
						bg: 'bg-yellow-500',
					},
                    "100%": {
                        bg: 'bg-green-500',
                    },
                },
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
