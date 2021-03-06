import React, { Context, createContext, useContext, useEffect, useState } from "react"
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth"
import { auth } from "../../firebase/clientApp"
import { useRouter } from "next/router"

const AuthContext = createContext({})

export const useAuth = () => useContext<any>(AuthContext)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photo: user.photoURL,
        })
      } else {
        setUser(null)
      }
      setLoading(false)

      return () => unsubscribe()
    })
  }, [])

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null)
        router.push("/login")
      })
      .catch((err) => console.log(err))
  }

  // AUTH PROVIDERS 🔒

  // GOOGLE

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()

    signInWithPopup(auth, googleProvider)
      .then((response) => {
        setUser(response.user)
        router.push("/search")
      })
      .catch((err) => console.log(err))
  }

  // FACEBOOK

  const signInWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider()
    signInWithPopup(auth, facebookProvider)
      .then((response) => {
        setUser(response.user)
        router.push("/search")
      })
      .catch((err) => console.log(err))
  }

  // EMIAL & PASSWORD
  const signUpWithEmailAndPassword = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user)
        router.push("/search")
      })
      .catch((err) => {
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
      })
  }

  const loginWithEmailAndPassword = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        setUser(response.user)
        router.push("/search")
      })
      .catch((err) => {
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
      })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signUpWithEmailAndPassword,
        logOut,
        createUserWithEmailAndPassword,
        loginWithEmailAndPassword,
        signInWithGoogle,
        signInWithFacebook,
      }}
    >
      {loading ? null : children}
    </AuthContext.Provider>
  )
}
