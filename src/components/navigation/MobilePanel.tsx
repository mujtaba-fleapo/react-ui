import { ThemeProvider } from '@emotion/react';
import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  SxProps,
  Theme
} from '@mui/material';
import * as React from 'react';
import { Typography } from '../../elements/Typography';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface Option {
  label: string;
  key: string;
}

interface Props {
  options: Option[];
  open: boolean;
  onClose: () => unknown;
  onClick: (key: string) => unknown;
  lastItemIsAlert?: boolean;
  sx?: SxProps<Theme>;
}

export const MobilePanel = ({
  options,
  open,
  onClose,
  onClick,
  lastItemIsAlert,
  sx
}: Props) => {
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      )
        return;

      onClose();
    };

  const list = (anchor: Anchor, options: Option[]) => (
    <Box
      data-testid={`mobile-panel-ds`}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List component="ul" sx={{ ...sx, width: '100%', py: 3, px: 2, m: 0 }}>
        {options?.map((item, index) => (
          <ListItem
            data-testid={`mobile-panel-item-${item.label
              .replace(/\s+/g, '-')
              .toLowerCase()}-ds`}
            onClick={() => onClick(item.key)}
            key={index}
            sx={{
              cursor: 'pointer',
              '&:not(:first-child)': {
                paddingTop: '12px'
              },
              '&:not(:last-child)': {
                paddingBottom: '12px',
                borderBottom: `1px solid ${colors.lightgray[400]}`
              },
              p: 0,
              width: '100%',
              textAlign: 'left'
            }}
          >
            <Typography
              sx={{
                color:
                  lastItemIsAlert && index === options.length - 1
                    ? colors.attentionOrange
                    : 'inherit'
              }}
              className="interSemibold14"
            >
              {item.label}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Drawer
          data-testid={`mobile-panel-drawer-ds`}
          anchor={'bottom'}
          open={open}
          onClose={toggleDrawer('bottom', false)}
          slotProps={{
            backdrop: {
              sx: {
                background: { md: 'transparent' }
              }
            }
          }}
        >
          {list('bottom', options)}
        </Drawer>
      </React.Fragment>
    </ThemeProvider>
  );
};

export const ShowMobilePanel = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = (key: string) => {
    console.log(key);
  };
  return (
    <>
      <Button
        data-testid={`mobile-panel-button-open-ds`}
        onClick={() => setOpen(true)}
      >
        Show Mobile Panel
      </Button>
      <MobilePanel
        data-testid={`mobile-panel-options-ds`}
        options={[
          { label: 'Link', key: 'link1' },
          { label: 'Link', key: 'link2' },
          { label: 'Link', key: 'link3' }
        ]}
        open={open}
        onClose={() => setOpen(false)}
        onClick={handleClick}
      />
    </>
  );
};
