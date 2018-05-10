import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker'
import { fetchList, importAll } from './utils'

import './index.css'
import App from './components/App'
import reducer from './reducers'

import { loadPosts } from './actions'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const postPaths = importAll(require.context('./posts/', false, /\.md$/))
fetchList(postPaths)
  .then(posts => store.dispatch(loadPosts(posts)))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
