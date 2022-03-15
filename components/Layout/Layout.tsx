import { Footer } from "../Footer"
import { NavBar } from "../NavBar"
type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto"> {children}</div>
      </div>
      <Footer />
    </>
  )
}
