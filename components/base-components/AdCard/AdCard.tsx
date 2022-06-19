import { FC } from "react"
import { PrimaryButton } from "../Button"

type AdProps = {}

export const AdCard: FC<AdProps> = () => {
  return (
    <div className="shadow bg-white rounded-sm ">
      <img
        src={
          "https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
        }
        alt=""
        className="w-full object-center object-cover"
      />
      <div className="p-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi in
          iure incidunt corrupti provident!
        </p>
        <div className="flex justify-center pt-4">
          <PrimaryButton fullWidth>CTA</PrimaryButton>
        </div>
      </div>
    </div>
  )
}
