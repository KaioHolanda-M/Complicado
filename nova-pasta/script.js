document.addEventListener('DOMContentLoaded', () => {
  
  const chatContainer = document.getElementById('chat-container');
  const massageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');
  
  function addMessage(message, isUser) {
    const messageDiv = document, createElement('div');
    messageDiv. classList.add('user-message');
  } else{
    messageDiv.classlist.add('agent-message');
  }
  messageDiv.textContainer = message;
  chatContainer.appendChild(messageDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
  sendButton.addEventListener('click', () => {
  
