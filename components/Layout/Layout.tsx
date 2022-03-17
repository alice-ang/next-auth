import { Footer } from "../Footer"
import { NavBar } from "../NavBar"
type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
