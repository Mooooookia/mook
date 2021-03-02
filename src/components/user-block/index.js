import React, { memo, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getAvatar } from '@/utils/avatar'
import { addFollow, deleteFollow } from '@/service/user'
import toast from '@/utils/message'

import {
  UserWrapper
} from './style'

export default withRouter(memo(function MookArticleBlock(props) {
  const { id, nickname, following, follower, articleCount, likeCount } = props.info
  const [followed, setFollowed] = useState(!!props.info.followed)
  const { isLogin } = useSelector(state => ({
    isLogin: state.getIn(["user", "isLogin"])
  }), shallowEqual)
  const dispatch = useDispatch();

  function cancelFollow() {
    if (!isLogin) {
      toast(dispatch, "请您先登陆");
      return;
    }
    deleteFollow(id).then(res => {
      setFollowed(false);
      toast(dispatch, "取消关注成功！")
    })
  }

  function onFollow() {
    if (!isLogin) {
      toast(dispatch, "请您先登陆");
      return;
    }
    addFollow(id).then(res => {
      setFollowed(true);
      toast(dispatch, "关注成功！")
    })
  }

  function jumpToUser(id) {
    if (props.history) {
      props.history.push(`/user/${id}`)
    }
  }

  return (
    <UserWrapper>
      <div className="avatar" onClick={e => jumpToUser(id)}>
        <img src={getAvatar(id)} alt="#" className="avatar-img"/>
      </div>
      <div className="option">
        {
          followed ? <div className="follow cancel" onClick={e => cancelFollow()}>已关注</div> : 
          <div className="follow" onClick={e => onFollow()}>关注</div>
        }
      </div>
      <div className="nickname" onClick={e => jumpToUser(id)}>{nickname}</div>
      <div className="info">
        <span className="info-item">关注 {following}</span>
        <span className="info-item">粉丝 {follower}</span>
        <span className="info-item">文章 {articleCount}</span>
      </div>
      <div className="like">获得了 {likeCount} 个喜欢</div>
    </UserWrapper>
  )
}))
