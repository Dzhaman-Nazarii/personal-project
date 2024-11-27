import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const i18nForTests = i18n.createInstance();

i18nForTests.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translations: {},
    },
  },
});

export default i18nForTests;