import React, { memo, useState, useEffect } from 'react'
import {  useSelector, shallowEqual } from 'react-redux'


import { getMessageList } from '@/service/message'
import { scroll } from '@/utils/optimize'

import checkLogin from '@/components/check-login'
import MookMessageBlock from './components/message-block' 
import {
  MessageListWrapper
} from './style'

export default checkLogin(memo(function MookMessageList(props) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(999)
  const [messageList, setMessageList] = useState([])
  const { userInfo } = useSelector(state => ({
    userInfo: state.getIn(["user", "userInfo"])
  }), shallowEqual)
  const userId = userInfo.id

  useEffect(() => {
    const offset = (currentPage - 1) * 10;
    if (offset + 1 > totalCount) return;
    getMessageList({
      offset,
      limit: 10
    }).then(res => {
      setTotalCount(res.data.count)
      setMessageList([...messageList, ...res.data.result])
    })
  }, [currentPage])// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onScroll = scroll(() => setCurrentPage(page => page + 1))
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <MessageListWrapper>
      {
        messageList.map((item, index) => {
          return <MookMessageBlock key={item.id} info={item} userId={userId}/>
        })
      }
    </MessageListWrapper>
  )
}))
