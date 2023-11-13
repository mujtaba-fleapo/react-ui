import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import { Typography } from '../../elements/Typography';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  body: string;
}

export const PostBody = ({ body }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`post-body-container-ds`}
        sx={{
          width: '100%',
          padding: '0.75rem',
          borderRadius: '0.25rem',
          backgroundColor: colors.lightgray[100]
        }}
      >
        <Typography className="interRegular14">{body}</Typography>
      </Box>
    </ThemeProvider>
  );
};
