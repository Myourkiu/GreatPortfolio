'use client'

import {  Languages, SwitchLanguage } from "@/utils/languages";
import { createContext, useState, useContext } from "react";

interface LanguageContextType {
  language: Languages;
  setLanguage: (lang: Languages) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Languages>(SwitchLanguage[0]); // Padrão: pt-br

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
