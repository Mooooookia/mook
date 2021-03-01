import request from './request'


export function getCommentList(params) {
  return request.get('/comment', {
    params
  })
}

export function addComment(content, articleId) {
  return request.post('/comment', {
    content,
    articleId
  })
}

export function deleteComment(id) {
  return request.delete(`/comment/${id}`);
}

export function addLike(commentId) {
  return request.post('/comment/like', {
    commentId
  })
}

export function deleteLike(commentId) {
  return request.delete('/comment/like', {data: {
    commentId
  }})
}

export function reply(content, commentId, articleId) {
  return request.post('/reply', {
    content,
    commentId,
    articleId
  })
}
