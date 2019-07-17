import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Hard from "./Hard";
import Medium from "./Medium";
import Easy from "./Easy";
import Question from "./Question";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/hard" component={Hard} />
          <Route path="/medium" component={Medium} />
          <Route path="/easy" component={Question} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
