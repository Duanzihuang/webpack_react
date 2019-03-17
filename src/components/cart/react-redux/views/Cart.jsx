import React, { Component } from 'react'

import {Table,Button,InputNumber} from 'element-react'

// import {updateToCart,deleteToCart} from '../store/actionCreators'

import {connect} from 'react-redux'

class Cart extends Component {
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
                        return <InputNumber size="small" defaultValue={row.num} value={row.num} onChange={this.update.bind(this,row)} min="1"></InputNumber>
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
            ]
        }
    }

    update = (goods,value) => {
        const newGoods = JSON.parse(JSON.stringify(goods))
        newGoods.num = value

        this.props.updateCart(newGoods)
    }

    onDelete(id){
        this.props.deleteCart(id)
    }

    render() {
        return <div>
            <Table style={{width: '100%'}}
             columns={this.state.columns}
             data={this.props.goodsList}/>
             {/* 总价 */}
             <div style={{marginLeft:5}}>
                <p>总价：{this.props.totalPrice}</p>
                <Button type="success">总价</Button>
             </div>
        </div>
    }
}

// 从仓库中获取值 state 就是react-redux 在建立组件和仓库关联关系的时候，把仓库中的值传递给
const mapStateToProps = state => {
    const calcTotalPrice = () => {
        let totalPrice = 0

        state.forEach(item=>{
            totalPrice += item.num * item.price
        })

        return totalPrice
    }

    return {
        goodsList:state,
        totalPrice:calcTotalPrice()
    }
}

// 更改仓库的值
const mapDispatchToProps = dispatch => {
    return {
        // 触发修改的action
        updateCart(goods){
            dispatch({
                type:'UPDATE_CART',
                goods
            })
        },
        // 触发删除的action
        deleteCart(id){
            dispatch({
                type:'DELETE_CART',
                id
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)