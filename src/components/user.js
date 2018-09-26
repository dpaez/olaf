const html = require('choo/html')

module.exports = userData => {
  return html`
    <li
      class="flex items-center lh-copy pa3 ph0-l bb b--black-10">
      <div class="pl3 pl0-ns flex-auto">
        <span class="f6 db black-70">${userData.username}</span>
      </div>
      <div>
        <span class="f6 db blue hover-dark-gray">${userData.lastseen ? userData.lastseen : '-'}</span>
      </div>
    </li>
  `
}
