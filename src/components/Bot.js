import React, { useRef, useState, useEffect } from "react";
import chat from "../components/Images/chat.jpg"

const Bot = () => {
  const chatbotRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event) => {
    if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
      // Click outside the chatbot, close it
      setIsOpen(false);
    } else {
      // Toggle chatbot visibility on icon click
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div
      ref={chatbotRef}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "1000",
        cursor: "pointer",
        // backgroundColor: "darkblue"
      }}
    >
      <div onClick={handleClick}>
        <img
          src={chat}
          alt="Chat Icon"
          style={{ width: "100px", height: "auto",  }}
        />
      </div>
      {isOpen && (
        <iframe
          src="https://webchat.botframework.com/embed/botservicestesting-bot?s=kfpVJIu0aFU.XO2Feibh3iVxXkJNtv0z11BsVPX2Y9NlX5s9f7eRLtI"
          style={{
            border: "none",
            display: "block",
            width: "100%",
            minHeight: "500px",
        
          }}
        ></iframe>
      )}
    </div>
  );
};

export default Bot;