import Reac
import { useCollection } from “react-firebase-hooks/firestore”;
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