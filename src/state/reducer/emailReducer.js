import {USER_EMAIL}from '../action/emailAction'

export const initialState = {
  userEmail:"dpatil@deloitte.com"
}

export default function emailReducer(state = initialState, action) {
  switch (action.type) {
    case USER_EMAIL:
      return { ...state, userEmail: action.payload }
    // case actions.GET_POST_SUCCESS:
    //   return { post: action.payload, loading: false, hasErrors: false }
    // case actions.GET_POST_FAILURE:
    //   return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}
