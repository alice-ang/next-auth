import {
  collection,
  query,
  where,
  getDocs,
  DocumentData,
} from "firebase/firestore"
import { db } from "../firebase/clientApp"

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export const getAllSchools = async () => {
  const querySnapshot = await getDocs(query(collection(db, "schools")))
  const data = <DocumentData>[]
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      name: doc.data().name,
      lat: doc.data().lat,
      lng: doc.data().lng,
      numOfListings: 10,
      numOfReviews: 10,
    })
  })
  return data
}

export const getSchoolByName = async (name: string) => {
  const data = <DocumentData>[]

  const q = query(collection(db, "schools"), where("name", "==", name))

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id,
      name: doc.data().name,
      lat: doc.data().lat,
      lng: doc.data().lng,
      numOfListings: 10,
      numOfReviews: 10,
    })
  })
  return data[0]
}

export const addUser = async () => {
  let user = {}
}
