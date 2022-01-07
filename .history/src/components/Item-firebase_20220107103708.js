import { SelectedContext } from './Addition';
import { getFirestore, collection, addDoc } from "firebase/firestore";

const selected = React.useContext(SelectedContext);