import React from "react";
import api from "./api/api";

import Home from "./components/Home";

import "./App.css";

class App extends React.Component {
  state = {
    videos: [],
  };

  componentDidMount = async () => {
    const res = await api.get("search", {
      params: {
        part: "snippet",
        maxResult: 5,
        chart: "mostPopular",
        key: "AIzaSyA5CAS4LL3H-a4Bt1GvxPq9Pp_CylSfqjg",
      },
    });

    this.setState({
      videos: res.data.items,
    });
  };

  render() {
    return (
      <div className="container">
        <Home topVideos={this.state.videos} />
      </div>
    );
  }
}

export default App;
