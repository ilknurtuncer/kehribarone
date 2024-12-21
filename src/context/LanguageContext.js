import React, { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Varsayılan dil
  const [translations, setTranslations] = useState({});
  const [isLoading, setIsLoading] = useState(false); // Çeviri yükleniyor durumu

  // JSON çevirilerini yükleme fonksiyonu
  const loadTranslations = async (lang) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/locales/${lang}/translation.json`);
      if (!response.ok) {
        throw new Error(`Could not load translations for language: ${lang}`);
      }
      const data = await response.json();
      setTranslations(data);
    } catch (error) {
      console.error("Translation file loading failed:", error);
      setTranslations({}); // Çeviri dosyası yoksa boş bırak
    } finally {
      setIsLoading(false);
    }
  };

  // Dil değiştirme fonksiyonu
  const switchLanguage = async (lang) => {
    setLanguage(lang);
    await loadTranslations(lang);
  };

  // Dil değişikliğinde çevirileri yeniden yükle
  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, translations, switchLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Kullanımı kolaylaştırmak için bir `useLanguageContext` hook'u
export const useLanguageContext = () => useContext(LanguageContext);
