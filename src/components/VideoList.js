import React from "react";

import VideoItem from "./VideoItem";

const VideoList = ({ videos, selectVideo }) => {
  const videosList = videos.map((video, id) => (
    <VideoItem key={id} selectVideo={selectVideo} video={video} />
  ));
  return <div>{videosList}</div>;
};

export default VideoList;
