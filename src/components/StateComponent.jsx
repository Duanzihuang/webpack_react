import React,{Component} from 'react'

export default class StateComponent extends Component{
    constructor(props){
        super(props)

        // console.log(props)
        // props.name = "孙玉成"

        // 相当于小程序中的data或是vue的data函数
        this.state = {
            // name:'陈焕',
            name:props.name,
            age:25,
            address:'深圳水贝村'
        }

        // this.clickMe = this.clickMe.bind(this)
    }

    // clickMe(){
    //     console.log("1111111111111",this)
    // }

    // clickMe = () => {
    //     console.log("22222",this)
    // }

    // clickMe2(e,name){
    //     console.log(name)
    //     console.log(this)
    //     console.log(e)
    // }

    clickMe2 = (e,name) => {
        // console.log(name)
        // console.log(this)
        // console.log(e)

        // this.props.name = '孙玉成'

        // this.state.name = '孙悟空'

        //异步的操作
        this.setState({
            name:'孙悟空'
        })
        console.log(this.state)
    }

    render(){
        console.log("-------------render---------")
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
                {/* 无参 */}
                {/* <button onClick={this.clickMe.bind(this)}>更改值</button> */}
                {/* <button onClick={this.clickMe}>更改值</button> */}
                {/* 有参 */}
                {/* 这种写法不行 */}
                {/* <button onClick={this.clickMe2('陈焕')}>更改值</button> */}
                <button onClick={()=>{this.clickMe2(event,'陈焕')}}>更改值</button>
            </div>
        )
    }
}