import React, { memo } from 'react'


import { Link } from 'react-router-dom'
import {
  DropDownWrapper
} from './style'

export default memo(function MookDropDown(props) {
  const { linkList = [], className, extra } = props;
  return (
    <DropDownWrapper className={className}>
      {
        linkList.map((item, index) => (
          <Link to={item.link} className="drop-down-item" key={item.link}>
            <div className="drop-down-item-icon iconfont" dangerouslySetInnerHTML={{__html: item.icon}}></div>
            <div className="drop-down-item-title">
              {item.title}
            </div>
          </Link>
        ))
      }
      { extra && <div className="drop-down-item" onClick={extra.handle}>
          <div className="drop-down-item-icon iconfont" dangerouslySetInnerHTML={{__html: extra.icon}}></div>
          <div className="drop-down-item-title">
            {extra.title}
          </div>
        </div>
      }
    </DropDownWrapper>
  )
})
