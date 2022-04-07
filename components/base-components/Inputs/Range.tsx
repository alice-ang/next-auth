import { FC, useRef, useState } from "react"

type RangeProps = {
  title?: string
  value?: number
}

export const Range: FC<RangeProps> = ({ title, children, value }) => {
  const [rangeValue, setRangeValue] = useState(null)

  return (
    <div className="flex items-center mt-3">
      {children}
      <div className="w-full items-center px-4">
        <p className="text-center text-l font-semibold">{title}</p>
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          list="steplist"
          className="w-full rounded-full"
          name="rangeList"
          onChange={(e) => console.log(e.target.value)}
        />
        <output name="rangeList"></output>
        <datalist id="steplist" className="flex justify-between">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </datalist>
      </div>
    </div>
  )
}
