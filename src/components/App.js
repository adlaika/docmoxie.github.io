import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Blog from './Blog'

const App = ({ blog }) => (
  <div>
    <Blog posts={blog.posts}/>
  </div>
)

App.propTypes = {
  blog: PropTypes.object.isRequired
}

export default connect(
  state => ({ blog: state.blog })
)(App)
