import { SelectedContext } from './Addition';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

// Add a new document in collection "cities"

const  Fire = (props) => {
const selected = React.useContext(SelectedContext);


await setDoc(doc(db, "checkbox", "each"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});
return(






)
}
export default Fire