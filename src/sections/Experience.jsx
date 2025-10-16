// src/components/Experience.jsx
import React from "react";
import { experience } from "../data/Experience.js";

// Simple, clean cards with bullets. Works with dark/light via Tailwind.
export default function Experience({ lang = "en" }) {
  const data = experience[lang] || experience.en;

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">
        {lang === "he" ? "ניסיון תעסוקתי" : "Experience"}
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {data.map((item, idx) => (
          <article
            key={idx}
            className="
              rounded-2xl border 
              border-neutral-200/70 dark:border-neutral-700/60
              bg-white dark:bg-neutral-900 
              shadow-sm hover:shadow-md transition-shadow
              p-6
            "
          >
            <header className="mb-3">
              <h3 className="text-xl font-semibold leading-tight">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.company} · {item.period}
              </p>
            </header>

            {Array.isArray(item.achievements) && item.achievements.length > 0 && (
              <ul className="list-disc ps-5 space-y-2 text-[0.95rem] leading-relaxed">
                {item.achievements.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
