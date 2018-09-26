const Component = require('choo/component')
const html = require('choo/html')

module.exports = class Modal extends Component {
  constructor (name, state, emit) {
    super(name)
    this.state = state
    this.emit = emit
  }

  update () {
    return false
  }

  join = (e) => {
    e.stopPropagation()
    e.preventDefault()
    const { events } = this.state
    const inputNickname = this.element.querySelector('#nickname')
    const inputKey = this.element.querySelector('#key')
    if (!inputNickname.value || inputNickname.value.length === 0) return

    const key = inputKey.value.length > 0 ? inputKey.value : null
    this.emit(events.INIT_CHANNEL, inputNickname.value, key)

    inputNickname.value = ''
    inputKey.value = ''

    this.element.classList.add('dn')
  }

  createElement () {
    return html`
      <div
        class="mw-100 w-60 fixed z-5 center ph3 ph5-ns tc br2 pv3 pv5-ns bg-washed-green dark-green mb"
        style="transform: translate(-50%, -50%);left: 50%; top: 50%; height: 380px; max-height: 100%"
        >
        <h1 class="fw6 f3 f2-ns lh-title mt0 mb3">
          Welcome! Please set your info.
        </h1>
        <form class="pa3 black-80">
          <div class="measure center">
            <label for="nickname" class="f6 b db mb2">Nickname</label>

            <input id="nickname" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="nickname-desc" autocomplete="off" required>
          </div>
          <div class="measure center">
            <label for="key" class="f6 b db mb2">Channel</label>

            <input id="key" class="input-reset ba b--black-20 pa2 mb2 db w-100" type="text" aria-describedby="nickname-desc" autocomplete="off" placeholder="Dat Public Key or leave it empty">
          </div>
        </form>
        <div>
          <a class="center ma2 f6 br-pill bg-dark-green no-underline washed-green ba b--dark-green grow pv2 ph3 dib mr3"
            href="#" onclick=${this.join}>
            Join
          </a>
        </div>
      </div>
    `
  }
}
