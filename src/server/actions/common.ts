import { db } from "@/lib/firebase";
import { collection, doc, getDoc } from "firebase/firestore/lite";
import { cache } from "react";

const collectionRef = collection(db, "content");

const getSingleContent = cache(async (id: string) => {
  const docRef = doc(collectionRef, id as string);
  const snapshot = await getDoc(docRef);
  return snapshot.data();
});

export { getSingleContent };
