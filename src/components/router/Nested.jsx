import React, { Component } from "react";

import Login from "./Login";
import Layout from "./Layout";

import { HashRouter, Route } from "react-router-dom";

class Nested extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/layout" component={Layout} />
        </div>
      </HashRouter>
    );
  }
}

export default Nested;
