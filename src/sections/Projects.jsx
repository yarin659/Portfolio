import { projects } from "../data/projects";

export default function Projects({ lang }) {
  const p = projects[lang];
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">{p.title}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {p.list.map((proj) => (
          <a key={proj.name} href={proj.github} target="_blank" className="block rounded-2xl border p-5 hover:shadow-lg transition bg-white/70 dark:bg-neutral-900/70 border-neutral-200 dark:border-neutral-800">
            <h3 className="text-xl font-semibold">{proj.name}</h3>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{proj.description}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {proj.technologies.map(t => <span key={t} className="px-2 py-1 rounded-full border">{t}</span>)}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
