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
  const messageText = messageInput.value;
  if (messageText.trim() !== '') {
    addMessage( messageText, true);
    
  simulateAgentResponse(messageText);
    
   messageInput.value = '';
  }
});
function simulateAgenteResponse(user message) {
setTimeout(() => {
  const responses = [
    "Olá, como posso te ajudar hoje?"
    ];
  const randomIndex = Match.floor(Math.random() * responses.length);
  const agentReponse = responses[randomIndex];
  addMessage(agentResponse, false);
}, 1000);
}
addMessage("Olá! Bem vindo! Como posso ajudar?", false);
});
