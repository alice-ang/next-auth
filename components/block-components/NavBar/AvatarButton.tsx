import { classNames, useAuth } from "../../../utils"
import { Menu, Transition } from "@headlessui/react"
import { Avatar, AvatarProps } from "../../base-components"
import { FC, Fragment } from "react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import Link from "next/link"

export const AvatarButton: FC<AvatarProps> = ({ url, displayName }) => {
  const { logOut } = useAuth()
  console.log(displayName)
  return (
    <div className="mx-4 flex items-center md:mx-6">
      <button
        type="button"
        className="lg:hidden bg-white p-1 rounded-full text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
      >
        {url ? (
          <Avatar className="h-8 w-8 rounded-full" url={url} />
        ) : (
          displayName
        )}
      </button>

      <Menu as="div" className="ml-3 relative">
        <div>
          <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
            {url && <Avatar className="h-8 w-8 rounded-full" url={url} />}

            <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
              <span className="sr-only">Open user menu for </span>
              {displayName && displayName}
            </span>
            <ChevronDownIcon
              className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <Link href="/profile" passHref>
                  <a
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    Profile
                  </a>
                </Link>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={logOut}
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Logout
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
