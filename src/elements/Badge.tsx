import { ThemeProvider } from '@emotion/react';
import { SxProps, Theme } from '@mui/material';
import MuiBadge from '@mui/material/Badge';
import { colors } from '../styles/colors';
import { theme } from '../theme';

interface Props {
  children?: React.ReactNode;
  number?: number;
  variant?: 'dot' | 'standard';
  sx?: SxProps<Theme>;
}

export const Badge = (props: Props) => {
  const variant = props.number ? 'standard' : 'dot';
  return (
    <ThemeProvider theme={theme}>
      <MuiBadge
        data-testid={`badge-${props.variant || 'standard'}-${
          props.number || 'no-number'
        }`}
        badgeContent={props.number}
        variant={variant}
        overlap="circular"
        sx={{
          '& .MuiBadge-badge': {
            color: colors.white
          },
          ...props.sx
        }}
        max={99}
      >
        {props.children}
      </MuiBadge>
    </ThemeProvider>
  );
};
