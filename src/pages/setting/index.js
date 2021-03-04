import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'
import { NavLink } from 'react-router-dom'


import checkLogin from '@/components/check-login'

import {
  SettingWrapper,
  LeftWrapper,
  RightWrapper
} from './style'

export default checkLogin(memo(function MookSetting(props) {

  return (
    <SettingWrapper>
      <LeftWrapper>
        <NavLink className="setting-item" to="/setting/basic">
          <i className="iconfont">&#xe621;</i>
          <div className="setting-title">基础设置</div>
        </NavLink>
        <NavLink className="setting-item" to="/setting/profile">
          <i className="iconfont">&#xe63c;</i>
          <div className="setting-title">个人资料</div>
        </NavLink>
        <NavLink className="setting-item" to="/setting/blacklist">
          <i className="iconfont">&#xe637;</i>
          <div className="setting-title">黑名单</div>
        </NavLink>
      </LeftWrapper>
      <RightWrapper>
        {renderRoutes(props.route.routes)}
      </RightWrapper>
    </SettingWrapper>
  )
}))
