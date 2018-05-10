export const blog = (state = { posts: [] }, { type, payload }) =>
  type === 'LOAD_POSTS'
    ? { ...state,
        posts: payload
      }
  : state

export default blog
