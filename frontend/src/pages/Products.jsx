import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Download, ArrowUpRight, Mail } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { Reveal } from "@/components/Reveal";
import { Kicker } from "@/components/Btn";
import { PageHero } from "@/components/PageHero";
import { PRODUCTS, CATEGORIES, FINISHES, MKD_TO_EUR } from "@/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const FilterGroup = ({ label, options, active, onChange, testid }) => (
  <div>
    <div className="text-xs font-display font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">{label}</div>
    <div className="flex flex-wrap gap-2" data-testid={testid}>
      {options.map((o) => (
        <button
          key={o.value}
          data-testid={`${testid}-${o.value}`}
          onClick={() => onChange(o.value)}
          className={`px-4 py-2 text-xs font-display font-semibold uppercase tracking-wide border transition-colors duration-300 ${
            active === o.value ? "bg-foreground text-background border-foreground" : "border-border text-foreground hover:border-foreground"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  </div>
);

export default function Products() {
  useSEO("products");
  const { t, tl } = useLang();
  const [cat, setCat] = useState("all");
  const [material, setMaterial] = useState("all");
  const [color, setColor] = useState("all");

  const catOptions = [{ value: "all", label: t.products.all }, ...CATEGORIES.map((c) => ({ value: c.key, label: tl(c.label) }))];
  const matOptions = [{ value: "all", label: t.products.all }, ...Object.entries(t.products.materials).map(([k, v]) => ({ value: k, label: v }))];
  const colorOptions = [{ value: "all", label: t.products.all }, ...Object.entries(t.products.colors).map(([k, v]) => ({ value: k, label: v }))];

  const filtered = useMemo(
    () => PRODUCTS.filter((p) =>
      (cat === "all" || p.cat === cat) &&
      (material === "all" || p.material === material) &&
      (color === "all" || p.color === color)
    ),
    [cat, material, color]
  );

  return (
    <div data-testid="products-page">
      <PageHero kicker={t.products.kicker} title={t.products.title} sub={t.products.sub} />

      {/* FILTERS */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 pb-10">
        <div className="border-y border-border py-8 grid gap-8 md:grid-cols-3">
          <FilterGroup label={t.products.filterCat} options={catOptions} active={cat} onChange={setCat} testid="filter-cat" />
          <FilterGroup label={t.products.filterMaterial} options={matOptions} active={material} onChange={setMaterial} testid="filter-material" />
          <FilterGroup label={t.products.filterColor} options={colorOptions} active={color} onChange={setColor} testid="filter-color" />
        </div>
      </section>

      {/* GRID */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 pb-24">
        {filtered.length === 0 ? (
          <p className="text-muted-foreground py-16 text-center" data-testid="no-results">{t.products.noResults}</p>
        ) : (
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                  data-testid={`product-${p.id}`}
                  className="group bg-card border border-border overflow-hidden flex flex-col"
                >
                  <div className="overflow-hidden aspect-[4/3]">
                    <img src={p.image} alt={tl(p.name)} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-display font-semibold uppercase text-lg tracking-tight">{tl(p.name)}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{tl(p.desc)}</p>
                    <div className="mt-6">
                      <div className="font-display font-bold text-xl tracking-tight">
                        {p.price.toLocaleString("mk-MK")} {t.products.currency}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        ≈ €{Math.round(p.price / MKD_TO_EUR).toLocaleString()}
                      </div>
                      <Link
                        to="/contact"
                        data-testid={`order-${p.id}`}
                        className="mt-4 inline-flex items-center gap-2 bg-foreground text-background px-5 py-2.5 text-xs font-display font-semibold uppercase tracking-[0.12em] hover:bg-accent transition-colors"
                      >
                        <Mail size={14} /> {t.products.orderBtn}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>

      {/* CNC PANEL COLLECTION */}
      <section className="bg-foreground text-background">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-32">
          <div className="max-w-3xl">
            <Reveal><Kicker>{t.products.panelKicker}</Kicker></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display font-bold uppercase tracking-tight text-4xl sm:text-5xl leading-[0.95]">{t.products.panelTitle}</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-background/70 text-lg font-light leading-relaxed">{t.products.panelSub}</p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {FINISHES.map((f, i) => (
              <Reveal key={f.key} delay={(i % 5) * 0.05}>
                <div data-testid={`swatch-${f.key}`} className="group">
                  <div className="aspect-square border border-background/20 overflow-hidden relative" style={{ background: f.hex }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ring-1 ring-inset ring-accent" />
                  </div>
                  <div className="mt-3 font-display font-semibold uppercase text-xs tracking-wide">{tl(f.label)}</div>
                  <div className="text-[10px] text-background/40 uppercase tracking-wider">{f.hex}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CATALOG DOWNLOAD */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-24 lg:py-32">
        <div className="border border-border p-10 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <Kicker>{t.products.catalogTitle}</Kicker>
            <h2 className="mt-4 font-display font-bold uppercase tracking-tight text-3xl sm:text-4xl">{t.products.catalogTitle}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{t.products.catalogSub}</p>
          </div>
          <a
            href={`${API}/catalog/pdf`}
            target="_blank"
            rel="noreferrer"
            data-testid="download-catalog-btn"
            className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-5 font-display font-semibold uppercase tracking-[0.12em] text-xs hover:bg-accent transition-colors duration-300 shrink-0"
          >
            <Download size={18} />
            {t.products.downloadCatalog}
          </a>
        </div>
      </section>
    </div>
  );
}
