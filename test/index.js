const test = require('tape')
const xmlGet = require('../.')

test('should return 1977', function (t) {
  t.equal(xmlGet.value('planes_for_sale.ad[0].year', 'test/fixtures/one.xml'), '1977')
  t.end()
})

test('should return json', function (t) {
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
