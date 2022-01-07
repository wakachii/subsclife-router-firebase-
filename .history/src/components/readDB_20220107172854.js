import React from "react"
import { useCollection } from "react-firebase-hooks/firestore"
import db from "./firebase"

function ReadDb() {
  const [values, loading, error] = useCollectionData(
    firebase.firestore().collection("todos"),
    { idField: "id" }
  );
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{`Error: ${error.message}`}</div>;
  }
return (
  {values.map(value=>(set))}
);
}

export default ReadDb;