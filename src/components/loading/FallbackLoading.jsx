import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const FallbackLoading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default FallbackLoading;
