import React from 'react';

class Form extends React.Component {
    render() {
        return(
            <div> 
                <form>
                    <input> type="radio" value="easy"</input>
                    <input> type="radio" value="medium" </input>
                    <input> type="radio" value="hard" </input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;