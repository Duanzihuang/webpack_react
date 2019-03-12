import React, { Component } from "react"

import bus from './bus'

class Brother1 extends Component {
    sendValueToBrother2 = () => {
        bus.emit('myevent',{
            name:'陈焕',
            address:'广东潮汕人'
        })
    }

    render(){
        return <div>
            我是兄弟1组件&nbsp;&nbsp;<button onClick={this.sendValueToBrother2}>传值给组件2</button>
        </div>
    }
}

export default Brother1