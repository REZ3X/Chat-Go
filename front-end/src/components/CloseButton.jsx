import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const CloseButton = ({ onClick, theme }) => {
  return (
    <IconButton aria-label="close chat" onClick={onClick}>
      <CloseIcon sx={{ color: theme === 'dark' ? '#e9effb' : '#ffffff' }} />
    </IconButton>
  );
};

export default CloseButton;