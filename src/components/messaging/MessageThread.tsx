import { ThemeProvider } from '@emotion/react';
import { List, ListItem, Modal } from '@mui/material';
import MuiBox from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import MuxPlayer from '@mux/mux-player-react/lazy';
import { useEffect, useRef, useState } from 'react';
import { Avatar } from '../../elements/Avatar';
import { PillButton } from '../../elements/PillButton';
import { PostThumbnail } from '../../elements/PostThumbnail';
import { Typography } from '../../elements/Typography';
import { Lock } from '../../elements/icons';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

const Box = styled(MuiBox)({
  '&.mediaWrapper': {
    overflow: 'hidden',
    borderRadius: '8px',
    maxHeight: '400px'
  },
  '&.messageBody': {
    width: '100%',
    maxWidth: '300px'
  },
  '&.messageContent': {
    backgroundColor: colors.lightgray[100],
    wordBreak: 'break-all',
    padding: '12px',
    borderRadius: '8px'
  },
  '&.mymessage': {
    marginBottom: { xs: '16', md: '20px' },
    '& .message-wrapper': {
      justifyContent: 'flex-end',
      '& .messageContent': {
        backgroundColor: colors.lightgray[300]
      },
      '& .messageBody': {
        marginLeft: 'auto'
      }
    }
  }
});

interface MediaAssetsProps {
  id: string;
  assetType: string;
  assetUrl: string;
  assetThumbnailUrl?: string;
}
export interface MessageMediaProps {
  id: string;
  senderId: string;
  receiverId: string;
  price: number;
  paidMedia: boolean;
  expiringDate: string;
  purchased: boolean;
  assets: MediaAssetsProps[];
  useTeaser?: boolean;
}
interface MessageProps {
  id: string;
  senderId: string;
  receiverId: string;
  messageCost: number;
  text: string;
  media?: MessageMediaProps;
}
interface Props {
  messages: {
    messages: MessageProps[];
    timestamp: string;
  }[];
  onClick?: (asst: MediaAssetsProps) => void;
  onUnlockClick?: (media: MessageMediaProps) => void;
  loggedInUserId: string;
  isUserCreator: boolean;
  creatorAvatar: string;
  userAvatar: string;
}

