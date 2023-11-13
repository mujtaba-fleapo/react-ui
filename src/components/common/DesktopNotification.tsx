import { ThemeProvider } from '@emotion/react';
import { Box, Stack } from '@mui/material';
import { Avatar } from '../../elements/Avatar';
import { Badge } from '../../elements/Badge';
import { Chip } from '../../elements/Chip';
import { PillButton } from '../../elements/PillButton';
import { Typography } from '../../elements/Typography';
import { Horizontaldots } from '../../elements/icons';
import { theme } from '../../theme';

interface DesktopNotificationProps {
  userName: string;
  profilePic: string;
  message: string;
  text: string;
}

export const DesktopNotification = ({
  userName,
  profilePic,
  message,
  text
}: DesktopNotificationProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`desktop-notification-box-ds`}
        width={'380px'}
        padding={'16px'}
      >
        <Stack direction={'row'} gap={'12px'}>
          <Box>
            <Avatar src={profilePic} size={80} alt="profilePic" />
          </Box>
          <Stack width={'100%'} gap={'4px'}>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Chip label={`${text} `} variant="dark" />
              <Typography className="interMedium12">1d</Typography>
            </Stack>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              width={'100%'}
              gap={'12px'}
            >
              <Typography
                className="interMedium12"
                sx={{
                  width: '258px'
                }}
              >
                <Typography
                  className="interSemibold13"
                  sx={{ display: 'inline-block', paddingRight: '3px' }}
                >
                  {userName}
                </Typography>
                {message}
              </Typography>

              <Badge variant="dot" />
            </Stack>
            <Stack
              alignItems={'center'}
              direction={'row'}
              justifyContent={'space-between'}
            >
              <PillButton
                variant="secondary"
                size="small"
                text="Send Message"
              />
              <Box sx={{ cursor: 'pointer' }}>
                <Horizontaldots />
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};
