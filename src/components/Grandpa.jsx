import React, { Component } from "react";

import  PropTypes from 'prop-types'

class Grandson extends Component{
    render(){
        // console.log(this)
        return <div>
            我是第三级---{this.context.myValue}
        </div>
    }
}

Grandson.contextTypes  = {
    myValue:PropTypes.string
}

class Parent extends Component{
    static contextTypes = {
        myValue:PropTypes.string
    }
    render(){
        return <div>
            我是第二级--{this.context.myValue}<br/>
            <Grandson />
        </div>
    }
}

class Grandpa extends Component {
    // 约定给孙子传递值的时候，属性名叫啥，以及它的类型是啥
    static childContextTypes = {
        myValue:PropTypes.string
    }

    getChildContext() {
        return {myValue: this.state.value};
    }

    constructor(){
        super()

        this.state = {
            value:'我是第一级的值'
        }
    }

    changeValue = () => {
        this.setState({
            value:'112233'
        })
    }

    render(){
        return <div>
            我是第一级组件<br/>
            <button onClick={this.changeValue}>我要更改值</button>
            <Parent/>
        </div>
    }
}

export default Grandpa