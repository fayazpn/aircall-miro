import { Stack, Typography } from '@mui/material';

import React from 'react';
import { FiPhoneIncoming } from 'react-icons/fi';

const CallCard = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
      gap={3}
      sx={{
        px: 3,
        py: 1,
        border: 1,
        borderRadius: 4,
      }}
    >
      <FiPhoneIncoming fontSize={20} color="green" />
      <Stack>
        <Typography sx={{ fontWeight: 'bold' }}>
          + 123 123 123 12
        </Typography>
        <Typography variant="subtitle2" sx={{ color: 'gray' }}>
          tried to call Fayaz
        </Typography>
      </Stack>
      <Typography
        justifySelf="flex-end"
        variant="subtitle2"
        sx={{ color: 'gray', fontWeight: 'bold' }}
      >
        12:34 PM
      </Typography>
    </Stack>
  );
};

export default CallCard;
