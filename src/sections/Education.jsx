export default function Education({ lang }) {
  const t = { he: "לימודים", en: "Degrees" }[lang];
  return <section id="education" className="mx-auto max-w-6xl px-4 py-16"><h2 className="text-3xl font-bold">{t}</h2></section>;
}
