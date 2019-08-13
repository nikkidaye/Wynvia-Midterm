import React from "react";
import axios from "axios";
import '../index.css'

class Easy extends React.Component {
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
      return <h1 className="ques" key={index}>{question.question}</h1>;
    });
  }
}
export default Easy;
