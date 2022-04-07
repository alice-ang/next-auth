import { collection, query, where, getDocs, doc } from "firebase/firestore"
import { disconnect } from "process"
import { db } from "../firebase/clientApp"

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export const getAllSchools = async () => {
  const querySnapshot = await getDocs(query(collection(db, "schools")))

  querySnapshot.forEach((doc) => {
    return {
      ...doc.data(),
    }
  })
}

export const getSchoolByName = async (name: string) => {
  const q = query(collection(db, "schools"), where("name", "==", name))

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    return {
      id: doc.id,
      name: doc.data().name,
      lat: doc.data().lat,
      lng: doc.data().lng,
      numOfListings: 10,
      numOfReviews: 10,
    }
  })
}
