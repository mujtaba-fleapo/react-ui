import { ThemeProvider } from '@emotion/react';
import { Box, Stack } from '@mui/material';
import { Avatar } from '../../elements/Avatar';
import { PillButton } from '../../elements/PillButton';
import { Typography } from '../../elements/Typography';
import { Cards, Lock, Subscription } from '../../elements/icons';
import { theme } from '../../theme';

interface CreatorRowProps {
  firstName: string;
  lastName: string;
  userName: string;
  profilePic: string;
  subPrice: number;
  publicPostCount: number;
  privatePostCount: number;
  showPillButton?: boolean;
  onClick?: (id?: string) => unknown;
  onSubscription?: () => unknown;
}

export const CreatorRow = ({
  firstName,
  lastName,
  userName,
  profilePic,
  subPrice,
  publicPostCount,
  privatePostCount,
  showPillButton,
  onClick,
  onSubscription
}: CreatorRowProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        data-testid={`creator-row-${userName}-ds`}
        width={'100%'}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        gap={'8px'}
      >
        <Stack
          data-testid={`creator-row-stack-${userName}-ds`}
          direction={'row'}
          gap={'12px'}
          alignItems={'center'}
        >
          <Box
            data-testid={`creator-row-avatar-${userName}-ds`}
            sx={{ cursor: 'pointer' }}
          >
            <Avatar
              data-testid={`creator-row-avatar-ds`}
              src={profilePic}
              size={{ xs: '60px', md: '80px' }}
              alt="profilePic"
              onClick={() => onClick?.()}
            />
          </Box>
          <Stack data-testid={`creator-row-details-${userName}-ds`} gap={'8px'}>
            <Box onClick={() => onClick?.()} sx={{ cursor: 'pointer' }}>
              <Typography className="interSemibold16">
                {firstName} {lastName}
              </Typography>
              <Typography
                className="interRegular14 "
                sx={{
                  width: { xs: '120px', md: '100%' },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                @{userName}
              </Typography>
            </Box>

            <Stack
              data-testid={`creator-row-stack-3-ds`}
              direction={'row'}
              gap={'12px'}
            >
              <Stack direction={'row'} gap={'4px'}>
                <Cards data-testid={`creator-row-cards-ds`} />
                <Typography className="interMedium12">
                  {publicPostCount}
                </Typography>
              </Stack>
              <Stack
                data-testid={`creator-row-stack-4-ds`}
                direction={'row'}
                gap={'4px'}
              >
                <Lock data-testid={`creator-row-lock-ds`} />
                <Typography className="interMedium12">
                  {privatePostCount}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        {showPillButton && (
          <Box data-testid={`creator-subscribe-button-${userName}-ds`}>
            <PillButton
              variant="primary"
              size="small"
              text={
                <>
                  Subscribe&nbsp;
                  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    from ${subPrice}/mo
                  </Box>
                </>
              }
              icon={<Subscription />}
              onClick={() => onSubscription?.()}
            />
          </Box>
        )}
      </Stack>
    </ThemeProvider>
  );
};
