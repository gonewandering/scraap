const  page = require('../lib/page');

test('loads body of result', () => {
  page('http://gonewandering.com').then(d => {
    expect(typeof page).toBe('string')
  })
})
