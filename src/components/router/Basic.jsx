import React, { Component } from "react";

// as 相当于起别名
/**
 * router : hashRouter #
 *          BrowserRouter history.pushState
 *          必须包裹在render函数的最外层
 *
 * Route
 *      1、进行路由占位
 *      2、设置路由规则
 *
 * Link
 *      1、触发链接
 */

import {
  HashRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom";

import NewsDetail from './NewsDetail'

const FoodsList = (props) => {
  return (
    <div>
        <ul>
            <li>方便面</li>
            <li>康师傅</li>
            <li>统一</li>
        </ul>
        <button onClick={()=>{props.history.push('/newslist')}}>编程式导航</button>
    </div>
  );
};

const NoMatch = () => {
  return <div>404</div>;
};

class Basic extends Component {
  render() {
    return (
      <Router>
        <div>
          路由的基本用法
          <br />
          <div>
            <Link to="/newslist">新闻列表</Link>
            <Link to="/foodslist">食品列表</Link>
          </div>
          <div id="routerId">
            <Switch>
              <Route path="/" exact component={FoodsList} />
              <Route
                path="/newslist"
                render={props => {
                  return (
                    <ul>
                      <li>
                         {/* <Link to="/newsdetail/1001">波音737Max停飞</Link> */}
                         <Link to={{pathname:'/newsdetail',query:{newsId:1001}}}>波音737Max停飞</Link>
                      </li>
                      <li>陈意涵出月子跑步</li>
                      <li>
                        {/* <Link to="/newsdetail/1003">田亮白色情人节</Link> */}
                        <Link to={{pathname:'/newsdetail',query:{newsId:1005}}}>田亮白色情人节</Link>
                      </li>
                    </ul>
                  );
                }}
              />
              <Route path="/foodslist" component={FoodsList} />
              {/* <Route path="/newsdetail/:newsId" component={NewsDetail} /> */}
              <Route path="/newsdetail" component={NewsDetail} />
              {/* <Redirect from="/" to="/foodslist" /> */}
              {/* 当前面所有的规则都没有匹配到的时候就会匹配下面这个，所以它一定要写在最后 */}
              <Route component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default Basic