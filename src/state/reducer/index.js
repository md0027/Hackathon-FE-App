import { combineReducers } from 'redux'

import emailReducer from './emailReducer'

// other reducer import here
// import postReducer from './postReducer'
// import commentsReducer from './commentsReducer'

const rootReducer = combineReducers({
  email: emailReducer,
//   post: postReducer,  
//   comments: commentsReducer,
})

export default rootReducer
