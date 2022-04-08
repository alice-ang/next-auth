import { ExclamationIcon, XIcon } from "@heroicons/react/solid"
import { FC } from "react"

type AlertProps = {
  closeAlert: any
}
export const Alert: FC<AlertProps> = ({ closeAlert, children }) => {
  const handleClose = () => {
    closeAlert(false)
  }

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 w-1/2 mx-auto ">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationIcon
            className="h-5 w-5 text-yellow-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm text-yellow-700">{children}</p>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              onClick={() => handleClose}
              type="button"
              className="inline-flex bg-yellow-50 rounded-md p-1.5 text-yellow-500 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-50 yellow:ring-yellow-600"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