export const MessageThread = ({
  messages,
  onClick,
  loggedInUserId,
  isUserCreator,
  creatorAvatar,
  userAvatar,
  onUnlockClick
}: Props) => {
  const messageListRef = useRef<any | null>(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  };

  const handleOnClick = (asst: MediaAssetsProps) => {
    if (onClick) {
      onClick(asst);
    }
  };

  const getAssetsType = (assets: MediaAssetsProps[]) => {
    const assetsMap: any = {};
    assets.forEach((asset) => {
      if (assetsMap[asset.assetType])
        assetsMap[asset.assetType] = assetsMap[asset.assetType] + 1;
      else assetsMap[asset.assetType] = 1;
    });
    const assetsBreakdown = Object.keys(assetsMap).map((key) => {
      return `${assetsMap[key]} ${key}${assetsMap[key] > 1 ? 's' : ''}`;
    });
    return assetsBreakdown.join(', ');
  };

  const isExpired = (media: MessageMediaProps) => {
    if (!media.paidMedia) return false;
    if (media.purchased) return false;
    const date = new Date(media.expiringDate);
    const now = new Date();
    return date.getTime() < now.getTime();
  };

  const MessageMedia = ({
    assets,
    purchased,
    media,
    onClick
  }: {
    assets: MediaAssetsProps[];
    purchased: boolean;
    media: MessageMediaProps;
    onClick?: (e: MediaAssetsProps) => void;
  }) => {
    const length = assets.length - 1;
    // TODO: Implement useTeaser. Just use the first image for now. if useTeaser is true and the media is locked, use the first image as a teaser
    return (
      <>
        <Box
          position={'relative'}
          mt={!purchased ? `${assets.length * 10}px` : 0}
        >
          {assets.reverse().map((asset, index) => {
            return (
              <Box
                data-testid={`display-media-wrapper-container-box-ds`}
                key={index}
                className="mediaWrapper"
                onClick={() => onClick && onClick(asset)}
                sx={
                  !purchased
                    ? {
                        position: index !== length ? 'absolute' : 'relative',
                        width: `calc(100% - ${(length - index) * 20}px)`,
                        top: `-${(length - index) * 10}px`,
                        left: `${(length - index) * 10}px`
                      }
                    : { marginTop: '4px', width: '100%' }
                }
              >
                {asset.assetType === 'image' ? (
                  <PostThumbnail src={asset.assetUrl} />
                ) : (
                  <>
                    <PostThumbnail
                      type="video"
                      src={asset.assetThumbnailUrl!}
                    />
                  </>
                )}
                {isExpired(media) && (
                  <Box
                    data-testid={`display-media-box-expired-box-ds`}
                    position={'absolute'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    width={'100%'}
                    height={'100%'}
                    left={0}
                    top={0}
                    sx={{
                      boxShadow: isExpired(media)
                        ? '0px 1px 0px 0px rgba(255, 255, 255, 0.15) inset'
                        : 'none',
                      borderRadius: isExpired(media) ? '8px' : '0',
                      background:
                        isExpired(media) && !media.purchased
                          ? colors.darkgray['200']
                          : 'transparent'
                    }}
                  ></Box>
                )}
              </Box>
            );
          })}
        </Box>
      </>
    );
  };

  const CenterButton = ({
    media,
    onClick
  }: {
    media: MessageMediaProps;
    onClick?: (media: MessageMediaProps) => void;
  }) => {
    const handleOnClick = () => {
      if (onClick) {
        onClick(media);
      }
    };
    // TODO: Replace with teaser detection mechanism
    if (media.useTeaser) {
      return (
        <PillButton
          data-testid={`display-media-pill-button-1-ds`}
          variant="unlock"
          onClick={handleOnClick}
          background={colors.black}
          backgroundHover="rgba(0, 0, 0, 0.75)"
          text={`Unlock ${media.assets.length > 1 ? 'Full Set' : ''} for $${
            media.price
          }.00`}
        />
      );
    }
    return (
      <PillButton
        data-testid={`display-media-pill-button-2-ds`}
        variant="unlock"
        onClick={handleOnClick}
        text={`Unlock ${media.assets.length > 1 ? 'Full Set' : ''} for $${
          media.price
        }.00`}
      />
    );
  };

  const DisplayMedia = ({
    msg,
    onClick,
    onUnlockClick
  }: {
    msg: MessageProps;
    onClick: (asst: MediaAssetsProps) => void;
    onUnlockClick?: (media: MessageMediaProps) => void;
  }): JSX.Element => {
    const [selectedAsset, setSelectedAsset] = useState<
      MediaAssetsProps | undefined
    >(undefined);
    if (!msg.media) return <></>;

    const handleAssetClick = (asst: MediaAssetsProps | undefined) => {
      if (
        msg.media?.purchased ||
        !msg.media?.paidMedia ||
        msg.messageCost === 0
      ) {
        setSelectedAsset(asst);
        return;
      }

      if (!asst) return;
      onClick(asst);
    };
    return (
      <>
        <Modal
          data-testid={`display-media-modal-selected-asset-ds`}
          open={!!selectedAsset}
          onClose={() => setSelectedAsset(undefined)}
          sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'transparent'
          }}
        >
          <Box
            data-testid={`display-media-wrapper-container-box-ds`}
            className="mediaWrapper"
          >
            {selectedAsset?.assetType === 'image' ? (
              <img src={selectedAsset?.assetUrl} alt="" />
            ) : (
              <Box
                data-testid={`message-slider-mux-box-${selectedAsset?.id}-ds`}
                sx={{
                  scrollSnapAlign: 'start',
                  flex: '0 0 calc(100%)',
                  background: colors.black,
                  height: '100%',
                  width: 'calc(100%)',
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}
              >
                <MuxPlayer
                  data-testid={`message-slider-mux-player-${selectedAsset?.id}-ds`}
                  playbackId={selectedAsset?.assetUrl}
                  loop
                />
              </Box>
            )}
          </Box>
        </Modal>
        <Box
          data-testid={`display-media-box-handle-asset-ds`}
          position={'relative'}
          onClick={() => handleAssetClick(msg.media?.assets?.[0])}
        >
          <MessageMedia
            data-testid={`display-media-box-message-media-ds`}
            assets={msg.media.assets}
            purchased={msg.media.purchased}
            media={msg.media}
            onClick={handleAssetClick}
          />
          {!msg.media.purchased &&
            msg.media.paidMedia &&
            msg.messageCost !== 0 && (
              <Box
                position={'absolute'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                width={'100%'}
                height={'100%'}
                left={0}
                top={0}
              >
                {isExpired(msg.media) ? (
                  <Box sx={{ opacity: '0.5' }}>
                    <Lock color={colors.white} />
                  </Box>
                ) : (
                  <CenterButton media={msg.media} onClick={onUnlockClick} />
                )}
              </Box>
            )}
        </Box>
        {!msg.media.purchased || !msg.media.paidMedia ? (
          <>
            {isExpired(msg.media) ? (
              <Typography
                sx={{ lineHeight: 1, mt: '4px' }}
                className="interSemibold12"
              >
                Expired
              </Typography>
            ) : (
              <Box className="messageContent" mt={'4px'}>
                <Typography className="interRegular14">
                  {msg.media.assets.length > 1 && 'Set'} Contents:{' '}
                  {getAssetsType(msg.media.assets)}
                </Typography>
              </Box>
            )}
            {/* {expiringSoon(msg.media) && (
            <Typography
              sx={{ lineHeight: 1, mt: '4px' }}
              className="interSemibold12"
            >
              {`${expiringSoon(msg.media)}`}
            </Typography>
          )} */}
          </>
        ) : (
          <Typography
            sx={{
              lineHeight: 1,
              mt: '4px',
              opacity: 0.5
            }}
            className="interSemibold12"
          >
            Unlocked
          </Typography>
        )}
      </>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <List data-testid={`message-thread-list-ds`} ref={messageListRef}>
        {messages.map((days, index) => {
          return (
            <ListItem
              data-testid={`message-thread-list-item-${index}-ds`}
              key={index}
            >
              <Box width={'100%'}>
                <Box
                  data-testid={`message-thread-timestamp-${index}-ds`}
                  textAlign={'center'}
                  mb={'20px'}
                >
                  <Typography className="interSemibold12">
                    {days.timestamp}
                  </Typography>
                </Box>
                <Box>
                  {days.messages.map((msg: MessageProps, index: number) => {
                    const messageFromMe = msg.senderId === loggedInUserId;
                    const photo = messageFromMe
                      ? isUserCreator
                        ? creatorAvatar
                        : userAvatar
                      : isUserCreator
                      ? userAvatar
                      : creatorAvatar;
                    return (
                      <Box
                        data-testid={`${
                          messageFromMe ? 'my-message' : 'other-message'
                        }-thread-box-${index}-ds`}
                        mt={3}
                        mb={3}
                        className={messageFromMe ? 'mymessage' : 'othermessage'}
                      >
                        <Box
                          data-testid={`message-thread-wrapper-ds`}
                          className="message-wrapper"
                          display={'flex'}
                          alignItems={'flex-end'}
                          gap={1}
                        >
                          <Box
                            data-testid={`message-sender-avatar-${
                              messageFromMe ? 'my-message' : 'other-message'
                            }-ds`}
                            order={messageFromMe ? 1 : 0}
                          >
                            <Avatar size={28} src={photo} />
                          </Box>
                          <Box width={'100%'}>
                            <Box
                              data-testid={`message-thread-body-ds`}
                              className="messageBody"
                            >
                              {msg.text && (
                                <Box
                                  data-testid={`message-thread-content-ds`}
                                  className="messageContent"
                                >
                                  <Typography className="interRegular14">
                                    {msg.text}
                                  </Typography>
                                </Box>
                              )}
                              {msg.media && (
                                <DisplayMedia
                                  data-testid={`message-thread-display-media-ds`}
                                  msg={msg}
                                  onClick={handleOnClick}
                                  onUnlockClick={onUnlockClick}
                                />
                              )}
                            </Box>

                            {isUserCreator && !messageFromMe && (
                              <Typography
                                sx={{ lineHeight: 1, mt: '4px' }}
                                className="interMedium12"
                              >
                                ${msg.messageCost}
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </ThemeProvider>
  );
};
