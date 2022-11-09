import React, { Component } from "react";

export default class ClassComponentTest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: "",
    };
  }
  handleClick = () => {
    console.log("clicked");
    console.log(this.props);
  };
  render() {
    return (
      <>
        {/* <button onClick={this.handleClick}>Click me</button> */}
        <div>{this.state.first}</div>
      </>
    );
  }
}
