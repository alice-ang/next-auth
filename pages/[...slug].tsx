import { Layout, Map } from "../components"
import {
  StarIcon,
  EyeIcon,
  ThumbUpIcon,
  ShareIcon,
} from "@heroicons/react/solid"
import { classNames } from "../utils"

import { Fragment, useState } from "react"
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react"
import { XIcon } from "@heroicons/react/outline"
import {
  ChevronDownIcon,
  MinusSmIcon,
  PlusSmIcon,
} from "@heroicons/react/solid"

const reviews = {
  average: 4,
  totalCount: 1624,
  counts: [
    { rating: 5, count: 1019 },
    { rating: 4, count: 162 },
    { rating: 3, count: 97 },
    { rating: 2, count: 199 },
    { rating: 1, count: 147 },
  ],
  featured: [
    {
      id: 1,
      rating: 5,
      content: `
          <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
        `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      likes: "29",
      replies: "11",
      views: "2.7k",
    },
    {
      id: 1,
      rating: 5,
      content: `
            <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
          `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      likes: "29",
      replies: "11",
      views: "2.7k",
    },
    {
      id: 1,
      rating: 5,
      content: `
            <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
          `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      likes: "29",
      replies: "11",
      views: "2.7k",
    },
    {
      id: 1,
      rating: 5,
      content: `
            <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
          `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      likes: "29",
      replies: "11",
      views: "2.7k",
    },
    {
      id: 1,
      rating: 5,
      content: `
            <p>This is the bag of my dreams. I took it on my last vacation and was able to fit an absurd amount of snacks for the many long and hungry flights.</p>
          `,
      author: "Emily Selman",
      avatarSrc:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      likes: "29",
      replies: "11",
      views: "2.7k",
    },
  ],
}

const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
]
const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
]
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: true },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals", checked: false },
      { value: "sale", label: "Sale", checked: false },
      { value: "travel", label: "Travel", checked: true },
      { value: "organization", label: "Organization", checked: false },
      { value: "accessories", label: "Accessories", checked: false },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L", checked: false },
      { value: "6l", label: "6L", checked: false },
      { value: "12l", label: "12L", checked: false },
      { value: "18l", label: "18L", checked: false },
      { value: "20l", label: "20L", checked: false },
      { value: "40l", label: "40L", checked: true },
    ],
  },
]

