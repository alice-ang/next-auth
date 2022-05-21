import { useTranslation } from "react-i18next"
import { FC } from "react"
import { langToLocale } from "../../../utils"

export const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (locale: string) => {
    i18n.changeLanguage(locale)
  }

  return (
    <div>
      <label
        htmlFor="location"
        className="block text-sm font-medium text-gray-500"
      >
        Select Language
      </label>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue="Swedish"
        onChange={(e) => changeLanguage(langToLocale(e.target.value))}
      >
        <option>Swedish</option>
        <option>English</option>
      </select>
    </div>
  )
}
