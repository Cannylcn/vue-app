/**
 *Created by admin on 2018/1/15
 */
const express = require('express')
const model = require('../db/db.js')
const router = express.Router()
const moment = require('moment')
const objectIdToTimestamp = require('objectid-to-timestamp')
const createToken = require('../middleware/createToken.js')
const sha1 = require('sha1')
const checkToken = require('../middleware/checkToken.js')

// 注册
const Register = (req, res) => {
  let userRegister = new model.User({
    phone: req.body.phone,
    password: sha1(req.body.password),
    recheck: req.body.recheck,
    token: createToken(this.phone)
  })

  userRegister.create_time = moment(objectIdToTimestamp(userRegister._id)).format(('YYYY-MM-DD HH:mm:ss'))

  model.User.findOne({
    phone: userRegister.phone
  }, (err, doc) => {
    if (err) console.log(err)
    if (doc) {
      res.json({
        success: false
      })
    } else {
      userRegister.save(err => {
        if (err) console.log(err)
        console.log('register success')
        res.json({
          success: true
        })
      })
    }
  })
}

// 登录
const Login = (req, res) => {
  let userLogin = new model.User({
    phone: req.body.phone,
    password: sha1(req.body.password),
    token: createToken(this.phone)
  })
  model.User.findOne({ phone: userLogin.phone }, (err, doc) => {
    if (err) console.log(err)
    if (!doc) {
      console.log('账号不存在')
      res.json({
        info: false
      })
    } else if (userLogin.password === doc.password) {
      console.log('登录成功')
      const name = req.body.phone
      res.json({
        success: true,
        phone: doc.phone,
        time: moment(objectIdToTimestamp(doc._id)).format('YYYY-MM-DD HH:mm:ss'),
        token: createToken(name)
      })
    } else {
      console.log('密码错误')
      res.json({
        success: false
      })
    }
  })
}

// 所有用户打印
const User = (req, res) => {
  model.User.find({}, (err, doc) => {
    if (err) console.log(err)
    res.send(doc)
  })
}

// 删除用户
const delUser = (req, res) => {
  model.User.findOneAndDelete({ _id: req.body._id }, err => {
    if (err) console.log(err)
    console.log('删除用户成功')
    res.json({
      success: true
    })
  })
}

module.exports = (router) => {
  router.post('/register', Register)
  router.post('/login', Login)
  router.get('/user', checkToken, User)
  router.post('delUser', checkToken, delUser)
}
