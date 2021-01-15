const language = require('@google-cloud/language')
 const client = new language.LanguageServiceClient()

module.exports = async function (content, type) {
  type = type || 'TYPE_UNSPECIFIED'
  content = content.substr(0, 500)

  let document = {
     type: 'PLAIN_TEXT',
    content
  }

  let entities = await client.analyzeEntities({ document })

  return entities[0]
}
