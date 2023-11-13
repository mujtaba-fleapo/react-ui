import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { colors } from '../../styles/colors';
import '../../styles/style.scss';
import { theme } from '../../theme';

// Import Swiper styles
import { ThemeProvider } from '@emotion/react';
import MuxPlayer from '@mux/mux-player-react/lazy';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { PostThumbnail } from '../../elements/PostThumbnail';

import { useEffect, useRef, useState } from 'react';
// import TrackVisibility from 'react-on-screen';

interface PostSliderProps {
  id: string;
  assets: {
    id: string;
    url: string;
    isFree: boolean;
    resizedUrl: string;
    type: string;
  }[];
  onUnlockMedia?: () => unknown;
  isExclusive?: boolean;
  onSubscribeCreator?: () => unknown;
  initialSlide?: number;
}

export const PostSlider: React.FC<PostSliderProps> = ({
  id,
  assets,
  onUnlockMedia,
  isExclusive,
  onSubscribeCreator,
  initialSlide
}) => {
  const [activeItem, setActiveItem] = useState(initialSlide ?? 0);

  const checkImage = (url: string) => {
    return url.startsWith('https');
  };

  const Slider = ({ isVisible }: { isVisible: boolean }) => {
    const sliderRef = useRef(null);

    const pauseAllVideos = async (el: any) => {
      el!.querySelectorAll('mux-player')!.forEach((element: any) => {
        const videoRef = element?.shadowRoot
          ?.querySelector('media-theme > mux-video')
          ?.shadowRoot?.querySelector('video');
        if (videoRef) {
          videoRef.pause();
          videoRef.currentTime = 0;
        }
      });
      return true;
    };

    const pauseVideos = async () => {
      await pauseAllVideos(sliderRef.current);
      return true;
    };

    const autoPlayActiveSlideVideo = async () => {
      await pauseAllVideos(document);
      const el = (sliderRef.current as any)
        ?.querySelector('.swiper-slide-active')
        ?.querySelector('mux-player')
        ?.shadowRoot?.querySelector('media-theme > mux-video')
        ?.shadowRoot?.querySelector('video');
      if (el) el.play();
      return true;
    };

    const slideChange = async () => {
      await pauseVideos();
      autoPlayActiveSlideVideo();
    };

    useEffect(() => {
      if (!isVisible) pauseVideos();
      else autoPlayActiveSlideVideo();
    }, [isVisible]);

    return (
      <Swiper
        onRealIndexChange={(swiper) => setActiveItem(swiper.realIndex)}
        data-testid={`post-slider-swiper-ds`}
        id={id}
        navigation={true}
        pagination={{ dynamicBullets: true }}
        modules={[Pagination, Navigation]}
        initialSlide={activeItem}
        className="post-slider"
        autoHeight={true}
        onSlideChange={() => slideChange()}
        ref={sliderRef}
        slideToClickedSlide={true}
      >
        {assets.map((asset, index) => {
          return (
            <SwiperSlide
              virtualIndex={index}
              data-testid={`post-slider-swiper-slide-${index}-ds`}
              key={asset.id}
            >
              {checkImage(asset.url) ? (
                <PostThumbnail
                  isExclusive={isExclusive}
                  onSubscribeCreator={onSubscribeCreator}
                  data-testid={`post-slider-post-thumbnail-${index}-ds`}
                  onUnlockMedia={onUnlockMedia}
                  src={asset.url}
                  sx={{
                    maxHeight: '80dvh',
                    objectFit: 'contain',
                    textAlign: 'center',
                    borderRadius: '4px'
                  }}
                  type={asset.type}
                  isFree={asset.isFree}
                />
              ) : (
                <Box
                  data-testid={`post-slider-mux-box-${index}-ds`}
                  sx={{
                    scrollSnapAlign: 'start',
                    flex: '0 0 calc(100%)',
                    background: colors.black,
                    height: '100%',
                    maxHeight: '80vh',
                    width: 'calc(100%)',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}
                >
                  <MuxPlayer
                    data-testid={`post-slider-mux-player-${index}-ds`}
                    className="mux-player"
                    poster={asset.resizedUrl}
                    placeholder={asset.resizedUrl}
                    style={{ height: '100%', maxHeight: '80vh' }}
                    playbackId={asset.url}
                    loop
                    onLoadedData={() =>
                      (sliderRef.current as any)!.swiper.update()
                    }
                  />
                </Box>
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`post-slider-container-${id}-ds`}
        sx={{ width: '100%' }}
      >
        <Slider isVisible={false} />

        {/* <TrackVisibility>
          {({ isVisible }) => <Slider isVisible={isVisible} />}
        </TrackVisibility> */}
      </Box>
    </ThemeProvider>
  );
};
