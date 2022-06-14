import useTranslation from "next-translate/useTranslation"
import { FC, useState } from "react"
import { localeToLang } from "../../../utils"
import { useRouter } from "next/router"

export const LanguageSwitcher: FC = () => {
  const { t } = useTranslation("common")
  const router = useRouter()
  const [currentLang, setCurrentLang] = useState(
    localeToLang(router.locale ?? "sv")
  )
  console.log(router.locale)
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
        onChange={(e) => {
          setCurrentLang(localeToLang(e.target.value))
          router.push(`/${e.target.value}`)
        }}
      >
        <option value="sv"> {t("languageSwitcher.swedish")}</option>
        <option value="en"> {t("languageSwitcher.english")}</option>
      </select>
    </div>
  )
}
