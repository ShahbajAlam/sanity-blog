import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

const config = {
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    plugins: [daisyui, typography],
    daisyui: {
        themes: ["forest", "bumblebee"],
    },
    darkMode: ["class", "data-theme='forest'"],
} satisfies Config;

export default config;
