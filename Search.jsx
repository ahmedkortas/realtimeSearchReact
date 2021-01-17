import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <input type="text" id="search" onChange={this.props.change} />;
  }
}

export default Search;
