import React, { Component } from "react";

class Controlled extends Component{
    constructor(){
        super()

        this.state = {
            username:'admin',
            password:''
        }
    }

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

    submit = () => {
        console.log(this.state)
    }

    render(){
        return <div>
            受控组件<br/>
            <form>
                用户名：<input onChange={()=>this.handleChange(event)} value={this.state.username} type="text"/>
                {this.state.username}<br/>
                密码：<input value={this.state.password} onChange={this.handleChange2} type="text"/><br/>
                <input type="button" onClick={this.submit} value="提交"/>
            </form>
        </div>
    }
}

export default Controlled