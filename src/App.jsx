import { useState, useEffect } from "react";
import "./App.css";
import{Chatbot} from "supersimpledev";
import ChatInput from "./Components/ChatInput";
import { Chatmessages } from "./Components/ChatMessages";

function App() {
  const [Chatmessage, setChatmessage] = useState(
    JSON.parse(localStorage.getItem("chatMessages") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(Chatmessage));
  }, [Chatmessage]);

  useEffect(() => {
    Chatbot.addResponses({
      'hii': 'Hi there! How can I assist you today?',
      'how are you?': 'I am doing well, thank you! How can I help you?',
      'make me happy': 'I am here to help you feel happy! What would you like to do?',
      'what is your name?': 'I am a chatbot created by Samta. I do not have a name, but you can call me whatever you like!',
      'roll a dice': `Sure! You got ${Math.floor(Math.random() * 6) + 1}!`,
    });
  }, []);
  return (
    <div className="app-container">
      <h4 className="app-title">
        Welcome to the chatbot project! Send a message using the textbox below.
      </h4>
      <Chatmessages Chatmessage={Chatmessage} setChatmessage={setChatmessage} />
      <ChatInput Chatmessage={Chatmessage} setChatmessage={setChatmessage} />
    </div>
  );
}

export default App;
