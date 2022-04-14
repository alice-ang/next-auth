import { FC, Fragment, useCallback, useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { PencilIcon, EmojiSadIcon } from "@heroicons/react/solid"
import { Range, Stars } from "../Inputs"
import { addReview, useAuth } from "../../../utils"
import { useRouter } from "next/router"
import { MapView } from "../MapView"

type ModalProps = {
  closeModal: any
}

export const Modal: FC<ModalProps> = ({ closeModal }) => {
  const { user } = useAuth()
  const router = useRouter()
  const [mapInfo, setMapInfo] = useState<{
    address: string
    coordinates: []
  }>()
  const cancelButtonRef = useRef(null)

  const kitchenRef = useRef<HTMLInputElement>(null)
  const bathroomRef = useRef<HTMLInputElement>(null)
  const washroomRef = useRef<HTMLInputElement>(null)
  const internetRef = useRef<HTMLInputElement>(null)

  const feedbackRef = useRef<HTMLTextAreaElement>(null)

  const handleCancelClick = () => {
    closeModal(false)
  }
  const callback = useCallback((info) => {
    setMapInfo(info)
  }, [])

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
                {user ? (
                  <>
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
                      <div className="mt-2 text-l text-left">
                        Enter an address
                        <MapView
                          lat={58.3941248}
                          lng={13.8534906}
                          showGeocoder
                          infoCallback={callback}
                        />
                      </div>
                      <div className="mt-4">
                        <Stars title="Kitchen" ref={kitchenRef} />
                        <Stars title="Bathroom" ref={bathroomRef} />
                        <Stars title="Washroom" ref={washroomRef} />
                        <Stars title="Internet" ref={internetRef} />
                        <div className="border-t border-gray-200 mt-5 pt-5" />

                        <div className="mt-3">
                          <label
                            htmlFor="review"
                            className="text-left block text-m font-medium text-gray-700"
                          >
                            How was your experience?
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

                        <div className="mt-3 ">
                          <label
                            htmlFor="review"
                            className="text-left block text-m font-medium text-gray-700"
                          >
                            Add photos
                          </label>
                          <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md mt-2">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                  <span>Upload a file</span>
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100">
                      <EmojiSadIcon
                        className="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900"
                      >
                        You must be logged in to write a review
                      </Dialog.Title>
                    </div>
                  </>
                )}
              </div>
              <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                {user ? (
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                    onClick={async () => {
                      if (
                        kitchenRef.current &&
                        bathroomRef.current &&
                        washroomRef.current &&
                        internetRef.current &&
                        feedbackRef.current &&
                        mapInfo
                      ) {
                        await addReview({
                          kitchen: kitchenRef.current.value,
                          bathroom: bathroomRef.current.value,
                          washroom: washroomRef.current.value,
                          internet: internetRef.current.value,
                          feedback: feedbackRef.current.value,
                          address: mapInfo.address,
                          coordinates: mapInfo.coordinates,
                        }).then(() => handleCancelClick())
                      } else {
                        handleCancelClick()
                      }
                    }}
                  >
                    Post
                  </button>
                ) : (
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                    onClick={() => {
                      router.push("/login")
                      handleCancelClick
                    }}
                  >
                    Login
                  </button>
                )}

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
