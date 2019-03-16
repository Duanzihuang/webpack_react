import React, { Component } from 'react'

// 导入store
import store from '../store/'

import {Table,Button,InputNumber} from 'element-react'

import {updateToCart,deleteToCart} from '../store/actionCreators'

export default class Cart extends Component {
    constructor(){
        super()

        this.state = {
            columns: [
                {
                    label: "名字",
                    prop: "name",
                },
                {
                    label: "图片",
                    render:(row)=>{
                        return <div style={{width:100,height:100}}>
                            <img style={{width:'100%',height:'100%'}} src={row.img_url} alt=""/>
                        </div>
                    }
                },
                {
                    label: "数量",
                    render:row => {
                        return <InputNumber size="small" defaultValue={row.num} value={row.num} onChange={this.onChange.bind(this,row)} min="1"></InputNumber>
                    }
                },
                {
                    label: "单价",
                    prop: "price"
                },
                {
                    label: "总价",
                    render:row => {
                        return <span>{row.num * row.price}</span>
                    }
                },
                {
                    label:'操作',
                    render:row=>{
                        return <div>
                            <Button onClick={this.onDelete.bind(this,row.id)} type="danger">删除</Button>
                        </div>
                    }
                }
            ],
            goodsList:[],
            totalPrice:this.calcTotalPrice()
        }
    }

    onChange = (goods,value) => {
        const newGoods = JSON.parse(JSON.stringify(goods))
        newGoods.num = value

        // 生成修改的action
        const action = updateToCart(newGoods)

        // 触发修改操作
        store.dispatch(action)
    }

    onDelete = id => {
        // 生成删除的action
        const action = deleteToCart(id)

        // 触发删除操作
        store.dispatch(action)
    }

    componentWillMount(){
        // 初次进来进行获取
        this.setState({
            goodsList:store.getState()
        })

        // 监听仓库中数据的变化，只要数据发生了改变，就会自动触发回调函数
        store.subscribe(this.watchStore)
    }

    // 监听函数，当我们更改了store中的值，就会自动执行里面的代码
    // 重新计算商品列表 和 总价格
    watchStore = () => {
        this.setState({
            goodsList:store.getState(),
            totalPrice:this.calcTotalPrice()
        })
    }

    calcTotalPrice = () => {
        let totalPrice = 0
        store.getState().forEach(item=>{
            totalPrice += item.price * item.num
        })

        return totalPrice
    }

    componentWillUnmount(){
        if (store && store.unsubscribe){
            store.unsubscribe(this.watchStore)
        }
    }

    render() {
        return <div>
            <Table style={{width: '100%'}}
             columns={this.state.columns}
             data={this.state.goodsList}/>
             {/* 总价 */}
             <div style={{marginLeft:5}}>
                <p>总价：{this.state.totalPrice}</p>
                <Button type="success">总价</Button>
             </div>
        </div>
    }
}