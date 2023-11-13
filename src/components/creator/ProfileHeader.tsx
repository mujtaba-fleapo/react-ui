import { ThemeProvider } from '@emotion/react';
import { Box, Card, CardActions, CardContent, CardMedia } from '@mui/material';

import { theme } from '../../theme';

import { Typography } from '../../elements/Typography';

import { Stack } from '@mui/material';
import { Avatar } from '../../elements/Avatar';
import { PillButton } from '../../elements/PillButton';
import {
  Cards,
  Circlemoney,
  Lock,
  Message,
  Subscription
} from '../../elements/icons';
import { colors } from '../../styles/colors';

export interface ProfileHeaderProps {
  bioText: string;
  firstName: string;
  lastName: string;
  userName: string;
  profilePic: string;
  totalPosts: number;
  totalFollowers?: number;
  onMessage: () => unknown;
  onTip?: () => unknown;
  onSubscribe?: () => unknown;
  isSubscribed?: boolean;
  onOptionsClick?: () => unknown;
  backgroundImage?: string;
  tipjarOptions?: { id: string; tipAmount: number; tipFor: string }[];
  onTipJarClick?: (id: string) => unknown;
}

export const ProfileHeader = ({
  profilePic,
  firstName,
  lastName,
  userName,
  bioText,
  onMessage,
  onTip,
  onSubscribe,
  totalPosts,
  totalFollowers,
  isSubscribed,
  onOptionsClick,
  backgroundImage,
  tipjarOptions,
  onTipJarClick
}: ProfileHeaderProps) => {
  const profileHeaderBackgrounColour: string[] = [
    '#55baa6',
    '#bb9bb0',
    '#23395b',
    '#2673cb',
    '#4b85ad'
  ];

  const randomIndex: number = Math.floor(
    Math.random() * profileHeaderBackgrounColour.length
  );

  const randomColor: string = profileHeaderBackgrounColour[randomIndex];

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Card
          data-testid={`profile-header-card-1-ds`}
          sx={{
            position: 'relative',
            borderRadius: 0,
            backgroundColor: backgroundImage ? '' : randomColor,
            boxShadow: 'unset',
            padding: {
              xs: '92px 16px 16px 16px',
              md: '160px 20px 20px 20px'
            },
            width: { xs: '120%', md: '100%' },
            margin: { xs: '0 -16px 0 -16px', md: 0 }
          }}
          className="desktop-profile-header"
        >
          <CardMedia
            data-testid={`profile-header-card-media-ds`}
            image={backgroundImage ?? ''}
            component="img"
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100%',
              height: '100%',
              borderRadius: { xs: 0, md: '4px' }
            }}
          />

          {/* <IconButton
            data-testid={`profile-header-options-click-ds`}
            onClick={onOptionsClick}
            sx={{
              color: colors.lightgray[300],
              position: 'absolute',
              top: 0,
              right: 0
            }}
          >
            <Horizontaldots />
          </IconButton> */}
          <CardContent
            data-testid={`profile-header-card-content-1-ds`}
            className="card-content"
            sx={{
              position: 'relative',
              p: 0
            }}
            style={{ padding: 0 }}
          >
            <Card
              data-testid={`profile-header-card-user-details-ds`}
              className="flex-center-start "
              sx={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                backgroundColor: 'transparent',
                borderRadius: 0,
                boxShadow: 'unset',
                gap: '20px'
              }}
            >
              <Avatar
                src={profilePic}
                size={{ xs: 80, md: 120 }}
                alt="Profile Picture"
              />

              <Box
                sx={{ display: 'flex', flexDirection: 'column', p: 0 }}
                style={{ padding: 0 }}
              >
                <CardContent
                  data-testid={`profile-header-names-ds`}
                  style={{ padding: 0 }}
                  sx={{
                    flex: '1 0 auto',
                    color: colors.white
                  }}
                  className="card-content"
                >
                  <Box sx={{ bottom: 0, pb: 0, pl: '0' }}>
                    <Typography className="interSemibold24">
                      {firstName} {lastName}
                    </Typography>
                    <Typography className="interRegular14 ">
                      @{userName}
                    </Typography>
                    <Stack
                      direction={'row'}
                      spacing={'12px'}
                      alignItems={'center'}
                      mt={1}
                    >
                      <Box>
                        <Stack
                          direction={'row'}
                          spacing={'4px'}
                          alignItems={'center'}
                        >
                          <Cards />
                          <Typography className="interMedium12">
                            {totalPosts}
                          </Typography>
                        </Stack>
                      </Box>
                      <Box>
                        <Stack
                          data-testid={`profile-header-stack-1-ds`}
                          direction={'row'}
                          spacing={'4px'}
                          alignItems={'center'}
                        >
                          <Lock />
                          <Typography className="interMedium12">
                            {totalFollowers}
                          </Typography>
                        </Stack>
                      </Box>
                    </Stack>
                  </Box>
                </CardContent>
              </Box>
            </Card>
          </CardContent>
        </Card>

        <Card
          data-testid={`profile-header-card-2-ds`}
          sx={{
            background: 'transparent',
            boxShadow: 'unset',
            borderRadius: 0,
            padding: 0
          }}
        >
          <CardContent
            data-testid={`profile-header-interaction-buttons-ds`}
            sx={{ padding: 0 }}
          >
            <CardActions
              data-testid={`profile-header-card-actions-ds`}
              sx={{ px: 0, p: '20px 0 12px 0' }}
            >
              {!isSubscribed && (
                <PillButton
                  text={
                    <>
                      Subscribe&nbsp;
                      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        from $6/mo
                      </Box>
                    </>
                  }
                  variant="primary"
                  icon={<Subscription />}
                  size="medium"
                  onClick={() => onSubscribe?.()}
                />
              )}
              <PillButton
                text="Message"
                variant="primary"
                icon={<Message />}
                size="medium"
                onClick={() => onMessage?.()}
              />
              <PillButton
                text="Tip"
                variant="primary"
                icon={<Circlemoney />}
                size="medium"
                onClick={() => onTip?.()}
              />
            </CardActions>
            {/* Tip Jars Start */}
            {tipjarOptions && tipjarOptions.length > 0 && (
              <Box
                data-testid={`profile-header-tip-jar-box-ds`}
                sx={{
                  px: 0,
                  py: 0,
                  overflow: 'auto',
                  paddingBottom: '15px'
                }}
              >
                <Stack direction={'row'} gap={1} width={'100%'}>
                  {tipjarOptions.map((tip, i) => (
                    <Box data-testid={`profile-header-tip-jar-box-${i}-ds`}>
                      <PillButton
                        text={tip.tipFor}
                        variant="secondary"
                        size="small"
                        onClick={() => onTipJarClick?.(tip.id)}
                        sx={{ whiteSpace: 'nowrap' }}
                      />
                    </Box>
                  ))}
                </Stack>
              </Box>
            )}

            <Typography className="interRegular14" sx={{ marginTop: '5px' }}>
              {bioText}
            </Typography>
          </CardContent>

          <hr
            style={{
              border: 'none',
              height: '1px',
              backgroundColor: '#E5E5E5',
              margin: '20px 0'
            }}
          />
        </Card>
      </Box>
    </ThemeProvider>
  );
};
