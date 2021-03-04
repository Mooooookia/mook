import React, { memo, useState, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'

import { getBlack } from '@/service/user'
import { getAvatar } from '@/utils/avatar'

import {
  BlackListWrapper
} from './style'

export default memo(function MookSettingBlackList(props) {
  const [userId, setUserId] = useState(0)
  const [userList, setUserList] = useState([])
  const { userInfo } = useSelector(state => ({
    userInfo: state.getIn(["user", "userInfo"])
  }), shallowEqual)

  useEffect(() => {
    if (userInfo && userInfo.id) {
      setUserId(userInfo.id)
    }
  }, [userInfo])

  useEffect(() => {
    getBlack().then(res => {
      setUserList(res.data)
    })
  }, [userId]) 

  function jumpToUser(id) {
    if (props.history) {
      props.history.push(`/user/${id}`)
    }
  }

  return (
    <BlackListWrapper>
      <div className="user-list">
        {
          userList.map((item, index) => {
            return <div className="user-item" key={item.id} onClick={e => jumpToUser(item.id)}>
              <div className="avatar">
                <img className="avatar-img" src={getAvatar(item.id)} alt="#"/>
              </div>
              <div className="nickname">{item.nickname}</div>
            </div>
          })
        }
      </div>
    </BlackListWrapper>
  )
})
