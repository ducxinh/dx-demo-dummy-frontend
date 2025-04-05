import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

export const supportedLngs = ['en', 'vi', 'ja'] as const
export type Language = (typeof supportedLngs)[number]

// Initialize i18next
i18next
  .use(Backend) // Backend to load translation files
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Integrate with react-i18next
  .init({
    ns: ['auth', 'zod', 'common'],
    fallbackLng: 'en', // Fallback language
    supportedLngs,
    debug: import.meta.env.NODE_ENV !== 'production' && import.meta.env.NODE_ENV !== 'test',
    interpolation: {
      escapeValue: false, // React already escapes XSS
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to translation files
    },
    react: {
      useSuspense: false, // Avoid Suspense issue
    },
  })

export default i18next
