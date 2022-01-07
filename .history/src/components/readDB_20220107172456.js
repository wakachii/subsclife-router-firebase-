import React from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import db from "./firebase"

function ReadDb() {
const [collections, loading, error] = useCollection(db.collection("checkbox")); 
collections?.docs.map((doc) => {
console.log(doc.data().name);
});

return (
  console.log(doc.id);
);
}

export default ReadDb;