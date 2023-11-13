import { ThemeProvider } from '@emotion/react';

import { Box, IconButton } from '@mui/material';
import { PostThumbnail } from '../../elements/PostThumbnail';
import { theme } from '../../theme';

import { ListItem, Stack } from '@mui/material';
import { Typography } from '../../elements/Typography';
import { Comment, Eye, Heart, Horizontaldots } from '../../elements/icons';
import { colors } from '../../styles/colors';

interface Props {
  key: number;
  data: {
    image: string;
    content: string;
    views: string;
    likes: string;
    comments: string;
    posted: string;
  };
  handleClick: (e: any) => void;
}

export const MobileTableRowPost = ({ key, data, handleClick }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <ListItem
        data-testid={`mobile-table-row-post-${
          // key not working currently
          key
            ? key
            : data.content.replace(/\s+/g, '-').toLowerCase().slice(0, 7)
        }-ds`}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '24px',
          borderBottom: `1px solid ${colors.lightgray[400]}`,
          px: 0,
          py: 1,
          '&:first-child': { borderTop: `1px solid ${colors.lightgray[400]}` }
        }}
      >
        <Stack direction="row" gap={1}>
          <PostThumbnail
            src={data.image}
            width="40px"
            height="40px"
            sx={{
              borderRadius: '3px'
            }}
          />
          <Box>
            <Typography className="interSemibold13">{data.content}</Typography>
            <Typography className="interRegular13">
              <Box display={'flex'} alignItems={'center'} sx={{ gap: '12px' }}>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  sx={{
                    gap: '4px'
                  }}
                >
                  <Eye /> {data.views}
                </Box>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  sx={{
                    gap: '4px'
                  }}
                >
                  <Heart /> {data.likes}
                </Box>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  sx={{
                    gap: '4px'
                  }}
                >
                  <Comment /> {data.comments}
                </Box>
                <Box
                  display={'flex'}
                  alignItems={'center'}
                  sx={{
                    gap: '4px'
                  }}
                >
                  {data.posted}
                </Box>
              </Box>
            </Typography>
          </Box>
        </Stack>
        <IconButton
          data-testid={`mobile-table-row-post-icon-button-ds`}
          size="large"
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
