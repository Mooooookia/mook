import request from './request'


export function avatar(file) {
  return request.post('/upload/avatar', {
    file
  })
}

export function picture(file, id) {
  return request.post(`/upload?articleId=${id}`, {
    file
  })
}
