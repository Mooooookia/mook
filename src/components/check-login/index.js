import React, {memo, useEffect} from 'react'
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import toast from '@/utils/message'


import { Redirect } from "react-router-dom";

export default function checkLogin(WrappedComponent) {
  return memo(function(props) {
    const { isLogin } = useSelector(state => ({
      isLogin: state.getIn(["user", "isLogin"])
    }), shallowEqual);
    const dispatch = useDispatch();
    useEffect(() => {
      if (!isLogin) {
        toast(dispatch, "请您先登陆！")
      }
    }, [dispatch, isLogin])

    return (
      isLogin ? <WrappedComponent {...props}/> : <Redirect to="/login"/>
    )
  })
}