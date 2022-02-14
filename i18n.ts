import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "sv",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          sidebar: {
            signOut: "Sign out",
            signIn: "Sign in",
          },
        },
      },
      sv: {
        translation: {
          sidebar: {
            signOut: "Logga ut",
            signIn: "Logga in",
          },
        },
      },
    },
  })

export default i18n
