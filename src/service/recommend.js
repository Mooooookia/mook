import request from './request'


export function getRecommend(offset, limit) {
  return request.get('/recommend/article', {
    params: {
      offset,
      limit
    }
  })
}