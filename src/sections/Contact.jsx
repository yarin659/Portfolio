// src/components/Contact.jsx
import React, { useState } from "react";
import { contact } from "../data/contact.js";

export default function Contact({ lang = "en" }) {
  const t = contact[lang] || contact.en;
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", msg: "" });

  const isRTL = lang === "he";

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    return form.name.trim() && emailOk && form.message.trim();
  };

  // Default: mailto — no backend required
  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      setStatus({ type: "error", msg: t.form.invalid });
      return;
    }
    setStatus({ type: "info", msg: t.form.sending });
    const target = (contact[lang] || contact.en).info.email || "yarin659@gmail.com";
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${target}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus({ type: "success", msg: t.form.success }), 600);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(t.info.email);
      setStatus({ type: "success", msg: (lang === "he" ? "האימייל הועתק." : "Email copied.") });
    } catch {
      setStatus({ type: "error", msg: (lang === "he" ? "לא הצלחנו להעתיק." : "Copy failed.") });
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-16" dir={isRTL ? "rtl" : "ltr"}>
      <h2 className="text-3xl font-bold mb-2">{t.title}</h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">{t.subtitle}</p>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Info Card */}
        <article
          className="
            rounded-2xl border
            border-neutral-200/70 dark:border-neutral-700/60
            bg-white dark:bg-neutral-900
            shadow-sm hover:shadow-md transition-shadow
            p-6
          "
        >
          <ul className="space-y-4">
            <li>
              <div className="text-sm text-neutral-500">{t.emailLabel}</div>
              <div className="flex items-center gap-3">
                <a
                  className="text-lg font-medium underline underline-offset-4 hover:no-underline"
                  href={`mailto:${t.info.email}`}
                >
                  {t.info.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="text-sm px-2 py-1 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:border-violet-400 dark:hover:border-violet-400"
                  type="button"
                >
                  {isRTL ? "העתק" : "Copy"}
                </button>
              </div>
            </li>

            <li>
              <div className="text-sm text-neutral-500">{t.phoneLabel}</div>
              <a
                className="text-lg font-medium"
                href={`tel:${t.info.phone.replaceAll(" ", "")}`}
              >
                {t.info.phone}
              </a>
            </li>

            <li>
              <div className="text-sm text-neutral-500">{t.locationLabel}</div>
              <div className="text-lg font-medium">{t.info.location}</div>
            </li>

            {Array.isArray(t.info.socials) && t.info.socials.length > 0 && (
              <li>
                <div className="text-sm text-neutral-500">{isRTL ? "רשתות" : "Socials"}</div>
                <div className="mt-2 flex flex-wrap gap-3">
                  {t.info.socials.map((s, i) => (
                    <a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        rounded-full border px-3 py-1 text-sm
                        border-neutral-300 dark:border-neutral-700
                        hover:border-violet-400 dark:hover:border-violet-400
                        hover:shadow-sm
                      "
                    >
                      {s.name} · {s.handle}
                    </a>
                  ))}
                </div>
              </li>
            )}
          </ul>
        </article>

        {/* Form Card */}
        <article
          className="
            rounded-2xl border
            border-neutral-200/70 dark:border-neutral-700/60
            bg-white dark:bg-neutral-900
            shadow-sm hover:shadow-md transition-shadow
            p-6
          "
        >
          <form onSubmit={onSubmit} className="space-y-4" noValidate>
            <div>
              <label className="block text-sm mb-1" htmlFor="name">
                {t.form.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={onChange}
                required
                className="
                  w-full rounded-xl border px-3 py-2 outline-none
                  border-neutral-300 dark:border-neutral-700
                  bg-white dark:bg-neutral-950
                  focus:ring-2 focus:ring-violet-300 dark:focus:ring-violet-500
                "
              />
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="email">
                {t.form.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                required
                className="
                  w-full rounded-xl border px-3 py-2 outline-none
                  border-neutral-300 dark:border-neutral-700
                  bg-white dark:bg-neutral-950
                  focus:ring-2 focus:ring-violet-300 dark:focus:ring-violet-500
                "
              />
            </div>

            <div>
              <label className="block text-sm mb-1" htmlFor="message">
                {t.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={onChange}
                required
                className="
                  w-full rounded-xl border px-3 py-2 outline-none
                  border-neutral-300 dark:border-neutral-700
                  bg-white dark:bg-neutral-950
                  focus:ring-2 focus:ring-violet-300 dark:focus:ring-violet-500
                  resize-y
                "
              />
            </div>

            <button
              type="submit"
              className="
                w-full md:w-auto rounded-2xl px-5 py-2 font-semibold
                border border-violet-300 hover:border-violet-500
                shadow-sm hover:shadow
              "
            >
              {t.form.send}
            </button>

            <div
              aria-live="polite"
              className={`text-sm ${status.type === "error" ? "text-red-600" : status.type === "success" ? "text-green-600" : "text-neutral-500"}`}
            >
              {status.msg}
            </div>
          </form>

          {/* TIP: swap to Formspree (optional)
             - Replace onSubmit with regular POST:
             <form action="https://formspree.io/f/your-id" method="POST">
             and remove the handler above. */}
        </article>
      </div>
    </section>
  );
}
