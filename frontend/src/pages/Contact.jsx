import React, { useState } from "react";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { Reveal } from "@/components/Reveal";
import { Kicker } from "@/components/Btn";
import { PageHero } from "@/components/PageHero";

// Replace with your real Formspree endpoint, e.g. "https://formspree.io/f/xxxxxxxx"
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzevpjb";

const Field = ({ label, name, type = "text", value, onChange, required, testid, textarea }) => (
  <label className="block">
    <span className="text-xs font-display font-bold uppercase tracking-[0.15em] text-muted-foreground">{label}{required && " *"}</span>
    {textarea ? (
      <textarea
        name={name} value={value} onChange={onChange} required={required} data-testid={testid} rows={5}
        className="mt-2 w-full bg-card border border-border px-4 py-3 text-sm focus:border-foreground focus:outline-none transition-colors resize-none"
      />
    ) : (
      <input
        type={type} name={name} value={value} onChange={onChange} required={required} data-testid={testid}
        className="mt-2 w-full bg-card border border-border px-4 py-3 text-sm focus:border-foreground focus:outline-none transition-colors"
      />
    )}
  </label>
);

export default function Contact() {
  useSEO("contact");
  const { t, lang } = useLang();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error(t.contact.validation);
      return;
    }
    setSending(true);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, lang }),
      });
      if (!res.ok) throw new Error("Formspree submission failed");
      setDone(true);
      toast.success(t.contact.successTitle);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err) {
      toast.error("Error. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div data-testid="contact-page">
      <PageHero kicker={t.contact.kicker} title={t.contact.title} sub={t.contact.sub} />

      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* FORM */}
          <Reveal className="lg:col-span-7">
            {done ? (
              <div data-testid="contact-success" className="border border-accent bg-accent/5 p-10 flex flex-col items-start">
                <CheckCircle2 size={40} className="text-accent" />
                <h3 className="mt-5 font-display font-bold uppercase text-2xl tracking-tight">{t.contact.successTitle}</h3>
                <p className="mt-3 text-muted-foreground">{t.contact.successMsg}</p>
                <button onClick={() => setDone(false)} className="mt-6 text-xs font-display font-semibold uppercase tracking-widest text-accent">{t.common.send}</button>
              </div>
            ) : (
              <form onSubmit={submit} data-testid="contact-form" className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={t.contact.name} name="name" value={form.name} onChange={onChange} required testid="contact-name" />
                  <Field label={t.contact.email} name="email" type="email" value={form.email} onChange={onChange} required testid="contact-email" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label={t.contact.phone} name="phone" value={form.phone} onChange={onChange} testid="contact-phone" />
                  <Field label={t.contact.subject} name="subject" value={form.subject} onChange={onChange} testid="contact-subject" />
                </div>
                <Field label={t.contact.message} name="message" value={form.message} onChange={onChange} required testid="contact-message" textarea />
                <button
                  type="submit" disabled={sending} data-testid="contact-submit"
                  className="group inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 font-display font-semibold uppercase tracking-[0.12em] text-xs hover:bg-accent transition-colors duration-300 disabled:opacity-50"
                >
                  {sending ? t.contact.sending : t.contact.send}
                </button>
              </form>
            )}
          </Reveal>

          {/* INFO */}
          <Reveal delay={0.15} className="lg:col-span-5">
            <h3 className="font-display font-bold uppercase text-xl tracking-tight mb-6">{t.contact.infoTitle}</h3>
            <ul className="space-y-6">
              <li className="flex gap-4"><MapPin size={22} className="text-accent shrink-0" /><div><div className="text-xs uppercase tracking-widest text-muted-foreground">{t.contact.addressLabel}</div><div className="mt-1">{t.contact.address}</div></div></li>
              <li className="flex gap-4"><Phone size={22} className="text-accent shrink-0" /><div><div className="text-xs uppercase tracking-widest text-muted-foreground">{t.contact.phoneLabel}</div><div className="mt-1">{t.contact.phone}</div></div></li>
              <li className="flex gap-4"><Mail size={22} className="text-accent shrink-0" /><div><div className="text-xs uppercase tracking-widest text-muted-foreground">{t.contact.emailLabel}</div><div className="mt-1">{t.contact.email}</div></div></li>
              <li className="flex gap-4"><Clock size={22} className="text-accent shrink-0" /><div><div className="text-xs uppercase tracking-widest text-muted-foreground">{t.contact.hoursLabel}</div><div className="mt-1">{t.contact.hours}</div></div></li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 pb-24">
        <h3 className="font-display font-bold uppercase text-xl tracking-tight mb-6">{t.contact.mapTitle}</h3>
        <div className="border border-border overflow-hidden">
          <iframe
            title="Vizija Mebel Bitola"
            data-testid="google-map"
            src="https://www.google.com/maps?q=Bitola,North+Macedonia&output=embed"
            className="w-full h-[420px] grayscale-[0.3]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
}
