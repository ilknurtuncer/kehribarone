import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    // Burada çeviri mantığınızı yazın
    const translations = {
      en: { hello: 'Hello' },
      de: { hello: 'Hallo' },
      pl: { hello: 'Cześć' },
    };
    return translations[language][key] || key;
  };

  return (
    <TranslationContext.Provider value={{ t, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => useContext(TranslationContext);
