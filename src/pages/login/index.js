import React, { memo , useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'



import { changeIsLoginAction } from './store/actionCreators'

export default memo(function MookLogin() {
  const { isLogin } = useSelector(state => ({
    isLogin: state.getIn(["user", "isLogin"]),
    userInfo: state.getIn(["user", "userInfo"])
  }), shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeIsLoginAction(true));
  }, [dispatch]);

  return (
    <div>
      {isLogin && "Hello"}
    </div>
  )
})
