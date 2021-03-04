import React, { memo } from 'react'
import { withRouter } from 'react-router-dom'

import { getAvatar } from '@/utils/avatar'
import parseTime from '@/utils/time'

import {
  MessageBlockWrapper
} from './style'

export default withRouter(memo(function MookMessageBlock(props) {
  const { content, createAt, sender, receiver } = props.info
  const { userId } = props
  const user = (userId === sender.id ? receiver : sender);

  function jumpToMessage(id) {
    if (props.history) {
      props.history.push(`/message/${id}`)
    }
  }

  return (
    <MessageBlockWrapper onClick={e => jumpToMessage(user.id)}>
      <div className="avatar">
        <img className="avatar-img" src={getAvatar(user.id)} alt="#"/>
      </div>
      <div className="nickname">{user.nickname}</div>
      <div className="content">{content}</div>
      <div className="time">{parseTime(createAt)}</div>
    </MessageBlockWrapper>
  )
}))
