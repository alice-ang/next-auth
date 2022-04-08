import React, { forwardRef } from "react"

type Props = {
  title: string
}

const Range = forwardRef<HTMLInputElement, Props>(({ title }, ref) => {
  return (
    <div className="flex items-center mt-3">
      <div className="w-full items-center px-4">
        <p className="text-center text-l font-semibold">{title}</p>
        <input
          ref={ref}
          type="range"
          min="1"
          max="5"
          step="1"
          list="steplist"
          className="w-full rounded-full"
          name="rangeList"
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
})

Range.displayName = "Range"

export default Range
