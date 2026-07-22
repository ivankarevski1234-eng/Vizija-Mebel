import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { translations } from "@/i18n/translations";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => localStorage.getItem("vm_lang") || "mk");

  useEffect(() => {
    localStorage.setItem("vm_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "mk" ? "en" : "mk"));
  }, []);

  const t = translations[lang];
  const tl = useCallback((obj) => (obj && typeof obj === "object" ? obj[lang] : obj), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, tl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
};
