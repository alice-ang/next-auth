import { FC } from "react"

type BannerTagProps = {
  text: string
  heading?: string
}

export const BannerTag: FC<BannerTagProps> = ({ text, heading }) => {
  return (
    <div className="absolute text-white bottom-5 right-5 md:bottom-10 md:right-10">
      <div className="rounded p-2 bg-gray-900 bg-opacity-50 w-fit ">
        <p>{text}</p>
      </div>
      {heading && (
        <p className="hidden md:block text-xl font-extrabold pt-2 ">
          {heading}
        </p>
      )}
    </div>
  )
}
