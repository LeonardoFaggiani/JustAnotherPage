
import i18next from "i18next";
import spanish from './es/es.json'
import english from './en/en.json'
import { initReactI18next } from "react-i18next";


if (!localStorage.getItem('lng')) {
  localStorage.setItem('lng', 'en');
}

i18next.use(initReactI18next).init({
    lng: localStorage.getItem('lng'),
    interpolation: { escapeValue: false },
    resources: {
        en: english,
        es: spanish
    }
  });

export default i18next;