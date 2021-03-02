import React, { memo, useState, useEffect } from 'react'
import classnames from 'classnames'

import { getArticleList } from '@/service/article'
import { getUserList } from '@/service/user'
import { scroll } from '@/utils/optimize'


import MookArticleBlock from '@/components/article-block'
import MookUserBlock from '@/components/user-block'


import {
  SearchWrapper,
  LeftWrapper,
  RightWrapper
} from './style'

export default memo(function MookSearch(props) {
  const search = props.location.search.split("=").pop()
  const [chooseIndex, setChooseIndex] = useState(0);
  const [order, setOrder] = useState("id")
  const [itemList, setItemList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCount, setTotalCount] = useState(999);
  

  useEffect(() => {
    setChooseIndex(0);
    setOrder("id")
    setCurrentPage(1)
    getArticleList({
      offset: 0,
      limit: 10,
      order: "desc",
      key: "id",
      search
    }).then(res => {
      res = res.data;
      setTotalCount(res.count)
      setItemList(res.result)
    })
  }, [search])

  useEffect(() => {
    if (chooseIndex === 0) {
      setOrder("id")
      setCurrentPage(1)
      getArticleList({
        offset: 0,
        limit: 10,
        order: "desc",
        key: "id",
        search
      }).then(res => {
        res = res.data;
        setTotalCount(res.count)
        setItemList(res.result)
      })
    } else {
      setOrder("follower")
      setCurrentPage(1)
      getUserList({
        offset: 0,
        limit: 10,
        key: "follower",
        order: "desc",
        search
      }).then(res => {
        res = res.data;
        setTotalCount(res.count)
        setItemList(res.result)
      })
    }
  }, [chooseIndex])// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (currentPage === 1) return;
    const offset = (currentPage - 1) * 10;
    if (offset + 1 > totalCount) return;
    const res = chooseIndex === 0 ? getArticleList({
      offset,
      limit: 10,
      order: "desc",
      key: order,
      search
    }) : getUserList({
      offset,
      limit: 10,
      key: order,
      order: "desc",
      search
    })
    res.then(res => {
      res = res.data;
      setTotalCount(res.count)
      setItemList([...itemList, ...res.result])
    })
  }, [currentPage])// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (chooseIndex === 0) {
      setCurrentPage(1)
      getArticleList({
        offset: 0,
        limit: 10,
        order: "desc",
        key: order,
        search
      }).then(res => {
        res = res.data;
        setTotalCount(res.count)
        setItemList(res.result)
      })
    } else {
      setCurrentPage(1)
      getUserList({
        offset: 0,
        limit: 10,
        key: order,
        order: "desc",
        search
      }).then(res => {
        res = res.data;
        setTotalCount(res.count)
        setItemList(res.result)
      })
    }
  }, [order])// eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const onScroll = scroll(() => setCurrentPage(page => page + 1))
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <SearchWrapper>
      <LeftWrapper>
        <div
          className={classnames("search-item", {selected: chooseIndex === 0})}
          onClick={e => setChooseIndex(0)}
        >
          <i className="iconfont">&#xe67d;</i>
          <div className="search-title">文章</div>
        </div>
        <div
          className={classnames("search-item", {selected: chooseIndex === 1})}
          onClick={e => setChooseIndex(1)}
        >
          <i className="iconfont">&#xe713;</i>
          <div className="search-title">用户</div>
        </div>
      </LeftWrapper>
      <RightWrapper>
        {
          chooseIndex === 0 && (
            <div className="list-wrapper">
              <div className="header">
                <div className="order">
                  <div className={classnames("order-item", {selected: order === "id"})} onClick={e => setOrder("id")}>按时间倒序</div>
                  <div className={classnames("order-item", {selected: order === "likeCount"})} onClick={e => setOrder("likeCount")}>按喜欢数倒序</div>
                  <div className={classnames("order-item", {selected: order === "viewCount"})} onClick={e => setOrder("viewCount")}>按点击量倒序</div>
                </div>
                <div className="total">{totalCount}个结果</div>
              </div>
              {
                itemList.map((item, index) => {
                  return <MookArticleBlock info={item} key={item.id}/>
                })
              }
            </div>
          )
        }
        {
          chooseIndex === 1 && (
            <div className="list-wrapper">
              <div className="header">
                <div className="order">
                  <div className={classnames("order-item", {selected: order === "follower"})} onClick={e => setOrder("follower")}>按粉丝数倒序</div>
                  <div className={classnames("order-item", {selected: order === "likeCount"})} onClick={e => setOrder("likeCount")}>按喜欢数倒序</div>
                  <div className={classnames("order-item", {selected: order === "articleCount"})} onClick={e => setOrder("articleCount")}>按文章数倒序</div>
                </div>
                <div className="total">{totalCount}个结果</div>
              </div>
              {
                itemList.map((item, index) => {
                  return <MookUserBlock info={item} key={item.id}/>
                })
              }
            </div>
          )
        }
      </RightWrapper>
    </SearchWrapper>
  )
})
