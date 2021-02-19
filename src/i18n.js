import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

// Translation files
import enUS from "./assets/translations/en-US/common.json";
import esUS from "./assets/translations/es-US/common.json";

const resources = {
  // Consider just "en" and "es" if not localized translations
  "en-US": {
    translation: enUS,
  },
  "es-US": {
    translation: esUS, // Note: these are not real translations!
  },
};

const detection = {
  order: ["localStorage", "navigator"],
  lookupQuerystring: "lng",
};

i18n
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    detection,
    resources,
    fallbackLng: "en-US", // use en if detected lng is not available

    debug: false,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
