"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { content, type Lang, type Site } from "./content";

const STORAGE_KEY = "portfolio-lang";

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Site;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Start with a deterministic value for SSR/first paint, then sync on mount.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    let initial: Lang | null = null;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "ru") initial = stored;
    } catch {
      // ignore storage errors
    }
    if (!initial && typeof navigator !== "undefined") {
      initial = navigator.language?.toLowerCase().startsWith("ru") ? "ru" : "en";
    }
    if (initial && initial !== lang) setLangState(initial);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === "en" ? "ru" : "en");
  }, [lang, setLang]);

  return (
    <LangContext.Provider value={{ lang, setLang, toggle, t: content[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
