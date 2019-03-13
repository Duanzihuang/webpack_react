import React, { Component } from "react";

export default class LifeCycle extends Component{
    constructor(){
        super()

        this.state = {
            name:'张三'
        }
    }

    componentWillMount(){
        console.log("---componentWillMount---初始化，网络请求")
    }

    render(){
        console.log("-----render-------")
        // console.log(this)
        return <div>
            {this.state.name}
            <button onClick={()=>{this.setState({name:'ch'})}}>更改值</button>
        </div>
    }

    shouldComponentUpdate(){
        console.log("------shouldComponentUpdate-----")
        return true
    }


    componentWillUpdate(){
        console.log("------componentWillUpdate-----")
    }

    componentDidUpdate(){
        console.log("------componentDidUpdate-----")
    }

    componentDidMount(){
        console.log("---componentDidMount---网络请求，Dom操作")
    }
}
