import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { signIn, getProviders, getCsrfToken } from "next-auth/react"
import type { NextApiRequest } from "next"

type Provider = {
  id: string
  name: string
  type: string
  signinUrl: string
  callbackUrl: string
}

type LoginProps = {
  providers: {
    provider: Provider
  }
}

export default function LoginPage({ providers }: LoginProps) {
  return <h1>Login</h1>
}

export async function getServerSideProps(req: NextApiRequest) {
  return {
    props: {
      providers: await getProviders(),
      csrfToken: await getCsrfToken(),
    },
  }
}
