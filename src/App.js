import React from "react";
import Question from "./Components/Question";
import QuestionCount from "./Components/QuestionCount";
import axios from 'axios';
import { Link } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  getQuestion = e => {
    e.preventDefault();
    const questionUrl = "https://opentdb.com/api.php?amount=11&category=18&difficulty=easy";
    axios.get(questionUrl)
    .then(res => {
        this.setState({questions: res.data.results});
        // console.log(res.data.results);
      })
  };

  render() {
    return (
        <div>
                {/* <!-- HEADER --> */}
            <div className="header">
              <img src="logo-dark.png" alt="wynVIA logo" className="large-logo"></img>
              <h5>How well do you understand technology?</h5>
              <h4>TEST YOUR KNOWLEDGE TODAY!</h4>
            </div>

            {/* <!-- CARD DECK --> */}
            <div className="card-deck" id="card-d">

              {/* <!-- EASY --> */}
              <div className="card image" id="crd" align="center">
                  <img src="tablet.jpg" className="card-img-top" alt="Tablet User Interface" id="card-image"></img>

                  <button onClick={this.getQuestion}>
                    <Link to={{
                    pathname: '/question',
                    state: {questions: "These are my questions"}
                    }}>
                    EASY!
                  </Link>
                  </button>
              </div>

              {/* <!-- MEDIUM --> */}
              <div className="card image" id="crd" align="center">
                <a href="medium-trivia.html">
                  <img src="algorithm.png" className="card-img-top" alt="Algorithm Sample"></img>
                  <h2><span><span className='spacer'></span>MEDIUM!</span></h2>
                </a>
              </div>
              {/* <!-- HARD --> */}
              <div className="card image" id="crd" align="center">
                <a href="hard-trivia.html">
                  <img src="cpp.png" className="card-img-top" alt="C++ Sample Code"></img>
                  <h2><span><span className='spacer'></span>HARD!</span></h2>
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
