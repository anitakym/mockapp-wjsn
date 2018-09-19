var Mock = require('mockjs')
var articleAPI = require('./table')

// Mock.setup({
//   timeout: '350-600'
// })

// 文章相关
// Mock.mock(/\/article\/list/, 'get', articleAPI.getList)
// Mock.mock(/\/article\/pv/, 'get', articleAPI.getPv)
// Mock.mock(/\/article\/create/, 'post', articleAPI.createArticle)
// Mock.mock(/\/article\/update/, 'post', articleAPI.updateArticle)

var Data = {};
Data.createArticle = Mock.mock(articleAPI.createArticle())
Data.updateArticle = Mock.mock(articleAPI.updateArticle())
Data.getPv = Mock.mock(articleAPI.getPv())
Data.getList = function(config) {
  return Mock.mock(articleAPI.getList(config))
}




module.exports = Data;