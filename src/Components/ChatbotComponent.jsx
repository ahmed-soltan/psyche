import React, { useEffect } from "react";

const ChatbotComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.chatbotId = 'Nh7ieoSQYaMNXzGkOGaZn';
    script.domain = 'www.chatbase.co';
    script.async = true; // Use async instead of defer
    script.crossorigin = 'anonymous';

    document.body.appendChild(script);

    const chatIcon = document.getElementById('chat-icon');

    const openChat = () => {
        // Your code to open the chat interface (specific to your chatbot service)
        // Example: chatbotService.openChat();
    };

    chatIcon.addEventListener('click', openChat);

    return () => {
        chatIcon.removeEventListener('click', openChat);
        document.body.removeChild(script);
    };

}, []);


  return  <div>
  {/* Your component content here */}
  <h1>Welcome to Our Chatbot</h1>
  <p>Ask us anything!</p>

  {/* Example: Chat icon to open the chat interface */}
  <div id="chat-icon">Chat</div>
</div>;
};

export default ChatbotComponent;
