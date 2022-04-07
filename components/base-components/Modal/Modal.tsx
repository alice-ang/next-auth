import { FC, Fragment, useRef } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { PencilIcon } from "@heroicons/react/solid"
import { Range } from "../Inputs"
import { addReview } from "../../../utils"

type ModalProps = {
  closeModal: any
}

export const Modal: FC<ModalProps> = ({ closeModal }) => {
  const cancelButtonRef = useRef(null)

  const kitchenRef = useRef<HTMLInputElement>(null)
  const bathroomRef = useRef<HTMLInputElement>(null)
  const washroomRef = useRef<HTMLInputElement>(null)
  const internetRef = useRef<HTMLInputElement>(null)

  const feedbackRef = useRef<HTMLTextAreaElement>(null)

  const handleCancelClick = () => {
    closeModal(false)
  }

  return (
    <Transition.Root show={true} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={handleCancelClick}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
                  <PencilIcon
                    className="h-6 w-6 text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-lg leading-6 font-medium text-gray-900"
                  >
                    Write a review
                  </Dialog.Title>
                  <div className="mt-2">
                    <Range title="kitchen" ref={kitchenRef} />
                    <Range title="bathroom" ref={bathroomRef} />
                    <Range title="washroom" ref={washroomRef} />
                    <Range title="internet" ref={internetRef} />
                    <div className="mt-3">
                      <label
                        htmlFor="review"
                        className="text-left block text-m font-medium text-gray-700"
                      >
                        Add your feedback
                      </label>
                      <div className="mt-2">
                        <textarea
                          ref={feedbackRef}
                          rows={4}
                          name="review"
                          id="review"
                          placeholder="I lived here during..."
                          className=" p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  border border-gray-300 rounded-md"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                  onClick={async () => {
                    if (
                      kitchenRef.current &&
                      bathroomRef.current &&
                      washroomRef.current &&
                      internetRef.current &&
                      feedbackRef.current
                    ) {
                      await addReview({
                        kitchen: kitchenRef.current.value,
                        bathroom: bathroomRef.current.value,
                        washroom: washroomRef.current.value,
                        internet: internetRef.current.value,
                        feedback: feedbackRef.current.value,
                      }).then(() => handleCancelClick)
                    }
                    handleCancelClick
                  }}
                >
                  Post
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  onClick={handleCancelClick}
                  ref={cancelButtonRef}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
