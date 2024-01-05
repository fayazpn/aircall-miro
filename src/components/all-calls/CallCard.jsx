import { Stack, Typography } from '@mui/material';

import { secondsToMinutes } from 'date-fns';
import PropTypes from 'prop-types';
import React, { memo } from 'react';
import { FiPhoneIncoming, FiPhoneOutgoing } from 'react-icons/fi';
import {
  LuPhoneCall,
  LuPhoneForwarded,
  LuPhoneMissed,
} from 'react-icons/lu';
import { formatTime } from '../../api/utils';

const CallCard = (props) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      gap={3}
      sx={{
        px: 3,
        py: 1,
        border: 1,
        borderRadius: 4,
        my: 2,
      }}
    >
      <Stack direction="row" alignItems="center" gap={2}>
        {props.direction === 'inbound' ? (
          <FiPhoneIncoming fontSize={20} color="black" />
        ) : (
          <FiPhoneOutgoing fontSize={20} color="orange" />
        )}

        <div>
          <Typography sx={{ fontWeight: 'bold' }}>
            {props.from || 'Unknown'}{' '}
            <span
              style={{
                fontWeight: 400,
                backgroundColor: 'orange',
                padding: '0.1rem 0.3rem',
                borderRadius: '10rem',
                color: 'white',
                fontSize: '0.7rem',
              }}
            >
              {secondsToMinutes(props.duration)} min
            </span>
          </Typography>
          <Typography variant="subtitle2" sx={{ color: 'gray' }}>
            tried to call {props.to || 'Unknown'}
          </Typography>
        </div>
      </Stack>

      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          justifySelf="flex-end"
          variant="subtitle2"
          sx={{ color: 'gray', fontWeight: 'bold' }}
        >
          {formatTime(props.created_at)}
        </Typography>
        {props.call_type === 'answered' ? (
          <LuPhoneCall color="green" />
        ) : props.call_type === 'missed' ? (
          <LuPhoneMissed color="red" />
        ) : (
          <LuPhoneForwarded color="gray" />
        )}
      </Stack>
    </Stack>
  );
};

CallCard.propTypes = {
  from: PropTypes.number,
  call_type: PropTypes.oneOf(['missed', 'answered', 'voicemail'])
    .isRequired,
  created_at: PropTypes.string,
  direction: PropTypes.oneOf(['inbound', 'outbound']).isRequired,
  duration: PropTypes.number,
  id: PropTypes.string,
  is_archived: PropTypes.bool,
  to: PropTypes.number,
  via: PropTypes.number,
};

const MemoizedCallCard = memo(CallCard);

export default MemoizedCallCard;
