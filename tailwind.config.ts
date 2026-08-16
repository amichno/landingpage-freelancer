import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#14181f",
        "bg-alt": "#1b202a",
        "bg-raised": "#212734",
        border: "rgba(255, 255, 255, 0.08)",
        muted: "#9aa5b1",
        accent: "#3ddc97",
        danger: "#ff6b6b",
      },
      fontFamily: {
        display: ["DM Sans", "sans-serif"],
        body: ["Karla", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
