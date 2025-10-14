import useDarkMode from "../hooks/useDarkMode";

export default function Navbar({ lang, setLang }) {
  const { isDark, toggle } = useDarkMode(false);
  const t = {
    he: { about: "עליי", skills: "מיומנויות", projects: "פרויקטים", experience: "ניסיון", education: "לימודים", contact: "יצירת קשר", dark: "מצב כהה", lang: "EN" },
    en: { about: "About", skills: "Skills", projects: "Projects", experience: "Experience", education: "Degrees", contact: "Contact", dark: "Dark", lang: "HE" },
  }[lang];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="#about" className="text-lg font-semibold text-neutral-900 dark:text-white">Yarin Cohen</a>
        <div className="flex items-center gap-4 text-sm">
          <a href="#about" className="hover:opacity-80">{t.about}</a>
          <a href="#skills" className="hover:opacity-80">{t.skills}</a>
          <a href="#projects" className="hover:opacity-80">{t.projects}</a>
          <a href="#experience" className="hover:opacity-80">{t.experience}</a>
          <a href="#education" className="hover:opacity-80">{t.education}</a>
          <a href="#contact" className="hover:opacity-80">{t.contact}</a>
          <button onClick={() => setLang(lang === "he" ? "en" : "he")} className="px-3 py-1 rounded-full border">
            {t.lang}
          </button>
          <button onClick={toggle} className="px-3 py-1 rounded-full border">
            {t.dark}{isDark ? " ✓" : ""}
          </button>
        </div>
      </nav>
    </header>
  );
}
