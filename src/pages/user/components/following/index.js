import React, { memo, useState, useEffect } from 'react'

import { getFollowing } from '@/service/user'
import { scroll } from '@/utils/optimize'

import MookUserBlock from '@/components/user-block'

export default memo(function MookFollowing(props) {
  const userId = props.match.params.id
  const [currentPage, setCurrentPage] = useState(1);
  const [userList, setUserList] = useState([])
  const [userCount, setUserCount] = useState(999);

  useEffect(() => {
    setCurrentPage(1);
    setUserCount(999);
    setUserList([]);
  }, [userId])

  useEffect(() => {
    const offset = (currentPage - 1) * 10;
    if (offset + 1 > userCount) return;
    getFollowing({ userId, offset, limit: 10 }).then(res => {
      res = res.data;
      setUserCount(res.count)
      setUserList([...userList, ...res.result])
    })
  }, [currentPage])// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onScroll = scroll(() => setCurrentPage(page => page + 1))
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <div>
      {
        userList.map((item, index) => {
          return <MookUserBlock info={item} key={item.id}/>
        })
      }
    </div>
  )
})
