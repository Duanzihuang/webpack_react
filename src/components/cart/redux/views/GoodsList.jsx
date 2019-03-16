import React, { Component } from "react";

import { Button } from 'element-react';

import {addToCart} from '../store/actionCreators'

import store from '../store'

export default class GoodsList extends Component {
  constructor() {
    super();

    this.state = {
      fruitList: [
        {
          id: 10001,
          num: 1,
          img_url:
            "https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=4ad42080aecc7cd9fa2d33df013a4602/42a98226cffc1e176cf9b75c4790f603738de91d.jpg",
          name: "苹果",
          price: 5
        },
        {
          id: 10002,
          num: 1,
          img_url:
            "https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=607b103081d6277fe912353e1003780d/5d6034a85edf8db12c69f8ef0f23dd54574e74f2.jpg",
          name: "香蕉",
          price: 2.5
        },
        {
          id: 10003,
          num: 1,
          img_url:
            "https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=12aef9c102082838680ddb1280a2ce3c/8cb1cb1349540923e88531a09758d109b2de497b.jpg",
          name: "哈密瓜",
          price: 20
        },
        {
          id: 10004,
          num: 1,
          img_url:
            "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=c708fc0ac41b9d168ac79d67cbe5d3b2/8601a18b87d6277f2fe15ced22381f30e824fc70.jpg",
          name: "榴莲",
          price: 35
        }
      ]
    };
  }
  
  // 添加购物车
  addCart = goods => {
    // const action = addToCart(goods)
    
    // 出发action
    store.dispatch({
      type:'ADD_CART', // 类型：添加购物车
      goods
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.fruitList.map(item => {
            return (
              <li key={item.id}>
                <img
                  src={item.img_url}
                  alt=""
                />
                <p>商品名:{item.name}</p>
                <p>¥:{item.price}</p>
                <Button
                  onClick={()=>{this.addCart(item)}}
                  type="success"
                  style={{marginTop:15}}
                >
                  <span>
                    <span>加入购物车</span>
                  </span>
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
