export default function Contact({ lang }) {
  const t = { he: "יצירת קשר", en: "Contact" }[lang];
  return <section id="contact" className="mx-auto max-w-6xl px-4 py-16"><h2 className="text-3xl font-bold">{t}</h2></section>;
}