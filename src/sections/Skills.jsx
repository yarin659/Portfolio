// src/sections/Skills.jsx
import { skills } from "../data/skills";

export default function Skills({ lang }) {
  const data = skills[lang];

  return (
    <section
      id="skills"
      className="mx-auto max-w-6xl px-4 py-20 transition-colors"
    >
      {/* כותרת */}
      <h2 className="text-3xl font-bold text-center mb-12 text-neutral-900 dark:text-white">
        {data.title}
      </h2>

      {/* גריד של קלפים */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.sections.map((sec) => (
          <div
            key={sec.title}
            className="
              rounded-2xl p-6
              bg-white dark:bg-white/5
              border border-[#d9c7ff]
              shadow-[0_0_15px_rgba(107,91,255,0.05)]
              hover:shadow-[0_0_25px_rgba(107,91,255,0.1)]
              transition
            "
          >
            {/* כותרת קטגוריה */}
            <h3
              className="
                font-semibold text-lg mb-4
                text-neutral-900 dark:text-neutral-100
                border-b border-neutral-200 dark:border-white/10 pb-2
              "
            >
              {sec.title}
            </h3>

            {/* רשימת מיומנויות */}
            <ul className="space-y-1.5 text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {sec.items.map((i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-[#6b5bff] dark:text-[#00ffff]">•</span>
                  <span>{i}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
