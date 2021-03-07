import React, { memo, useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'

import { getAvatar } from '@/utils/avatar'
import { authorInfo } from '@/service/user'
import { addFollow, deleteFollow, addBlack, deleteBlack } from '@/service/user'
import toast from '@/utils/message'

import {
  UserWrapper,
  LeftWrapper,
  RightWrapper
} from './style'

export default memo(function MookUser(props) {
  const userId = props.match.params.id
  const [user, setUser] = useState({})
  const [followed, setFollowed] = useState(false)
  const [blacked, setBlacked] = useState(false)
  const { isLogin } = useSelector(state => ({
    isLogin: state.getIn(["user", "isLogin"])
  }), shallowEqual)
  const dispatch = useDispatch();

  function cancelFollow() {
    if (!isLogin) {
      toast(dispatch, "请您先登陆");
      return;
    }
    deleteFollow(userId).then(res => {
      setFollowed(false);
      toast(dispatch, "取消关注成功！")
    })
  }

  function onFollow() {
    if (!isLogin) {
      toast(dispatch, "请您先登陆");
      return;
    }
    addFollow(userId).then(res => {
      setFollowed(true);
      toast(dispatch, "关注成功！")
    })
  }

  function onBlack() {
    if (!isLogin) {
      toast(dispatch, "请您先登陆");
      return;
    }
    if (blacked) {
      deleteBlack(userId).then(res => {
        setBlacked(false)
        toast(dispatch, "移出黑名单成功！")
      })
    } else {
      addBlack(userId).then(res => {
        setBlacked(true)
        toast(dispatch, "加入黑名单成功！")
      })
    }
  }


  useEffect(() => {
    authorInfo(userId).then(res => {
      setUser(res.data)
      setFollowed(!!res.data.followed)
      setBlacked(!!res.data.blacked)
    })

  }, [userId])

  function jumpToMessage(id) {
    if (!isLogin) {
      toast(dispatch, "请您先登陆");
      return;
    }
    if (props.history) {
      props.history.push(`/message/${id}`)
    }
  }

  return (
    <UserWrapper>
      <LeftWrapper>
        <div className="user">
          <div className="avatar">
            <img className="avatar-img" src={getAvatar(userId)} alt="#"/>
          </div>
          <div className="option">
            <div className="send" onClick={e => jumpToMessage(userId)}>发私信</div>
            {
              followed ? <div className="follow cancel" onClick={e => cancelFollow()}>已关注</div> : 
              <div className="follow" onClick={e => onFollow()}>关注</div>
            }
          </div>
          <div className="nickname">{user.nickname}</div>
          <div className="info">
            <div className="info-item">
              <div className="count">{user.following}</div>
              <div className="text">关注</div>
            </div>
            <div className="info-item">
              <div className="count">{user.follower}</div>
              <div className="text">粉丝</div>
            </div>
            <div className="info-item">
              <div className="count">{user.articleCount}</div>
              <div className="text">文章</div>
            </div>
            <div className="info-item">
              <div className="count">{user.likeCount}</div>
              <div className="text">收获喜欢</div>
            </div>
          </div>
        </div>
        <div className="switch">
          <NavLink className="switch-item" exact to={`/user/${userId}/`}>文章</NavLink>
          <NavLink className="switch-item" to={`/user/${userId}/collected`}>收藏的文章</NavLink>
          <NavLink className="switch-item" to={`/user/${userId}/liked`}>喜欢的文章</NavLink>
          <NavLink className="switch-item" to={`/user/${userId}/following`}>关注</NavLink>
          <NavLink className="switch-item" to={`/user/${userId}/follower`}>粉丝</NavLink>
        </div>
        {renderRoutes(props.route.routes)}
      </LeftWrapper>
      <RightWrapper>
        <div className="info">
          <div className="info-item">
            <div className="title">个人介绍</div>
            <div className="content">{user.introduction}</div>
          </div>
          <div className="info-item">
            <div className="title">性别</div>
            <div className="content">{!user.gender ? "保密" : user.gender === 1 ? "男" : "女"}</div>
          </div>
          <div className="info-item">
            <div className="title">QQ</div>
            <div className="content">{user.qq}</div>
          </div>
          <div className="info-item">
            <div className="title">电子邮箱</div>
            <div className="content">{user.email}</div>
          </div>
        </div>
        <button className="black" onClick={onBlack}>{!!blacked ? "移出" : "加入"}黑名单</button>
      </RightWrapper>
    </UserWrapper>
  )
})
