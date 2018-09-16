const Component = require('choo/component')
const html = require('choo/html')

const message = require('./message')

module.exports = class ViewMessages extends Component {
  constructor (name, state, emit) {
    super(name)
    this.state = state
    this.emit = emit
    this.messages = []
  }

  update ({ messages = [] }) {
    return messages.length !== this.messages.length
  }

  createElement ({ messages }) {
    this.messages = messages.slice()

    return html`
      <section id="olaf-chat" class="vh-100 w-100 w-60-ns pa3 ba b--silver b--dashed br3 cover overflow-auto">
        ${this.messages.map(m => message(m))}
      </section>
    `
  }

  afterupdate () {
    this.element.scrollTo(0, this.element.scrollHeight)
  }
}
