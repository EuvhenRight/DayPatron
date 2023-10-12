import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next'; // Import initReactI18next
import enTranslation from './en/translationEn.json';
import uaTranslation from './ua/translationUa.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ua: {
        translation: uaTranslation,
      },
    },
    fallbackLng: 'en',
    debug: true, // Set to false in production
  });

export default i18n;
