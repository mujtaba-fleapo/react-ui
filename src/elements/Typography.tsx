import { ThemeProvider } from '@emotion/react';
import { SxProps, Theme } from '@mui/material';
import MuiTypography from '@mui/material/Typography';
import { theme } from '../theme';

interface Props {
  children: React.ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
}

export const Typography = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiTypography
        data-testid={`typography-ds`}
        className={props.className}
        sx={props.sx}
      >
        {props.children}
      </MuiTypography>
    </ThemeProvider>
  );
};
