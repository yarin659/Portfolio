export default function Experience({ lang }) {
  const t = { he: "ניסיון", en: "Experience" }[lang];
  return <section id="experience" className="mx-auto max-w-6xl px-4 py-16"><h2 className="text-3xl font-bold">{t}</h2></section>;
}