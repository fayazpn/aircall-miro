import { Stack, Typography } from '@mui/material';
import React from 'react';
import { TbFaceIdError } from 'react-icons/tb';

const Error = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '40vh' }}
    >
      <TbFaceIdError size={50} color="red" />
      <Typography>Someting went wrong!</Typography>
    </Stack>
  );
};

export default Error;
