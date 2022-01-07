import React from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import db from "./firebase"

function ReadDb() {
const [v, loading, error] = useCollection(db.collection("checkbox")); 
collections?.docs.map((doc) => {
console.log(doc.data().name);
});
if (loading) {
  return <div>Loading...</div>;
}
if (error) {
  return <div>{`Error: ${error.message}`}</div>;
}
return (
  {collections.map(value=>())}
);
}

export default ReadDb;