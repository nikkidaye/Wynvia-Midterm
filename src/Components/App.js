import React from "react";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import Form from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionitems: []
    };
  }

  getQuestion = e => {
    e.preventDefault();
    const startQuiz = e.target;
    console.log(startQuiz);
  };
  render() {
    return (
      <div>
        <div className="header bg-primary">
          <h1>Wynvia Tech Trivia</h1>
        </div>
        <div className="form-container">
          <Form className="quiz-form" getQuestion={this.props.getQuestion} />
          <Question question={this.state.question} />
          <QuestionCount />
        </div>
      </div>
    );
  }
}
export default App;
