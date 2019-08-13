import React from 'react';
import "../index.css";
import {Route} from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return(
            <div className="navbar">
                <Route path="/easy" component={Question} />
                
            </div>
        )
    }
}
