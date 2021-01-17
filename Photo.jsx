import React from "react";

class Photo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <br />
        <br />
        <span>{this.props.data.title}</span>
      </>
    );
  }
}

export default Photo;
