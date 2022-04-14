import { CheckCircleIcon, XIcon } from "@heroicons/react/solid"
import { FC } from "react"

type AlertProps = {
  closeAlert: any
}
export const Alert: FC<AlertProps> = ({ closeAlert, children }) => {
  const handleClose = () => {
    closeAlert(false)
  }

  return (
    <div className="rounded-md bg-white shadow-lg w-1/2 mx-auto p-4 absolute bottom-1/2 z-100">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            color=""
            className="h-5 w-5 text-grey-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <div className="text-sm font-medium text-grey-800">{children}</div>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5 ">
            <button
              type="button"
              className="inline-flex bg-grey-50 rounded-md p-1.5 text-grey-500 hover:bg-grey-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-grey-50 focus:ring-grey-600"
            >
              <span className="sr-only">Dismiss</span>
              <XIcon
                className="h-5 w-5"
                aria-hidden="true"
                onClick={handleClose}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
