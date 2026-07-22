import React from "react";
import { useLang } from "@/context/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { Reveal } from "@/components/Reveal";
import { Kicker, Btn } from "@/components/Btn";
import { PageHero } from "@/components/PageHero";
import { IMAGES } from "@/data";
import { Hammer, Cpu, Search, HeartHandshake } from "lucide-react";

const valueIcons = [Hammer, Cpu, Search, HeartHandshake];

export default function About() {
  useSEO("about");
  const { t } = useLang();

  return (
    <div data-testid="about-page">
      <PageHero kicker={t.about.kicker} title={t.about.title} sub={t.about.lead} image={IMAGES.workshop2} />

      {/* STORY */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6 order-2 lg:order-1">
            <div className="space-y-6">
              {t.about.story.map((p, i) => (
                <p key={i} className="text-muted-foreground text-lg font-light leading-relaxed">{p}</p>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-6 order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <img src={IMAGES.workshop1} alt="workshop" className="w-full aspect-[3/4] object-cover" />
              <img src={IMAGES.kitchenBright} alt="kitchen" className="w-full aspect-[3/4] object-cover mt-8" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-foreground text-background">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div data-testid={`stat-${i}`} className="text-center lg:text-left">
                  <div className="font-display font-black text-5xl lg:text-6xl tracking-tighter text-accent">{s.n}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-background/60">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-32">
        <Reveal><Kicker>{t.about.missionTitle}</Kicker></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-4xl sm:text-5xl mb-14">{t.about.missionTitle}</h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.about.values.map((v, i) => {
            const Icon = valueIcons[i];
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div data-testid={`value-${i}`} className="border border-border p-8 h-full hover:border-accent transition-colors duration-300">
                  <Icon size={28} strokeWidth={1.4} className="text-accent" />
                  <h3 className="mt-6 font-display font-semibold uppercase text-lg tracking-tight">{v.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* WORKSHOP */}
      <section className="bg-secondary">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <Kicker>{t.about.workshopTitle}</Kicker>
              <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-4xl sm:text-5xl">{t.about.workshopTitle}</h2>
              <p className="mt-6 text-muted-foreground text-lg font-light leading-relaxed">{t.about.workshopSub}</p>
              <div className="mt-10"><Btn to="/custom">{t.common.designCta}</Btn></div>
            </Reveal>
            <Reveal delay={0.15}>
              <img src={IMAGES.workshop3} alt="workshop" className="w-full aspect-[4/3] object-cover" />
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
