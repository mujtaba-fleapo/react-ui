import { ThemeProvider } from '@emotion/react';

import { Box, IconButton } from '@mui/material';
import { theme } from '../../theme';

import { ListItem, Stack } from '@mui/material';
import { Avatar } from '../../elements/Avatar';
import { Typography } from '../../elements/Typography';
import { Horizontaldots } from '../../elements/icons';
import { colors } from '../../styles/colors';

interface Props {
  key: string;
  data: any;
  handleClick: (e: any) => unknown;
  hasActions?: boolean;
  circularImages?: boolean;
  imageKey?: string;
  headers: { icon: React.ReactNode | string; title: string; key: string }[];
  showThreeDots?: boolean;
}

export const MobileTableRow = ({
  key,
  data,
  handleClick,
  hasActions,
  showThreeDots = true,
  circularImages,
  imageKey,
  headers
}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <ListItem
        data-testid={`mobile-table-row-${
          key
            ? key
            : data?.content?.replace(/\s+/g, '-')?.toLowerCase()?.slice(0, 7)
        }-ds`}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          borderBottom: `1px solid ${colors.lightgray[400]}`,
          px: 0,
          py: 1,
          '&:first-child': { borderTop: `1px solid ${colors.lightgray[400]}` }
        }}
      >
        <Stack direction="row" gap={1}>
          {imageKey &&
            (circularImages ? (
              <Avatar size="40px" src={data[imageKey]} />
            ) : (
              <img
                src={data[imageKey]}
                width="40px"
                height="40px"
                style={{ borderRadius: '3px' }}
              />
            ))}
          <Box flex={'1'}>
            <Typography className="interSemibold13">
              <Box
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  width: '100%',
                  maxWidth: '225px'
                }}
              >
                {data[headers[0]?.key]}
              </Box>
            </Typography>
            <Typography className="interRegular13">
              <Box
                display={'flex'}
                alignItems={'center'}
                sx={{ gap: '12px' }}
                flexWrap={'wrap'}
              >
                {headers.slice(1).map((item, index) => {
                  return (
                    <Box
                      display={'flex'}
                      alignItems={'center'}
                      sx={{ gap: '4px' }}
                    >
                      {item.icon} {data[item.key]}
                    </Box>
                  );
                })}
              </Box>
            </Typography>
          </Box>
        </Stack>

        {hasActions && (
          <Box width={'24px'}>
            {showThreeDots && (
              <IconButton
                size="large"
                edge="end"
                aria-label="more"
                sx={{ color: colors.black, padding: '4px' }}
                onClick={handleClick}
              >
                <Horizontaldots />
              </IconButton>
            )}
          </Box>
        )}
      </ListItem>
    </ThemeProvider>
  );
};
