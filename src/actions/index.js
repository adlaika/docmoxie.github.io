import { createAction } from 'redux-actions'

export const LOAD_POSTS = 'LOAD_POSTS'

export const loadPosts = createAction(LOAD_POSTS)
