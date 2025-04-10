document.addEventListener("DOMContentLoaded", () => {
  const chatContainer = document.getElementById('chat-container');
  const messageInput = document.getElementById('message-input');
  const sendButton = document.getElementById('send-button');

  function addMessage(messageText, isUser) {
      const messageElement = document.createElement('div');
      if (isUser) {
          messageElement.classList.add('user-message');
      } else {
          messageElement.classList.add('agent-message');
      }
      messageElement.textContent = messageText;
      chatContainer.appendChild(messageElement);
      chatContainer.scrollTop = chatContainer.scrollHeight; // Rolagem para mostrar a última mensagem
  }

  sendButton.addEventListener('click', () => {
      const messageText = messageInput.value;
      if (messageText.trim() !== '') {
          addMessage(messageText, true); // Enviando mensagem do usuário
          messageInput.value = ''; // Limpa o campo de entrada
          
          setTimeout(() => {
              const responses = [
                  "Olá, como posso te ajudar hoje?",
                  "Estou aqui para ajudar!",
              ];
              const randomIndex = Math.floor(Math.random() * responses.length);
              addMessage(responses[randomIndex], false); // Resposta do 'agente'
          }, 1000); // Atraso para simular resposta
      }
  });
});
