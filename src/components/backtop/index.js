import React, {memo, useState, useEffect} from 'react'
import { CSSTransition } from 'react-transition-group'
import { throttle } from '@/utils/optimize'

import {
  BacktopWrapper
} from './style'

export default memo(function Backtop(props) {
  const [showBacktop, setShowBacktop] = useState(false);

  

  useEffect(() => {
    const onScroll = throttle(() => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 50) setShowBacktop(true)
      else setShowBacktop(false)
    }, 500)
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  function backtop() {
    let timer = setInterval(() => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop === 0) clearInterval(timer)
      if (document.documentElement.scrollTop) document.documentElement.scrollTop -= scrollTop / 4;
      else document.body.scrollTop -= scrollTop / 4;
    }, 10)
  }

  return (
    <CSSTransition
      in={showBacktop}
      timeout={1000}
      classNames="fade"
      unmountOnExit
    >
      <BacktopWrapper className="iconfont" onClick={e => backtop()}>&#xe8c6;</BacktopWrapper>
    </CSSTransition>
  )
})