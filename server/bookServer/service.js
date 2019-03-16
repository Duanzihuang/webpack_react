const db = require('./db.js')

// 查询全部
exports.findAll = (req, res) => {
  db.execQuery('select * from book order by id', result => {
    res.json(result)
  })
}

// 根据id查询
exports.findById = (req, res) => {
  const id = req.params.id || ''

  db.execQuery(`select * from book where id=${id}`, result => {
    res.json(result[0])
  })
}

//新增
exports.addBook = (req, res) => {
  const sql = `insert into book(name) values('${req.body.name}')`

  db.execQuery(sql, result => {
    if (result.affectedRows > 0) {
      res.json({ status: 0, message: '插入成功', insertId: result.insertId })
    } else {
      res.json({ status: 1, message: '插入失败' })
    }
  })
}

//修改
exports.editBook = (req, res) => {
  const name = req.body.name || ''
  const id = req.params.id || ''
  const sql = `update book set name = '${name}' where id =${id}`

  db.execQuery(sql, result => {
    if (result.affectedRows > 0) {
      res.json({ status: 0, message: '修改成功' })
    } else {
      res.json({ status: 1, message: '修改失败' })
    }
  })
}

// 删除
exports.deleteBook = (req, res) => {
  const id = req.params.id || ''
  const sql = `delete from book where id=${id}`

  db.execQuery(sql, result => {
    if (result.affectedRows > 0) {
      res.json({ status: 0, message: '删除成功' })
    } else {
      res.json({ status: 1, message: '删除失败' })
    }
  })
}
