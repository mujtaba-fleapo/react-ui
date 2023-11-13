import { ThemeProvider } from '@emotion/react';
import { ListItem } from '@mui/material';
import { Typography } from '../../elements/Typography';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';
interface Props {
  label: string;
  key: string;
  onClick: (key: string) => void;
}
export const DesktopSubMenuItem = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <ListItem
        data-testid={`desktop-submenu-${props.label
          .replace(/\s+/g, '-')
          .toLowerCase()}-ds`}
        onClick={() => props.onClick(props.key)}
        sx={{
          p: 2,

          '&:not(:last-child)': {
            borderBottom: `1px solid ${colors.lightgray[200]}`
          },
          cursor: 'pointer'
        }}
      >
        <Typography className="interMedium14">{props.label}</Typography>
      </ListItem>
    </ThemeProvider>
  );
};
