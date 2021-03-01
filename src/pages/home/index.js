import React, { memo, useState, useEffect } from 'react'
import { getArticleList } from '../../service/article'
import { scroll } from '@/utils/optimize'

import MookArticleBlock from '../../components/article-block'

import {
  HomeWrapper,
  ArticleListWrapper,
  SideBarWrapper
} from './style'

export default memo(function MookHome() {
  const [currentPage, setCurrentPage] = useState(1);
  const [articleCount, setArticleCount] = useState(0);
  const [articleList, setArticleList] = useState([])
  

  useEffect(() => {
    const offset = (currentPage - 1) * 10;
    if (offset > articleCount) return;
    getArticleList({
      offset,
      limit: 10,
      order: "desc",
      key: "id"
    }).then(res => {
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
    <HomeWrapper>
      <ArticleListWrapper>
        {
          articleList.map((item, index) => {
            return <MookArticleBlock info={item} key={item.id}/>
          })
        }
      </ArticleListWrapper>
      <SideBarWrapper></SideBarWrapper>
    </HomeWrapper>
  )
})
