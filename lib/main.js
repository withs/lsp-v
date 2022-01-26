const {AutoLanguageClient} = require('atom-languageclient')
const cp = require('child_process');

class VLangLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return [ 'source.v', 'source.vsh' ] }
  getLanguageName () { return 'V' }
  getServerName () { return 'VLS' }

  startServerProcess () {
    console.log("stating vls");
    return cp.spawn("vls", [])
  }
}

module.exports = new VLangLanguageClient()
