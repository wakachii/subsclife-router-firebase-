import React from "react";
import df

function Chat() {
const addChat = () => {
const chatName = prompt(“Please enter the chat room name”);

if (chatName) {
db.collection(“rooms”).add({
name: chatName,
});
}
};

return (
);
}

export default Chat;