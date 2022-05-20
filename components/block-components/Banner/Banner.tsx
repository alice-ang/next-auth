import { FC } from "react"
import { classNames } from "../../../utils"
import { BannerTag } from "./BannerTag"

type BannerProps = {
  url?: string
  link?: string
  children?: any
}

export const Banner: FC<BannerProps> = ({ url, link, children }) => {
  return (
    <div className="relative bg-gray-800 py-32 px-6 sm:py-40 sm:px-12 lg:px-16">
      <a
        className={link ? "cursor-pointer" : "cursor-default"}
        href={link ? `${link}` : undefined}
        target="_blank"
        rel="noreferrer"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={
              url
                ? url
                : "https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
            }
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
      </a>
      <div
        aria-hidden="true"
        className={classNames(
          children ? "bg-gray-900" : "bg-white-900",
          "absolute inset-0  bg-opacity-40"
        )}
      />
      {children}
    </div>
  )
}
