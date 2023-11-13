import { ThemeProvider } from '@emotion/react';
import { List } from '@mui/material';
import { theme } from '../../theme';
import { DesktopSubMenuItem } from './DesktopSubMenuItem';

interface Props {
  options: { label: string; key: string }[];
  onClick: (key: string) => void;
}

export const DesktopSubMenu = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <List
        data-testid={`desktop-submenu-ds`}
        sx={{
          width: '100%'
        }}
      >
        {props.options &&
          props.options.map((item) => {
            return (
              <DesktopSubMenuItem
                data-testid={`desktop-submenu-item-ds`}
                key={item.key}
                label={item.label}
                onClick={() => props.onClick?.(item.key)}
              />
            );
          })}
      </List>
    </ThemeProvider>
  );
};
