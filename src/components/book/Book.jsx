import React, { Component } from "react";

import "./Book.css";

export default class Book extends Component {
  constructor() {
    super();

    this.state = {
      bookName: "",
      editId: null,
      books: [
        { id: 1001, name: "西游记" },
        { id: 1002, name: "红楼梦" },
        { id: 1003, name: "水浒传" },
        { id: 1004, name: "三国演义" }
      ]
    };
  }

  handle = event => {
    this.setState({
      bookName: event.target.value
    });
  };

  _getNewId = () => {
    const ids = this.state.books.map(item => item.id);
    // const maxId = Math.max(...ids)
    const maxId = Math.max.apply(null, ids);
    return maxId + 1;
  };

  addOrEdit = () => {
    if (this.state.bookName.trim().length === 0) return;

    if (this.state.editId) {
      // 修改
      this.state.books.some(book=>{
        if (book.id === this.state.editId){
          book.name = this.state.bookName

          return true
        }
      })

      this.setState({
        books:this.state.books
      },()=>{
        this.state.editId = null
        this.setState({
          bookName:''
        })
      })
    } else {
      // 新增
      const newArray = [
        ...this.state.books,
        { id: this._getNewId(), name: this.state.bookName }
      ];

      this.setState({
        books: newArray
      },()=>{
        this.state.editId = null
        this.setState({
          bookName:''
        })
      });
    }
  };

  // 删除图书
  deleteBook = (event, id) => {
    event.preventDefault();

    const newArray = this.state.books.filter(item => item.id != id);

    this.setState({
      books: newArray
    });
  };

  // 编辑图书
  editBook = (event, id) => {
    event.preventDefault();

    // 要修改的图书
    const editBook = this.state.books.find(item => item.id === id);

    // 记录下要修改的id
    this.state.editId = editBook.id;
    this.setState({
      bookName: editBook.name
    });
  };

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
