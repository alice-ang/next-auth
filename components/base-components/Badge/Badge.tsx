import { FC } from "react"

export const Badge: FC = ({ children }) => {
  return (
    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
      {children}
    </span>
  )
}
