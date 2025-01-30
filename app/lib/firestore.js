"use server";

import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import firebaseConfig from "../firebase";

const db = getFirestore(firebaseConfig);

export const CreateAdmin = async (formData) => {
  try {
    const docRef = await addDoc(collection(db, "admin"), {
        email: formData.get.email,
        name: formData.get.name
    });
    console.log(docRef);
    redirect("/dashboard");
  } catch (e) {
      console.error("Error adding document" + e);
  }
}

export const LoginAdmin = async (formData) => {
  const collectionRef = collection(db, "admin");

  try {
    const querySnapshot = await getDocs(collectionRef);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
    redirect("/dashboard");
  } catch (e) {
    console.error("Error getting documents");
  }
}