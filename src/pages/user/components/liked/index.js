import React, { memo, useState, useEffect } from 'react'

import { getLike } from '@/service/article'
import { scroll } from '@/utils/optimize'

import MookArticleBlock from '@/components/article-block'

export default memo(function MookLiked(props) {
  const userId = props.match.params.id
  const [currentPage, setCurrentPage] = useState(1);
  const [articleList, setArticleList] = useState([])
  const [articleCount, setArticleCount] = useState(999);

  useEffect(() => {
    setCurrentPage(1);
    setArticleCount(999);
    setArticleList([]);
  }, [userId])

  useEffect(() => {
    const offset = (currentPage - 1) * 10;
    if (offset + 1 > articleCount) return;
    getLike(userId, offset, 10).then(res => {
      res = res.data;
      setArticleCount(res.count)
      setArticleList([...articleList, ...res.result])
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
        articleList.map((item, index) => {
          return <MookArticleBlock info={item} key={item.id}/>
        })
      }
    </div>
  )
})
