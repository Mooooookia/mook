import React, { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getRecord } from '@/service/message'
import { authorInfo } from '@/service/user'
import { getAvatar } from '@/utils/avatar'
import parseTime from '@/utils/time'
import toast from '@/utils/message'
import { sendMessage } from '@/service/message'

import checkLogin from '@/components/check-login'
import {
  MessageBoxWrapper
} from './style'

export default checkLogin(memo(function MookMessageBox(props) {
  const [messageList, setMessageList] = useState([])
  const [friendName, setFriendName] = useState("")
  const [content, setContent] = useState("")
  const { userInfo } = useSelector(state => ({
    userInfo: state.getIn(["user", "userInfo"])
  }), shallowEqual)
  const dispatch = useDispatch()


  const userId = userInfo.id
  const friendId = props.match.params.id
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  })

  useEffect(() => {
    getRecord(friendId).then(res => {
      setMessageList(res.data)
    })
    authorInfo(friendId).then(res => {
      res = res.data;
      setFriendName(res.nickname)
    })
  }, [friendId, userId])

  function jumpToUser(id) {
    if (props.history) {
      props.history.push(`/user/${id}`)
    }
  }
  function sendMsg() {
    if (!content) {
      toast(dispatch, "内容不能为空！")
      return
    }
    const text = content;
    setContent("")
    sendMessage(friendId, text).then(res => {
      toast(dispatch, "发送成功")
      getRecord(friendId).then(res => {
        setMessageList(res.data)
      })
    }).catch(err => {
      toast(dispatch, err.response.data.message)
    })
  }

  function onEnter(e) {
    console.log(999)
    if (e.keyCode === 13 && e.ctrlKey) {
      sendMsg();
    }
  }
  return (
    <MessageBoxWrapper>
      <div className="header">与 {friendName} 的对话</div>
      <div className="message-wrapper">
        {
          messageList.map((item, index) => {
            return (
              // eslint-disable-next-line
              <div className={`message-${item.sender.id == friendId ? "left" : "right"}-wrapper`} key={item.id}>
                <div className="avatar" onClick={e => jumpToUser(item.sender.id)}>
                  <img className="avatar-img" src={getAvatar(item.sender.id)} alt="#"/>
                </div>
                <div className="message">
                  {item.content}
                  <div className="time">{parseTime(item.createAt)}</div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="send-message">
        <div className="input-wrapper">
          <textarea
            className="text"
            placeholder="输入内容"
            value={content}
            onChange={e => setContent(e.target.value)}
            onKeyUp={e => onEnter(e)}
          />
        </div>
        <div className="hint">按Ctrl + Enter直接发送</div>
        <button className="submit" onClick={sendMsg}>发送</button>
        <button className="cancel" onClick={e => setContent("")}>取消</button>
      </div>

    </MessageBoxWrapper>
  )
}))
