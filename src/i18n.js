import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // Dil algılama modülü
import Backend from "i18next-http-backend"; // HTTP ile dil dosyalarını yüklemek için

i18n
  .use(LanguageDetector)
  .use(Backend) // Backend kullanarak dil dosyalarını yüklemek
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // public klasöründeki yolu 
    },
    fallbackLng: "en", //  varsayılan olarak İngilizce
    debug: true, // Geliştirme sırasında hata ayıklama 
    interpolation: {
      escapeValue: false, // React zaten XSS koruması sağlıyor
    },
    detection: {
      order: ["querystring", "localStorage", "cookie", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
