import { FC } from "react"

type RangeProps = {
  title?: string
}

export const Range: FC<RangeProps> = ({ title, children }) => {
  return (
    <div className="flex items-center">
      {children}
      <div className="w-full items-center px-4">
        <p className="text-center text-l">{title}</p>
        <input
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
}
