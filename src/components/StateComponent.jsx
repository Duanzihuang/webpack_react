import React,{Component} from 'react'

export default class StateComponent extends Component{
    constructor(props){
        super()

        // console.log(props)
        // props.name = "孙玉成"

        // 相当于小程序中的data或是vue的data函数
        this.state = {
            // name:'陈焕',
            name:props.name,
            age:25,
            address:'深圳水贝村'
        }
    }

    render(){
        const {age,address} = this.state
        // console.log(this.props)
        const {name,age:age2} = this.props
        return (
            <div>
                我是有状态组件
                姓名---{this.state.name}<br/>
                年龄---{age}<br/>
                地址---{address}
                <br/>
                姓名---{name}<br/>
                年龄---{age2}<br/>
            </div>
        )
    }
}