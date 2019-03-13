import React, { Component } from "react";

class Controlled extends Component{
    constructor(){
        super()

        this.state = {
            username:'admin',
            password:'',
            repassword:''
        }
    }

    /**
    handleChange = (event) => {
        this.setState({
            username:event.target.value
        })
    }

    handleChange2 = event => {
        this.setState({
            password:event.target.value
        })
    }

     */

    handleChange3 = event => {
        // console.log(event.target)
        this.setState({
            //es6中的属性名表达式 http://es6.ruanyifeng.com/#docs/object#%E5%B1%9E%E6%80%A7%E5%90%8D%E8%A1%A8%E8%BE%BE%E5%BC%8F
            [event.target.name]:event.target.value
        })
    }

    submit = () => {
        console.log(this.state)
    }

    render(){
        return <div>
            受控组件<br/>
            <form>
                {/* 用户名：<input name="username" onChange={()=>this.handleChange(event)} value={this.state.username} type="text"/>
                {this.state.username}<br/>
                密码：<input name="password" value={this.state.password} onChange={this.handleChange2} type="text"/><br/> */}
                用户名：<input name="username" onChange={()=>this.handleChange3(event)} value={this.state.username} type="text"/>
                {this.state.username}<br/>
                密码：<input name="password" value={this.state.password} onChange={this.handleChange3} type="text"/><br/>
                确认密码：<input name="repassword" value={this.state.repassword} onChange={this.handleChange3} type="text"/><br/>
                <input type="button" onClick={this.submit} value="提交"/>
            </form>
        </div>
    }
}

export default Controlled