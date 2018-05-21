import createHistory from 'history/createBrowserHistory'
import React from 'react'
import ReactDOM from 'react-dom'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

import registerServiceWorker from './registerServiceWorker'
import { fetchList, importAll } from './utils'

import './index.css'
import Root from './components/Root'
import reducers from './reducers'

import { loadPosts } from './actions'

const history = createHistory()
const middleware = composeWithDevTools(applyMiddleware(
  routerMiddleware(history))
)

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  middleware
)

const postPaths = importAll(require.context('./posts/', false, /\.md$/))
fetchList(postPaths)
  .then(posts => store.dispatch(loadPosts(posts)))

ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('root')
)
registerServiceWorker()
