import { Box } from '@mui/material';

import { ThemeProvider } from '@emotion/react';
import { Typography } from '../../elements/Typography';
import { theme } from '../../theme';

interface DesktopProps {
  active: boolean;
  text: string;
  onClick?: () => unknown;
}

export const DesktopTabText = (props: DesktopProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`desktop-tab-text-${props.text
          .replace(/\s+/g, '-')
          .toLowerCase()}-ds`}
        onClick={props.onClick}
        sx={{ borderBottom: props.active ? 1 : 0 }}
      >
        <Typography
          className="interMedium16"
          sx={{ opacity: props.active ? 1 : 0.5 }}
        >
          {props.text}
        </Typography>
      </Box>
    </ThemeProvider>
  );
};
