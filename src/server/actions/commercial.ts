import { cache } from "react";
import { collection, getDocs, query, where } from "firebase/firestore/lite";
import { db } from "@/lib/firebase";

const collectionRef = collection(db, "content");

const getCommercialAndMusicContent = cache(async () => {
  const q = query(collectionRef, where("type", "in", ["commercial", "music"]));
  const snapshot = await getDocs(q);
  console.log(snapshot.docs.length);
  const docs = snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data?.title || "no-title",
      images: data?.images || [],
      type: data?.type || "commercial",
    };
  });

  return docs;
});

const getCommercialAndMusicContentIDs = cache(async () => {
  try {
    let ids: Array<{ id: string }> = [];
    const q = query(
      collectionRef,
      where("type", "array-contains", ["commercial", "music"])
    );
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

export { getCommercialAndMusicContent, getCommercialAndMusicContentIDs };
