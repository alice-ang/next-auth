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
    console.log(i18n.language)
  }

  return (
    <div>
      <label
        htmlFor="location"
        className="block text-sm text-center font-medium text-gray-500"
      >
        {t("languageSwitcher.label")}
      </label>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue={t(`languageSwitcher.${currentLang}`)}
        onChange={(e) => changeLanguage(e.target.value)}
      >
        <option value="sv"> {t("languageSwitcher.swedish")}</option>
        <option value="en"> {t("languageSwitcher.english")}</option>
      </select>
    </div>
  )
}
