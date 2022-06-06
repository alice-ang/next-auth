import { createContext, useContext } from "react"

const TranslationContext = createContext({})

export const useTranslationContext = () => useContext<any>(TranslationContext)