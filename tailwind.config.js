
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D32F2F",
          50: "#FBDADA",
          100: "#F9C1C1",
          200: "#F49090",
          300: "#EF5F5F",
          400: "#EA2F2F",
          500: "#D32F2F",
          600: "#A62525",
          700: "#791B1B",
          800: "#4C1111",
          900: "#1F0707",
          950: "#0E0303",
        },
        secondary: {
          DEFAULT: "#FFC107",
          50: "#FFF8E0",
          100: "#FFF3C7",
          200: "#FFEA94",
          300: "#FFE061",
          400: "#FFD72E",
          500: "#FFC107",
          600: "#D39E00",
          700: "#A07800",
          800: "#6D5200",
          900: "#3A2C00",
          950: "#201800",
        },
        accent: {
          DEFAULT: "#1976D2",
          50: "#BAD9F6",
          100: "#A6CEF4",
          200: "#7DB8EF",
          300: "#54A2EA",
          400: "#2B8CE6",
          500: "#1976D2",
          600: "#135CA3",
          700: "#0D4274",
          800: "#082845",
          900: "#030E16",
          950: "#010407",
        },
        dark: "#212121",
        medium: "#757575",
        light: "#F5F5F5",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
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
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        heading: ["Roboto", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
