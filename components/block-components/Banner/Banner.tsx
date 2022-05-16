import { FC } from "react"
import { classNames } from "../../../utils"

type BannerProps = {
  url?: string

  adLink?: string
}

export const Banner: FC<BannerProps> = ({ url, adLink, children }) => {
  return (
    <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={
            url
              ? url
              : "https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
          }
          alt=""
          className="w-full  h-full object-center object-cover"
        />
      </div>
      <div
        aria-hidden="true"
        className={classNames(
          children ? "bg-gray-900" : "bg-white-900",
          "absolute inset-0  bg-opacity-40"
        )}
      />
      {children}
      {adLink && (
        <a href={`${adLink}`} target="_blank">
          <div className="rounded absolute bg-gray-900 bg-opacity-50 w-fit text-white p-2 bottom-10 right-10">
            Ad for Telenor
          </div>
        </a>
      )}
    </div>
  )
}
