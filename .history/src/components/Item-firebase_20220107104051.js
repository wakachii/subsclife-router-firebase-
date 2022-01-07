import { SelectedContext } from './Addition';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});

const  Fire = (props) => {
const selected = React.useContext(SelectedContext);

return(






)
}
export default Fire