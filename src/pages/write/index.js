import React, { memo, useState, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import classnames from 'classnames'

import {
  getArticleList,
  addArticle,
  changeArticle,
  deleteArticle
} from '@/service/article'
import toast from '@/utils/message'

import checkLogin from '@/components/check-login'

import MookEditor from './components/editor'
import {
  WriteWrapper,
  ListWrapper
} from './style'

export default checkLogin(memo(function MookWrite() {
  const [chooseIndex, setChooseIndex] = useState(0);
  const [articleList, setArticleList] = useState([])
  const { userInfo } = useSelector(state => ({
    userInfo: state.getIn(["user", "userInfo"])
  }), shallowEqual)
  const { id: userId } = userInfo;
  const dispatch = useDispatch();

  function getList() {
    return getArticleList({
      offset: 0,
      limit: 999,
      userId,
      order: "desc",
      key: "id"
    }).then(res => {
      res = res.data
      setArticleList(res.result)
    })
  }
  function refresh() {
    getList();
    setChooseIndex(0);
  }
  function addNewArticle () {
    addArticle("新建文章", "", []).then(res => {
      refresh();
    })
  }
  function updateArticle(articleId, title, content, tags) {
    changeArticle(articleId, title, content, tags).then(res => {
      getList();
      toast(dispatch, "发表成功")
    })
  }
  function removeArticle(articleId) {
    deleteArticle(articleId).then(res => {
      refresh();
      toast(dispatch, "删除成功")
    })
  }
  
  useEffect(() => {
    refresh();
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return (
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
                  <div className="article-count">字数：{item.content.length}</div>
                </div>
              </div>
            ))
          }
        </div>
      </ListWrapper>
      <MookEditor
        article={articleList[chooseIndex]}
        updateArticle={updateArticle}
        removeArticle={removeArticle}
      />
    </WriteWrapper>
  )
}))
