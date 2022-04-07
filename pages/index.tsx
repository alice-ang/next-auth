import { Hero, Layout } from "../components"
import { SpeakerphoneIcon, XIcon } from "@heroicons/react/outline"
import { useState } from "react"

export default function IndexPage() {
  const [open, setOpen] = useState(true)

  return (
    <Layout>
      {open && (
        <div className="relative bg-indigo-600">
          <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div className="pr-16 sm:text-center sm:px-16">
              <p className="font-medium text-white">
                <span className="md:hidden">
                  {" "}
                  This site is currently in development
                </span>
                <span className="hidden md:inline">
                  This site is currently in development!
                </span>
              </p>
            </div>
            <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
              <button
                type="button"
                className="flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Dismiss</span>
                <XIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                  onClick={() => setOpen(false)}
                />
              </button>
            </div>
          </div>
        </div>
      )}

      <Hero />
    </Layout>
  )
}
