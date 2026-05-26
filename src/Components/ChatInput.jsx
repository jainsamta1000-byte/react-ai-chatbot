 import { useState } from "react";
import dayjs from "dayjs";
import { Chatbot } from "supersimpledev";
import loader from "../assets/loader.gif";
function ChatInput({ Chatmessage, setChatmessage }) {
        const [inputText, setInputText] = useState("");
        const [loading, setLoading] = useState(false);

        function saveInputText(text) {
          setInputText(text.target.value);
        }

        async function SendMessage() {
          setLoading(true);
          const newMessage = [
            ...Chatmessage,
            { sender: "user",
               message: inputText, 
               id: crypto.randomUUID(),
                time: dayjs().format("h:mma") },
          ];
          setChatmessage(newMessage);
          setInputText("");
          const loadingMessage = {
            sender: "robot",
            message: (
              <img
                src={loader}
                style={{ height: "40px", margin: "-15px" }}
              />
            ),
            id: crypto.randomUUID(),
            time: dayjs().format("h:mma"),
          };
          setChatmessage([...newMessage, loadingMessage]);
          const response = await Chatbot.getResponseAsync(inputText);
          setChatmessage([
            ...newMessage,
            { sender: "robot", message: response, id: crypto.randomUUID(),
               time: dayjs().format("h:mma") },
          ]);
          setLoading(false);
        }
        return (
          <div className="chat-input-container">
            <input
              type="text"
              size="50"
              placeholder="Send a message to Chatbot"
              onChange={saveInputText}
              disabled={loading}
              value={inputText}
              className="chat-input"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  SendMessage();
                }
                if (event.key === "Escape") {
                  setInputText("");
                }
              }}
            />

            <button
              className="send-button"
              onClick={SendMessage}
              disabled={loading}
            >
              Send
            </button>
            <button className="clear-button" onClick={() => setChatmessage([])} disabled={loading}>
              Clear
            </button>
          </div>
        );
      }

      export default ChatInput;