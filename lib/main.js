const {AutoLanguageClient} = require('atom-languageclient')
const cp = require('child_process');

class VLangLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return [ 'source.v', 'source.vsh' ] }
  getLanguageName () { return 'V' }
  getServerName () { return 'VLS' }

  startServerProcess (projectPath) {
    console.log("starting vls");
    var path = "vls"

    if ( !(atom.config.get('lsp-v.vlsPath') == "") ) {
        path = atom.config.get('lsp-v.vlsPath')
    }

    return cp.spawn(path, [], { cwd: projectPath })
  }
}

module.exports = new VLangLanguageClient()
