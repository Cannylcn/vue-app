/**
 *Created by admin on 2018/1/15
 */
const express = require('express')
const UserController = require('../controller/user.js')
const router = express.Router()

UserController(router)

module.exports = router
