import { FC } from "react"

type RatingProps = {
  count: number
  totalCount: number
  title?: string
  rating?: number
}

export const Rating: FC<RatingProps> = ({
  count,
  totalCount,
  children,
  title,
  rating,
}) => {
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
            {children}
            <div className="ml-3 relative flex-1">
              <div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
              {count > 0 ? (
                <div
                  className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
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
