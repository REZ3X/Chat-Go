import React, { useEffect, useRef } from "react";
import { Box, Typography } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Chats = ({ messages, theme }) => {
  const chatContainerRef = useRef(null);
  const dummyRef = useRef(null);

  useEffect(() => {
    if (dummyRef.current) {
      dummyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <Box
      ref={chatContainerRef}
      className="chat-container" // Add this class for custom scrollbar styles
      sx={{
        height: '650px',
        overflowY: 'auto',
        padding: '10px',
        margin: '10px',
        borderRadius: '8px',
        backgroundColor: theme === 'dark' ? '#B2B2B2' : '#F5F5F5',
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
                  backgroundColor: chat.role === 'user' ? (theme === 'dark' ? '#3C4048' : '#009ff9') : (theme === 'dark' ? '#605353' : '#FFFFFF'),
                  color: chat.role === 'user' ? '#FFFFFF' : (theme === 'dark' ? '#FFFFFF' : '#000'),
                  wordWrap: 'break-word',
                  boxShadow: theme === 'dark' ? '0 4px 8px rgba(0, 0, 0, 0.3)' : '0 4px 8px rgba(0, 0, 0, 0.1)', // Adjust shadow based on theme
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
        <div ref={dummyRef} />
      </TransitionGroup>
    </Box>
  );
};

export default Chats;