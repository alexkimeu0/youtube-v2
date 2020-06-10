import React from "react";

import "./VideoItem.css";

const VideoItem = ({ video }) => {
  console.log(video);
  return (
    <div className="card">
      <div class="card-image">
        <img src={video.snippet.thumbnails.medium.url} />
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
