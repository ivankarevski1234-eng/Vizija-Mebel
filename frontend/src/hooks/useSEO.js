import { useEffect } from "react";
import { useLang } from "@/context/LanguageContext";

// Sets document title + meta description per page/language.
export const useSEO = (page) => {
  const { t } = useLang();
  useEffect(() => {
    const seo = t.seo?.[page];
    if (seo) {
      document.title = seo.t;
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", seo.d);
    }
  }, [t, page]);
};
