import * as actionTypes from './constants'

export const changeIsLoginAction = (isLogin) => ({
  type: actionTypes.CHANGE_IS_LOGIN,
  isLogin
})

export const changeUserInfoAction = (userInfo) => ({
  type: actionTypes.CHANGE_USER_INFO,
  userInfo
})