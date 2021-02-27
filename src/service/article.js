import request from './request'

export function getArticleList(params) {
  return request.get('/article/list', {
    params
  })
}

export function addArticle(title, content, tags) {
  return request.post('/article', {
    title,
    content,
    tags
  })
}

export function changeArticle(id, title, content, tags) {
  return request.patch(`/article/${id}`, {
    title,
    content,
    tags
  })
}

export function deleteArticle(id) {
  return request.delete(`/article${id}`);
}

export function getArticleInfo(id) {
  return request.get(`/article${id}`);
}

export function addLike(articleId) {
  return request.post('/article/like', {
    articleId
  })
}

export function deleteLike(articleId) {
  return request.delete('/article/like', {
    articleId
  })
}

export function getLike(userId, offset = 0, limit = 10) {
  return request.get('/article/like', {
    params: {
      userId,
      offset,
      limit
    }
  })
}

export function addCollection(articleId) {
  return request.post('/article/collection', {
    articleId
  })
}

export function deleteCollection(articleId) {
  return request.delete('/article/collection', {
    articleId
  })
}

export function getCollection(userId, offset = 0, limit = 10) {
  return request.get('/article/collection', {
    params: {
      userId,
      offset,
      limit
    }
  })
}
