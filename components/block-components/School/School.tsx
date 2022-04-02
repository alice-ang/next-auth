import { FC } from "react"
import { SecondaryButton } from "../../base-components"
import type { SchoolType } from "../../../utils"

export const School: FC<SchoolType> = ({
  name,
  numOfListings,
  numOfReviews,
}) => {
  return (
    <div className="p-8 mt-4 bg-white rounded shadow">
      <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
        {name}
      </h3>
      <h4 className="text-sm text-gray-500">{numOfListings}</h4>
      <h4 className="text-sm text-gray-500">{numOfReviews}</h4>

      <div className="mt-6 flex justify-end space-x-8">
        <span className="inline-flex items-center text-sm">
          <button
            type="button"
            className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
          >
            <SecondaryButton buttonLink="/listing/2">Read more</SecondaryButton>
            <span className="sr-only">read more</span>
          </button>
        </span>
      </div>
    </div>
  )
}
