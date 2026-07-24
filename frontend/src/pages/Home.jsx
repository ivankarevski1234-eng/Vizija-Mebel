import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Ruler, PencilRuler, Gem, MapPin, ArrowUpRight, Quote } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { Reveal, MaskLine, FadeIn } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";
import { Btn, Kicker } from "@/components/Btn";
import { IMAGES, PRODUCTS, TESTIMONIALS } from "@/data";

const whyIcons = [Gem, Ruler, PencilRuler, ShieldCheck, MapPin];

export default function Home() {
  useSEO("home");
  const { t, tl } = useLang();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const overlayY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  const featured = PRODUCTS.filter((p) => ["p1", "p2", "p7", "p4", "p12", "p11"].includes(p.id));

  return (
    <div data-testid="home-page">
      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] min-h-[640px] overflow-hidden vm-noise bg-foreground">
        <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
          <img src={IMAGES.heroKitchen} alt="Vizija Mebel kitchen" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        </motion.div>

        <motion.div style={{ y: overlayY }} className="relative z-10 h-full max-w-[1400px] mx-auto px-5 lg:px-10 flex flex-col justify-end pb-20 lg:pb-28">
          <FadeIn delay={0.2}>
            <span className="text-xs font-display font-bold uppercase tracking-[0.35em] text-white/70">{t.home.heroKicker}</span>
          </FadeIn>
          <h1 className="mt-6 font-display font-black uppercase text-white leading-[0.86] tracking-tighter text-[11vw] sm:text-[9vw] lg:text-8xl xl:text-[7.5rem] break-words">
            <MaskLine delay={0.3}>{t.home.heroLine1}</MaskLine>
            <MaskLine delay={0.42}>{t.home.heroLine2}</MaskLine>
            <MaskLine delay={0.54}><span className="text-accent">{t.home.heroLine3}</span></MaskLine>
          </h1>
          <FadeIn delay={0.8} className="mt-8 max-w-xl">
            <p className="text-white/75 text-base lg:text-lg font-light leading-relaxed">{t.home.heroSub}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Btn to="/custom" variant="light" testid="hero-design-cta">{t.common.designCta}</Btn>
              <Btn to="/products" variant="outline" arrow={false} testid="hero-products-cta"
                   className="!text-white !border-white/40 hover:!bg-white hover:!text-foreground">{t.nav.products}</Btn>
            </div>
          </FadeIn>
        </motion.div>

        <div className="absolute bottom-6 right-5 lg:right-10 z-10 hidden sm:flex items-center gap-2 text-white/50 text-[10px] uppercase tracking-[0.3em] rotate-90 origin-right">
          <span>{t.home.scroll}</span>
          <span className="w-10 h-px bg-white/40" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-foreground text-background py-5 border-y border-background/10">
        <Marquee text={t.home.marquee} className="font-display font-bold uppercase text-sm tracking-[0.2em]" />
      </div>

      {/* WHY */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-36">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-8">
            <Reveal><Kicker>{t.home.whyTitle}</Kicker></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
                {t.home.manifestoTitle}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-4">
            <p className="text-muted-foreground leading-relaxed">{t.home.whySub}</p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 border-t border-l border-border">
          {t.home.why.map((w, i) => {
            const Icon = whyIcons[i];
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div data-testid={`why-card-${i}`} className="group h-full border-r border-b border-border p-8 hover:bg-foreground hover:text-background transition-colors duration-500">
                  <Icon size={30} strokeWidth={1.4} className="text-accent group-hover:text-background transition-colors duration-500" />
                  <h3 className="mt-8 font-display font-semibold uppercase text-lg tracking-tight leading-tight">{w.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground group-hover:text-background/70 leading-relaxed transition-colors duration-500">{w.d}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* MANIFESTO CHAPTERS */}
      <section className="bg-secondary">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-36">
          <div className="grid lg:grid-cols-12 gap-14 lg:gap-10">
            <div className="lg:col-span-5 lg:sticky lg:top-28 self-start">
              <Reveal><Kicker>{t.home.manifestoKicker}</Kicker></Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-4xl sm:text-5xl leading-[0.95]">
                  {t.home.manifestoTitle}
                </h2>
              </Reveal>
              <Reveal delay={0.2} className="mt-10 overflow-hidden">
                <img src={IMAGES.workshop3} alt="workshop" className="w-full aspect-[4/3] object-cover" />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              {t.home.chapters.map((c, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <div className="flex gap-6 lg:gap-10 py-8 border-b border-border last:border-0">
                    <span className="font-display font-black text-4xl lg:text-5xl text-accent/30 leading-none shrink-0 w-[1.4em] lg:w-[1.6em]">{c.n}</span>
                    <div>
                      <h3 className="font-display font-semibold uppercase text-xl lg:text-2xl tracking-tight">{c.t}</h3>
                      <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">{c.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-36">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <Reveal><Kicker>{t.home.featuredTitle}</Kicker></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-4xl sm:text-5xl">{t.home.featuredTitle}</h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}><Btn to="/products" variant="outline">{t.common.viewAll}</Btn></Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08}>
              <Link to="/products" data-testid={`featured-${p.id}`} className="group block overflow-hidden bg-card border border-border">
                <div className="overflow-hidden aspect-[4/5]">
                  <img src={p.image} alt={tl(p.name)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-semibold uppercase text-base tracking-tight">{tl(p.name)}</h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-1">{tl(p.desc)}</p>
                  </div>
                  <ArrowUpRight size={20} className="text-accent shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-foreground text-background">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-36">
          <Reveal><Kicker>{t.home.testimonialsTitle}</Kicker></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-4xl sm:text-5xl mb-16">{t.home.testimonialsTitle}</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((r, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div data-testid={`testimonial-${i}`} className="border border-background/15 p-8 h-full flex flex-col">
                  <Quote size={32} className="text-accent" />
                  <p className="mt-6 text-lg font-light leading-relaxed flex-1">"{tl(r.text)}"</p>
                  <div className="mt-8 pt-6 border-t border-background/15">
                    <div className="font-display font-semibold uppercase text-sm tracking-wide">{r.name}</div>
                    <div className="text-background/50 text-xs mt-1">{tl(r.city)}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative overflow-hidden">
        <img src={IMAGES.living1} alt="cta" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/85" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-5 lg:px-10 py-28 lg:py-40 text-center flex flex-col items-center">
          <Reveal>
            <h2 className="font-display font-black uppercase tracking-tighter text-background text-4xl sm:text-5xl lg:text-6xl leading-[0.95] max-w-4xl">
              {t.home.ctaTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-background/70 max-w-xl mx-auto">{t.home.ctaSub}</p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-10"><Btn to="/custom" variant="light" testid="cta-design-btn">{t.common.designCta}</Btn></div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
