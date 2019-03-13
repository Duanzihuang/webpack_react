import React, { Component } from "react";

class RefAndDom extends Component {
  constructor() {
    super();

    this.inputRef = React.createRef();
    this.fileRef = React.createRef();

    this.state = {
        imgPath:null
    }
  }

  render() {
    console.log("---render---");
    const {imgPath} = this.state
    return (
      <div>
        {/* 1.0 让input自动获取焦点 */}
        {/* <input ref="boxRef"  type="text"/> */}
        <input ref={this.inputRef} name="test" type="text" />
        <br />
        {/* 2.0 文件上传 */}
        文件上传:
        <input type="file" ref={this.fileRef} />
        <br />
        <input type="button" onClick={this.upload} value="上传" /><br/><br/><br/>
        {imgPath && <img style={{width:300,height:300}} src={imgPath}/>}
      </div>
    );
  }

  upload = () => {
    // 获取用户选择的文件
    const file = this.fileRef.current.files[0];

    if (file) {
      // 使用xhr2进行异步文件上传操作
      var xhr = new XMLHttpRequest();
      // 设置请求方式及路径
      xhr.open("post", "http://127.0.0.1:8888/uploadFile");
      // 设置请求体
      var formData = new FormData();
      formData.append("file", file);
      // 发送
      xhr.send(formData);
      // 响应
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const res = xhr.responseText;
          const obj = JSON.parse(res);

          this.setState({
              imgPath:obj.path
          })
        }
      };
    }
  };

  // 初次渲染完毕
  componentDidMount() {
    console.log("---componentDidMount----");
    // document.getElementById("box").focus()
    // console.log(this.refs.boxRef)

    // this.refs.boxRef.focus()

    // console.log(this.inputRef.current)
    // this.inputRef.current.focus()
  }
}

export default RefAndDom;
