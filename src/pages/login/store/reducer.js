import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  isLogin: true,
  userInfo: {
    avatar: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2923846288,2346052074&fm=11&gp=0.jpg"
  }
});

function reducer (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_IS_LOGIN:
      return state.set("isLogin", action.isLogin);
    case actionTypes.CHANGE_USER_INFO:
      return state.set("userInfo", action.userInfo);
    default:
      return state
  }
}
export default reducer;