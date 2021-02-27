import { combineReducers } from 'redux-immutable'

import { reducer as userReducer } from '../pages/login/store'
import { reducer as writeReducer } from '../pages/write/store'
import { reducer as commonReducer } from '../common/store'

const cReducer = combineReducers({
  user: userReducer,
  write: writeReducer,
  common: commonReducer
})
export default cReducer;