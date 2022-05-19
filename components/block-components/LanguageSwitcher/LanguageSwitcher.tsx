import { FC, Fragment, useEffect } from "react"

type Props = {
  getLanguage?: any
}

export const LanguageSwitcher: FC<Props> = ({ getLanguage }) => {
  return (
    <div>
      <label
        htmlFor="location"
        className="block text-sm font-medium text-gray-700"
      >
        Select Language
      </label>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        defaultValue="Swedish"
      >
        <option>Swedish</option>
        <option>English</option>
      </select>
    </div>
  )
}
