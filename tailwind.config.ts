import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navbar: "var(--navbar)",
        button: "var(--button)",
        buttonFocus: "var(--button-focus)",
        textColor: "var(--text-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
