const cheerio = require('cheerio')
const request = require('request-promise-native')

module.exports = async function (url) {
  let page = await request.get(url)
  return cheerio.load(page)
}
