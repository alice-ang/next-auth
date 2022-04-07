import { FC, useState } from "react"
import { HeartIcon, StarIcon } from "@heroicons/react/solid"

import { Badge, SecondaryButton } from "../../base-components"
import { classNames, ListingType } from "../../../utils"
import Link from "next/link"

export const Listing: FC<ListingType> = ({ listing }) => {
  const [clicked, setClicked] = useState(false)

  return (
    <>
      <div className="bg-white rounded shadow flex flex-col lg:flex-row mt-6 ">
        <div className="block w-full lg:w-1/2 min-h-[200px] lg:min-h-full rounded">
          <img
            className="m-auto w-1/2  min-h-full rounded "
            src="/apartment.svg"
          />
        </div>
        <div className="p-3 lg:p-8 w-full lg:w-1/2 cursor-pointer">
          <Link href={`/listing/${listing.id}`} passHref>
            <div>
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
                          listing.avgRating > rating
                            ? "text-yellow-400"
                            : "text-gray-300",
                          "flex-shrink-0 h-5 w-5"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="sr-only">{listing.avgRating} out of 5 stars</p>
                </div>
                <p className="ml-2 text-sm text-gray-900">
                  Based on {listing.numOfReviews} reviews
                </p>
              </div>

              <div className="my-4 ">
                {listing.tags.map((tag, i) => {
                  return (
                    <span className="pr-2 pb-3" key={`key${i}`}>
                      <Badge>{tag}</Badge>
                    </span>
                  )
                })}
              </div>
            </div>
          </Link>
          <div className="pt-4 flex justify-end ">
            <span
              className="inline-flex items-center text-sm"
              onClick={() => setClicked(!clicked)}
            >
              <SecondaryButton color="gray">
                <HeartIcon
                  className={classNames(
                    clicked ? "text-red-400" : "text-gray-300",
                    "flex-shrink-0 h-5 w-5"
                  )}
                  aria-hidden="true"
                />
              </SecondaryButton>
              <span className="sr-only">Save for later</span>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
