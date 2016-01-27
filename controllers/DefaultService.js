'use strict';

var fs = require('fs');
var path = require('path')

exports.propertiesGet = function (args, res, next) {
  /**
   * parameters expected in the args:
   * address (String)
   * start (Integer)
   * count (Integer)
   **/
  var exampleData = fs.readFileSync(path.join(__dirname, '../data/index.json'))
  var examples = JSON.parse(exampleData)

  var resArr = examples.filter(function (e, i, a) {
    return args.address.value && e.propertyAddress && e.propertyAddress.toLowerCase().indexOf(args.address.value.toLowerCase()) >= 0
  })
  var start = (args.start && args.start.value) || 0
  var count = (args.count && args.count.value) || 10
  resArr = resArr.slice(start, start + count)
  resArr = resArr.map(function (e) {
    return {
      id: e.id,
      area: e.area,
      jurisdiction: e.jurisdiction,
      jurisdictionDesc: e.jurisdictionDesc,
      rollNum: e.rollNum,
      rollNumFormatted: e.rollNumFormatted,
      propertyAddress: e.propertyAddress
    }
  })
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(resArr))
}

exports.propertiesIdGet = function (args, res, next) {
  /**
   * parameters expected in the args:
   * id (String)
   **/

  var exampleData = fs.readFileSync(path.join(__dirname, '../data/index.json'))
  var examples = JSON.parse(exampleData)

  var resArr = examples.filter(function (e, i, a) {
    return args.id.value && e.id && e.id == args.id.value
  })
  var resObj = (resArr.length > 0) ? resArr[0] : {}
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(resObj))
}
