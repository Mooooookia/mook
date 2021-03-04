import React, { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getUserInfo, changeInfo } from '@/service/user'
import toast from '@/utils/message'

import {
  ProfileWrapper
} from './style'

export default memo(function MookSettingProfile(props) {
  const [nickname, setNickname] = useState("")
  const [gender, setGender] = useState(0)
  const [qq, setQQ] = useState("")
  const [email, setEmail] = useState("")
  const [introduction, setIntroduction] = useState("")
  const [userId, setUserId] = useState(0)
  const { userInfo } = useSelector(state => ({
    userInfo: state.getIn(["user", "userInfo"])
  }), shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    if (userInfo && userInfo.id) {
      setUserId(userInfo.id)
    }
  }, [userInfo])

  useEffect(() => {
    getUserInfo().then(res => {
      res = res.data
      if (res.nickname) setNickname(res.nickname)
      if (res.gender) setGender(res.gender)
      if (res.qq) setQQ(res.qq)
      if (res.email) setEmail(res.email)
      if (res.introduction) setIntroduction(res.introduction)
    })
  }, [userId, userInfo]) 

  function changeUserInfo() {
    changeInfo({
      nickname,
      gender,
      qq,
      email,
      introduction
    }).then(res => {
      toast(dispatch, "修改成功")
    })
  }

  return (
    <ProfileWrapper>
      <div className="setting-block">
        <div className="block-wrapper">
          <div className="title">昵称</div>
          <div className="input-wrapper">
            <input className="input" value={nickname} onChange={e => setNickname(e.target.value)}/>
          </div>
        </div>
        <div className="block-wrapper">
          <div className="title">性别</div>
          <div className="input-wrapper">
            <select className="input" value={gender} onChange={e => setGender(e.target.value)}>
              <option value="0">保密</option>
              <option value="1">男</option>
              <option value="2">女</option>
            </select>
          </div>
        </div>
        <div className="block-wrapper">
          <div className="title">QQ</div>
          <div className="input-wrapper">
            <input className="input" value={qq} onChange={e => setQQ(e.target.value)}/>
          </div>
        </div>
        <div className="block-wrapper">
          <div className="title">Email</div>
          <div className="input-wrapper">
            <input className="input" value={email} onChange={e => setEmail(e.target.value)}/>
          </div>
        </div>
        <div className="block-wrapper">
          <div className="title">个人介绍</div>
          <div className="input-wrapper">
            <textarea className="text" value={nickname} onChange={e => setNickname(e.target.value)}/>
          </div>
        </div>
        <div className="change-btn" onClick={changeUserInfo}>保存</div>
      </div>

    </ProfileWrapper>
  )
})
