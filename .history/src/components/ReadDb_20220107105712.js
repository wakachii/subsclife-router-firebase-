import React from "react";
import db from './Firebase'
import { SelectedContext } from './Addition';




function Save() {
const addData = () => {
   const selected = React.useContext(SelectedContext);
     if (user) {
        db.collection(“rooms”).add({
        name: chatName,
});
}
};

return (
);
}

export default Save;