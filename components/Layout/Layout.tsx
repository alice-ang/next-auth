import Head from "next/head"
import { Footer } from "../Footer"
import { NavBar } from "../NavBar"
type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
