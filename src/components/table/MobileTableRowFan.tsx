import { ThemeProvider } from '@emotion/react';
import { Avatar } from '../../elements/Avatar';
import { theme } from '../../theme';

import { Box, IconButton } from '@mui/material';

import { ListItem, Stack } from '@mui/material';
import { Typography } from '../../elements/Typography';
import { Horizontaldots } from '../../elements/icons';
import { colors } from '../../styles/colors';

interface Props {
  key: number;
  data: {
    profile: string;
    name: string;
    revenue: string;
    currentSub: string;
    totalSub: string;
    messages: string;
    lastSeen: string;
  };
  handleClick: (e: any) => void;
}

export const MobileTableRowFan = ({ data, handleClick }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <ListItem
        data-testid={`mobile-table-row-fan-list-item-ds`}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          borderBottom: `1px solid ${colors.lightgray[400]}`,
          px: 0,
          py: 1
        }}
      >
        <Stack
          data-testid={`mobile-table-row-fan-stack-ds`}
          direction="row"
          gap={1}
        >
          <Avatar src={data.profile} size={40} />
          <Box>
            <Typography className="interSemibold13">
              {data.name} ${data.revenue}
            </Typography>
            <Typography className="interRegular13">
              {data.currentSub} Sub {data.totalSub} Total {data.messages}{' '}
              Messages
            </Typography>
          </Box>
        </Stack>
        <IconButton
          data-testid={`mobile-table-row-fan-icon-button-ds`}
          size="large"
          edge="end"
          aria-label="more"
          sx={{ color: colors.black, padding: '4px' }}
          onClick={handleClick}
        >
          <Horizontaldots />
        </IconButton>
      </ListItem>
    </ThemeProvider>
  );
};
