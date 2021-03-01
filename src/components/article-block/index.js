import React, {memo} from 'react'
import { withRouter } from 'react-router-dom'

import {
  ArticleWrapper
} from './style'

export default withRouter(memo(function MookArticleBlock(props) {
  const {id, title, content, author, commentCount, likeCount, viewCount} = props.info;
  
  function jumpTo() {
    if (props.history) {
      props.history.push(`/article/${id}`)
    }
  }

  return (
    <ArticleWrapper>
      <div className="title text-nowrap" onClick={e => jumpTo()}>{title}</div>
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
}))
