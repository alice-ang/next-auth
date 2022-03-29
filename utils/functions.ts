import { DocumentData, QuerySnapshot } from "@google-cloud/firestore"
import firebase from "firebase/app"
import { collection, query, where, getDocs, doc } from "firebase/firestore"
import { useState } from "react"
import { db } from "../firebase/clientApp"

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export const getAllSchools = async () => {
  const querySnapshot = await getDocs(collection(db, "schools"))
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    return doc.data()
  })
  return querySnapshot
}

export const getSchoolByName = async (name: string) => {
  const q = query(collection(db, "schools"), where("name", "==", name))

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    return doc.data()
  })
}
