import React, { memo, useState } from 'react'
import { withRouter } from 'react-router-dom'

import {
  SearchBarWrapper
} from './style'

export default withRouter(memo(function MookSearchBar(props) {
  const [value, setValue] = useState("");
  const [focusd, setFocusd] = useState(false);

  function inputChange (value) {
    setValue(value)
  }
  function inputFocus () {
    setFocusd(true)
  }
  function inputBlur () {
    setTimeout(e => setFocusd(false), 100);
  }
  function onSearch () {
    if (!props.history) return;
    if (!value) return;
    props.history.push({
      pathname: `/search?key=${value}&type=article`,
      // state: {
      //   key: value,
      //   type: "article"
      // }
    })
    
  }

  return (
    <div>
      <SearchBarWrapper focusd={focusd}>
        <div className="input-wrapper">
          <input 
            className="input-box" 
            type="text" 
            placeholder="请输入搜索内容" 
            value={value} 
            onFocus={e => inputFocus()}
            onBlur={e => inputBlur()}
            onChange={e => inputChange(e.target.value)}/>
        </div>
        <i className="search-icon iconfont" onClick={e => onSearch()}>&#xe615;</i>
      </SearchBarWrapper>
    </div>
  )
}))
