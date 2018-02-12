/**
 *Created by admin on 2018/1/15
 */
const mongoose = require('mongoose')
const config = require('config-lite')(__dirname)

mongoose.connect(config.mongodb, { useMongoClient: true })
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'Connect error'))
db.once('open', function () {
  console.log('Mongodb started successfully')
})

var userSchema = mongoose.Schema({
  phone: String,
  password: String,
  recheck: String,
  token: String,
  create_time: Date
})

var model = {
  User: mongoose.model('User', userSchema)
}

module.exports = model
