import React from "react";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
import Form from "./Form";
import Result from "./Result";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionitems: []
    };
  }

  componentDidMount = () => {
    // const singleQuestion = this.props.results.state.question;
    const questionUrl = `https://opentdb.com/api.php?amount=1&category=18&difficulty=easy`;
    axios.get(questionUrl)
      .then(res => {
        this.setState({ questionitems: res.data.question });
        console.log(this.state.questionitems);
      })
  }

  getQuestion = e => {
    e.preventDefault();
    const startQuiz = e.target;
    console.log(startQuiz);
  };
  render() {
    const question = this.state.questionitems;
    return (
      <div>
        <div className="header bg-primary">
          <h1>Wynvia Tech Trivia</h1>
        </div>
        <div className="form-container">
          <Form className="quiz-form" getQuestion={this.props.getQuestion} />
          <Question Question={ question } />
          <QuestionCount />
          <Result />
        </div>
      </div>
    );
  }
}
export default App;
