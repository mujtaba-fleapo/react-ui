import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';
import { theme } from '../../theme';
import { PostActions } from './PostActions';
import { PostBody } from './PostBody';
import { PostCaption } from './PostCaption';
import { PostSlider } from './PostSlider';
import { PostTop } from './PostTop';

export interface CreatorPostProps {
  id: string;
  avatarImage: string;
  username: string;
  caption: string;
  likeCount: number;
  commentCount: number;
  isExclusive?: boolean;
  onLikeClick?: () => unknown;
  onCommentClick?: () => unknown;
  onOptionsClick?: (e: string) => unknown;
  onTipClick?: () => unknown;
  onMessageClick?: () => unknown;
  onPostAvatarClick?: () => unknown;
  onUnlockMedia?: () => unknown;
  isLiked?: boolean;
  lastItemIsAlert?: boolean;
  assets: {
    id: string;
    url: string;
    isFree: boolean;
    resizedUrl: string;
    type: string;
  }[];
  options?: {
    label: string;
    key: string;
    onClick?: () => void;
  }[];
  onSubscribeCreator?: () => unknown;
}

export const CreatorPost = ({
  id,
  avatarImage,
  username,
  caption,
  likeCount,
  commentCount,
  onCommentClick,
  onLikeClick,
  onOptionsClick,
  onTipClick,
  onMessageClick,
  onPostAvatarClick,
  assets,
  isLiked,
  options,
  onUnlockMedia,
  lastItemIsAlert,
  isExclusive,
  onSubscribeCreator
}: CreatorPostProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`creator-post-container-${id}-ds`}
        sx={{
          width: '100%',
          display: 'inline-flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0.75rem'
        }}
      >
        <PostTop
          data-testid={`creator-post-top-ds`}
          posterName={username}
          avatarSrc={avatarImage}
          onOptionsClick={(e) => onOptionsClick?.(e)}
          options={options}
          onAvatarClick={onPostAvatarClick}
          lastItemIsAlert={lastItemIsAlert}
        />
        {assets.length === 0 ? (
          <PostBody data-testid={`creator-post-body-ds`} body={caption} />
        ) : (
          <>
            <PostCaption
              data-testid={`creator-post-caption-ds`}
              caption={caption}
            />
            <PostSlider
              data-testid={`creator-post-slider-ds`}
              id={id}
              assets={assets}
              onUnlockMedia={onUnlockMedia}
              isExclusive={isExclusive}
              onSubscribeCreator={onSubscribeCreator}
            />
          </>
        )}
        <PostActions
          data-testid={`creator-post-actions-ds`}
          isLiked={isLiked}
          numLikes={likeCount}
          numComments={commentCount}
          onCommentClick={onCommentClick}
          onLikeClick={onLikeClick}
          onTipClick={onTipClick}
          onMessageClick={onMessageClick}
        />
      </Box>
    </ThemeProvider>
  );
};
