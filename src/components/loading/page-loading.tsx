import React from 'react';

import LinearProgress from '@mui/material/LinearProgress';
import { CircularProgress, Stack } from '@mui/material';

export const PageLoading = () => {
  return (
    <Stack
      direction="column"
      gap={1}
      sx={{
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: '99999'
      }}
    >
      <LinearProgress
        color="secondary"
        sx={{
          width: '100%',
          height: 4,
          backgroundColor: '#000',
          '& .MuiLinearProgress-bar': {
            backgroundColor: '#ccc'
          }
        }}
        variant="indeterminate"
      />
      <CircularProgress
        color="secondary"
        size={24}
        sx={{ marginLeft: '8px' }}
      />
    </Stack>
  );
};
