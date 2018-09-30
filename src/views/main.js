const html = require('choo/html')

const modal = require('../components/modal')
const InputMsg = require('../components/input-msg')
const ViewMessages = require('../components/view-messages')
const Users = require('../components/users')

const TITLE = 'olaf - a P2P Dat-powered chat'

module.exports = view

const statusChannel = ({ key, init }) => {
  if (!key || !init) return null

  return html`
    <h4 class="pre" style="overflow-wrap: break-word;">Connected to: ${key}</h4>
  `
}

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  const { username, key, init } = state.chat

  return html`
    <body class="code lh-copy vh-100">
      <main class="pa3 flex flex-wrap vh-100 dt w-100">
        <div class="logo w-100 flex-wrap">
          <h1>olaf 🐱</h1>
          ${statusChannel({ init, key })}
        </div>
        <div class="flex w-100 justify-between flex-wrap-reverse flex-wrap-ns">
          ${state.cache(ViewMessages, 'viewMessages').render()}
          <aside class="w-100 vh-75-ns w-30-ns pa1-ns ba b--silver b--dashed br3 overflow-auto">
            ${init ? state.cache(Users, 'users').render() : ''}
          </aside>
        </div>
        <section class="w-100 pa0 mt2 mb2">
          ${state.cache(InputMsg, 'inputMsg').render()}
        </section>
      </main>
      ${(!init) ? modal({ username, key }, this.emit, this.state.events) : ''}
    </body>
  `
}
