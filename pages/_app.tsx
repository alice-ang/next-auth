import type { AppProps } from "next/app"
import "./styles.css"
import "tailwindcss/tailwind.css"
import { AuthContextProvider } from "../utils/context/AuthContext"
import { useRouter } from "next/router"
import { ProtectedRoute } from "../components"
import { appWithTranslation } from "next-i18next"

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const authRequired = ["/profile"]

  return (
    <AuthContextProvider>
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
export default appWithTranslation(MyApp)
