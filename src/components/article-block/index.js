import React, {memo} from 'react'


import {
  ArticleWrapper
} from './style'

export default memo(function MookArticleBlock(props) {
  const {title, content, author, commentCount, likeCount, viewCount} = props.info;

  return (
    <ArticleWrapper>
      <div className="title text-nowrap">{title}</div>
      <div className="content">{content}</div>
      <div className="info">
        <div className="info-item">
          <div className="iconfont">&#xe713;</div>
          <div className="text">{author.nickname}</div>
        </div>
        <div className="info-item">
          <div className="iconfont">&#xe60a;</div>
          <div className="text">{commentCount}</div>
        </div>
        <div className="info-item">
          <div className="iconfont">&#xe7f5;</div>
          <div className="text">{likeCount}</div>
        </div>
        <div className="info-item">
          <div className="iconfont">&#xe609;</div>
          <div className="text">{viewCount}</div>
        </div>
      </div>
    </ArticleWrapper>
  )
})
