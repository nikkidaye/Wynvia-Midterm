import React from "react";

class Question extends React.Component {
  render() {
    return <div>{this.props.getQuestion}</div>;
  }
}

export default Question;
