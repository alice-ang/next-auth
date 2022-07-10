import { FC } from "react"

type ScrollProps = {
  children: any
  isLarge?: boolean
}

export const HorizontalScroll: FC<ScrollProps> = ({ children, isLarge }) => {
  return (
    <div className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8">
      {children &&
        children.map((child: any) => {
          return (
            <>
              {isLarge ? (
                <div className="flex-none w-2/3 md:w-1/3 lg:1/3 mr-8 md:pb-4 ">
                  {child}
                </div>
              ) : (
                <div className="flex-none w-2/3 md:w-1/4 lg:1/3 mr-8 md:pb-4 ">
                  {child}
                </div>
              )}
            </>
          )
        })}
    </div>
  )
}
