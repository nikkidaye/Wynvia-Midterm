import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../App';
import Question from './Question';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/question" component={Question} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;