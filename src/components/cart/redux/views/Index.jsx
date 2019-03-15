import React, { Component } from "react";

import "./Index.css";

import { HashRouter, Link, Route, Switch } from "react-router-dom";

import 'element-theme-default';

import store from '../store/index'

// 导入组件
import GoodsList from './GoodsList'
import Cart from './Cart.jsx'
import NotFound from './NotFound'

export default class Index extends Component {
  componentWillMount(){
    console.log(store.getState())
  }
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <h2 className="title">
              黑马买买买-商城
              <p>
                <Link to="/">商品列表</Link>
                <Link to="/cart">
                  购物车<span />
                </Link>
              </p>
            </h2>
          </div>
          <div className="index-container">
            <Switch>
                <Route exact path="/" component={GoodsList}/>
                <Route path="/cart" component={Cart}/>
                <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}
