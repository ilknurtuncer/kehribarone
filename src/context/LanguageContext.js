import React, { createContext, useState, useContext } from "react";

// Dillerin verileri
const languageData = {
  en: { home: "Home", about: "About", contact: "Contact" },
  de: { home: "Startseite", about: "Über uns", contact: "Kontakt" },
  pl: { home: "Strona główna", about: "O nas", contact: "Kontakt" }
};

const LanguageContext = createContext();

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const switchLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, languageData }}>
      {children}
    </LanguageContext.Provider>
  );
};
