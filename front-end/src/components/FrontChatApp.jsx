import React, { useState, useEffect } from "react";
import HeaderChat from "./HeaderChat";
import Chats from "./Chats";
import BottomContainer from "./BottomContainer";
import ChatData from "../utils/DevChatData";
import RecChats from "../utils/RecChats";
import "../styles/style.css";

const FrontChatApp = () => {
  const [theme, setTheme] = useState("light");
  const [messages, setMessages] = useState(ChatData());
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMinimizing, setIsMinimizing] = useState(false);
  const recommendedMessages = RecChats();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const addMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", message },
    ]);
  };

  const handleExpand = () => {
    setIsMinimizing(false);
    setIsExpanded(true);
  };

  const handleMinimize = () => {
    setIsMinimizing(true);
    setTimeout(() => {
      setIsExpanded(false);
      setIsMinimizing(false);
    }, 700); // Match the duration of the animation
  };

  const handleRecommendedClick = (recMessage) => {
    addMessage(recMessage);
    handleExpand();
  };

  return (
    <div className={`relative flex flex-col ${isExpanded ? (isMinimizing ? "minimize-animation" : "expand-animation") : "initial-position"} border border-gray-300 rounded-xl ${theme === "dark" ? "dark bg-[#B2B2B2]" : "bg-[#F5F5F5]"} transition-all duration-700 ease-in-out`}>
      <div className={`absolute bottom-0 left-0 right-0 z-10 rounded-b-xl ${theme === "dark" ? "bg-[#B2B2B2] text-white" : "bg-[#F5F5F5] text-black"}`}>
        <BottomContainer addMessage={addMessage} theme={theme} onFocus={handleExpand} isExpanded={isExpanded} />
        {!isExpanded && (
          <div className="mt-2 p-2">
            {recommendedMessages.map((rec, index) => (
              <div
                key={index}
                className="cursor-pointer p-2 rounded-lg bg-[#e9effb] text-black dark:bg-[#3C4048] dark:text-[#e9effb] mb-1"
                onClick={() => handleRecommendedClick(rec.message)}
              >
                {rec.message}
              </div>
            ))}
          </div>
        )}
      </div>
      {isExpanded && (
        <>
          <header className={`absolute top-0 left-0 right-0 z-10 rounded-xl ${theme === "dark" ? "bg-[#ab9f9f] text-white" : "bg-white text-black"}`}>
            <HeaderChat theme={theme} toggleTheme={toggleTheme} onClose={handleMinimize} />
          </header>
          <main className={`flex-1 overflow-y-auto mt-16 mb-16 ${theme === 'dark' ? 'bg-[#B2B2B2]' : 'bg-[#F5F5F5]'}`}>
            <Chats messages={messages} theme={theme} />
          </main>
        </>
      )}
    </div>
  );
};

export default FrontChatApp;