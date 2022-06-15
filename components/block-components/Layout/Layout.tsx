import Head from "next/head"
import { Footer } from "../../base-components"
import { NavBar } from "../NavBar"

type Props = {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        {/* https://www.learnbestcoding.com/post/26/how-to-use-google-adsense-in-next-js */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Head>
      <NavBar />

      {children}
      <Footer />
    </>
  )
}
