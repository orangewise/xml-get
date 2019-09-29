const d = require('debug')('index')
const XML = require('pixl-xml')
const get = require('lodash.get')

exports.value = function (path, xml) {
  // output value at path
  const workflow = XML.parse(xml)
  d({ workflow })
  const value = get(workflow, path)
  d({ value })
  return value
}

exports.usage = function () {
  console.error(`
usage: 
$ npx xml-get <json-path> <path-to-xml-file>
or 
$ cat <path-to-xml-file> | npx xml-get <json-path>
`)
}
