import "./style.css";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { useEffect, useState } from "react";

export const ChatWithExpert = () => {
  const [isAtPageEnd, setIsAtPageEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY + 50;
      const pageHeight = document.documentElement.scrollHeight;
      setIsAtPageEnd(scrollPosition >= pageHeight - 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      className="chat-other-main cursor-pointer"
      style={{
        transform: isAtPageEnd ? "translateY(-79px)" : "translateY(0px)",
      }}
    >
      <div className="cht-img-main">
        <IoChatbubbleEllipses size={20} className="chat-icon" />
      </div>
      <p className="chat-des-txt">Chat with an Expert</p>
    </button>
  );
};
