import { FaFacebook, FaGoogle } from "react-icons/fa"
import { Layout } from "../components"
import { useAuth } from "../utils/context"
import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { NextPageContext } from "next"
import { serverSideTranslations } from "next-i18next/serverSideTranslations"

export default function LoginPage() {
  const {
    user,
    signInWithFacebook,
    loginWithEmailAndPassword,
    signUpWithEmailAndPassword,
    signInWithGoogle,
  } = useAuth()

  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)
  const router = useRouter()
  const [isSignup, setIsSignUp] = useState(false)
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    if (user) {
      router.push("/search")
    }
  }, [user, router])

  const handleSignup = async (e: any) => {
    e.preventDefault()

    try {
      if (isSignup) {
        await signUpWithEmailAndPassword(data.email, data.password)
      } else {
        await loginWithEmailAndPassword(data.email, data.password)
      }
    } catch (err: any) {
      switch (err.code) {
        case "auth/email-already-in-use":
          alert("Email already in use")
          break
        case "auth/invalid-email":
          alert("Invalid email")
          break
        case "weak-password":
          alert("Password should be at least 6 characters")
          break
        case "auth/wrong-password":
          alert("Wrong password")
        case "auth/user-not-found":
          alert("User not found")
          break
        default:
          break
      }
    }
    formRef.current?.reset()
  }

  return (
    <Layout>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isSignup ? "Sign up for a new account" : "Sign in to your account"}
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              ref={formRef}
              autoComplete="off"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    ref={emailRef}
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    ref={passwordRef}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  onClick={(e) => {
                    if (emailRef.current && passwordRef.current) {
                      setData({
                        email: emailRef.current.value,
                        password: passwordRef.current.value,
                      })
                      handleSignup(e)
                    }
                  }}
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {isSignup ? "Sign up" : "Sign in"}
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div>
                  <span
                    onClick={signInWithFacebook}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Facebook</span>
                    <FaFacebook size={24} />
                  </span>
                </div>
                <div>
                  <span
                    onClick={signInWithGoogle}
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Sign in with Google</span>
                    <FaGoogle size={24} />
                  </span>
                </div>
              </div>

              {!isSignup ? (
                <div className="text-sm text-center pt-3">
                  <span>Don&apos;t have an account? </span>
                  <a
                    onClick={() => setIsSignUp(true)}
                    className="font-medium hover:font-semibold text-indigo-600 hover:text-indigo-5700"
                  >
                    Sign up
                  </a>
                </div>
              ) : (
                <div className="text-sm text-center pt-3">
                  <span>Already have an account? </span>
                  <a
                    onClick={() => setIsSignUp(false)}
                    className="font-medium hover:font-semibold text-indigo-600 hover:text-indigo-5700"
                  >
                    Sign in
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const data = ctx.query
  return {
    props: {
      data,
      ...(await serverSideTranslations(ctx.locale ?? 'sv', ["common", "home"])),
    },
  };

}