import React from 'react';

const TextInput = ({ message, setMessage, addMessage, theme, onFocus }) => {
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
      className={`w-full p-3 rounded-lg ${theme === 'dark' ? 'bg-[#3C3D37] text-[#e9effb] placeholder-[#e9effb]' : 'bg-[#F4EFEF] text-black placeholder-[#608bd8]'} focus:outline-none focus:border-none`}
    />
  );
};

export default TextInput;