const express = require('express')
const router = express.Router()
const service = require('./service')

//GET 获取
router.get('/book', service.findAll)
router.get('/book/:id', service.findById)
//新增
router.post('/book', service.addBook)
//修改
router.put('/book/:id', service.editBook)
//删除
router.delete('/book/:id', service.deleteBook)

module.exports = router
