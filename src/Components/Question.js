import React from "react";

class Question extends React.Component {
  state = {
    questions: []
  };

  render() {
    console.log("props question", this.props);
    return <form>{this.props.questions}</form>;
  }
}

export default Question;
