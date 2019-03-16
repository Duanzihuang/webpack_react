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
  constructor(){
    super()

    this.state = {
      totalCount:0
    }
  }

  componentWillMount(){
    this.setState({
      totalCount:this.calcTotalCount()
    })

    // 监听仓库数据的改变，只要仓库的数据变了，就执行回调函数
    store.subscribe(this.watchStore)

    // 监听window的onbeforeunload
    window.onbeforeunload = () => {
      localStorage.setItem('CART',JSON.stringify(store.getState()))
    }
  }
  
  // 监控store的变化，计算总数
  watchStore = () => {
    this.setState({
      totalCount:this.calcTotalCount()
    })
  }

  componentWillUnmount(){
    store.unsubscribe(this.watchStore)
  }

  calcTotalCount = () => {
    // 去仓库中取到最新的数据
    const goodsList = store.getState()

    let totalCount = 0
    goodsList.forEach(item=>{
      totalCount += item.num
    })

    return totalCount
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
                  购物车{this.state.totalCount > 0 && <span>（{this.state.totalCount}）</span>}<span />
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
