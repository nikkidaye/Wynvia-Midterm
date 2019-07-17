import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import Question from "./Question";
import '../index.css';

class Easy extends React.Component {
  state = {
    questions: []
  };

  componentDidMount() {
    const questionUrl =
      "https://opentdb.com/api.php?amount=11&category=18&difficulty=easy";
    axios.get(questionUrl).then(res => {
      this.setState({ questions: res.data.results });
      return this.state.questions;
    });
  }

  render() {
    return (
      <div className="card image" id="crd" align="center">
        {console.log("hello", this.state.questions)}

        <a href="easy-trivia.html">
          <img
            src="tablet.jpg"
            className="card-img-top"
            alt="Tablet User Interface"
            id="card-image"
          />

          <Link to="/question">
            <button onClick={this.getQuestions}>EASY!</button>
          </Link>
        </a>
      </div>
    );
  }
}

export default Easy;
