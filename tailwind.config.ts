import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                arabic: ["Noto Naskh Arabic", "serif"],
                sans: ["Lexend", "sans-serif"],
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                darkGreen: "#0A1110",
                brand: colors.sky,
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
} satisfies Config;
