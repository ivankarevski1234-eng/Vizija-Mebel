import React from "react";
import { Link } from "react-router-dom";
import { Facebook, MapPin, Phone, Mail } from "lucide-react";
import { useLang } from "@/context/LanguageContext";

export const Footer = () => {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer data-testid="site-footer" className="bg-foreground text-background">
      <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="font-display font-extrabold text-2xl uppercase tracking-tight">Визија Мебел</div>
            <p className="mt-4 text-sm text-background/60 leading-relaxed max-w-xs">{t.footer.tagline}</p>
            <div className="flex gap-3 mt-6">
              <a href="https://www.facebook.com/profile.php?id=100008771851130" target="_blank" rel="noreferrer" data-testid="social-facebook"
                 className="w-10 h-10 border border-background/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-background/50 mb-5">{t.footer.quickLinks}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="text-background/80 hover:text-accent transition-colors">{t.nav.home}</Link></li>
              <li><Link to="/about" className="text-background/80 hover:text-accent transition-colors">{t.nav.about}</Link></li>
              <li><Link to="/products" className="text-background/80 hover:text-accent transition-colors">{t.nav.products}</Link></li>
              <li><Link to="/custom" className="text-background/80 hover:text-accent transition-colors">{t.nav.custom}</Link></li>
              <li><Link to="/gallery" className="text-background/80 hover:text-accent transition-colors">{t.nav.gallery}</Link></li>
              <li><Link to="/contact" className="text-background/80 hover:text-accent transition-colors">{t.nav.contact}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-background/50 mb-5">{t.footer.legal}</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy" className="text-background/80 hover:text-accent transition-colors">{t.footer.privacy}</Link></li>
              <li><Link to="/terms" className="text-background/80 hover:text-accent transition-colors">{t.footer.terms}</Link></li>
              <li><Link to="/shipping" className="text-background/80 hover:text-accent transition-colors">{t.footer.shipping}</Link></li>
              <li><Link to="/warranty" className="text-background/80 hover:text-accent transition-colors">{t.footer.warranty}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-background/50 mb-5">{t.nav.contact}</h4>
            <ul className="space-y-4 text-sm text-background/80">
              <li className="flex gap-3"><MapPin size={18} className="text-accent shrink-0 mt-0.5" /><span>{t.footer.address}</span></li>
              <li className="flex gap-3"><Phone size={18} className="text-accent shrink-0 mt-0.5" /><span>{t.contact.phone}</span></li>
              <li className="flex gap-3"><Mail size={18} className="text-accent shrink-0 mt-0.5" /><span>{t.contact.email}</span></li>
              <li className="text-background/50 text-xs pt-1">{t.footer.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/15 flex flex-col md:flex-row justify-between gap-3 text-xs text-background/50">
          <span>© {year} Визија Мебел. {t.footer.rights}</span>
          <span>{t.footer.designedBy}</span>
        </div>
      </div>
    </footer>
  );
};
