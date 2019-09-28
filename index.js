const XML = require('pixl-xml')
const get = require('lodash.get')
const d = require('debug')('index')

exports.value = function (path, xml) {
  // output value at path
  const workflow = XML.parse(xml)
  d({ workflow })
  const value = get(workflow, path)
  d({ value })
  return value
}
