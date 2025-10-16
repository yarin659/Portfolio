import { about, links } from "../data/profile";


export default function About({ lang }) {
  const a = about[lang];
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">{a.title}</h2>

      <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-300">{a.tagline}</p>

      <p className="mt-4 text-neutral-700 dark:text-neutral-300 whitespace-pre-line">{a.body}</p>

      <div className="mt-6 flex gap-3">
       <a
          href="#contact"
          className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition"
        >
          {a.ctaPrimary}
        </a>

        <a
          href="#projects"
          className="px-4 py-2 rounded-lg border border-neutral-400 text-black hover:bg-neutral-100
                    dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800 transition"
        >
          {a.ctaSecondary}
        </a>


        <a href={links.github} target="_blank" className="px-4 py-2 rounded-lg border">GitHub</a>
        
        <a href={links.linkedin} target="_blank" className="px-4 py-2 rounded-lg border">LinkedIn</a>
      </div>
    </section>
  );
}
