import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import "./styles.css"
import "tailwindcss/tailwind.css"
import { Layout } from "../components"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}
