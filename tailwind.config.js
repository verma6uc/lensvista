
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
          50: "#FDEBEB",
          100: "#FAD2D2",
          200: "#F5A9A9",
          300: "#F08080",
          400: "#EB5757",
          500: "#D32F2F",
          600: "#B71C1C",
          700: "#8E1515",
          800: "#650E0E",
          900: "#3C0707",
        },
        secondary: {
          DEFAULT: "#FFC107",
          50: "#FFF9E6",
          100: "#FFF3CC",
          200: "#FFE699",
          300: "#FFD966",
          400: "#FFCD33",
          500: "#FFC107",
          600: "#CC9A06",
          700: "#997304",
          800: "#664D03",
          900: "#332601",
        },
        accent: {
          DEFAULT: "#1976D2",
          50: "#E8F1FB",
          100: "#D0E4F7",
          200: "#A2C9EF",
          300: "#73AEE7",
          400: "#4593DF",
          500: "#1976D2",
          600: "#155FA8",
          700: "#10477E",
          800: "#0A2F54",
          900: "#05182A",
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
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
      },
      fontFamily: {
        heading: ['Roboto Bold', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
