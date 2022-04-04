import {
  CheckCircleIcon,
  OfficeBuildingIcon,
  HeartIcon,
  PencilIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid"

import { Avatar, Layout } from "../components"
import { classNames, useAuth } from "../utils"

const cards = [
  { name: "Favourites", icon: HeartIcon, amount: "5" },
  { name: "Reviews", icon: PencilIcon, amount: "2" },
  { name: "Posts", icon: QuestionMarkCircleIcon, amount: "0" },
  // More items...
]
const people = [
  {
    title: "Review",
    department: "Norra Trängallén 3",
    role: "Member",
    status: "approved",
    icon: PencilIcon,
  },
  {
    title: "Review",
    department: "Norra Trängallén 6B",
    role: "Member",
    status: "pending",
    icon: PencilIcon,
  },
  {
    title: "Like",
    department: "Gransikagatan 7C",
    role: "Member",
    status: "",
    icon: HeartIcon,
  },
  // More people...
]

export default function ProfilePage() {
  const { user } = useAuth()

  return (
    <Layout>
      {/* Page header */}
      <div className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 bg-white shadow rounded-lg">
          {/* Profile */}
          {user && (
            <div className="flex items-center">
              {user.photo && (
                <Avatar
                  url={user.photo}
                  className="hidden h-16 w-16 rounded-full sm:block"
                />
              )}

              <div>
                <div className="flex items-center">
                  {user.photo && (
                    <Avatar
                      url={user.photo}
                      className="h-16 w-16 rounded-full sm:hidden"
                    />
                  )}

                  <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                    Hello, {user.displayName}
                    <span role="img" aria-label="waving hand" className="pl-2">
                      👋
                    </span>
                  </h1>
                </div>
                <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                  <dt className="sr-only">Company</dt>
                  <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                    <OfficeBuildingIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    Högskolan i Skövde
                  </dd>
                  <dt className="sr-only">Account status</dt>
                  <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                    <CheckCircleIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                      aria-hidden="true"
                    />
                    Verified student
                  </dd>
                </dl>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Overview
          </h2>
          <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-3 ">
            {/* Card */}
            {cards.map((card) => (
              <div
                key={card.name}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <card.icon
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {card.name}
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            {card.amount}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-50 px-5 py-3">
                  <div className="text-sm">
                    <a className="font-medium text-indigo-700 hover:text-indigo-900">
                      View all
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h2 className="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8">
          Recent activity
        </h2>

        {/* Activity table (small breakpoint and up) */}
        <div className="block">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col mt-2 mb-8">
              <div className="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-indigo-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-indigo-900"
                      >
                        Activity
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-indigo-900"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-indigo-900"
                      >
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {people.map((person, i) => (
                      <tr key={i}>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-indigo-500">
                          <div className="flex items-center">
                            <div className=" flex-shrink-0">
                              <person.icon
                                className="h-6 w-6 text-gray-400"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-gray-900">
                                {person.title}
                              </div>
                              <div className="text-gray-500">
                                {person.department}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <span
                            className={classNames(
                              person.status == "approved"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800",
                              "inline-flex rounded-full px-2 text-xs font-semibold leading-5"
                            )}
                          >
                            {person.status}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {person.role}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Pagination */}
                <nav
                  className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                  aria-label="Pagination"
                >
                  <div className="hidden sm:block">
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">1</span> to{" "}
                      <span className="font-medium">10</span> of{" "}
                      <span className="font-medium">20</span> results
                    </p>
                  </div>
                  <div className="flex-1 flex justify-between sm:justify-end">
                    <a
                      href="#"
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Previous
                    </a>
                    <a
                      href="#"
                      className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    >
                      Next
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
