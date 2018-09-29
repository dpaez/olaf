var choo = require('choo')

var app = choo()
if (process.env.NODE_ENV !== 'production') {
  app.use(require('choo-devtools')())
} else {
  app.use(require('choo-service-worker')())
}

if (module.hot) {
  module.hot.accept(function () {
    window.location.reload()
  })
}

app.use(require('./stores/chat'))

app.route('/', require('./views/main'))
app.route('/*', require('./views/404'))

module.exports = app.mount('body')
