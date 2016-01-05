import React from "react";

var Child = React.createClass({
  render() {
    return ( //have to return wrapped in an element of some sort, div or span...etc.
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={this.props.setChip}>Set name to Chip</button>
      </div>
    );
  }
});

export default Child;
