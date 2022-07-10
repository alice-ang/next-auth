import { FC } from "react"
import { PrimaryButton, SecondaryButton } from "../Button"

type AdProps = {
  hideButton?: boolean
}

export const AdCard: FC<AdProps> = ({ hideButton }) => {
  return (
    <div className="shadow bg-white rounded ">
      <img
        src={
          "https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
        }
        alt=""
        className="w-full object-center object-cover rounded-t"
      />
      <div className="p-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet modi in
          iure incidunt corrupti provident!
        </p>
        {!hideButton && (
          <div className="flex justify-center pt-4">
            <SecondaryButton fullWidth>CTA</SecondaryButton>
          </div>
        )}
      </div>
    </div>
  )
}
