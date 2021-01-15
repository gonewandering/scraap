const page = require('./lib/page')
const entities = require('./lib/entities')

async function scrape(cnf) {
  let $ = await page(cnf.url)
  let content = $(cnf.contentPath || 'body')
  let entities = await entities({ content })

  return {
    content,
    entities,
    $
  }
}

module.exports = scrape
