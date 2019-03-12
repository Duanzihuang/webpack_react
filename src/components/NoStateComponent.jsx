import React from 'react'

// 函数式组件/无状态组件
function NoStateComponent({name,age,isMan}){
    // console.log(props)
    return <div>
        我是无状态组件111--{name}--{age}--{isMan}
    </div>
}

export default NoStateComponent