import { Layout, Listing, MapView } from "../components"
import { StarIcon } from "@heroicons/react/solid"
import { classNames } from "../utils"
import { Fragment, useState } from "react"
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
import {
  ChevronDownIcon,
  MinusSmIcon,
  PlusSmIcon,
} from "@heroicons/react/solid"
import { Rating } from "../components"
import { reviews, schools, listings } from "../utils"
import { Marker } from "mapbox-gl"

const tabs = [
  { id: "listings", name: "Listings", current: true },
  { id: "rating", name: "Rating", current: false },
]

const sortOptions = [
  { name: "Best Rating", href: "#", current: true },
  { name: "Newest", href: "#", current: false },
]
const subCategories = [
  { name: "Shared housing", href: "#" },
  { name: "Doorms", href: "#" },
  { name: "Student appartmets", href: "#" },
  { name: "Regular appartments", href: "#" },
]
const filters = [
  {
    id: "amenities",
    name: "Amenities",
    options: [
      { value: "washer", label: "Washer", type: "checkbox" },
      { value: "balcony", label: "Balcony", type: "checkbox" },
      { value: "room_size", label: "Room size", type: "range" },
      { value: "kitchen", label: "Kitchen", type: "range" },
      { value: "elevator", label: "Elevator", type: "checkbox" },
    ],
  },
  {
    id: "distance",
    name: "Distance",
    options: [
      { value: "birds_eye_view", label: "Bird's-eye View", type: "checkbox" },
      { value: "driving", label: "Driving", type: "checkbox" },
      { value: "biking", label: "Biking", type: "checkbox" },
      { value: "walking", label: "Walking", type: "checkbox" },
      { value: "block", label: "Within four blocks", type: "checkbox" },
    ],
  },
]

