import { StarIcon } from "@heroicons/react/solid"
import { forwardRef, useState } from "react"
import { classNames } from "../../../utils"

type Props = {
  title: string
}

const Stars = forwardRef<HTMLInputElement, Props>(({ title }, ref) => {
  const [clickedStar, setClickedStar] = useState<number>(0)
  return (
    <div className="flex justify-between w-full py-2">
      <p className="text-center text-gray-600 text-l font-bold">{title}</p>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((rating) => (
          <>
            <StarIcon
              key={`starKey${rating}`}
              onClick={() => setClickedStar(rating)}
              className={classNames(
                clickedStar >= rating ? "text-yellow-400" : "text-gray-200",
                "h-5 w-5 flex-shrink-0"
              )}
              aria-hidden="true"
            />
            <input
              key={`input${rating}`}
              ref={ref}
              type="hidden"
              value={clickedStar}
              onChange={() => setClickedStar(rating)}
            />
          </>
        ))}
      </div>
    </div>
  )
})
Stars.displayName = "Stars"

export default Stars
