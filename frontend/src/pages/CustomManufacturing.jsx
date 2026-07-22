import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Check, Upload, X, CheckCircle2, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { useLang } from "@/context/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { Kicker } from "@/components/Btn";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { CONFIG_TYPES, CONFIG_STYLES, FINISHES, HARDWARE, IMAGES } from "@/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const StepCard = ({ selected, onClick, image, label, testid }) => (
  <button
    onClick={onClick}
    data-testid={testid}
    className={`group relative overflow-hidden border text-left transition-all duration-300 ${
      selected ? "border-foreground ring-2 ring-accent" : "border-border hover:border-foreground"
    }`}
  >
    <div className="aspect-[4/3] overflow-hidden">
      <img src={image} alt={label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
    </div>
    <div className="flex items-center justify-between px-4 py-3">
      <span className="font-display font-semibold uppercase text-sm tracking-tight">{label}</span>
      {selected && <Check size={16} className="text-accent" />}
    </div>
  </button>
);

export default function CustomManufacturing() {
  useSEO("custom");
  const { t, tl, lang } = useLang();
  const [params] = useSearchParams();
  const fileRef = useRef(null);

  const [step, setStep] = useState(0);
  const [cfg, setCfg] = useState({
    type: null, style: null, finish: null, hardware: null,
    preset: null, width: "", height: "", depth: "", notes: "", referenceImage: null,
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const type = params.get("type");
    if (type && CONFIG_TYPES.some((c) => c.key === type)) {
      setCfg((c) => ({ ...c, type }));
    }
  }, [params]);

  const set = (patch) => setCfg((c) => ({ ...c, ...patch }));
  const selectedType = CONFIG_TYPES.find((c) => c.key === cfg.type);
  const selectedStyle = cfg.type && CONFIG_STYLES[cfg.type]?.find((s) => s.key === cfg.style);
  const selectedFinish = FINISHES.find((f) => f.key === cfg.finish);
  const selectedHw = HARDWARE.find((h) => h.key === cfg.hardware);

  const previewImage = selectedStyle?.image || selectedType?.image || IMAGES.heroKitchen;

  const dimsText = () => {
    if (cfg.preset && cfg.preset !== "custom") return t.custom.presets[cfg.preset];
    if (cfg.width || cfg.height || cfg.depth) return `${cfg.width || "?"} × ${cfg.height || "?"} × ${cfg.depth || "?"} cm`;
    return null;
  };

  const onFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) {
      toast.error("Max 3MB");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => set({ referenceImage: reader.result });
    reader.readAsDataURL(file);
  };

  const steps = t.custom.steps;

  const goNext = () => {
    if (step === 0 && !cfg.type) {
      toast.error(t.custom.selectTypeFirst);
      return;
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  const openRequest = () => {
    if (!cfg.type) {
      toast.error(t.custom.selectTypeFirst);
      return;
    }
    setDialogOpen(true);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email) {
      toast.error(t.custom.validation);
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/quotes`, {
        ...form,
        lang,
        config: {
          furnitureType: selectedType ? tl(selectedType.label) : null,
          style: selectedStyle ? tl(selectedStyle.label) : null,
          finish: selectedFinish ? tl(selectedFinish.label) : null,
          finishHex: selectedFinish?.hex || null,
          hardware: selectedHw ? tl(selectedHw.label) : null,
          dimensions: dimsText(),
          width: cfg.width, height: cfg.height, depth: cfg.depth,
          notes: cfg.notes,
          referenceImage: cfg.referenceImage,
        },
      });
      setDialogOpen(false);
      setSuccess(true);
      toast.success(t.custom.successTitle);
    } catch (err) {
      toast.error("Error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="custom-page" className="pt-[72px]">
      {/* Header */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 py-14 lg:py-20">
        <Kicker>{t.custom.kicker}</Kicker>
        <h1 className="mt-5 font-display font-black uppercase tracking-tighter text-4xl sm:text-6xl lg:text-7xl leading-[0.9]">{t.custom.title}</h1>
        <p className="mt-6 max-w-2xl text-muted-foreground text-lg font-light leading-relaxed">{t.custom.sub}</p>
      </section>

      {/* Stepper */}
      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 pb-6">
        <div className="flex flex-wrap gap-2 border-y border-border py-4" data-testid="stepper">
          {steps.map((s, i) => (
            <button
              key={i}
              onClick={() => setStep(i)}
              data-testid={`step-tab-${i}`}
              className={`flex items-center gap-2 px-3 py-2 text-xs font-display font-semibold uppercase tracking-wide transition-colors ${
                step === i ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className={`w-6 h-6 flex items-center justify-center border text-[11px] ${step === i ? "bg-foreground text-background border-foreground" : "border-border"}`}>{i + 1}</span>
              <span className="hidden sm:inline">{s}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-5 lg:px-10 pb-24 grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* LEFT: STEPS */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              {step === 0 && (
                <div data-testid="step-type">
                  <h2 className="font-display font-bold uppercase text-2xl tracking-tight mb-6">{t.custom.step1}</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {CONFIG_TYPES.map((c) => (
                      <StepCard key={c.key} testid={`type-${c.key}`} selected={cfg.type === c.key} image={c.image} label={tl(c.label)}
                        onClick={() => set({ type: c.key, style: null })} />
                    ))}
                  </div>
                </div>
              )}

              {step === 1 && (
                <div data-testid="step-style">
                  <h2 className="font-display font-bold uppercase text-2xl tracking-tight mb-6">{t.custom.step2}</h2>
                  {cfg.type ? (
                    <div className="grid grid-cols-2 gap-4">
                      {CONFIG_STYLES[cfg.type].map((s) => (
                        <StepCard key={s.key} testid={`style-${s.key}`} selected={cfg.style === s.key} image={s.image} label={tl(s.label)}
                          onClick={() => set({ style: s.key })} />
                      ))}
                    </div>
                  ) : <p className="text-muted-foreground">{t.custom.selectTypeFirst}</p>}
                </div>
              )}

              {step === 2 && (
                <div data-testid="step-finish">
                  <h2 className="font-display font-bold uppercase text-2xl tracking-tight mb-6">{t.custom.step3}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {FINISHES.map((f) => (
                      <button key={f.key} data-testid={`finish-${f.key}`} onClick={() => set({ finish: f.key })}
                        className={`group text-left border p-2 transition-all duration-300 ${cfg.finish === f.key ? "border-foreground ring-2 ring-accent" : "border-border hover:border-foreground"}`}>
                        <div className="aspect-[3/2] border border-black/10" style={{ background: f.hex }} />
                        <div className="mt-2 font-display font-semibold uppercase text-xs tracking-wide flex items-center justify-between">
                          {tl(f.label)}{cfg.finish === f.key && <Check size={14} className="text-accent" />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div data-testid="step-hardware">
                  <h2 className="font-display font-bold uppercase text-2xl tracking-tight mb-6">{t.custom.step4}</h2>
                  <div className="grid grid-cols-3 gap-4">
                    {HARDWARE.map((h) => (
                      <button key={h.key} data-testid={`hardware-${h.key}`} onClick={() => set({ hardware: h.key })}
                        className={`border p-6 flex flex-col items-center gap-4 transition-all duration-300 ${cfg.hardware === h.key ? "border-foreground ring-2 ring-accent" : "border-border hover:border-foreground"}`}>
                        <span className="w-14 h-14 rounded-full border border-black/10" style={{ background: h.hex }} />
                        <span className="font-display font-semibold uppercase text-xs tracking-wide text-center">{tl(h.label)}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div data-testid="step-dimensions">
                  <h2 className="font-display font-bold uppercase text-2xl tracking-tight mb-6">{t.custom.step5}</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    {["small", "medium", "large", "custom"].map((p) => (
                      <button key={p} data-testid={`preset-${p}`} onClick={() => set({ preset: p })}
                        className={`border py-4 font-display font-semibold uppercase text-xs tracking-wide transition-all duration-300 ${cfg.preset === p ? "bg-foreground text-background border-foreground" : "border-border hover:border-foreground"}`}>
                        {t.custom.presets[p]}
                      </button>
                    ))}
                  </div>
                  {cfg.preset === "custom" && (
                    <div className="grid sm:grid-cols-3 gap-4">
                      {[["width", "width"], ["height", "height"], ["depth", "depth"]].map(([k, label]) => (
                        <label key={k} className="block">
                          <span className="text-xs font-display font-bold uppercase tracking-widest text-muted-foreground">{t.custom[label]}</span>
                          <input type="number" data-testid={`dim-${k}`} value={cfg[k]} onChange={(e) => set({ [k]: e.target.value })}
                            className="mt-2 w-full bg-card border border-border px-4 py-3 text-sm focus:border-foreground focus:outline-none" />
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {step === 5 && (
                <div data-testid="step-notes">
                  <h2 className="font-display font-bold uppercase text-2xl tracking-tight mb-6">{t.custom.step6}</h2>
                  <textarea rows={5} data-testid="notes-input" value={cfg.notes} onChange={(e) => set({ notes: e.target.value })}
                    placeholder={t.custom.notesPlaceholder}
                    className="w-full bg-card border border-border px-4 py-3 text-sm focus:border-foreground focus:outline-none resize-none" />
                  <div className="mt-5">
                    <input ref={fileRef} type="file" accept="image/*" onChange={onFile} className="hidden" data-testid="upload-input" />
                    {cfg.referenceImage ? (
                      <div className="relative inline-block">
                        <img src={cfg.referenceImage} alt="ref" className="h-40 object-cover border border-border" />
                        <button onClick={() => set({ referenceImage: null })} data-testid="remove-upload" className="absolute -top-2 -right-2 bg-foreground text-background rounded-full p-1"><X size={14} /></button>
                      </div>
                    ) : (
                      <button onClick={() => fileRef.current?.click()} data-testid="upload-btn"
                        className="border border-dashed border-border w-full py-10 flex flex-col items-center gap-2 hover:border-foreground transition-colors">
                        <Upload size={24} className="text-accent" />
                        <span className="font-display font-semibold uppercase text-xs tracking-wide">{t.custom.uploadLabel}</span>
                        <span className="text-xs text-muted-foreground">{t.custom.uploadHint}</span>
                      </button>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex justify-between mt-10 pt-6 border-t border-border">
            <button onClick={goBack} disabled={step === 0} data-testid="step-back"
              className="inline-flex items-center gap-2 text-xs font-display font-semibold uppercase tracking-widest disabled:opacity-30 hover:text-accent transition-colors">
              <ChevronLeft size={16} /> {t.common.back}
            </button>
            {step < steps.length - 1 ? (
              <button onClick={goNext} data-testid="step-next"
                className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 text-xs font-display font-semibold uppercase tracking-widest hover:bg-accent transition-colors">
                {t.common.next} <ChevronRight size={16} />
              </button>
            ) : (
              <button onClick={openRequest} data-testid="request-design-btn"
                className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 text-xs font-display font-semibold uppercase tracking-widest hover:bg-foreground transition-colors">
                {t.custom.requestBtn}
              </button>
            )}
          </div>
        </div>

        {/* RIGHT: LIVE SUMMARY */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-24 border border-border bg-card" data-testid="summary-panel">
            {/* Preview */}
            <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
              <img src={previewImage} alt="preview" className="w-full h-full object-cover" />
              {selectedFinish && (
                <div className="absolute inset-0 transition-colors duration-500" style={{ background: selectedFinish.hex, mixBlendMode: "multiply", opacity: 0.5 }} />
              )}
              {selectedFinish && (
                <div className="absolute inset-0" style={{ background: selectedFinish.hex, mixBlendMode: "soft-light", opacity: 0.4 }} />
              )}
              <div className="absolute top-3 left-3 bg-background/90 backdrop-blur px-3 py-1 text-[10px] font-display font-bold uppercase tracking-widest">{t.custom.preview}</div>
              {selectedHw && (
                <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-background/90 backdrop-blur px-3 py-1.5">
                  <span className="w-3 h-3 rounded-full border border-black/10" style={{ background: selectedHw.hex }} />
                  <span className="text-[10px] font-display font-semibold uppercase tracking-wide">{tl(selectedHw.label)}</span>
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="p-6">
              <h3 className="font-display font-bold uppercase text-lg tracking-tight mb-4">{t.custom.summaryTitle}</h3>
              <dl className="divide-y divide-border text-sm">
                {[
                  [t.custom.sType, selectedType ? tl(selectedType.label) : null],
                  [t.custom.sStyle, selectedStyle ? tl(selectedStyle.label) : null],
                  [t.custom.sFinish, selectedFinish ? tl(selectedFinish.label) : null],
                  [t.custom.sHardware, selectedHw ? tl(selectedHw.label) : null],
                  [t.custom.sDims, dimsText()],
                ].map(([k, v], i) => (
                  <div key={i} className="flex items-center justify-between py-3 gap-4">
                    <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
                    <dd className="font-display font-semibold text-right flex items-center gap-2">
                      {k === t.custom.sFinish && selectedFinish && <span className="w-4 h-4 border border-black/10" style={{ background: selectedFinish.hex }} />}
                      {v || <span className="text-muted-foreground/50 font-normal normal-case tracking-normal">{t.custom.notSelected}</span>}
                    </dd>
                  </div>
                ))}
              </dl>
              <button onClick={openRequest} data-testid="summary-request-btn"
                className="mt-6 w-full bg-foreground text-background py-4 text-xs font-display font-semibold uppercase tracking-widest hover:bg-accent transition-colors">
                {t.custom.requestBtn}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* REQUEST DIALOG */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md" data-testid="quote-dialog">
          <DialogHeader>
            <DialogTitle className="font-display uppercase tracking-tight text-2xl">{t.custom.formTitle}</DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground -mt-2">{t.custom.formSub}</p>
          <form onSubmit={submit} className="space-y-4 mt-2" data-testid="quote-form">
            {[["name", t.custom.name, "text", true], ["phone", t.custom.phone, "tel", true], ["email", t.custom.email, "email", true], ["address", t.custom.address, "text", false]].map(([k, label, type, req]) => (
              <label key={k} className="block">
                <span className="text-xs font-display font-bold uppercase tracking-widest text-muted-foreground">{label}{req && " *"}</span>
                <input type={type} data-testid={`quote-${k}`} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} required={req}
                  className="mt-2 w-full bg-card border border-border px-4 py-3 text-sm focus:border-foreground focus:outline-none" />
              </label>
            ))}
            <button type="submit" disabled={submitting} data-testid="quote-submit"
              className="w-full bg-accent text-white py-4 text-xs font-display font-semibold uppercase tracking-widest hover:bg-foreground transition-colors disabled:opacity-50">
              {submitting ? t.custom.submitting : t.custom.submit}
            </button>
          </form>
        </DialogContent>
      </Dialog>

      {/* SUCCESS OVERLAY */}
      <AnimatePresence>
        {success && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/95 flex items-center justify-center p-6" data-testid="quote-success">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} className="bg-background max-w-md w-full p-10 text-center">
              <CheckCircle2 size={56} className="text-accent mx-auto" />
              <h3 className="mt-6 font-display font-bold uppercase text-3xl tracking-tight">{t.custom.successTitle}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{t.custom.successMsg}</p>
              <button onClick={() => setSuccess(false)} data-testid="success-close"
                className="mt-8 bg-foreground text-background px-8 py-4 text-xs font-display font-semibold uppercase tracking-widest hover:bg-accent transition-colors">
                {t.common.back}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
