import request from './request'


export function getTagList(params) {
  return request.get('/tag', {
    params
  })
}

export function addWatch(tagId) {
  return request.post('/tag/watch', {
    tagId
  })
}


export function deleteWatch(tagId) {
  return request.delete('/watch', {
    tagId
  })
}
