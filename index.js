const page = require('./lib/page')
const entities = require('./lib/entities')

async function scrape(cnf) {
  let $ = await page(cnf.url)
  let text = $(cnf.contentPath || 'body')
  let entities = await entities(text)

  return {
    text,
    entities,
    $
  }
}

module.exports = scrape
