import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"var(--primary)",
        'primary-2':"var(--primary-2)",
        'secondary-y':"var(--secondary-y,)",
        'secondary-b':"var(--secondary-b)",
        white:"var(--white)",
        black:"var(--black)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
