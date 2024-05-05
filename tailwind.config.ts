import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["selector"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "d-xl-blue": "#032030",
        "d-lg-blue": "#022B42",
        "d-md-blue": "#003554",
        "d-sm-blue": "#004D74",
        "d-base-blue": "#006494",
        "d-xs-blue": "#006DA4",
        "xs-blue": "#F0F3FA",
        "base-blue": "#D5DEEF",
        "sm-blue": "#B1C9EF",
        "md-blue": "#8AAEE0",
        "lg-blue": "#638ECB",
        "xl-blue": "#395886",
        "d-t-color": "rgb(212 212 212)",
        "t-color": "rgb(10 10 10)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        flying: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(0.8rem)" },
          "100%": { transform: "translateY(0)" },
        },
        badge: {
          "100%": {
            transform: "scaleY(1.7) scaleX(1.25)",
            opacity: "0",
          },
        },
        slide: {
          "0%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(-100%)" },
          "90%": { transform: "translateX(5%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideInfinite: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-300%)" },
        },
        rainArrow: {
          "0%": { transform: "translateY(-10%)" },
          "50%": { transform: "translateY(10%)" },
          "100%": { transform: "translateY(-10%)" },
        },
        enterLeft: {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        rightInfinite: {
          "0%": { transform: "translateX(-150px)" },
          "100%": { transform: "translateX(150px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "waving-hand": "wave 2s linear infinite",
        "flying-card": "flying 3s infinite normal",
        "badge-pulse": "badge 1.5s ease-out infinite",
        "slide-card": "slide 3s 3s ease-in-out",
        "slide-infinite": "slideInfinite 100s linear infinite",
        "rain-arrow": "rainArrow 1s ease-out infinite",
        "enter-left": "enterLeft 0.5s ease-in-out",
        "right-infinite": "rightInfinite 2s linear infinite",
      },
    },
    fontFamily: {
      "roboto-condensed": ["var(--robotoCondensed-fon)"],
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
