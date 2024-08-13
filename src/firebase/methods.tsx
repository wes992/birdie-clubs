import { database, database as db } from "./index";
import { addDoc, collection, getDocs } from "firebase/firestore";

export enum COLLECTIONS {
  CLUBS = "clubs",
  BALLS = "balls",
}

// Get a list items in collection from database
export const get = async (collectionType: COLLECTIONS, options = () => {}) => {
  try {
    const thisCollection = collection(db, collectionType);
    const snapshot = await getDocs(thisCollection);
    const list = await Promise.allSettled(
      snapshot.docs.map(async (doc) => {
        const data = doc.data();
        // const detailsSnapshot = await getDoc(data.details);
        // const details = detailsSnapshot.data();
        // return { ...data, details };
        return data;
      })
    );

    const items = list.map((item) =>
      item.status === "fulfilled" ? item.value : ({} as any)
    );
    return items.sort((a, b) => a?.sort - b?.sort || -1);
  } catch (e) {
    console.error("Error retrieving items: ", e);
  }
};

// create items in the collection in db
export const create = async (collectionType: COLLECTIONS, items: any[]) => {
  const thisCollection = collection(database, collectionType);
  try {
    await Promise.all(
      items.map(async (item) => {
        const docRef = await addDoc(thisCollection, item);

        console.log("Document written with ID: ", docRef.id);
      })
    );
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
