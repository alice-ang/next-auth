import { FC } from "react"
import { StarIcon, EyeIcon, ThumbUpIcon } from "@heroicons/react/solid"
import { Avatar, SecondaryButton } from "../../base-components"
import { classNames } from "../../../utils"
import type { ReviewType } from "../../../utils"

export const Review: FC<ReviewType> = ({ review, showButton }) => {
  return (
    <div key={review.id} className="p-8 mt-4 bg-white rounded shadow">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Avatar
            isVerified
            url={review.avatarSrc}
            className="h-12 w-12 rounded-full"
          />
          <div className="ml-4">
            <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
            <div className="mt-1 flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    review.rating > rating
                      ? "text-yellow-400"
                      : "text-gray-300",
                    "h-5 w-5 flex-shrink-0"
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="sr-only">{review.rating} out of 5 stars</p>
          </div>
        </div>

        <span className="text-sm text-gray-500 inline-block">
          <a className="hover:underline">
            <time dateTime={review.datetime}>{review.date}</time>
          </a>
        </span>
      </div>

      <div
        className="mt-4 space-y-6 text-base italic text-gray-600"
        dangerouslySetInnerHTML={{
          __html: review.content,
        }}
      />
      <div className="mt-6 flex justify-between space-x-8">
        <div className="flex space-x-6">
          {review.likes ? (
            <span className="inline-flex items-center text-sm">
              <button
                type="button"
                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
              >
                <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium text-gray-900">
                  {review.likes}
                </span>
                <span className="sr-only">likes</span>
              </button>
            </span>
          ) : null}
          {review.views ? (
            <span className="inline-flex items-center text-sm">
              <button
                type="button"
                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
              >
                <EyeIcon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium text-gray-900">
                  {review.views}
                </span>
                <span className="sr-only">views</span>
              </button>
            </span>
          ) : null}
        </div>
        {showButton && (
          <span className="inline-flex items-center text-sm">
            <button
              type="button"
              className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
            >
              <SecondaryButton buttonLink="/listing/2">
                Read more
              </SecondaryButton>
              <span className="sr-only">read more</span>
            </button>
          </span>
        )}
      </div>
    </div>
  )
}
