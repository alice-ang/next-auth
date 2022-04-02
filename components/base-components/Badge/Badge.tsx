import { FC } from "react"
import { classNames, ColorType } from "../../../utils"

export const Badge: FC<ColorType> = ({ children, color }) => {
  return (
    <span
      className={classNames(
        color
          ? `bg-${color}-100 text-${color}-800`
          : "bg-indigo-100 text-indigo-800",
        "inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
      )}
    >
      {children}
    </span>
  )
}
