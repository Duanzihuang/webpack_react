import React, { Component } from "react"

import bus from './bus'

class Brother2 extends Component {
    constructor(){
        super()

        this.state = {}
    }

    componentDidMount(){
        console.log("--componentDidMount--")
        bus.on('myevent',data=>{
            // console.log(data)
            this.setState({
                name:data.name,
                address:data.address
            })
        })
    }

    render(){
        console.log("------render------")
        const {name,address} = this.state
        return <div>
            我是兄弟2组件---{name}---{address}
        </div>
    }
}

export default Brother2