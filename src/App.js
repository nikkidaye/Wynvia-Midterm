import React from "react";
import Question from "./Components/Question";
import QuestionCount from "./Components/QuestionCount";
import Form from "./Components/Form";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Easy from "./Components/Easy";
import Medium from "./Components/Medium";
import Hard from "./Components/Hard";
import Footer from "./Components/Footer";
import styles from './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }

  getQuestion = (e) => {
    const startQuiz = e.target.elements.startQuiz.value;
    e.preventDefault();
    const url = `https://opentdb.com/api.php?amount=10`
    axios.get(url)
    .then(res => {
      this.setState({ questions: questions })
    })
  };
  render() {
    return (
      <div>
        <div className="header bg-primary">
          <h1>Wynvia Tech Trivia</h1>
        </div>
        <div className="form-container">
          <Form className="quiz-form" getQuestion={this.getQuestion}/>
          <Question getQuestion={this.getQuestion} />
          <QuestionCount />
          <Easy />
          <Medium />
          <Hard />
        </div>
      </div>
    );
  }
}
export default App;
