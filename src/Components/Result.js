import React from 'react';
import axios from 'axios';

class Result extends React.Component {

    
    componentDidMount2 = () => {
        const answerUrl = "https://opentdb.com/api.php?amount=11&category=18&difficulty=easy";
        axios.get(answerUrl)
          .then(res => {
            this.setState({ correctanswers: res.data.results});
            console.log(this.state.correctanswers);
          })
      }
    

    render() {
        return(
            <div>
                <button onClick={this.props.getUserInfo} >

                </button>

            </div>
        )
    }
}

export default Result;