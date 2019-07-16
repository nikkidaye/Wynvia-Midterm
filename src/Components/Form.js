import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="radio" value="easy" />
          <button onclick={() => this.props.getQuestion(easy)} class="easy">
            easy
          </button>
          <input type="radio" value="medium" />
          <button onclick="" class="medium">
            medium
          </button>
          <input type="radio" value="hard" />
          <button onclick="" class="hard">
            hard
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
