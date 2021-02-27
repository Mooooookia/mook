import React, { memo, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { changeShowMessage } from '@/common/store'

import {
  MessageWrapper
} from './style'

export default memo(function Message(props) {
  const { showMessage, message } = useSelector(state => ({
    showMessage: state.getIn(["common", "showMessage"]),
    message: state.getIn(["common", "message"])
  }), shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(changeShowMessage(false))
    }, 2000)
  }, [dispatch, showMessage])

  return (
    <CSSTransition
      in={showMessage}
      timeout={1000}
      classNames="message"
      unmountOnExit
    >
      <MessageWrapper>
        {message}
      </MessageWrapper>
    </CSSTransition>
  )
})