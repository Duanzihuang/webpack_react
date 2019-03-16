import React, { Component } from "react";

import "./Book.css";

export default class Book extends Component {
  constructor() {
    super();

    this.state = {
      bookName: "",
      editId: null,
      books: []
    };
  }

  handle = event => {
    this.setState({
      bookName: event.target.value
    });
  };
  
  addOrEdit = () => {
    if (this.state.bookName.trim().length === 0) return;

    if (this.state.editId) {
      // 修改
      fetch(`http://localhost:8080/book/${this.state.editId}`,{
        method:'PUT',
        headers: { //请求头 键值对 json
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name:this.state.bookName}) //{"name":"xxx"}
      }).then(response=>response.json()).then(data=>{
        // console.log(data)

        this.loadBooksData()
      })
    } else {
      // 新增
      fetch('http://localhost:8080/book',{
        method: "POST", //请求方法
        headers: { //请求头 键值对 json
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: "name="+this.state.bookName
      }).then(response=>response.json()).then(data=>{

        this.loadBooksData()
      })
    }
  };

  // 删除图书
  deleteBook = (event, id) => {
    event.preventDefault();

    fetch(`http://localhost:8080/book/${id}`,{
      method:'DELETE'
    }).then(response=>{response.json()}).then(data=>{
      // console.log(data)
      this.loadBooksData()
    })
  };

  // 编辑图书
  editBook = (event, id) => {
    event.preventDefault();

    // 根据id去查询图书
    fetch(`http://localhost:8080/book/${id}`).then(response=>response.json()).then(data=>{
      this.state.editId = data.id;
      this.setState({
        bookName: data.name
      });
    })
    

    // // 记录下要修改的id
    // this.state.editId = editBook.id;
    // this.setState({
    //   bookName: editBook.name
    // });
  };

  componentWillMount(){
    this.loadBooksData()
  }

  loadBooksData = () => {
    fetch('http://localhost:8080/book',{
      method:'GET'
    }).then(response=>{
      return response.json()
    }).then(data=>{
      this.state.editId = null
      this.setState({
        books:data,
        bookName:''
      })
    })
  }

  render() {
    const { books, bookName } = this.state;
    return (
      <div>
        书名：
        <input type="text" onChange={this.handle} value={bookName} />
        &nbsp;&nbsp;<button onClick={this.addOrEdit}>新增/修改</button>
        <br />
        <br />
        <table>
          <thead>
            <tr>
              <th>编号</th>
              <th>书名</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {books.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <a
                      href=""
                      onClick={() => {
                        this.deleteBook(event, item.id);
                      }}
                    >
                      删除
                    </a>
                    |
                    <a
                      href=""
                      onClick={() => {
                        this.editBook(event, item.id);
                      }}
                    >
                      编辑
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
