'use client'

import { createContext, useState, useContext, useEffect } from "react";
import { Languages, SwitchLanguage } from "@/utils/languages";

interface LanguageContextType {
  language: Languages;
  setLanguage: (lang: Languages) => void;
  messages: { [key: string]: string };
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Languages>(SwitchLanguage[0]);
  const [messages, setMessages] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const res = await fetch(`/locales/${language.location}/common.json`);
        const data = await res.json();
        setMessages(data);
      } catch (error) {
        console.error("Erro ao carregar mensagens:", error);
      }
    };

    loadMessages();
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, messages }}>
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
