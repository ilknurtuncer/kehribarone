import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const currentLanguage = i18n.language; // Şu anki seçili dil

  return (
    <div className="language-switcher flex space-x-2">
      {["en", "de", "pl"].map((lang) => (
        <button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`px-4 py-2 rounded ${
            currentLanguage === lang
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
