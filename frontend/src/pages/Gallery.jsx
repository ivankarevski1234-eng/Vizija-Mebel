import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { PageHero } from "@/components/PageHero";
import { GALLERY, CATEGORIES } from "@/data";

export default function Gallery() {
  useSEO("gallery");
  const { t, tl } = useLang();
  const [cat, setCat] = useState("all");
  const [active, setActive] = useState(null);

  const filtered = useMemo(() => (cat === "all" ? GALLERY : GALLERY.filter((g) => g.cat === cat)), [cat]);
  const options = [{ key: "all", label: t.gallery.all }, ...CATEGORIES.map((c) => ({ key: c.key, label: tl(c.label) }))];

  const openAt = (i) => setActive(i);
  const close = () => setActive(null);
  const prev = () => setActive((a) => (a - 1 + filtered.length) % filtered.length);
  const next = () => setActive((a) => (a + 1) % filtered.length);

  return (
    <div data-testid="gallery-page">
      <PageHero kicker={t.gallery.kicker} title={t.gallery.title} sub={t.gallery.sub} />

      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 pb-8">
        <div className="flex flex-wrap gap-2 border-y border-border py-6" data-testid="gallery-filters">
          {options.map((o) => (
            <button
              key={o.key}
              data-testid={`gallery-filter-${o.key}`}
              onClick={() => setCat(o.key)}
              className={`px-4 py-2 text-xs font-display font-semibold uppercase tracking-wide border transition-colors duration-300 ${
                cat === o.key ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"
              }`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {filtered.map((g, i) => (
            <motion.button
              key={g.image}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
              onClick={() => openAt(i)}
              data-testid={`gallery-item-${i}`}
              className="group mb-5 block w-full overflow-hidden relative"
            >
              <img src={g.image} alt="" className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-4"
            onClick={close}
            data-testid="lightbox"
          >
            <button data-testid="lightbox-close" className="absolute top-5 right-5 text-background p-2" onClick={close}><X size={28} /></button>
            <button data-testid="lightbox-prev" className="absolute left-4 lg:left-10 text-background p-2" onClick={(e) => { e.stopPropagation(); prev(); }}><ChevronLeft size={40} /></button>
            <button data-testid="lightbox-next" className="absolute right-4 lg:right-10 text-background p-2" onClick={(e) => { e.stopPropagation(); next(); }}><ChevronRight size={40} /></button>
            <motion.img
              key={active}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={filtered[active].image}
              alt=""
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