export default function SchoolPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  return (
    <Layout>
      <div>
        <div>
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
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
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
                    <ul
                      role="list"
                      className="font-medium text-gray-900 px-2 py-3"
                    >
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
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
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

          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative z-10 flex items-baseline justify-between pt-4 pb-6 border-b border-gray-200">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Listings
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
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
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
                  <span className="text-sm font-medium text-gray-700">
                    Filters
                  </span>
                  <PlusSmIcon
                    className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pt-6 pb-24">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 sticky">
                {/* Filters */}
                <form className="hidden lg:block ">
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
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
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
                  <div className="hidden lg:block py-6">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                      Student Reviews2
                    </h2>

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
                          <div
                            key={count.rating}
                            className="flex items-center text-sm"
                          >
                            <dt className="flex-1 flex items-center">
                              <p className="w-3 font-medium text-gray-900">
                                {count.rating}
                                <span className="sr-only"> star reviews</span>
                              </p>
                              <div
                                aria-hidden="true"
                                className="ml-1 flex-1 flex items-center"
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

                                <div className="ml-3 relative flex-1">
                                  <div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
                                  {count.count > 0 ? (
                                    <div
                                      className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                                      style={{
                                        width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                                      }}
                                    />
                                  ) : null}
                                </div>
                              </div>
                            </dt>
                            <dd className="ml-3 w-10 text-right tabular-nums text-sm text-gray-900">
                              {Math.round(
                                (count.count / reviews.totalCount) * 100
                              )}
                              %
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    <div className="mt-10">
                      <h3 className="text-lg font-medium text-gray-900">
                        Share your thoughts
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        If you’ve used this product, share your thoughts with
                        other customers
                      </p>

                      <a
                        href="#"
                        className="mt-6 inline-flex w-full  border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                      >
                        Write a review
                      </a>
                    </div>
                  </div>
                </form>

                <div className=" lg:col-span-3 ">
                  <Map lat={58.3941248} lng={13.8534906} />
                  <div className="max-w-2xl mx-auto py-8 lg:max-w-7xl">
                    <div className="block lg:col-span-4 lg:hidden p-8 bg-white shadow rounded">
                      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                        Student Reviews
                      </h2>

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
                            <div
                              key={count.rating}
                              className="flex items-center text-sm"
                            >
                              <dt className="flex-1 flex items-center">
                                <p className="w-3 font-medium text-gray-900">
                                  {count.rating}
                                  <span className="sr-only"> star reviews</span>
                                </p>
                                <div
                                  aria-hidden="true"
                                  className="ml-1 flex-1 flex items-center"
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

                                  <div className="ml-3 relative flex-1">
                                    <div className="h-3 bg-gray-100 border border-gray-200 rounded-full" />
                                    {count.count > 0 ? (
                                      <div
                                        className="absolute inset-y-0 bg-yellow-400 border border-yellow-400 rounded-full"
                                        style={{
                                          width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                                        }}
                                      />
                                    ) : null}
                                  </div>
                                </div>
                              </dt>
                              <dd className="ml-3 w-10 text-right tabular-nums text-sm text-gray-900">
                                {Math.round(
                                  (count.count / reviews.totalCount) * 100
                                )}
                                %
                              </dd>
                            </div>
                          ))}
                        </dl>
                      </div>

                      <div className="mt-10">
                        <h3 className="text-lg font-medium text-gray-900">
                          Share your thoughts
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          If you’ve used this product, share your thoughts with
                          other customers
                        </p>

                        <a
                          href="#"
                          className="mt-6 inline-flex w-full  border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 sm:w-auto lg:w-full"
                        >
                          Write a review
                        </a>
                      </div>
                    </div>
                    <div className="mt-0 lg:col-start-6 lg:col-span-7">
                      <h3 className="sr-only">Recent reviews</h3>

                      <div className="flow-root">
                        <div className="my-6">
                          {reviews.featured.map((review) => (
                            <div
                              key={review.id}
                              className="p-8 my-4 bg-white rounded shadow"
                            >
                              <div className="flex items-center">
                                <img
                                  src={review.avatarSrc}
                                  alt={`${review.author}.`}
                                  className="h-12 w-12 rounded-full"
                                />
                                <div className="ml-4">
                                  <h4 className="text-sm font-bold text-gray-900">
                                    {review.author}
                                  </h4>
                                  <div className="mt-1 flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                      <StarIcon
                                        key={rating}
                                        className={classNames(
                                          review.rating > rating
                                            ? "text-yellow-400"
                                            : "text-gray-300",
                                          "h-5 w-5 flex-shrink-0"
                                        )}
                                        aria-hidden="true"
                                      />
                                    ))}
                                  </div>
                                  <p className="sr-only">
                                    {review.rating} out of 5 stars
                                  </p>
                                </div>
                              </div>

                              <div
                                className="mt-4 space-y-6 text-base italic text-gray-600"
                                dangerouslySetInnerHTML={{
                                  __html: review.content,
                                }}
                              />
                              <div className="mt-6 flex justify-between space-x-8">
                                <div className="flex space-x-6">
                                  <span className="inline-flex items-center text-sm">
                                    <button
                                      type="button"
                                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                    >
                                      <ThumbUpIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                      <span className="font-medium text-gray-900">
                                        {review.likes}
                                      </span>
                                      <span className="sr-only">likes</span>
                                    </button>
                                  </span>

                                  <span className="inline-flex items-center text-sm">
                                    <button
                                      type="button"
                                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                    >
                                      <EyeIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                      <span className="font-medium text-gray-900">
                                        {review.views}
                                      </span>
                                      <span className="sr-only">views</span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  )
}
