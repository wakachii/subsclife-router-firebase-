import React from "react";
import db from './Firebase'
import { SelectedContext } from './Addition';




function Save() {
const addData = () => {
   const selected = React.useContext(SelectedContext);
     if (user) {
        db.collection("checkbox”).add({
        che
});
}
};

return (
);
}

export default Save;