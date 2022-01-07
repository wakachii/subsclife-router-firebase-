import React from "react";
import db from './Firebase'
import { SelectedContext } from './Addition';




function Save() {
const addChat = () => {
const selected = React.useContext(SelectedContext);
if (chatName) {
db.collection(“rooms”).add({
name: chatName,
});
}
};

return (
);
}

export default Save;