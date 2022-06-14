import type { AppProps } from "next/app"
import "./styles.css"
import "tailwindcss/tailwind.css"
import { AuthContextProvider } from "../utils/context/AuthContext"
import { useRouter } from "next/router"
import { ProtectedRoute } from "../components"
import Script from "next/script"

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const authRequired = ["/profile"]

  return (
    <AuthContextProvider>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      {authRequired.includes(router.pathname) ? (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthContextProvider>
  )
}

export default MyApp
