import { FC } from "react"
import { classNames, ColorType } from "../../../utils"
import { WifiIcon } from "@heroicons/react/solid"
import { FaToiletPaper } from "react-icons/fa"
import { MdKitchen, MdLocationPin } from "react-icons/md"
import { GiWashingMachine } from "react-icons/gi"

type RatingProps = ColorType & {
  count: number
  totalCount: number
  title?: string
  rating?: number
}

export const Rating: FC<RatingProps> = ({
  count,
  totalCount,
  title,
  rating,
  color,
}) => {
  const getIcon = (type?: string) => {
    switch (type) {
      case "kitchen":
        return <MdKitchen className="h-6 w-6" />
      case "bathroom":
        return <FaToiletPaper className="h-6 w-6" />
      case "internet":
        return <WifiIcon className="h-6 w-6" />
      case "washroom":
        return <GiWashingMachine className="h-6 w-6" />
      // case "location":
      //   return <MdLocationPin className="h-6 w-6" />
      default:
        break
    }
  }

  return (
    <div className="text-center text-l">
      <p>{title}</p>
      <div className="flex items-center text-sm">
        <dt className="flex-1 flex items-center">
          <p className="w-3 font-medium text-gray-900">
            {rating}
            <span className="sr-only"> star reviews</span>
          </p>
          <div aria-hidden="true" className="ml-1 flex-1 flex items-center">
            {title && getIcon(title)}
            <div className="ml-3 relative flex-1">
              <div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
              {count > 0 ? (
                <div
                  className={classNames(
                    color
                      ? `bg-indigo-400 border-indigo-400`
                      : "bg-yellow-400 border border-yellow-400",
                    "absolute inset-y-0 rounded-full"
                  )}
                  style={{
                    width: `calc(${count} / ${totalCount} * 100%)`,
                  }}
                />
              ) : null}
            </div>
          </div>
        </dt>
        <dd className="ml-3 w-10 text-right tabular-nums text-sm text-gray-900">
          {Math.round((count / totalCount) * 100)}%
        </dd>
      </div>
    </div>
  )
}
