import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Varsayılan dil
  const [translations, setTranslations] = useState({});

  const loadTranslations = async (lang) => {
    try {
      const response = await fetch(`/locales/${lang}/translation.json`);
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error("Translation file loading failed:", error);
    }
  };

  const switchLanguage = async (lang) => {
    setLanguage(lang);
    setTranslations({}); // Eski çevirileri temizle (isteğe bağlı)
    await loadTranslations(lang);
  };
  

  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, translations, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
