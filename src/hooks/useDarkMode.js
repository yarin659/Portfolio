// src/hooks/useDarkMode.js
import { useEffect, useState } from "react";

function getSavedTheme() {
  try {
    return localStorage.getItem("theme");
  } catch (e) {
    // למשל אם localStorage חסום / מצב פרטי
    return null;
  }
}

export default function useDarkMode(defaultDark = false) {
  const [isDark, setIsDark] = useState(() => {
    const saved = getSavedTheme();
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return defaultDark; // ברירת מחדל (אצלך: בהיר)
  });

  useEffect(() => {
    const html = document.documentElement; // <html>
    if (isDark) {
      html.classList.add("dark");
      html.style.colorScheme = "dark";
    } else {
      html.classList.remove("dark");
      html.style.colorScheme = "light";
    }
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch (e) {
      // מתעלמים משגיאות שימור (מצב פרטי וכו')
      // console.warn("Theme persistence failed:", e);
    }
  }, [isDark]);

  return {
    isDark,
    toggle: () => setIsDark((v) => !v),
    setDark: () => setIsDark(true),
    setLight: () => setIsDark(false),
  };
}
