export const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Finding <span className="text-indigo-600">your</span> student housing
          made easy
        </h2>
        <p className="max-w-4xl mt-5 mx-auto text-md text-gray-500">
          New to the area? Perhaps new to the country? Don&apos;t stress! Keep
          up with reviews from current and old students to make it easier for
          you to find YOUR perfect housing.
        </p>
      </div>
      <div>
        <img className="m-auto" src="/location_review.svg" />
      </div>
    </div>
  )
}
