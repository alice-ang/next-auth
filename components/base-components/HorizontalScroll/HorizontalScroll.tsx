import { FC } from "react"

type ScrollProps = {
  children: any
}

export const HorizontalScroll: FC<ScrollProps> = ({ children }) => {
  return (
    <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8">
      {children &&
        children.map((child: any) => {
          return (
            <div className="flex-none w-2/3 md:w-1/4 lg:1/3 mr-8 md:pb-4 ">
              {child}
            </div>
          )
        })}
    </div>
  )
}
