import React from "react";
import { Link } from "react-router-dom";
import { useLang } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";

export default function LegalPage({ pageKey }) {
  const { t } = useLang();
  const data = t.legal[pageKey];

  return (
    <div data-testid={`legal-${pageKey}`}>
      <PageHero kicker="Визија Мебел" title={data.title} sub={data.updated} />
      <section className="max-w-3xl mx-auto px-5 lg:px-10 py-16 lg:py-24">
        <div className="space-y-12">
          {data.sections.map((s, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <div className="border-l-2 border-accent pl-6">
                <h2 className="font-display font-bold uppercase text-xl tracking-tight">{s.h}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.p}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-border">
          <Link to="/contact" className="text-xs font-display font-semibold uppercase tracking-[0.15em] text-accent hover:text-foreground transition-colors">
            {t.nav.contact} →
          </Link>
        </div>
      </section>
    </div>
  );
}
