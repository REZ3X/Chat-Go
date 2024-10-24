import React from 'react';

const TextInput = ({ message, setMessage, addMessage, onFocus }) => {
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && message.trim()) {
      addMessage(message);
      setMessage('');
    }
  };

  return (
    <input
      type="text"
      placeholder="Type a message..."
      value={message}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      onFocus={onFocus}
      className="w-full p-3 rounded-lg bg-[#F4EFEF] text-black placeholder-[#608bd8] focus:outline-none dark:bg-[#ab9f9f] dark:text-[#e9effb] dark:placeholder-[#e9effb]"
    />
  );
};

export default TextInput;