import { Stack, Typography } from '@mui/material';
import React from 'react';
import { RxCrossCircled } from 'react-icons/rx';

const Empty = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '40vh' }}
    >
      <RxCrossCircled size={50} color="red" />
      <Typography>Someting went wrong!</Typography>
    </Stack>
  );
};

export default Empty;
