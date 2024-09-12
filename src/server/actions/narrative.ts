import { cache } from "react";
import {
  collection,
  getDocs,
  query,
  where,
  getDoc,
} from "firebase/firestore/lite";
import { db } from "@/lib/firebase";

const collectionRef = collection(db, "content");

const getNarrativeContent = cache(async () => {
  const q = query(collectionRef, where("type", "==", "narrative"));
  const snapshot = await getDocs(q);
  const docs = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data?.title || "no-title",
      images: data?.images || [],
      type: data?.type || "narrative",
    };
  });

  return docs;
});

const getNarrativeContentIDs = cache(async () => {
  try {
    let ids: Array<{ id: string }> = [];
    const q = query(collectionRef, where("type", "==", "narrative"));
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) =>
      ids.push({
        id: doc.id,
      })
    );
    return ids;
  } catch (error: any) {
    console.log("Error fetching product ids", error);
    return [];
  }
});

export { getNarrativeContent, getNarrativeContentIDs };
