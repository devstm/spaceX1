import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationAR from './lang/ar.js';
import translationEN from './lang/en.js';

const resources = {
  ar: {
    translation: translationAR,
  },
  en: {
    translation: translationEN,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'en',
    react: { useSuspense: false },
  });

export default i18n;