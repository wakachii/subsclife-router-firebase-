import { SelectedContext } from './Addition';
import { getFirestore, collection, addDoc } from "firebase/firestore";


export default function Home() {
const selected = React.useContext(SelectedContext);