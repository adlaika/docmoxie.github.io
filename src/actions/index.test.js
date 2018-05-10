import * as actions from './index'

describe('blog actions', () => {
  it('loadPosts should create LOAD_POSTS action', () => {
    const posts = [
      'hello',
      'world'
    ]
    expect(actions.loadPosts(posts)).toEqual({
      type: 'LOAD_POSTS',
      payload: posts
    })
  })
})
