import MuxPlayer from '@mux/mux-player-react';

interface Props {
  videoId: string;
}
export const VideoPlayer = ({ videoId }: Props) => {
  return <MuxPlayer playbackId={videoId} loop />;
};
