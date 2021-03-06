import { useRouter } from "next/router"
import { useEffect } from "react"
import { useAuth } from "../../../utils/context/AuthContext"

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  return <>{user ? children : null}</>
}
