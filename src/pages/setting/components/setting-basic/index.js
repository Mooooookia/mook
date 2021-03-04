import React, { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getAvatar } from '@/utils/avatar'
import { avatar } from '@/service/upload'
import { changePassword } from '@/service/user'
import toast from '@/utils/message'

import {
  BasicWrapper
} from './style'

export default memo(function MookSettingBasic(props) {
  const [avatarUrl, setAvatarUrl] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const { userInfo } = useSelector(state => ({
    userInfo: state.getIn(["user", "userInfo"])
  }), shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    setAvatarUrl(getAvatar(userInfo.id));
  }, [userInfo])

  function upload(e) {
    const files = e.target.files;
    if (!files || !files[0]) return;
    const file = files[0];
    if (file.size > 3 * 1024 * 1024) {
      e.target.value = '';
      toast(dispatch, "头像大小超过3M!");
      return;
    }
    const data = new FormData();
    data.append('avatar', file)
    avatar(data).then(res => {
      e.target.value = '';
      toast(dispatch, "上传头像成功！");
      setAvatarUrl(`${avatarUrl}?new`)
    }).catch(err => {
      e.target.value = '';
      toast(dispatch, "未知错误");
    })
  }

  function changePwd() {
    changePassword(oldPassword, newPassword).then(res => {
      toast(dispatch, "修改密码成功！");
    }).catch(err => {
      toast(dispatch, err.response.data.message)
    })
  }

  return (
    <BasicWrapper>
      <div className="setting-avatar">
        <div className="avatar">
          <img className="avatar-img" src={avatarUrl} alt="#"/>
        </div>
        <button className="change-btn">
          更改头像
          <input className="file" type="file" onChange={e => upload(e)}/>
        </button>
      </div>
      <div className="setting-password">
        <div className="password-wrapper">
          <div className="title">旧密码</div>
          <div className="input-wrapper">
            <input className="input" type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)}/>
          </div>
        </div>
        <div className="password-wrapper">
          <div className="title">新密码</div>
          <div className="input-wrapper">
            <input className="input" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
          </div>
        </div>
        <div className="change-btn" onClick={changePwd}>修改密码</div>
      </div>
      

    </BasicWrapper>
  )
})
