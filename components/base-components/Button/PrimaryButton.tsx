import Link from "next/link"
import { FC } from "react"
import { ButtonType, classNames } from "../../../utils"

export const PrimaryButton: FC<ButtonType> = ({
  buttonLink,
  children,
  fullWidth,
}) => {
  return (
    <>
      {buttonLink ? (
        <Link href={buttonLink} passHref>
          <button
            type="button"
            className={classNames(
              fullWidth ? `w-full` : "",
              " inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            )}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          type="button"
          className={classNames(
            fullWidth ? `w-full` : "",
            "inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          )}
        >
          {children}
        </button>
      )}
    </>
  )
}
