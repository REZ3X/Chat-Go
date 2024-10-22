import React, { useState } from "react";
import HeaderChat from "./HeaderChat";
import Chats from "./Chats";
import BottomContainer from "./BottomContainer";
import ChatData from "../utils/DevChatData";
import "../styles/style.css";

const FrontChatApp = () => {
  const [theme, setTheme] = useState("light");
  const [messages, setMessages] = useState(ChatData());
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const addMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", message },
    ]);
  };

  const handleExpand = () => {
    setIsExpanded(true);
  };

  return (
    <div className={`relative flex flex-col mx-20 mt-5 border border-gray-300 rounded-xl ${theme === "dark" ? "bg-[#697565] text-white" : "bg-[#F5F5F5] text-black"} ${isExpanded ? "h-[530px]" : "h-[80px]"} transition-all duration-500 ease-in-out`}>
      {isExpanded && (
        <>
          <header className={`absolute top-0 left-0 right-0 z-10 rounded-t-xl ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
            <HeaderChat theme={theme} toggleTheme={toggleTheme} />
          </header>
          <main className={`flex-1 overflow-y-auto mt-16 mb-16 ${theme === 'dark' ? '' : 'bg-[#F5F5F5]'}`}>
            <Chats messages={messages} theme={theme} />
          </main>
        </>
      )}
      <div className={`absolute bottom-0 left-0 right-0 z-10 rounded-b-xl ${theme === "dark" ? "bg-[#697565] text-white" : "bg-[#F5F5F5] text-black"}`}>
        <BottomContainer addMessage={addMessage} theme={theme} onFocus={handleExpand} />
      </div>
    </div>
  );
};

export default FrontChatApp;