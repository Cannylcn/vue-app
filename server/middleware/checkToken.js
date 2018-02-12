/**
 *Created by admin on 2018/1/15
 */
const jwt = require('jsonwebtoken')
module.exports = function (req, res, next) {
  let token = req.header['authorization'].split(' ')[1]
  let decoded = jwt.decode(token, 'secret')
  if (token && decoded.exp <= Date.now() / 1000) {
    return res.json({
      code: 401,
      message: 'token过期，请重新登录'
    })
  }
  next()
}
