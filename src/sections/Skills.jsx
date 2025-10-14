import { skills } from "../data/skills";

export default function Skills({ lang }) {
  const data = skills[lang];
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">{data.title}</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.sections.map((sec) => (
          <div key={sec.title} className="rounded-2xl border p-5 bg-white/70 dark:bg-neutral-900/70 border-neutral-200 dark:border-neutral-800">
            <h3 className="font-semibold mb-3">{sec.title}</h3>
            <ul className="space-y-1 text-neutral-700 dark:text-neutral-300">
              {sec.items.map((i) => <li key={i}>• {i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
