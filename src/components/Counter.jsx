import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  constructor(props) {
    super();

    this.state = {
      count: props.initCount
    };
  }

  // 加了static的属性，就是静态属性，访问的时候，必须使用类名.属性来访问
  static propTypes = {
    initCount: PropTypes.number,
    callback: PropTypes.func
  };

  static defaultProps = {
    initCount: 100
  };

  add = () => {
    // 异步执行
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        // console.log("设置值完毕...",this.state.count)

        this.props.callback(this.state.count);
      }
    );
  };

  render() {
    return (
      <div>
        我是子组件...
        <br />
        {this.state.count}&nbsp;&nbsp;<button onClick={this.add}>+</button>
      </div>
    );
  }
}

// 静态属性
// Counter.propTypes = {
//   initCount: PropTypes.number,
//   name:PropTypes.string
// };

export default Counter;
