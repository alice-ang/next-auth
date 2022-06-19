import { FC } from "react"

type GridProps = {
  children: React.ReactNode
}
export const Grid: FC<GridProps> = ({ children }) => {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-4"
    >
      {children}
    </ul>
  )
}
