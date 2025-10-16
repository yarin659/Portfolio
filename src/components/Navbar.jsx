// src/components/Navbar.jsx
import useDarkMode from "../hooks/useDarkMode";

export default function Navbar({ lang, setLang }) {
  const { isDark, toggle } = useDarkMode(false);

  const t = {
    he: {
      about: "עליי",
      skills: "מיומנויות",
      projects: "פרויקטים",
      experience: "ניסיון",
      education: "לימודים",
      contact: "יצירת קשר",
      dark: "מצב כהה",
      lang: "EN",
    },
    en: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Degrees",
      contact: "Contact",
      dark: "Dark",
      lang: "HE",
    },
  }[lang];

  const links = [
    { href: "#about", label: t.about },
    { href: "#skills", label: t.skills },
    { href: "#projects", label: t.projects },
    { href: "#experience", label: t.experience },
    { href: "#education", label: t.education },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header
      className="
        sticky top-0 z-50
        bg-white dark:bg-neutral-900
        border-b border-neutral-200 dark:border-white/10
        backdrop-blur
      "
    >
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        {/* לוגו/שם */}
        <a
          href="#about"
          className="text-lg font-semibold text-neutral-900 dark:text-white"
        >
          Yarin Cohen
        </a>

        {/* קישורי ניווט + כפתורים */}
        <div className="flex items-center gap-4 text-sm">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="
                relative px-3 py-2 rounded-md
                text-neutral-700 dark:text-neutral-300
                transition
                /* קו סגול מתמלא בהובר */
                after:content-[''] after:absolute after:left-3 after:right-3 after:bottom-1
                after:h-[2px] after:bg-[#6b5bff]
                after:scale-x-0 hover:after:scale-x-100
                after:origin-center after:transition-transform after:duration-200
              "
            >
              {label}
            </a>
          ))}

          {/* כפתור שפה */}
          <button
            onClick={() => setLang(lang === "he" ? "en" : "he")}
            className="
              h-8 px-3 rounded-full border
              border-neutral-300 dark:border-white/15
              bg-white dark:bg-white/5
              text-neutral-700 dark:text-neutral-200
              hover:bg-neutral-50 dark:hover:bg-white/10
              transition
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-[#6b5bff] focus-visible:ring-offset-2
            "
          >
            {t.lang}
          </button>

          {/* כפתור מצב כהה/בהיר */}
          <button
            onClick={toggle}
            className="
              h-8 px-3 rounded-full border
              border-neutral-300 dark:border-white/15
              bg-white dark:bg-white/5
              text-neutral-700 dark:text-neutral-200
              hover:bg-neutral-50 dark:hover:bg-white/10
              transition
              focus:outline-none focus-visible:ring-2
              focus-visible:ring-[#6b5bff] focus-visible:ring-offset-2
            "
          >
            {t.dark}
            {isDark ? " ✓" : ""}
          </button>
        </div>
      </nav>
    </header>
  );
}
