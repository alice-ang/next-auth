import { FC } from "react"
import { classNames } from "../../../utils"

type BannerProps = {
  url?: string
  adLink?: string
}

export const Banner: FC<BannerProps> = ({ url, adLink, children }) => {
  return (
    <a
      className={adLink ? "cursor-pointer" : "cursor-none"}
      href={adLink ? `${adLink}` : undefined}
      target="_blank"
      rel="noreferrer"
    >
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
          <div className="absolute text-white bottom-10 right-10  ">
            <div className="rounded p-2 bg-gray-900 bg-opacity-50 w-fit ">
              <p>Adspace</p>
            </div>
            <p className="text-xl font-extrabold pt-2 ">Lorem ipsum dolor</p>
          </div>
        )}
      </div>
    </a>
  )
}
