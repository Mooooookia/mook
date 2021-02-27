import * as actionTypes from './constants'

export const changeArtcileListAction = (articleList) => ({
  type: actionTypes.CHANGE_ARTICLE_LIST,
  articleList
})

export const changeArticleInfoAction = (id, info) => ({
  type: actionTypes.CHANGE_ARTICLE_INFO,
  id,
  info
})

export const addNewArticleAction = (article) => ({
  type: actionTypes.ADD_NEW_ARTICLE,
  article
})

export const getArticleList = () => {
  return (dispatch) => {
    
  }
}