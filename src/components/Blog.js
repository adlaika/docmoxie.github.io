import React from 'react'
import PropTypes from 'prop-types'

export const Blog = ({ posts }) =>
  <div>
    { posts.map((post, i) =>
        <pre key={i}>{post}</pre>)
    }
  </div>

Blog.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Blog
