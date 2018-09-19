var express = require('express');
var bodyParser = require('body-parser')
var data = require('../mock')
var router = express.Router();
const connection = require('../mysql.js')

console.log(data)

connection.connect(function (err) {
  if (err) {
    console.log('[query] - ' + err)
    return;
  }
  console.log('[connection connect] succeed')
})

function setupCORS(req, res, next) {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-type,Accept,X-Access-Token,X-Key');
  res.header('Access-Control-Allow-Origin', 'http://0.0.0.0:8887');
  res.header('Access-Control-Allow-Credentials', true)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
  } else {
    next();
  }
}

router.use(setupCORS)
router.use(bodyParser.text());//运用中间件，对请求体的文本进行解析

/* GET home page. */
router.get('/', function (req, res, next) {
  var sql = "select * from student_mapping";
  connection.query(sql, function (err, rows, fields) {
    if (err) {
      console.log('[query] - :' + err);
      return;
    }
    console.log(rows)
    console.log('The solution is: ', rows[0].solution);
  });
  res.render('index', { title: 'Express' });
});




module.exports = router;
