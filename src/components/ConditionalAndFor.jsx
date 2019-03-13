import React, { Component } from "react";

export default class ConditionalAndFor extends Component {
  constructor() {
    super();

    this.state = {
      isLogin: false,
      name:'张三',
      persons:[
          {id:1,name:'张无忌',skill:'乾坤大挪移'},
          {id:2,name:'张三丰',skill:'太极'},
          {id:3,name:'周芷若',skill:'九阴白骨抓'},
          {id:4,name:'梅超风',skill:'九阴白骨抓'}
      ]
    };
  }
  render() {
    /** 
        if (this.state.isLogin){
            return <div>
                恭喜您登录了...
            </div>
        } else {
            return <div>
                请去登录...
            </div>
        }
        */
       /**
    const { isLogin } = this.state;
    return (
      <div>{isLogin ? <div>恭喜您登录了...</div> : <div>请去登录...</div>}</div>
    );
     */
    
    let renderSpan = null
    if (this.state.name){
        renderSpan = <span>{this.state.name}</span>
    }


    return <div id="test">
        <div>我是一个结果</div>
        {/* {this.state.name && <span>{this.state.name}</span>} */}
        {renderSpan}

        <ul>
            {this.state.persons.map(item=>{
                return <li key={item.id}>
                    {item.name}---{item.skill}
                </li>
            })}
        </ul>
    </div>
  }
}
