import React from "react";

class Form extends React.Component {
  onClick = () => {};

  render() {
    console.log(this.props.question);
    return (
      <div>
        <form>
          <input type="radio" value="easy" />
          <button onclick="" class="easy">
            easy
          </button>
          <input type="radio" value="medium" />
          <button onClick="" class="medium">
            medium
          </button>
          <input type="radio" value="hard" />
          <button onClick={this.props.getQuestion} class="hard">
            hard
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
