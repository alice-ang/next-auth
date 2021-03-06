/* This example requires Tailwind CSS v2.0+ */
import { FC, Fragment, useEffect, useRef, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"
import { classNames } from "../../../utils"
import { AddNew } from "../Inputs"
import { DocumentData } from "firebase/firestore"

type Props = {
  label: string
  placeholder: string
  items: DocumentData | null
  valueCallback?: any
  newLabel?: string
}

export const Dropdown: FC<Props> = ({
  label,
  valueCallback,
  newLabel,
  placeholder,
  items,
}) => {
  const [selected, setSelected] = useState<typeof items>(
    items ? items[0] : null
  )
  const [addNew, setAddNew] = useState<boolean>(false)

  const newRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    valueCallback(selected?.name ?? newRef?.current?.value)
  }, [selected, newRef?.current?.value])

  return (
    <>
      {addNew ? (
        <AddNew ref={newRef} placeholder={placeholder} label={newLabel} />
      ) : (
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <Listbox.Label className="block">{label}</Listbox.Label>
              <div className="mt-1 relative">
                <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <span className="block truncate">
                    {selected?.name ?? "Select school"}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {items?.map((item: any) => (
                      <Listbox.Option
                        key={item.id}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "text-white bg-indigo-600"
                              : "text-gray-900",
                            "cursor-default select-none relative py-2 pl-3 pr-9"
                          )
                        }
                        value={item}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {item.name}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      )}
      <div
        className="pt-2 text-right text-sm text-gray-500 font-semibold hover:text-indigo-600 hover:cursor-pointer"
        onClick={() => setAddNew(!addNew)}
      >
        {addNew ? "Back" : " Add new"}
      </div>
    </>
  )
}
