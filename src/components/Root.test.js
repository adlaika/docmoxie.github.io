import createHistory from 'history/createMemoryHistory'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux';

import Root from './Root'
import reducers from '../reducers'

const rootReducer = combineReducers({
  ...reducers
})
const history = createHistory()

it('renders without crashing', () => {
  const store = createStore(rootReducer)
  const div = document.createElement('div')
  ReactDOM.render(<Root store={store} history={history}/>, div)
  ReactDOM.unmountComponentAtNode(div)
})
