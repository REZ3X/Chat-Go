import React from 'react';
import IconButton from '@mui/material/IconButton';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const UploadFileButton = ({ theme }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log('File selected:', file);
      // Handle the file upload logic here
    }
  };

  return (
    <div>
      <input
        accept="*"
        style={{ display: 'none' }}
        id="upload-file-input"
        type="file"
        onChange={handleFileUpload}
      />
      <label htmlFor="upload-file-input">
        <IconButton aria-label="upload file" component="span">
          <UploadFileIcon sx={{ color: theme === 'dark' ? '#e9effb' : '#608bd8' }} />
        </IconButton>
      </label>
    </div>
  );
};

export default UploadFileButton;