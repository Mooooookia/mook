import * as actionTypes from './constants'
import {
  test
} from '@/service/user'

export const changeIsLoginAction = (isLogin) => ({
  type: actionTypes.CHANGE_IS_LOGIN,
  isLogin
})

export const changeUserInfoAction = (userInfo) => ({
  type: actionTypes.CHANGE_USER_INFO,
  userInfo
})

export const getUserInfoAction = () => {
  return (dispatch) => {
    if (!localStorage.token) return;
    test().then(res => {
      const {id, username} = res.data;
      dispatch(changeIsLoginAction(true));
      dispatch(changeUserInfoAction({
        id,
        username
      }))
    }).catch(err => {
    })
  }
}