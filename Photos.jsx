import React from "react";
import axios from "axios";
import Photo from "./Photo";

import Search from "./Search";

class Photos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchedData: [],
    };
    this.change = this.change.bind(this);
  }

  change(event) {
    let arr = this.state.data.filter((element) =>
      element.title.includes(event.target.value)
    );
    this.setState({
      searchedData: arr,
    });
  }

  fetchData() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((data) => {
      if (data.data.length !== this.state.data.length) {
        this.setState({
          data: data.data,
        });
      }
    });
  }

  render() {
    if (this.state.data.length === 0) {
      this.fetchData();
    }
    return (
      <>
        <div>
          <Search change={this.change} />
          <>
            {this.state.searchedData.length === 0
              ? this.state.data.map((data) => {
                  return <Photo data={data} />;
                })
              : this.state.searchedData.map((data) => {
                  return <Photo data={data} />;
                })}
          </>
        </div>
      </>
    );
  }
}

export default Photos;
