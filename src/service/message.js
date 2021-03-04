import request from './request'


export function getMessageList(params) {
  return request.get('/message/list', {
    params
  })
}

export function getMessageInfo(messageId) {
  return request.get(`/message/${messageId}`);
}

export function sendMessage(receiverId, content) {
  return request.post('/message', {
    receiverId,
    content
  })
}

export function getRecord(userId) {
  return request.get('/message/record', {
    params: {
      userId
    }
  })
}