import React, { Component } from "react";

import "./Index.css";

import { HashRouter, Link, Route, Switch } from "react-router-dom";

import 'element-theme-default';

// 导入组件
import GoodsList from './GoodsList'
import Cart from './Cart.jsx'
import NotFound from './NotFound'

import {connect} from 'react-redux'

class Index extends Component {
  constructor(){
    super()
  }

  componentWillMount(){
    // 监听window的onbeforeunload
    window.onbeforeunload = () => {
      localStorage.setItem('CART',JSON.stringify(this.props.goodsList))
    }
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
                  购物车{this.props.totalCount > 0 && <span>（{this.props.totalCount}）</span>}<span />
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

/**
 * 把仓库中的数据，映射成Index.jsx这个组件的props
 * 
 * Index.jsx props : {totalCount:3}
 */
const mapStateToProps = state => {
  const calcTotalCount = () => {
    let totalCount = 0
    state.forEach(item=>{
      totalCount+=item.num
    })

    return totalCount
  }

  return {
    goodsList:state,
    totalCount:calcTotalCount()
  }
}

/**
 * 参数1：从仓库中获取值，把它绑定给组件的props
 */
export default connect(mapStateToProps,null)(Index)
