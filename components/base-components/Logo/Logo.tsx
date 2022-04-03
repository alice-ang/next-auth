import Link from "next/link"
import { FC } from "react"
import { IoMdSchool } from "react-icons/io"

type LogoProps = {
  hasNoBreakpoint?: boolean
  className?: string
}

export const Logo: FC<LogoProps> = ({ hasNoBreakpoint, className }) => {
  return (
    <Link href="/" passHref>
      <div className={className}>
        <div className="flex items-center">
          <IoMdSchool
            className="block h-8 sw-auto pr-2"
            size={40}
            color="#4f46e5"
          />

          {hasNoBreakpoint ? (
            <h3 className=" font-bold text-xl text-gray-500 ">StudentHem</h3>
          ) : (
            <h3 className="hidden sm:block font-bold text-xl text-gray-500 ">
              StudentHem
            </h3>
          )}
        </div>
      </div>
    </Link>
  )
}
