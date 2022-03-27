import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import spanish from "./es";
import english from "./en";

i18n
    .use(LanguageDetector) //Check if autodetect language
    .use(initReactI18next)
    .init({
        resources: {
            en: english,
            es: spanish,
        },
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
    });

export const languages = ['en', 'es'];
