import { CheckCircleIcon } from "@heroicons/react/solid"
import { FC } from "react"
import { classNames } from "../../../utils"

export type AvatarProps = {
  url: string
  isVerified?: boolean
  className?: string
}

export const Avatar: FC<AvatarProps> = ({ url, isVerified, className }) => {
  return (
    <span className="inline-block relative">
      <img
        className={classNames(
          className ? className : "",
          "h-12 w-12 rounded-full"
        )}
        src={url}
        alt="avatar"
      />
      {isVerified && (
        <span title="verified student">
          <CheckCircleIcon
            className="absolute top-[-10%] left-[70%] block h-[50%] w-[50%] flex-shrink-0 bg-white rounded-full text-green-400"
            aria-hidden="true"
          />
        </span>
      )}
    </span>
  )
}
