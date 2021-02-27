import React, { memo, useState, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'


import { headerLinks, userLinks } from '@/common/local-data'
import { changeIsLoginAction, getUserInfoAction } from '@/pages/login/store'
import { getAvatar } from '@/utils/avatar'
import toast from '@/utils/message'

import { NavLink, withRouter, Link } from 'react-router-dom'
import MookSearchBar from '@/components/search-bar'
import MookDropDown from './components/drop-down'
import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight,
  UserWrapper
} from './style'

export default withRouter(memo(function MookHeader(props) {
  const [showDropDown, setShowDropDown] = useState(false)

  const { isLogin, userInfo } = useSelector((state) => ({
    isLogin: state.getIn(["user", "isLogin"]),
    userInfo: state.getIn(["user", "userInfo"])
  }), shallowEqual);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUserInfoAction());
  }, [dispatch])

  function jumpToWrite () {
    if (!props.history) return;
    props.history.push("/write")
  }

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <Link className="logo" to="/">Mook</Link>
        <div className="nav-wrapper">
          {
            headerLinks.map((item, index) => {
              return (
                <NavLink className="nav-item" to={item.link} exact key={item.link}>{item.title}</NavLink>
              )
            })
          }
        </div>
        <MookSearchBar/>
      </HeaderLeft>
      {isLogin ? (
        <UserWrapper showDropDown={showDropDown}>
          <div 
            className="user"
            onMouseEnter={e => setShowDropDown(true)}
            onMouseLeave={e => setShowDropDown(false)}>
            <div className="avatar">
              <img src={getAvatar(userInfo.id)} className="avatar-img" alt="#"/>
            </div>
            <MookDropDown 
              className="dropdown" 
              linkList={userLinks} 
              extra={{
                title: "退出",
                icon: "&#xe612;",
                handle: e => {
                  dispatch(changeIsLoginAction(false))
                  localStorage.removeItem("token")
                  toast(dispatch, "注销成功")
                }
              }}/>
          </div>
          <button className="write-btn">
            <div className="iconfont write-icon">&#xe627;</div>
            <div className="write-btn-text" onClick={e => jumpToWrite()}>写文章</div>
          </button>
        </UserWrapper>
      ) : (
        <HeaderRight>
          <Link to="/login" className="login">登录</Link>
          <Link to="/register" className="register">注册</Link>
        </HeaderRight>
      )}
      
    </HeaderWrapper>
  )
}))
