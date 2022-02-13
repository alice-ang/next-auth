import { SessionProvider } from "next-auth/react"
import type { AppProps } from "next/app"
import "./styles.css"
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from "../styles"
import "../i18n"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  )
}
