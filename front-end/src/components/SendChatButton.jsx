import React from 'react';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

const SendChatButton = ({ addMessage, message, clearMessage, theme }) => {
  const handleClick = () => {
    if (message.trim()) {
      addMessage(message);
      clearMessage();
    }
  };

  return (
    <IconButton aria-label="send chat" onClick={handleClick}>
      <SendIcon sx={{ color: theme === 'dark' ? '#e9effb' : '#608bd8' }} />
    </IconButton>
  );
};

export default SendChatButton;