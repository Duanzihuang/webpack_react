import React from 'react'

const login = {
    height: '200px',
    width: '300px',
    margin:'100px auto',
    border: '1px solid rgba(92,92,92,0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

import {Link} from 'react-router-dom'

export default class Login extends React.Component{
    login = () => {
        this.props.history.push('/layout')
        // this.props.history.push('/layout/menu1')
    }

    render(){
        return <div style={login}>
            <div>
                用户名:<input type="text" /><br/>
            </div>
            <div>
                密码:<input type="password" /><br/>
            </div>
            {/* <Link to="/layout">登录</Link> */}
            <button onClick={this.login}>登录</button>
        </div>
    }
}