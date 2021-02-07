import React, { memo, useState } from 'react'


import {
  SearchBarWrapper
} from './style'

export default memo(function MookSearchBar() {
  const [value, setValue] = useState("");
  const [focusd, setFocusd] = useState(false);

  function inputChange (value) {
    setValue(value)
  }
  function inputFocus () {
    setFocusd(true)
  }
  function inputBlur () {
    setFocusd(false)
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
        <i className="search-icon iconfont">&#xe615;</i>
      </SearchBarWrapper>
    </div>
  )
})
