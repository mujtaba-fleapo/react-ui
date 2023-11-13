import { ThemeProvider } from '@emotion/react';
import { Box, CardMedia, SxProps, Theme } from '@mui/material';
import { theme } from '../theme';
import { PillButton } from './PillButton';
import { PlayIcon } from './icons';

interface Props {
  alt?: string;
  src: string;
  type?: string;
  height?: string | number;
  width?: string | number;
  className?: string;
  isFree?: boolean;
  sx?: SxProps<Theme>;
  onUnlockMedia?: () => unknown;
  isExclusive?: boolean;
  onSubscribeCreator?: () => unknown;
}

export const PostThumbnail = ({
  alt = 'fanfix',
  src,
  type,
  height = 'auto',
  width = '100%',
  className,
  isFree = true,
  sx,
  onUnlockMedia,
  isExclusive,
  onSubscribeCreator
}: Props) => {
  const checkImage = (url: string) => {
    return url.startsWith('https');
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`post-thumbnail-${
          alt
            ? alt.replace(/\s+/g, '-').toLowerCase()
            : src.slice(src.length - 7, src.length)
        }-ds`}
        sx={{
          position: 'relative',
          width: '100%',
          height: '100%'
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap="20px"
          position="absolute"
          width="100%"
          height="100%"
        >
          {type === 'video' && (
            <Box
              onClick={() => {
                !isFree && isExclusive
                  ? onSubscribeCreator?.()
                  : onUnlockMedia?.();
              }}
            >
              <PlayIcon />
            </Box>
          )}
          {!isFree && (
            <PillButton
              data-testid={`post-thumbnail-pill-button-ds`}
              onClick={() => {
                !isFree && isExclusive
                  ? onSubscribeCreator?.()
                  : onUnlockMedia?.();
              }}
              variant={'unlock'}
              text={isExclusive ? 'Subscribe' : 'Unlock Media'}
            />
          )}
        </Box>
        <CardMedia
          data-testid={`post-thumbnail-card-media-ds`}
          src={src}
          title={alt}
          component="img"
          sx={{
            width: width,
            height: height,
            ...sx
          }}
          className={className}
        />
      </Box>
    </ThemeProvider>
  );
};
