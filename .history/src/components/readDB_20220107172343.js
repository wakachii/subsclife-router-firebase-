import React from "react"
import { useCollection } from ""
import db from “./firebase”;

function ReadDb() {
const [collections, loading, error] = useCollection(db.collection(“rooms”)); 
collections?.docs.map((doc) => {
console.log(doc.data().name);
console.log(doc.id);
});

return (
);
}

export default ReadDb;