import { ThemeProvider } from '@emotion/react';
import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import { Chip } from '../../elements/Chip';
import { theme } from '../../theme';
import { ContextMenu } from '../navigation/ContextMenu';
import { AddComment } from './AddComment';
import { SingleComment } from './SingleComment';

interface Comment {
  author: {
    userId: string;
    username: string;
    avatarUrl: string;
  };
  createdAt: string;
  comment: string;
  likeCount: number;
  id: string;
  replies?: Comment[];
  likes?: Like[];
}
export interface Like {
  id: string;
}

interface Props {
  likeCount: number;
  data: Comment[];
  usersComments: Comment[];
  loading: boolean;
  options?: { label: string; key: string }[];
  showMoreComments?: boolean;
  onComment: (comment: string) => void;
  onReply?: (id: string) => void;
  onLike?: (commentId: string) => void;
  onShowMoreClick?: () => void;
  onAvatarClick?: (comment: Comment) => void;
  onMenuItemClick?: (key: string, index: number) => void;
  isLiked?: boolean;
  onLikeClick?: (id?: string) => void;
  onCommentLike?: (id?: string) => void;
  profilePic?: string;
  showMore?: boolean;
  lastItemIsAlert?: boolean;
}

export const CommentStack = ({
  data,
  usersComments,
  loading = false,
  onReply,
  options,
  onComment,
  onShowMoreClick,
  showMoreComments = false,
  onAvatarClick,
  onMenuItemClick,
  onCommentLike,
  profilePic,
  showMore,
  lastItemIsAlert
}: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [index, setIndex] = useState(0);
  const open = Boolean(anchorEl);

  const handleClick = (event: any, index: number) => {
    setAnchorEl(event.currentTarget);
    setIndex(index);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          data-testid={`comment-stack-box-1-ds`}
          sx={{ bgcolor: 'common.white', width: '100%' }}
        >
          <Stack
            data-testid={`comment-stack-user-comment-ds`}
            flexDirection={'column'}
            spacing={'20px'}
            mt={'20px'}
          >
            {usersComments?.length > 0 &&
              usersComments?.map((comment, index) => {
                return (
                  <SingleComment
                    data-testid={`comment-stack-single-user-comment-${index}-ds`}
                    key={index}
                    commentId={comment.id}
                    username={comment.author.username}
                    date={comment.createdAt}
                    numLikes={comment.likeCount}
                    comment={comment.comment}
                    profilePic={comment.author?.avatarUrl || ''}
                    onLikeClick={() => onCommentLike?.(comment.id)}
                    onReply={() => onReply?.(comment.id)}
                    onMenuItemClick={(e) => handleClick(e, index)}
                    isLiked={comment?.likes?.length ? true : false}
                    onAvatarClick={() => onAvatarClick?.(comment)}
                  />
                );
              })}
            {data?.length > 0 &&
              data?.map((comment, index) => {
                return (
                  <SingleComment
                    data-testid={`comment-stack-single-data-comment-${index}-ds`}
                    key={index}
                    commentId={comment.id}
                    username={comment.author.username}
                    date={comment.createdAt}
                    numLikes={comment.likeCount}
                    comment={comment.comment}
                    profilePic={comment.author?.avatarUrl || ''}
                    onReply={() => onReply?.(comment.id)}
                    onMenuItemClick={(e) => handleClick(e, index)}
                    isLiked={comment?.likes?.length ? true : false}
                    onLikeClick={() => onCommentLike?.(comment.id)}
                  />
                );
              })}
          </Stack>
          {showMoreComments && (
            <Box
              data-testid={`show-${showMore ? 'more' : 'less'}-comments-ds`}
              width={'100%'}
              textAlign={'center'}
              mt={1}
            >
              <Chip
                data-testid={`comment-stack-chip-ds`}
                label="Show more comments"
                variant={'light'}
                onClick={() => onShowMoreClick?.()}
              />
            </Box>
          )}
          <Box mt={'20px'}>
            <AddComment
              data-testid={`comment-stack-add-comment-ds`}
              loading={loading}
              onSubmit={onComment}
              profilePic={profilePic}
            />
          </Box>
        </Box>
        <ContextMenu
          data-testid={`comment-stack-context-menu-ds`}
          options={options ?? []}
          open={open}
          anchorEl={anchorEl}
          setAnchorEl={setAnchorEl}
          onClick={(e: string) => {
            onMenuItemClick?.(e, index);
          }}
          lastItemIsAlert={lastItemIsAlert}
          disableMobilePanel={true}
        />
      </ThemeProvider>
    </>
  );
};
