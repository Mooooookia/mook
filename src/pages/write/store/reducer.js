import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  articleList: [{
    title: "测试文章1",
    author: "Mokia",
    content: "测试文章1内容",
    category: "前端",
    tags: ["react", "hooks"],
    count: 7,
    id: 1
  }, {
    title: "测试文章2",
    author: "Mokia",
    content: "测试文章2内容",
    category: "后端",
    tag: ["node", "koa"],
    count: 7,
    id: 2
  }],
  emptyArticle: {
    title: "无标题文档",
    author: "Mokia",
    content: "",
    category: "",
    tag: [],
    count: 0,
    id: -1
  }
});

function reducer (state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_ARTICLE_LIST:
      return state.set("articleList", action.articleList);
    case actionTypes.CHANGE_ARTICLE_INFO:
      let newList = [...state.get("articleList")];
      newList[action.id] = Object.assign({}, newList[action.id], action.info);
      return state.set("articleList", newList);
    case actionTypes.ADD_NEW_ARTICLE:
      newList = [...state.get("articleList")];
      newList.push(action.article);
      return state.set("actionList", newList);
    default:
      return state;
  }
}
export default reducer;