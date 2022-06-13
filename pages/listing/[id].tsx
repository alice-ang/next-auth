import {
  Badge,
  Layout,
  Modal,
  Rating,
  Review,
  Banner,
  BannerTag,
  Grid,
} from "../../components"
import { classNames } from "../../utils"
import { Fragment, useState } from "react"
import { StarIcon } from "@heroicons/react/solid"
import { Tab } from "@headlessui/react"
import { reviews, amenities } from "../../utils"

export default function ListingPage() {
  const [open, setOpen] = useState(false)
  return (
    <Layout>
      <Banner>
        <BannerTag text="Photo by Alice A" />
      </Banner>
      <div className="mx-auto py-8 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {/* Listing */}
        <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-6 lg:gap-y-8 xl:gap-x-8">
          {/* Listing details 🐕  */}
          <div className="bg-white shadow p-8 max-w-2xl mx-auto lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
            <div className="flex flex-col">
              <div className="mt-4">
                <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                  Norra Trängallén 3
                </h1>
                <h3 className="sr-only">Reviews</h3>
                <div className="mt-3 flex items-center">
                  <div>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={Math.random()}
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
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                  </div>
                  <p className="ml-2 text-sm text-gray-900">
                    Based on {reviews.totalCount} reviews
                  </p>
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
              </div>

              <div>
                <h2 id="information-heading" className="sr-only">
                  Listing information
                </h2>
                <div className="flex my-4 flex-wrap">
                  <span className="pr-2 pb-3">
                    <Badge>primary lease</Badge>
                  </span>

                  <span className="pr-2 pb-3">
                    <Badge color="gray">doorm</Badge>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="sr-only">Review data</h3>

              <dl className="space-y-3 ">
                {reviews.counts.map((count, i) => {
                  return (
                    <div key={Math.random() * i}>
                      <span className="flex justify-center">
                        {count.rating}
                        <StarIcon
                          className="text-yellow-400 flex-shrink-0 h-5 w-5"
                          aria-hidden="true"
                        />
                      </span>
                      <Rating
                        hideRating
                        count={count.count}
                        totalCount={reviews.totalCount}
                        rating={count.rating}
                      />
                    </div>
                  )
                })}
              </dl>
            </div>

            <div className="border-t border-gray-200 mt-10 pt-10">
              <h4 className="text-center text-xl font-extrabold tracking-tight text-gray-700 sm:text-3xl">
                Amenities
              </h4>
              <dl className="mt-4 space-y-4">
                {amenities.map((item) => {
                  return (
                    <Rating
                      count={item.count}
                      totalCount={item.totalCount}
                      title={item.type}
                      key={item.type}
                      color="indigo"
                    />
                  )
                })}
              </dl>
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900">
                Share your thoughts
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                If you’ve lived here, please share your thoughts with other
                students
              </p>
              <button
                type="button"
                className="mt-6 inline-flex w-full border border-gray-300 rounded-md py-2 px-8 items-center justify-center text-sm font-medium text-gray-900 hover:bg-gray-50 "
                onClick={() => setOpen(true)}
              >
                Write a review
              </button>
            </div>
            <div className="border-t border-gray-200 mt-10 pt-10">
              <h3 className="text-sm font-medium text-gray-900">Share</h3>
              <ul role="list" className="flex items-center space-x-6 mt-4">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Share on Facebook</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Share on Instagram</span>
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center w-6 h-6 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">Share on Twitter</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
            <Tab.Group as="div">
              <Tab.List className="mb-10 flex space-x-8">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? "border-indigo-600 text-indigo-600"
                        : "border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300",
                      "whitespace-nowrap py-6 border-b-2 font-medium text-sm"
                    )
                  }
                >
                  Student Reviews
                  <span className="pl-3">
                    <Badge>{reviews.featured.length}</Badge>
                  </span>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      selected
                        ? "border-indigo-600 text-indigo-600"
                        : "border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300",
                      "whitespace-nowrap py-6 border-b-2 font-medium text-sm"
                    )
                  }
                >
                  Photos
                </Tab>
              </Tab.List>

              <Tab.Panels as={Fragment}>
                <Tab.Panel className="mb-10">
                  <h3 className="sr-only">Student Reviews</h3>

                  {/* {reviews.featured.map((review, i) => (
                    <Review review={review} key={Math.random() * i} />
                  ))} */}
                </Tab.Panel>

                <Tab.Panel as="dl" className="text-sm text-gray-500">
                  <h3 className="sr-only">Photos</h3>

                  <Grid />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
      {open && <Modal closeModal={setOpen} />}
    </Layout>
  )
}
