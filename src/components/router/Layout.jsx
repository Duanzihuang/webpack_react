import React from "react";

import { Link, Route, Redirect, Switch } from "react-router-dom";
import "./Layout.css";

const Menu2 = props => {
  return <div>组件22222</div>;
};

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="layout">
          <div className="left">
            左边菜单
            <br />
            <br />
            <Link to="/layout/menu1">菜单1</Link>
            <br />
            <br />
            <Link to="/layout/menu2">菜单2</Link>
          </div>
          <div className="right">
            <div className="content">
              <br />
              <Switch>
                <Route
                  path="/layout/menu1"
                  render={props => {
                    return <div>组件11111</div>;
                  }}
                />
                <Route path="/layout/menu2" component={Menu2} />
                <Redirect from="/layout" to="/layout/menu2" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
