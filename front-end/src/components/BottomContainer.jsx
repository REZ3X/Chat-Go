import React, { useState } from "react";
import TextInput from "./TextInput";
import UploadFileButton from "./UploadFileButton";
import SendChatButton from "./SendChatButton";

function BottomContainer({ addMessage, theme, onFocus }) {
  const [message, setMessage] = useState('');

  const clearMessage = () => {
    setMessage('');
  };

  return (
    <div className={`flex flex-col justify-between m-2 rounded-full ${theme === "dark" ? "bg-[#535D50] text-white" : "bg-[#F4EFEF] text-black border border-gray-300"}`}>
      <div className="flex flex-row items-center">
        <UploadFileButton theme={theme} />
        <TextInput message={message} setMessage={setMessage} addMessage={addMessage} onFocus={onFocus} />
        <SendChatButton addMessage={addMessage} message={message} clearMessage={clearMessage} theme={theme} />
      </div>
    </div>
  );
}

export default BottomContainer;