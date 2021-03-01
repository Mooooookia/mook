import React, { memo, useState } from 'react'
import { useDispatch } from 'react-redux'


import toast from '@/utils/message'
import { register } from '@/service/user'

import {
  RegisterWrapper
} from './style'

export default memo(function MookRegister(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")


  const dispatch = useDispatch();


  function onRegister () {
    if (password !== confirm) {
      toast(dispatch, "两次输入密码不一致！");
      return;
    }
    register(username, password).then(res => {
      toast(dispatch, "注册成功")
      props.history.push("/login")
    }).catch(err => {
      toast(dispatch, err.response.data.message);
    })
  }

  return (
    <RegisterWrapper>
      <div className="title">用户注册</div>
      <div className="input-wrapper">
        <input className="input" placeholder="请输入用户名" value={username} onChange={e => setUsername(e.target.value)}/>
      </div>
      <div className="input-wrapper">
        <input type="password" className="input" placeholder="请输入密码" value={password} onChange={e => setPassword(e.target.value)}/>
      </div>
      <div className="input-wrapper">
        <input type="password" className="input" placeholder="请再一次输入密码" value={confirm} onChange={e => setConfirm(e.target.value)}/>
      </div>
      <button className="submit-btn" onClick={e => onRegister()}>注册</button>
    </RegisterWrapper>
  )
})
