import React, { useEffect, useRef } from "react";
import { Box, Typography } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Chats = ({ messages, theme }) => {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  return (
    <Box
      ref={chatContainerRef}
      className="chat-container" // Add this class for custom scrollbar styles
      sx={{
        height: '400px',
        overflowY: 'auto',
        padding: '10px',
        margin: '10px',
        borderRadius: '8px',
        backgroundColor: theme === 'dark' ? '#697565' : '#F5F5F5',
      }}
    >
      <TransitionGroup>
        {messages.map((chat, index) => (
          <CSSTransition
            key={index}
            timeout={500}
            classNames="chat"
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: chat.role === 'user' ? 'flex-end' : 'flex-start',
                alignItems: 'flex-end',
                marginBottom: '10px',
              }}
            >
              {chat.role === 'bot' && (
                <img
                  src="/bot.jpeg"
                  alt="Bot"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    marginRight: '10px',
                  }}
                />
              )}
              <Box
                className="chat-bubble"
                sx={{
                  maxWidth: '60%',
                  padding: '10px',
                  borderRadius: '10px',
                  backgroundColor: chat.role === 'user' ? '#009ff9' : '#FFFFFF',
                  color: chat.role === 'user' ? '#FFFFFF' : '#000',
                  wordWrap: 'break-word',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add shadow to the chat bubble
                }}
              >
                <Typography variant="body1" sx={{ fontFamily: 'Inter, sans-serif', fontSize: '14px' }}>
                  {chat.message}
                </Typography>
              </Box>
              {chat.role === 'user' && (
                <img
                  src="/ayanggweh.png"
                  alt="User"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    marginLeft: '10px',
                  }}
                />
              )}
            </Box>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Box>
  );
};

export default Chats;