import React from "react";
import api from "./api/api";

import Home from "./components/Home";
import Logo from "./components/Logo";
import VideoDetail from "./components/VideoDetail";
import VideoList from "./components/VideoList";

import SearchBar from "./components/SearchBar";

import "./App.css";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount = async () => {
    const res = await api.get("search", {
      params: {
        part: "snippet",
        maxResult: 5,
        chart: "mostPopular",
        key: "",
      },
    });

    this.setState({
      videos: res.data.items,
    });
  };

  handleSubmit = async (searchTxt) => {
    const res = await api.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyA5CAS4LL3H-a4Bt1GvxPq9Pp_CylSfqjg",
        q: searchTxt,
      },
    });

    this.setState({
      videos: res.data.items,
    });
  };

  selectVideo = (video) => {
    console.log(video);
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="container">
        <div className="header">
          <Logo />
          <SearchBar formSubmit={this.handleSubmit} />
        </div>
        <Home topVideos={videos} />
        <div className="selected-vids">
          <VideoDetail video={selectedVideo} />
          <VideoList videos={videos} selectVideo={this.selectVideo} />
        </div>
      </div>
    );
  }
}

export default App;
