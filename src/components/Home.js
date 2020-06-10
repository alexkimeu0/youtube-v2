import React from "react";

import VideoItem from "./VideoItem";

import "./Home.css";

const Home = (props) => {
  const topVids = props.topVideos.map((video, id) => (
    <VideoItem video={video} key={id} />
  ));

  return <div className="vids-container">{topVids}</div>;
};

export default Home;
