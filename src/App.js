import React from 'react';
import Question from './Components/Question';
import QuestionCount from './Components/QuestionCount';
import Form from './Components/Form';
import axios from 'axios';

class App extends React.Component {
  getQuiz = (e) => {
    const startQuiz = e.target.elements.startQuiz.value;
    e.preventDefault();
    console.log(startQuiz);
  }
  render() {
    return(
      <div>
        <div className="header bg-primary">
          <h1>Wynvia Tech Trivia</h1>
        </div>
        <div className="form-container">
          <Form className="quiz-form" />
          <Question />
          <QuestionCount />
        </div>
        
      </div>
    )
  }
}
export default App;