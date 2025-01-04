import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n
  .use(LanguageDetector) // Tarayıcı dil algılayıcı
  .use(Backend) // HTTP üzerinden çeviri dosyaları
  .use(initReactI18next) // React'e entegre et
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Çeviri dosyalarının yolu
    },
    fallbackLng: "en", // Varsayılan dil
    debug: true, // Geliştirme sırasında hata ayıklama için
    interpolation: {
      escapeValue: false, // React XSS korumasını sağla
    },
    detection: {
      // Dil algılama seçenekleri
      order: ["querystring", "localStorage", "cookie", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"], // Algılanan dili saklamak için
    },
  })
  .then(() => {
    console.log("i18n initialized successfully.");
    console.log("Current Language:", i18n.language); // Yüklenen dil
    console.log("Loaded languages:", i18n.languages); // Desteklenen dillerin listesi
  })
  .catch((err) => console.error("Error initializing i18n:", err));

export default i18n;
