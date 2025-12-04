import { useState, useRef, useEffect } from 'react'
import { Chatbot } from 'supersimpledev';
import { ChatInput } from './components/ChatInput'
import ChatMessages from './components/ChatMessages';
import './App.css'

export function useAutoScroll(dependencies) {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerElem = containerRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight
    }
  }, [dependencies]);

  return containerRef;
}

function App() {

  //const chatMessages = array[0];
  //const setChatMessages = array[1];
  //const [chatMessages , setChatMessages] = array;
  const [chatMessages , setChatMessages] = useState(
    JSON.parse(localStorage.getItem('messages'))
  );

  useEffect(() => {
    Chatbot.addResponses({
      'goodbye': 'Goodbye. Have a great day!',
      'give me a unique id': function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  return(
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className="welcome-msg">
          Welcome to the chatbot project! Send a Message using the textbox below  
        </p>
      )}
      <ChatMessages
        chatMessages = {chatMessages}
      />
      <ChatInput
        chatMessages = {chatMessages}
        setChatMessages = {setChatMessages}
      />
    </div>
  );
}

export default App
