import { FC } from "react"
import { StarIcon } from "@heroicons/react/solid"

import { Badge, SecondaryButton } from "../../base-components"
import { classNames, ListingType } from "../../../utils"

export const Listing: FC<ListingType> = ({ listing }) => {
  return (
    <div className="bg-white rounded shadow flex flex-col lg:flex-row mt-6">
      <div className="block w-full lg:w-1/2 min-h-[200px] lg:min-h-full rounded bg-gray-300"></div>
      <div className="p-3 lg:p-8 w-full lg:w-1/2 ">
        <h3 className="text-2xl font-extrabold tracking-tight text-gray-900">
          {listing.street}
        </h3>
        <div className="mt-1 flex items-center">
          <div>
            <div className="flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    3 > rating ? "text-yellow-400" : "text-gray-300",
                    "flex-shrink-0 h-5 w-5"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">3 out of 5 stars</p>
          </div>
          <p className="ml-2 text-sm text-gray-900">Based on 382 reviews</p>
        </div>
        {/* <h4 className="text-sm text-gray-500">{listing.zipCode}</h4>
        <h4 className="text-sm text-gray-500">{listing.city}</h4> */}
        <div className="my-4 ">
          {[0, 1, 2].map((i) => {
            return (
              <span className="pr-2 pb-3">
                <Badge key={i}>badge</Badge>
              </span>
            )
          })}
        </div>
        <div className="pt-4 flex justify-end ">
          <span className="inline-flex items-center text-sm ">
            <SecondaryButton buttonLink="/listing/2">Read more</SecondaryButton>
            <span className="sr-only">read more</span>
          </span>
        </div>
      </div>
    </div>
  )
}
