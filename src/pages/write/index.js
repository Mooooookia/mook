import React, { memo, useState, useCallback } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import classnames from 'classnames'


import { addNewArticleAction, changeArticleInfoAction } from './store/actionCreators'

import { Redirect } from 'react-router-dom'
import MookEditor from './components/editor'
import {
  WriteWrapper,
  ListWrapper
} from './style'

export default memo(function MookWrite() {
  const [chooseIndex, setChooseIndex] = useState(0);
  const [showNewArticle, setShowNewArticle] = useState(false);

  const { isLogin, articleList = [], emptyArticle } = useSelector(state => ({
    isLogin: state.getIn(["user", "isLogin"]),
    articleList: state.getIn(["write", "articleList"]),
    emptyArticle: state.getIn(["write", "emptyArticle"])
  }), shallowEqual);
  
  const dispatch = useDispatch();

  const updateArticle = useCallback((id, data) => {
    if (id > -1) dispatch(changeArticleInfoAction(id, data));
    else {
      //新建文章，调用接口
      dispatch()
    }
  }, [dispatch])

  function addNewArticle () {
    setChooseIndex(-1);
    setShowNewArticle(true)

  }

  return (
    <>
      {isLogin || <Redirect to="login"/>}
      <WriteWrapper>
        <ListWrapper>
          <button className="add-new" onClick={e => addNewArticle()}>
            <i className="iconfont add-icon">&#xe62f;</i>&nbsp;
            新建文章
          </button>
          <div className="article-list">
            {
              articleList.map((item, index) => (
                <div
                  className={classnames("article-item", {"choose-item": index === chooseIndex})}
                  key={item.id}
                  onClick={e => setChooseIndex(index)}>
                  <div className="article-title">{item.title}</div>
                  <div className="article-info">
                    <div className="article-category">{item.category}</div>
                    <div className="article-count">字数：{item.count}</div>
                  </div>
                </div>
              ))
            }
            {showNewArticle && <div
              className={classnames("article-item", {"choose-item": chooseIndex === -1})}
              key={-1}
              onClick={e => setChooseIndex(-1)}>
              <div className="article-title">新文章</div>
              <div className="article-info">
                <div className="article-category">未知</div>
                <div className="article-count">字数：0</div>
              </div>
            </div>
            }
          </div>
        </ListWrapper>
        <MookEditor article={chooseIndex > -1 ? articleList[chooseIndex] : emptyArticle} onSubmit={data => updateArticle(chooseIndex, data)}/>
      </WriteWrapper>
    </>
  )
})