export default function SchoolPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [currentTab, setCurrentTab] = useState("listings")

  return (
    <Layout>
      {/* Mobile filter dialog */}
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 flex z-40 lg:hidden"
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="ml-auto relative max-w-xs w-full h-full shadow-xl py-4 pb-12 flex flex-col overflow-y-auto bg-white">
              <div className="px-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  className="-mr-2 w-10 h-10  p-2 rounded-md flex items-center justify-center text-gray-400"
                  onClick={() => setMobileFiltersOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="font-medium text-gray-900 px-2 py-3">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href} className="block px-2 py-3">
                        {category.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure
                    as="div"
                    key={section.id}
                    className="border-t border-gray-200 px-4 py-6"
                  >
                    {({ open }) => (
                      <>
                        <h3 className="-mx-2 -my-3 flow-root">
                          <Disclosure.Button className="px-2 py-3 bg-white w-full flex items-center justify-between text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">
                              {section.name}
                            </span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusSmIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              ) : (
                                <PlusSmIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        {/* MOBILE */}
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-6">
                            {section.options.map((option, optionIdx) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-mobile-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type={option.type}
                                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 "
                                />
                                <label
                                  htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                  className="ml-3 min-w-0 flex-1 text-gray-500"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <main className="max-w-7xl mx-auto px-4">
        <div className="flex items-baseline justify-between pt-4 pb-6 ">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Högskolan i Skövde
          </h2>

          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div className="pr-4">
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
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
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xlring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1 z-10 relative bg-white shadow">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <button
              type="button"
              className="inline-flex items-center lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="text-sm font-medium text-gray-700">Filters</span>
              <PlusSmIcon
                className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <section aria-labelledby="school-heading" className="pb-24">
          <h2 id="school-heading" className="sr-only">
            Products
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8">
            {/* Filters */}
            <form className="hidden lg:block bg-white shadow rounded p-8">
              <h3 className="sr-only">Categories</h3>
              <ul
                role="list"
                className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200"
              >
                {subCategories.map((category) => (
                  <li key={category.name}>
                    <a href={category.href}>{category.name}</a>
                  </li>
                ))}
              </ul>

              {filters.map((section) => (
                <Disclosure
                  as="div"
                  key={section.id}
                  className="border-b border-gray-200 py-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-my-3 flow-root">
                        <Disclosure.Button className="py-3 w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {section.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <MinusSmIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      {/* SIDEBAR */}
                      <Disclosure.Panel className="pt-6">
                        <div className="space-y-4">
                          {section.options.map((option, optionIdx) => (
                            <div key={optionIdx} className="flex items-center">
                              <input
                                id={`filter-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                defaultValue={option.value}
                                type={option.type}
                                min={0}
                                max={5}
                                className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                              />

                              <label
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="ml-3 text-sm text-gray-600"
                              >
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </form>

            <div className=" lg:col-span-3 ">
              <MapView lat={58.3941248} lng={13.8534906} />
              <div className="max-w-2xl mx-auto mt-8 lg:max-w-7xl">
                {/* TABS */}
                <div className="sm:hidden">
                  <label htmlFor="tabs" className="sr-only">
                    Select a tab
                  </label>
                  {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                  <select
                    id="tabs"
                    name="tabs"
                    className="block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md p-2 shadow bg-white"
                    defaultValue={currentTab}
                    onChange={(e) =>
                      setCurrentTab(e.target.value.toLocaleLowerCase())
                    }
                  >
                    {tabs.map((tab) => (
                      <option key={tab.name}>{tab.name}</option>
                    ))}
                  </select>
                </div>
                <div className="hidden sm:block">
                  <nav
                    className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
                    aria-label="Tabs"
                  >
                    {tabs.map((tab, tabIdx) => (
                      <a
                        key={tab.name}
                        onClick={() => setCurrentTab(tab.id)}
                        className={classNames(
                          tab.current
                            ? "text-gray-900"
                            : "text-gray-500 hover:text-gray-700",
                          tabIdx === 0 ? "rounded-l-lg" : "",
                          tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                          "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                        )}
                        aria-current={tab.current ? "page" : undefined}
                      >
                        <span>{tab.name}</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            tab.id === currentTab
                              ? "bg-indigo-500"
                              : "bg-transparent",
                            "absolute inset-x-0 bottom-0 h-0.5"
                          )}
                        />
                      </a>
                    ))}
                  </nav>
                </div>
                {currentTab === "listings" && (
                  <div className="mt-0 lg:col-start-6 lg:col-span-7">
                    <h3 className="sr-only">Recent reviews</h3>

                    <div className="flow-root">
                      <div className="mt-6">
                        {listings.map((lisitng) => (
                          <Listing
                            listing={lisitng}
                            key={lisitng.id}
                            school={schools[0]}
                            reviews={reviews.featured}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                {currentTab === "rating" && (
                  <div className="lg:col-span-4 p-8 bg-white shadow rounded mt-6">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                      Overall Ratings
                    </h2>
                    <p className="text-sm text-gray-900">
                      Connected to Högskolan i Skövde
                    </p>
                    <div className="mt-3 flex items-center">
                      <div>
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                reviews.average > rating
                                  ? "text-yellow-400"
                                  : "text-gray-300",
                                "flex-shrink-0 h-5 w-5"
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">
                          {reviews.average} out of 5 stars
                        </p>
                      </div>
                      <p className="ml-2 text-sm text-gray-900">
                        Based on {reviews.totalCount} reviews
                      </p>
                    </div>

                    <div className="mt-6">
                      <h3 className="sr-only">Review data</h3>

                      <dl className="space-y-3">
                        {reviews.counts.map((count) => (
                          <Rating
                            count={count.count}
                            totalCount={reviews.totalCount}
                            rating={count.rating}
                            key={count.rating}
                          >
                            <StarIcon
                              className={classNames(
                                count.count > 0
                                  ? "text-yellow-400"
                                  : "text-gray-300",
                                "flex-shrink-0 h-5 w-5"
                              )}
                              aria-hidden="true"
                            />
                          </Rating>
                        ))}
                      </dl>
                    </div>

                    <div className="mt-10 ">
                      <h3 className="text-lg font-medium text-gray-900">
                        Share your thoughts
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        If you’ve lived here, please share your thoughts with
                        other students
                      </p>
                      <button
                        type="button"
                        onClick={() => setShowModal(true)}
                        className="mt-6 inline-flex w-full border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                      >
                        Write a review
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
