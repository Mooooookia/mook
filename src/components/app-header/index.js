import React, { memo, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { headerLinks, userLinks } from '@/common/local-data'


import { NavLink, withRouter } from 'react-router-dom'
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

  function jumpToWrite () {
    if (!props.history) return;
    props.history.push("/write")
  }

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <a className="logo" href="/">Mook</a>
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
              <img src={userInfo.avatar} className="avatar-img"/>
            </div>
            <MookDropDown className="dropdown" linkList={userLinks}/>
          </div>
          <button className="write-btn">
            <div className="iconfont write-icon">&#xe627;</div>
            <div className="write-btn-text" onClick={e => jumpToWrite()}>写文章</div>
          </button>
        </UserWrapper>
      ) : (
        <HeaderRight>
          <button className="login">登录</button>
          <button className="register">注册</button>
        </HeaderRight>
      )}
      
    </HeaderWrapper>
  )
}))
