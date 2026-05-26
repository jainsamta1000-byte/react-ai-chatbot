import robot from "../assets/robo.png";
import user from "../assets/user.webp";
 
 export function ChatResult({ sender, message, time }) {
  return (
    <div className={sender === "user" ? "user-message" : "robot-message"}>
      {sender === "robot" && (
        <img className="message-profile" src={robot} alt="Robot" width="100" />
      )}
      <div className="message-box">
        <div className="message-content">{message}</div>
        <div className="message-time">{time}</div>
      </div>
      {sender === "user" && (
        <img className="message-profile" src={user} alt="User" width="70" />
      )}
    </div>
  );
}
