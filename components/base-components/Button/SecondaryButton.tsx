import Link from "next/link"
import { FC } from "react"
import { ButtonType, classNames } from "../../../utils"

export const SecondaryButton: FC<ButtonType> = ({
  buttonLink,
  fullWidth,
  children,
}) => {
  return (
    <>
      {buttonLink ? (
        <Link href={buttonLink} passHref>
          <button
            type="button"
            className={classNames(
              fullWidth ? "w-full" : "",
              "text-indigo-700 bg-indigo-100 focus:ring-indigo-500 hover:bg-indigo-200 inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
            )}
          >
            {children}
          </button>
        </Link>
      ) : (
        <button
          type="button"
          className={classNames(
            fullWidth ? "w-full" : "",
            "text-indigo-700 bg-indigo-100  focus:ring-indigo-500 hover:bg-indigo-200 inline-flex justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          )}
        >
          {children}
        </button>
      )}
    </>
  )
}
