const test = require('tape')
const xmlGet = require('../.')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

test('should return 1977', (t) => {
  t.equal(xmlGet.value('planes_for_sale.ad[0].year', 'test/fixtures/one.xml'), '1977')
  t.end()
})

test('should return json', (t) => {
  t.deepEqual(
    xmlGet.value('planes_for_sale.ad[0]', 'test/fixtures/one.xml'),
    {
      year: '1977',
      make: '&c;',
      model: 'Skyhawk',
      color: 'Light blue and white',
      description: 'New paint, nearly new interior,\n                    685 hours SMOH, full IFR King avionics',
      price: '23,495',
      seller: {
        phone: '555-222-3333',
        _Data: 'Skyway Aircraft'
      },
      location: {
        city: 'Rapid City,',
        state: 'South Dakota'
      }
    })
  t.end()
})

test('cli - pipe input', async (t) => {
  const r = await exec('cat ./test/fixtures/one.xml | bin/xml-get planes_for_sale.ad[1].location.state')
  t.equal(r.stdout, 'Missouri\n', 'Correct output when using pipe')
  t.end()
})

test('cli - file input', async (t) => {
  const r = await exec('bin/xml-get planes_for_sale.ad[1].location.state ./test/fixtures/one.xml')
  t.equal(r.stdout, 'Missouri\n', 'Correct output when using file input')
  t.end()
})

test('cli - file input (output json)', async (t) => {
  const r = await exec('bin/xml-get planes_for_sale.ad[1].location.state ./test/fixtures/one.xml json')
  t.equal(r.stdout, '"Missouri"\n', 'Correct JSON output when using file input')
  t.end()
})
