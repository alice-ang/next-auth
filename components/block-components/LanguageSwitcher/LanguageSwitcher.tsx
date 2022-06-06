import { useTranslation } from "react-i18next"
import { FC, useEffect, useState } from "react"
import { langToLocale, localeToLang } from "../../../utils"

export const LanguageSwitcher: FC = () => {
  const { i18n, t } = useTranslation(["common"])
  const [currentLang, setCurrentLang] = useState(
    localeToLang(i18n.language) ?? null
  )

  useEffect(() => {
    setCurrentLang(localeToLang(i18n.language))
  }, [i18n.language])

  const changeLanguage = (locale: string) => {
    i18n.changeLanguage(locale)
  }

  return (
    <div>
      <label
        htmlFor="location"
        className="block text-sm font-medium text-gray-500"
      >
        {t("languageSwitcher.label")}
      </label>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue={t(`languageSwitcher.${currentLang}`)}
        onChange={(e) => changeLanguage(langToLocale(e.target.value))}
      >
        <option> {t("languageSwitcher.swedish")}</option>
        <option> {t("languageSwitcher.english")}</option>
      </select>
    </div>
  )
}
