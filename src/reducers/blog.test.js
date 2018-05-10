import blog from './blog'

describe('blog reducer', () => {
  it('should handle initial state', () => {
    expect(
      blog(undefined, {})
    ).toEqual({ posts: [] })
  })

  it('should handle LOAD_POSTS', () => {
    const posts = [
      'hello',
      'world'
    ]
    expect(
      blog({}, {
        type: 'LOAD_POSTS',
        payload: posts,
      })
    ).toEqual({ posts: posts })
  })
})
