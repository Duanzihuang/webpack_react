import React, { Component } from "react";

class NewsDetail extends Component {
    render(){
        console.log(this) //this.props.history this.props.match
        return <div>
            我是新闻详情组件
        </div>
    }
}

export default NewsDetail