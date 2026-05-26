import { ChatResult } from "./ChatResult";
import { useRef, useEffect } from "react"

 export function Chatmessages({ Chatmessage }) {
  const chatMessagesRef = useRef(null);
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [Chatmessage]);
  return (
    <div className="messages-container" ref={chatMessagesRef}>
      {Chatmessage.map((msg) => (
        <ChatResult key={msg.id} message={msg.message} sender={msg.sender} time={msg.time} />
      ))}
    </div>
  );
}
