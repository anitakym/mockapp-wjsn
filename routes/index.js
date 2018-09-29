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

router.get('/classic/latest', function (req, res, next) {
  console.log('req', req.query)
  res.json({
    "content": "I love the days we spent together, before the old year lost, its shine. I'll keep that memory locked with my heart.",
    "fav_nums": 0,
    "id": 1,
    "image": "http://139.199.113.45:3003/images/movie.jpg",
    "index": 7,
    "like_status": 0,
    "pubdate": "2018-06-22",
    "title": "POI",
    "type": 100
  })
});

router.post('/like', function (req, res, next) {
  console.log('req', req.query)
  res.json({
    "error_code": 0,
    "msg": "ok",
    "request": "POST  /like/add"
  })
});

router.post('/like/cancel', function (req, res, next) {
  console.log('req', req.query)
  res.json({
    "error_code": 0,
    "msg": "ok",
    "request": "POST  /like/cancel"
  })
});




module.exports = router;
