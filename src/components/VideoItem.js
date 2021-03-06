import React from "react";

import "./VideoItem.css";

const VideoItem = ({ video, selectVideo }) => {
  return (
    <div className="card" onClick={() => selectVideo(video)}>
      <div className="card-image">
        <img src={video.snippet.thumbnails.medium.url} alt="thumbnail" />
      </div>
      <h4>{video.snippet.title}</h4>
      <h5>{video.snippet.channelTitle}</h5>
    </div>
  );
};

export default VideoItem;

// channelTitle
// description
// title
// thumbnails.default || medium || high
