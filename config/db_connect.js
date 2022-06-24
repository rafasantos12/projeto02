var mysql = require('mysql')
var connMysql = () => {
  return mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: 'R3p1t1l1@n0',
    database: 'portal_noticias'
  })
}

module.exports = () => {
  return connMysql;
} 