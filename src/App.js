import React from "react";
import Question from "./Components/Question";
import QuestionCount from "./Components/QuestionCount";
import Form from "./Components/Form";
import axios from "axios";
import { Link } from "react-router-dom";
import Easy from "./Components/Easy";
import "./index.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Medium from "./Components/Medium";
import Hard from "./Components/Hard";

import QuizOptions from './Components/QuizOptions';
import styles from './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getQuestion = e => {
    e.preventDefault();
    const questionUrl =
      "https://opentdb.com/api.php?amount=11&category=18&difficulty=easy";
    axios.get(questionUrl).then(res => {
      this.setState({ questions: res.data.results });
    });
  };

  render() {
    return (
      <div>
        {/* <!-- HEADER --> */}
        <div className="header">
          <img src="logo-dark.png" alt="wynVIA logo" className="large-logo" />
          <h5>How well do you understand technology?</h5>
          <h4>TEST YOUR KNOWLEDGE TODAY!</h4>
        </div>

        {/* <!-- CARD DECK --> */}
        <div className="card-deck" id="card-d">
          {/* <!-- EASY --> */}

          <Easy />

          {/* <!-- MEDIUM --> */}
          <div className="card image" id="crd" align="center">
            <a href="medium-trivia.html">
              <img
                src="algorithm.png"
                className="card-img-top"
                alt="Algorithm Sample"
              />
              <h2>
                <span>
                  <span className="spacer" />
                  MEDIUM!
                </span>
              </h2>
            </a>
          </div>
          {/* <!-- HARD --> */}
          <div className="card image" id="crd" align="center">
            <a href="hard-trivia.html">
              <img
                src="cpp.png"
                className="card-img-top"
                alt="C++ Sample Code"
              />
              <h2>
                <span>
                  <span className="spacer" />
                  HARD!
                </span>
              </h2>
            </a>
          </div>
        </div>
        <footer align="center">
          <div id="end">
            <p>© 2019 wynVIA</p>
          </div>
        </footer>
        <div className="form-container">
          <Form className="quiz-form" getQuestion={this.props.getQuestion} />
          <Question />
          <QuestionCount />
          <Easy />
          <Medium />
          <Hard />
//       {<a href={ this.props.correctanswers } onClick={handleClick}">Show Answer</a>}
        </div>
      </div>
    );
  }
}
export default App;
