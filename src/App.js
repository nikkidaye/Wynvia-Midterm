import React from "react";
import Question from "./Components/Question";
import QuestionCount from "./Components/QuestionCount";
import Form from "./Components/Form";
import axios from "axios";

const API_URLeasy =
  "https://opentdb.com/api.php?amount=11&category=18&difficulty=easy&type=boolean";
const API_URLmedium =
  "https://opentdb.com/api.php?amount=11&category=18&difficulty=medium&type=boolean";
const API_URLhard =
  "https://opentdb.com/api.php?amount=11&category=18&difficulty=hard&type=boolean";

class App extends React.Component {
  getQuestion = e => {
    const startQuiz = e.target.elements.startQuiz.value;
    e.preventDefault();
    console.log(startQuiz);
  };
  render() {
    return (
      <div>
        <div className="header bg-primary">
          <h1>Wynvia Tech Trivia</h1>
        </div>
        <div className="form-container">
          <Form className="quiz-form" />
          <Question getQuestion={this.props.getQuestion} />
          <QuestionCount />
        </div>
      </div>
    );
  }
}
export default App;
