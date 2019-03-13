const express = require('express')
// 文件上传第三方包 参考：https://github.com/expressjs/multer/blob/master/doc/README-zh-cn.md
const multer = require('multer')
const path = require('path')
const app = express()

// 设置允许跨域
const allowCrossDomain = (req, res, next) => {
  // 通过CORS设置允许跨域
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', '*')
  next()
}

// 设置静态资源根目录
app.use(express.static(path.resolve(__dirname, 'uploads')))
app.use(allowCrossDomain)

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.resolve(__dirname, 'uploads'))
  },
  filename: function(req, file, cb) {
    // 获取文件后缀名
    const fileFormat = file.originalname.split('.')
    cb(
      null,
      file.fieldname +
        '-' +
        Date.now() +
        '.' +
        fileFormat[fileFormat.length - 1]
    )
  }
})

// 设置upload属性
var upload = multer({ storage: storage }).single('file')

// 处理文件上传请求
app.post('/uploadFile', function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      // 发生错误
      console.log(err)
    } else if (err) {
      // 发生错误
      console.log(err)
    } 

    // 一切都好
    if (req.file) {
      res.send({
        path: `http://127.0.0.1:8888/${req.file.filename}`
      })
    } else {
      res.send({
        err:'upload fail'
      })
    }
  })
})

app.listen(8888, () => {
  console.log('server running')
})