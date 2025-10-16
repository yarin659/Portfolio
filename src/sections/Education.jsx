// src/components/Education.jsx
import React from "react";
import { education } from "../data/Education.js";

export default function Education({ lang = "en" }) {
  const data = education[lang] || education.en;

  return (
    <section id="education" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">
        {lang === "he" ? "השכלה" : "Education"}
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
              p-6 flex items-start gap-4
            "
          >
            <div className="text-3xl">{item.icon}</div>

            <div>
              <h3 className="text-xl font-semibold leading-tight">
                {item.degree}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.university}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-2">
                {item.period}
              </p>
              {item.description && (
                <p className="text-[0.95rem] leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
