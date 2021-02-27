import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'


import { changeIsLoginAction, changeUserInfoAction } from './store/actionCreators'
import toast from '@/utils/message'
import { login } from '@/service/user'

import {
  LoginWrapper
} from './style'

export default memo(function MookLogin(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")


  const dispatch = useDispatch();


  function onLogin () {
    login(username, password).then(res => {
      const {id, username} = res.data;
      dispatch(changeUserInfoAction({id, username}));
      dispatch(changeIsLoginAction(true));
      toast(dispatch, "登陆成功")
      props.history.push("/")
    }).catch(err => {
      toast(dispatch, err.response.data.message);
    })
    
  }
  return (
    <LoginWrapper>
      <div className="title">用户登录</div>
      <div className="input-wrapper">
        <input className="input" placeholder="请输入用户名" value={username} onChange={e => setUsername(e.target.value)}/>
      </div>
      <div className="input-wrapper">
        <input className="input" placeholder="请输入密码" value={password} onChange={e => setPassword(e.target.value)}/>
      </div>
      <button className="submit-btn" onClick={e => onLogin()}>登录</button>
    </LoginWrapper>
  )
})
