var mysql = require('mysql')

/*var connection = mysql.createConnection({
  host: '10.202.202.94',
  user: 'remixeddb',
  password: 'remixeddb123',
  port: '3306',
  database: 'remixed',
  charset: 'UTF8_GENERAL_CI'
})*/

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  port: '3306',
  database: 'TEST',
  charset: 'UTF8_GENERAL_CI'
})

module.exports = connection