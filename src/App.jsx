// src/App.jsx
import { useEffect, useState } from "react";
import "./index.css";

import Navbar from "./components/Navbar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

const App = () => {
  const [lang, setLang] = useState("he"); // "he" | "en"

  // החלת כיוון ושפה על <html> עצמו כדי ש-RTL יהיה מלא (כולל טפסים/native UI)
  useEffect(() => {
    const root = document.documentElement; // <html>
    root.setAttribute("dir", lang === "he" ? "rtl" : "ltr");
    root.setAttribute("lang", lang === "he" ? "he" : "en");
  }, [lang]);

  return (
      <div
  className="
    min-h-svh antialiased scroll-smooth
    bg-lightBg text-neutral-900
    dark:bg-darkBg dark:text-neutral-100
    transition-colors
  "
>


      <Navbar lang={lang} setLang={setLang} />

      <main className="mx-auto max-w-6xl px-4 py-16 space-y-16">
        <About lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <Education lang={lang} />
        <Contact lang={lang} />
      </main>

      <footer className="mt-16 py-8 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Yarin Cohen
      </footer>
    </div>
  );
};

export default App;
