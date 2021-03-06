import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline"
import useTranslation from "next-translate/useTranslation"
import Trans from "next-translate/Trans"

const transferFeatures = [
  {
    id: 1,
    name: "Lorem ipsum",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    id: 2,
    name: "Lorem ipsum",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    id: 3,
    name: "Lorem ipsum",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
]

export const Hero = () => {
  const { t } = useTranslation("home")

  return (
    <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className=" relative text-center">
          <h2 className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {/* <Trans
              i18nKey="hero.title"
              t={t}
              components={[<span className="text-indigo-600" key="hero" />]}
            /> */}
            <Trans
              i18nKey="home:hero.title"
              components={{
                component: <h2 />,
                span: <span className="text-indigo-600" />,
              }}
            />
          </h2>
          <p className="max-w-4xl mt-5 mx-auto text-md text-gray-500">
            {t("hero.subTitle")}
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              {t("hero.description.title")}
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              {t("hero.description.subTitle")}
            </p>

            <dl className="mt-10 space-y-10">
              {transferFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <img
              className="relative mx-auto"
              width={490}
              src="/location_review.svg"
              alt=""
            />
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>
      </div>
    </div>
    // <div className="max-w-7xl mx-auto sm: py-8 px-4 lg:py-16 sm:px-6 lg:px-8">
    //   <div className="text-center">
    //     <h2 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
    //       Finding <span className="text-indigo-600">your</span> student housing
    //       made easy
    //     </h2>
    //     <p className="max-w-4xl mt-5 mx-auto text-md text-gray-500">
    //       New to the area? Perhaps new to the country? Don&apos;t stress! Keep
    //       up with reviews from current and old students to make it easier for
    //       you to find YOUR perfect housing.
    //     </p>
    //   </div>
    //   <div className="w-full lg:w-[50%] m-auto py-8">
    //     <Search />
    //   </div>
    //   <div>
    //     <img
    //       className="m-auto w-[50%] lg:w-[35%]"
    //       src="/location_review.svg"
    //       alt="housing reviews"
    //     />
    //   </div>
    // </div>
  )
}
