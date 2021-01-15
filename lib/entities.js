const language = require('@google-cloud/language')
const client = new language.LanguageServiceClient()

module.exports = async function (cnf) {
  type = cnf.type || 'PLAIN_TEXT'
  bounds = cnf.bounds || [0,500]
  content = cnf.content.substr(...cnf.bounds)

  let document = {
    type,
    content
  }

  let entities = await client.analyzeEntities({ document })

  return entities[0]
}
