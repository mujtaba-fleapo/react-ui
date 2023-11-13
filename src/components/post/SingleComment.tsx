import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import MuiCheckbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import { Avatar } from '../../elements/Avatar';
import { Typography } from '../../elements/Typography';
import { Heart, Heartfilled, Horizontaldots } from '../../elements/icons';
import { theme } from '../../theme';
interface Props {
  commentId: string;
  username: string;
  date: string;
  numLikes: number;
  comment: string;
  profilePic: string;
  onReply?: () => void;
  onLike?: (commentId: string) => void;
  onMenuItemClick?: (e: any) => void;
  onAvatarClick?: () => void;
  isLiked?: boolean;
  onLikeClick?: (e: boolean) => void;
}

export const SingleComment = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Card
        data-testid={`single-comment-container-${props.commentId}-f`}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          height: 'auto',
          padding: 0,
          bgcolor: 'transparent',
          border: 'none',
          boxShadow: 'none',
          '&:not(:first-child)': {
            marginTop: { xs: 2, sd: '20px' }
          }
        }}
      >
        <Stack
          data-testid={`single-comment-stack-ds`}
          direction={'row'}
          alignItems={'start'}
          spacing={1}
          width={'100%'}
        >
          <Avatar
            data-testid={`single-comment-avatar-ds`}
            src={props.profilePic}
            size={{ xs: 28, md: 38 }}
            alt="Profile Pic"
            onClick={() => props.onAvatarClick?.()}
          />
          <Box width={'100%'}>
            <Typography className="interSemibold13">
              {props.username}
              {'  '}
              <Typography
                className="interRegular13"
                sx={{ display: 'inline', wordBreak: 'break-all' }}
              >
                {props.comment}
              </Typography>
            </Typography>

            <Stack
              direction={'row'}
              alignItems={'center'}
              spacing={1}
              mt={'5px'}
            >
              <Typography className="interMedium12">
                {new Date(props.date).toLocaleDateString()}
              </Typography>
              <Typography className="interMedium12">
                {props.numLikes ?? 0} {props.numLikes === 1 ? 'Like' : 'Likes'}{' '}
              </Typography>
              <Box onClick={(e) => props.onReply?.()}>
                {/* <Typography className="interMedium12">
                  {''} {'Reply'}{' '}
                </Typography> */}
              </Box>
              <Box
                onClick={(e) => props.onMenuItemClick?.(e)}
                sx={{ display: 'flex', cursor: 'pointer' }}
              >
                <Horizontaldots />
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Box data-testid={`single-comment-box-ds`}>
          <MuiCheckbox
            data-testid={`single-comment-multi-check-box-ds`}
            checked={props.isLiked}
            onChange={(e) => props.onLikeClick?.(e.target.checked)}
            icon={<Heart />}
            checkedIcon={<Heartfilled />}
            sx={{
              padding: '0',
              '& .MuiSvgIcon-root': {
                width: '1.25rem',
                height: '1.25rem'
              }
            }}
          />
        </Box>
      </Card>
    </ThemeProvider>
  );
};
