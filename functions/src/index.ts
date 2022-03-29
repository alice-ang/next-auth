import * as functions from "firebase-functions"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/clientApp"
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const getSchools = functions.https.onRequest(
  async (request, response) => {
    const docRef = doc(db, "schools", "")
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data())
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!")
    }
    response.send(docSnap.data())
  }
)
