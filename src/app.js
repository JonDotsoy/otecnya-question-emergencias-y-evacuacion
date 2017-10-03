console.info(`${process.env.npm_package_name} v${process.env.npm_package_version} ${process.env.npm_package_gitHead && `(${process.env.npm_package_gitHead.slice(0, 7)})`}`)

const React = require('react')
const ReactDOM = require('react-dom')
const {injectGlobal} = require('styled-components')
const {store} = require('./store')
const {Provider} = require('react-redux')
const {HashRouter: Router, Route, Switch} = require('react-router-dom')
const {Quest} = require('./Quest/Quest')
const {Session} = require('./Session/Session')
const {Result} = require('./Result/Result')
const {Logger} = require('./components/Logger/Logger')
const {Questions} = require('./Questions/Questions')
const {Register} = require('./Register/Register')
const {RegisterDetaills} = require('./Register/RegisterDetaills')
const {loadQuestions} = require('./util/lodasSamples')
const questions = require('./questions')
const {default: persistState} = require('redux-localstorage')

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  html {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }

  body {
    padding: 0px;
    margin: 0px;
  }
`

// Load service worker
require('./registerServiceWorker')({
  store
})
.catch(console.error)

ReactDOM.render((
  <div>
    <Provider store={store}>
      <div>
        <Logger />
        <Router>
          <Switch>
            <Route exact path='/' component={Quest} />
            <Route exact path='/questions' component={Questions} />
            <Route exact path='/session' component={Session} />
            <Route exact path='/results' component={Result} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/register/:idRegistre' component={RegisterDetaills} />
          </Switch>
        </Router>
      </div>
    </Provider>
  </div>
  ),
  document.querySelector('#app')
)
