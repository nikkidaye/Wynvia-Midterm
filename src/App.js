import React from "react";
import Footer from "./Components/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  getQuestion = e => {
    e.preventDefault();
    const questionUrl =
      "https://opentdb.com/api.php?amount=11&category=18&difficulty=easy";
    axios.get(questionUrl).then(res => {
      this.setState({ questions: res.data.results });
      // console.log(res.data.results);
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
          <div className="card image" id="crd" align="center">
            <a href="/easy">
              <img
                src="tablet.jpg"
                className="card-img-top"
                alt="Tablet User Interface"
                id="card-image"
              />
              <h2>
                <span>
                  <span className="spacer" />
                  EASY!
                </span>
              </h2>
            </a>
            {/* <button onClick={this.getQuestion}>
              <Link
                to={{
                  pathname: "/easy"
                }}
              >
                EASY!
              </Link>
            </button> */}
          </div>

          {/* <!-- MEDIUM --> */}

          <div className="card image" id="crd" align="center">
            <a href="/medium">
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
            <a href="./hard">
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
      </div>
    );
  }
}
export default App;
