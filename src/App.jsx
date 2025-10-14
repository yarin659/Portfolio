// src/App.jsx
import { useState } from "react";
import "./index.css";

// components & sections
import Navbar from "./components/Navbar";
import About from "./sections/About";
// כשנוסיף בהמשך:
 import Skills from "./sections/Skills";
 import Projects from "./sections/Projects";
 import Experience from "./sections/Experience";
 import Education from "./sections/Education";
 import Contact from "./sections/Contact";

const App = () => {
  const [lang, setLang] = useState("he"); // "he" | "en"

  return (
    <div
      className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors"
      dir={lang === "he" ? "rtl" : "ltr"}
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
