import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default async function Home() {
  const querySnapshot = await getDocs(collection(db, "tests"));
  querySnapshot.forEach((doc) => {
    console.log({ ... doc.data()});
  });

  return (
    <>
      Hello World
    </>
  );
}
