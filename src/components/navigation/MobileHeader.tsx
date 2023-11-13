import { ThemeProvider } from '@emotion/react';
import { Box, IconButton, Stack, useMediaQuery } from '@mui/material';
import { ReactElement, useState } from 'react';
import { Badge } from '../../elements/Badge';
import { Logo } from '../../elements/Logo';
import { Typography } from '../../elements/Typography';
import { Horizontaldots, LeftArrow, Notification } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';
import { ContextMenu } from './ContextMenu';

interface MobileHeaderProps {
  notificationCount?: number;
  onNotificationsClick?: () => unknown;
  state?: string;
  variant?: 'white' | 'reverse';
  title?: ReactElement | string;
  onBackClick?: () => unknown;
  options?: {
    label: string;
    key: string;
  }[];
  onMenuItemClick?: (e: string) => unknown;
  lastItemIsAlert?: boolean;
}

export const MobileHeader = ({
  notificationCount = 0,
  state,
  variant,
  title,
  onNotificationsClick,
  onBackClick,
  options,
  onMenuItemClick,
  lastItemIsAlert
}: MobileHeaderProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const Home = () => {
    return (
      <Stack
        data-testid={`mobile-header-stack-ds`}
        direction={'row'}
        width={'100%'}
        bgcolor={colors.white}
        height={'64px'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Logo size={130.576} />
        {false && ( // use onNotificationsClick
          <Box
            data-testid={`mobile-header-notification-box-ds`}
            sx={{ cursor: 'pointer' }}
            onClick={onNotificationsClick}
          >
            {!isMobile && (
              <Badge number={notificationCount}>
                <Notification size="24px" />
              </Badge>
            )}
          </Box>
        )}
      </Stack>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {state === 'home' ? (
          <Home />
        ) : (
          <Stack
            direction={'row'}
            spacing={options ? 0 : 12}
            width={'100%'}
            bgcolor={variant === 'white' ? colors.white : 'transparent'}
            color={variant === 'white' ? colors.black : colors.white}
            height={'64px'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box width="40px">
              {onBackClick && (
                <IconButton onClick={() => onBackClick?.()}>
                  <LeftArrow
                    color={variant === 'white' ? '#000' : '#fff'}
                    size="24px"
                  />
                </IconButton>
              )}
            </Box>

            <Typography
              sx={{ margin: '0!important' }}
              className="interSemibold16"
            >
              {title}
            </Typography>
            <Box width="40px" margin="0!important">
              {options && (
                <IconButton>
                  <Horizontaldots
                    color={variant === 'white' ? '#000' : '#fff'}
                    size="24px"
                  />
                </IconButton>
              )}
            </Box>
          </Stack>
        )}
      </Box>
      <ContextMenu
        data-testid={`mobile-header-context-menu-ds`}
        options={options ?? []}
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        onClick={(e: string) => onMenuItemClick?.(e)}
        lastItemIsAlert={lastItemIsAlert === false ? false : true}
      />
    </ThemeProvider>
  );
};
