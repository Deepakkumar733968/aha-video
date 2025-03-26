import "./style.css";
import { IoChatbubbleEllipses } from "react-icons/io5";
export const ChatWithExpert = () => {
  return (
    <button className="chat-other-main cursor-pointer">
      <div className="cht-img-main">
        <IoChatbubbleEllipses size={20} className="chat-icon" />
      </div>
      <p className="chat-des-txt">Chat with an Expert</p>
    </button>
  );
};
