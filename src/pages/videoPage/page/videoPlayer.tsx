import ReactPlayer from "react-player";
import { FC, useEffect, useRef, useState } from "react";
import { VideoPlayerProps } from "../modules";
import { RenderRectangle } from "../../../feauteres";

export const VideoPlayer: FC<VideoPlayerProps> = ({
  url,
  width,
  height,
  timestamp,
  data,
}) => {
  const playerRef = useRef<ReactPlayer>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const convertatedTimestamp = new Date(timestamp).getTime();

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.seekTo(convertatedTimestamp, "seconds");
    }
  }, [convertatedTimestamp]);

  const handleProgress = (state: { playedSeconds: number }) => {
    setCurrentTime(state.playedSeconds);
  };

  return (
    <div style={{ position: "relative", width, height }}>
      <ReactPlayer
        ref={playerRef}
        controls={true}
        url={url}
        width={width}
        height={height}
        onProgress={handleProgress}
        progressInterval={100}
      />

      <RenderRectangle data={data} currentTime={currentTime} />
    </div>
  );
};
