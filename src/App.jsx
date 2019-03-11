import React from 'react'
import "./App.less"

// 类组件(有状态组件)
class App extends React.Component{
    // render 是react的声明周期函数之一，用来渲染组件的内容
    render(){
        return <div id="app">
            Hello React
            <div className="imgDiv"></div>
            <div>
                <span><i className="iconfont icon-login_user"></i></span>
            </div>
        </div>
    }
}

export default App