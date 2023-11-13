import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import { useState } from 'react';
import { Avatar } from '../../elements/Avatar';
import { Badge } from '../../elements/Badge';
import { Typography } from '../../elements/Typography';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  key?: number;
  channelId: string;
  name: string;
  message: string;
  time: string;
  photo: string;
  unread: boolean;
  revenue: number;
  onClick: (channelId: string) => void;
}

export const MessageRow = (props: Props) => {
  const [active, setActive] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <Box
        // key not working from dashboard, but is working from messageRowStack
        data-testid={`message-row-${
          props.name
            ? props.name.replace(/\s+/g, '-').toLowerCase()
            : props.channelId
        }-ds`}
        key={props.channelId}
        display={'flex'}
        alignItems={'center'}
        gap={1}
        width={'100%'}
        onClick={() => props.onClick(props.channelId)}
        className="active"
        sx={{
          '&:hover': {
            background: colors.lightgray[200]
          },
          '&:not(:last-child)': {
            borderBottom: { xs: `1px solid ${colors.lightgray[400]}`, md: 0 }
          },
          cursor: 'pointer',
          padding: '8px 0',
          borderRadius: { xs: 0, md: '4px' }
        }}
      >
        <Box>
          <Avatar src={props.photo} />
        </Box>
        <Box flex={1}>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            gap={1}
          >
            <Typography
              className="interSemibold13"
              sx={{ wordBreak: 'break-all' }}
            >
              {props.name}
            </Typography>
            <Typography className="interMedium12" sx={{ whiteSpace: 'nowrap' }}>
              {props.time}
            </Typography>
          </Box>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Typography className="interRegular13">
              <Box className="text-truncate" width={180}>
                {props.message}
              </Box>
            </Typography>
            <Box position={'relative'} left={-5}>
              {props.unread && <Badge variant="dot" />}
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
