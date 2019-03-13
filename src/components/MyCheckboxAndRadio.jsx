import React, { Component } from "react";

/**
 * params
 * 
 * type:checkbox,radio
 * values:[] 所要展示的值
 * svalues:[] 选中的值
 * name 名称
 * handle onChange之后要处理的事件
 */
const CheckboxAndRadio = (props) => {
    const {type,name,values,svalues,handle} = props
    return <div>
        {
            values.map((item,index)=>{
                return <label key={index}>
                    <input type={type} checked={svalues.includes(item)} value={item} name={name} onChange={handle}/>{item}
                </label>
            })
        }
    </div>
}

export default class MyCheckboxAndRadio extends Component{
    constructor(){
        super()

        this.state = {
            name:'fruits',
            values:['apple','orange','banana','mangosteen'],
            svalues:['orange','banana'],
            name4Radio:'gender',
            values4Radio:['male','female','unkown'],
            svalues4Radio:['female']
        }
    }

    handle = event => {
        // console.log(event.target.value)

        if (this.state.svalues.includes(event.target.value)){ // 之前包含有，干掉
            const newArray = this.state.svalues.filter(item=>item != event.target.value)

            this.setState({
                svalues:newArray
            })
        } else { // 之前没有，加到数组中...
            const newArray = [...this.state.svalues,event.target.value]

            this.setState({
                svalues:newArray
            })
        }
    }

    handleRadio = event => {
        // console.log(event.target.value)
        this.setState({
            svalues4Radio:[event.target.value]
        })
    }

    submit = () => {
        console.log(this.state.svalues)
        console.log(this.state.svalues4Radio)
    }

    render(){
        const {values,svalues,name,name4Radio,values4Radio,svalues4Radio} = this.state
        const radioObj = {
            name:name4Radio,
            values:values4Radio,
            svalues:svalues4Radio,
            handle:this.handleRadio,
            type:'radio'
        }
        return <div>
            <form>
                爱吃的水果:<CheckboxAndRadio name={name} values={values} svalues={svalues} handle={this.handle} type='checkbox'/>
                {/* {values.map((item,index)=>{
                    return <label key={index}>
                        <input type="checkbox" value={item} onChange={this.handle} checked={svalues.includes(item)} name={name} />{item}
                    </label>
                })} */}
                <br/>
                性别:<CheckboxAndRadio {...radioObj}/>
                {/* {
                    values4Radio.map((item,index)=>{
                        return <label key={index}>
                            <input type="radio" onChange={this.handleRadio} checked={svalues4Radio.includes(item)} value={item} name={name4Radio}/>{item}
                        </label>
                    })
                } */}
                <br/>
                <input type="button" value="提交" onClick={this.submit}/>
            </form>
        </div>
    }
}