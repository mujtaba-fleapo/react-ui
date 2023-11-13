import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import { Typography } from '../../elements/Typography';
import { theme } from '../../theme';

interface Props {
  caption: string;
}

export const PostCaption = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`post-caption-container-ds`}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}
      >
        <Typography className="interRegular14">{props.caption}</Typography>
      </Box>
    </ThemeProvider>
  );
};
