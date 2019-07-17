import React from "react";
import axios from "axios";

class Question extends React.Component {
  state = {
    questions: []
  };

  componentDidMount() {
    const questionUrl =
      "https://opentdb.com/api.php?amount=11&category=18&difficulty=easy";
    axios.get(questionUrl).then(res => {
      this.setState({ questions: res.data.results });
      // console.log(res.data.results);
    });
  }

  render() {
    return this.state.questions.map((question, index) => {
      return <p key={index}>{question.question}</p>;
    });
  }
}

export default Question;
