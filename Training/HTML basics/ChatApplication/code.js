document.addEventListener("DOMContentLoaded",() => {
    const chatBox = document.querySelector(".chat");
    const chatWrite = document.querySelector("#chatWrite");
    const sendButton = document.querySelector(".sendButton");
    
    sendButton.onclick = () => {
        let message = chatWrite.value;
        chatBox.appendChild(newMessage(message));
    }
})
function newMessage(message){
    const messageDiv = document.createElement("div");
    const messageP = document.createElement("p");

    messageDiv.className = "message";
    messageP.innerText = message;
    messageDiv.appendChild(messageP);

    return messageDiv;
    
}