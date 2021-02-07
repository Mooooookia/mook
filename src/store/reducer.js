import { combineReducers } from 'redux-immutable'

import { reducer as userReducer } from '../pages/login/store'

const cReducer = combineReducers({
  user: userReducer
})
export default cReducer;