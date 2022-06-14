import { AcademicCapIcon } from "@heroicons/react/solid"
import useTranslation from "next-translate/useTranslation"
import { useRouter } from "next/router"
import { useRef } from "react"

export const Search = () => {
  const { t } = useTranslation("common")
  const serachRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  return (
    <div>
      <div className="mt-1 flex rounded-full shadow">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <AcademicCapIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            ref={serachRef}
            type="text"
            name="school"
            id="school"
            className="focus:ring-indigo-300 focus:border-indigo-300 block w-full rounded-none rounded-l-full px-10 py-3 lg:py-5 sm:text-sm border-gray-300"
            placeholder={t("search.placeholder")}
            autoComplete="off"
          />
        </div>
        <button
          onClick={() =>
            router.push({
              pathname: "/search",
              query: { school: serachRef.current?.value },
            })
          }
          type="button"
          className="ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-full text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-300 focus:border-indigo-300"
        >
          <span>{t("search.button")}</span>
        </button>
      </div>
    </div>
  )
}
