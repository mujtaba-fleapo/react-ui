import { ThemeProvider } from '@emotion/react';
import { Box, Divider, Stack } from '@mui/material';
import { Avatar } from '../../elements/Avatar';
import { Logo } from '../../elements/Logo';
import { PillButton } from '../../elements/PillButton';
import { Typography } from '../../elements/Typography';
import { Cards, Live, Messageblast } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';
import { DesktopCreatorMenu } from './DesktopCreatorMenu';

export interface NavigationItem {
  title: string;
  path: string;
}

export interface DesktopCreatorNavigationProps {
  onRouteChange: (path: string) => any;
  onNewPost: () => any;
  onMessageBlast: () => any;
  onLiveStream: () => any;
  onNotificationsClick: () => any;
  onAvatarClick: () => any;
  NavigationItems: NavigationItem[];
  name: string;
  imageURL: string;
  notificationCount: number;
  messagesCount: number;
  activePath?: string;
}

export const DesktopCreatorNavigation = ({
  onRouteChange,
  onNewPost,
  onMessageBlast,
  onLiveStream,
  onNotificationsClick,
  onAvatarClick,
  NavigationItems,
  name,
  imageURL,
  messagesCount,
  notificationCount,
  activePath
}: DesktopCreatorNavigationProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        data-testid={`desktop-creator-navigation-container-ds`}
        position={'fixed'}
        width={'100%'}
        alignItems={'center'}
        zIndex={1000}
        bgcolor={'#fff'}
        p={'0 16px'}
      >
        <Box width={'100%'} maxWidth={'1180px'}>
          <Stack
            data-testid={`creator-nav-top-container-ds`}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{ height: '48px' }}
          >
            <Box>
              <Logo size={130.576} />
            </Box>
            <Box
              marginRight="6rem"
              p={0.25}
              borderRadius={1}
              width="70px"
              sx={{
                color: '#555',

                background:
                  'linear-gradient(0.25turn, #F68EDB, #A9E9F1, #FDDCC5)'
              }}
            >
              <Typography className="interSemibold10">Coming Soon</Typography>
            </Box>

            <Stack
              data-testid={`creator-nav-top-right-container-ds`}
              direction={'row'}
              alignItems={'center'}
              sx={{ color: colors.black }}
              gap={'20px'}
            >
              {/* <Box
                data-testid={`creator-notifcation-bell-ds`}
                sx={{ cursor: 'pointer' }}
                onClick={onNotificationsClick}
              >
                <Badge number={notificationCount}>
                  <Notification size="24px" />
                </Badge>
              </Box> */}

              <Box
                data-testid={`creator-avatar-name-container-ds`}
                sx={{ display: { xs: 'none', md: 'block', cursor: 'pointer' } }}
                onClick={onAvatarClick}
              >
                <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
                  <Avatar size={28} src={imageURL} alt="NavigationProfile" />
                  <Typography className="interSemibold14">{name}</Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>

          <Divider sx={{ display: { xs: 'none', md: 'block' } }} />

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              height={'65px'}
              alignItems={'center'}
            >
              <DesktopCreatorMenu
                activePath={activePath}
                NavigationItems={NavigationItems}
                messagesCount={messagesCount}
                onRouteChange={onRouteChange}
              />

              <Stack direction={'row'} gap={'8px'}>
                <PillButton
                  size="small"
                  onClick={onNewPost}
                  text="New Post"
                  icon={<Cards />}
                />
                <PillButton
                  size="small"
                  onClick={onMessageBlast}
                  text="Message Blast"
                  icon={<Messageblast />}
                />
                <PillButton
                  size="small"
                  onClick={onLiveStream}
                  text="Live Stream"
                  icon={<Live />}
                />
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </ThemeProvider>
  );
};
