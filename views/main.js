const html = require('choo/html')
const css = require('sheetify')

const inputMsg = require('../components/input-msg')
const msg = require('../components/message')
const users = require('../components/users')

const TITLE = 'olaf - P2P Dat-powered chat'

const mainStyle = css`
  :host main {
    color: #004466;
    background-color: #00ffa2;
  }
`
module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="${mainStyle} code lh-copy h-100">
      <main class="pa3 cf center vh-100 dt w-100">
        <h1> CHAT MSGs 🐱 </h1>
        <aside class="fr w-30 ba b--silver b--dashed br3">
          ${state.cache(users, 'users').render()}
        </aside>
        <section class="w-100 pa3 cover">
        ${state.chat.history.map(m => msg(m))}
        </section>
        <section class="w-100 absolute bottom-0 center lh-copy">
          ${state.cache(inputMsg, 'inputMsg').render()}
        </section>
      </main>
    </body>
  `
}
