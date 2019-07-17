import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Question from "./Question";
import Easy from "./Easy";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/question" component={Question} />
          <Route path="/easy" component={Easy} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
