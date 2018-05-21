import React from 'react'
import { Provider, connect } from 'react-redux'
import { Route, NavLink } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import PropTypes from 'prop-types'

import Home from './Home'
import Blog from './Blog'

const Root = ({ store, history, blog }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <header>
          <NavLink to="/">home</NavLink>
          <NavLink to="/blog">blog</NavLink>
        </header>
        <main>
          <Route exact path="/" component={Home}/>
          <Route path="/blog" render={() => <Blog posts={blog.posts}/>}/>
        </main>
      </div>
    </ConnectedRouter>
  </Provider>
)

Root.propTypes = {
  blog: PropTypes.object.isRequired
}

export default connect(
  state => ({ blog: state.blog })
)(Root)
