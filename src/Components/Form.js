import React from "react";

class Form extends React.Component {

  onClick = () => {};

  render() {
    console.log(this.props.question);
    return (
      <div>
        <form onSubmit={this.props.getQuestions}>
          <input type="radio" value="easy" />
      
          <input type="radio" value="medium" />
          
          <input type="radio" value="hard" />
         
        </form>
      </div>
    );
  }
}

export default Form;
