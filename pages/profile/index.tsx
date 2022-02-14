import { useSession } from "next-auth/react"
import { Layout } from "../../components/Layout"

export default function ProfilePage() {
  const { data } = useSession()

  return (
    <Layout>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Layout>
  )
}
