import React from "react";

import "./SearchBar.css";

class SearchBar extends React.Component {
  state = {
    searchTxt: "",
  };

  handleChange = (e) =>
    this.setState({
      searchTxt: e.target.value,
    });

  handleSubmit = (e) => {
    const { searchTxt } = this.state;
    const { formSubmit } = this.props;
    formSubmit(searchTxt);
    e.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          placeholder="Search..."
        />
      </form>
    );
  }
}

export default SearchBar;
