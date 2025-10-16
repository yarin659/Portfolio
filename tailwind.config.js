/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        lightBg: "#f8f8f8",
        darkBg: "#0b0f18",
        accent: "#6b5bff",      // “סכול” – כחול־סגול
        primary: "#6c4dfd",     // סגול יפה לכפתורים
        textLight: "#111111",   // טקסט במצב בהיר
        textMuted: "#555555",   // טקסט משני במצב בהיר
      },
    },
  },
  plugins: [],
};
