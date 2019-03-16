import React from 'react'
import "./App.less"

// 导入组件
import NoStateComponent from '@/NoStateComponent'
import StateComponent from '@/StateComponent'
import Counter from '@/Counter'
import Grandpa from '@/Grandpa'
import Parent from '@/brother/Parent'
import Controlled from '@/Controlled'
import ConditionalAndFor from '@/ConditionalAndFor'
import MyCheckboxAndRadio from '@/MyCheckboxAndRadio'
import RefAndDom from '@/RefAndDom'
import LifeCycle from '@/LifeCycle'
// import Book from '@/book/Book'

import Book from '@/book_networking/Book'

// 路由相关的组件
import Basic from '@/router/Basic'
import Nested from '@/router/Nested'

// 购物车案例
import Index from '@/cart/redux/views/Index'

// 热更新
import { hot } from 'react-hot-loader/root'

const chenhuanStyle = {
    color:'green',
    fontSize:50
}

// 类组件(有状态组件)
class App extends React.Component{

    getChildValue = data => {
        console.log("-----我是父组件----")
        console.log(data)
    }

    // render 是react的声明周期函数之一，用来渲染组件的内容
    render(){
        const obj = {
            name:"ch",
            sex:"男",
            age:18,
            isMan:true
        }

        return <div>
            {/* <NoStateComponent {...obj}/>  */}
            {/* <NoStateComponent name="ch" sex="男" age={18} isMan={true}/> */}
            {/* <hr/> */}
            {/*<StateComponent name="罗庆" sex="男" age={23}/> */}
            {/* <Counter initCount={10} callback={this.getChildValue}/> */}
            {/* <Grandpa /> */}
            {/* <Parent/> */}
            {/* <Controlled/> */}
            {/* <ConditionalAndFor/> */}
            {/* <MyCheckboxAndRadio /> */}
            {/* <RefAndDom/> */}
            {/* <LifeCycle/> */}
            {/* <Book></Book> */}
            {/* <Basic /> */}
            {/* <Nested></Nested> */}
            <Index />
        </div>
    }

    render2(){
        return <div id="app">
            Hello React
            <div className="imgDiv"></div>
            <div>
                <span><i className="iconfont icon-login_user"></i></span>
            </div>
            <div>
                {/* 我是注释  */}
                <p style={{color:'red',fontSize:36+'px'}}>我是一个好人</p> 
                <p style={chenhuanStyle}>陈焕是一个好人</p> 
            </div>
        </div>

        // <div className="main">我是一个好人</div> 底层会调用这个方法

        // return React.createElement('div', {className: "main"},[
        //     React.createElement('h1',{id:'app'},'你也是个好人'),
        //     React.createElement('p',{id:'app2'},'他是个好人'),
        // ])
    }
}

export default hot(App)