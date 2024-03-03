let chatBox = document.getElementById('chat-box');

function sendMessage() {
    let messageInput = document.getElementById('message');
    let message = messageInput.value;
    if (message.trim() === '') return;
    messageInput.value = '';
    chatBox.innerHTML += `<div>${message}</div>`;
    saveMessage(message);
}

function saveMessage(message) {
    // Implement saving message to the server (e.g., using fetch or XMLHttpRequest).
}

// Load previous messages from the server when the page loads.
window.onload = function () {
    // Implement loading previous messages from the server.
};
