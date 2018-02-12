/**
 *Created by admin on 2018/1/15
 */
const jwt = require('jsonwebtoken')

module.exports = function (name) {
  const token = jwt.sign({
    name: name
  }, 'secret', {expiresIn: '10s'})
  return token
}
