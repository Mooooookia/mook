import request from './request';

export function test() {
  return request.post('/user/test');
}

export function login(username, password) {
  return request.post('/user/login', {
    username,
    password
  })
}

export function logout() {
  return new Promise((resolve, reject) => {
    localStorage.removeItem('token');
    resolve();
  })
}

export function register(username, password) {
  return request.post('/user/register', {
    username,
    password
  })
}

export function userInfo() {
  return request.get('/user/info');
}

export function authorInfo(id) {
  return request.get(`/user/author/${id}`);
}

export function changeInfo(info) {
  return request.patch('/user/info', info)
}

export function changePassword(oldPassword, newPassword) {
  return request.patch('/user/password', {
    oldPassword,
    newPassword
  })
}

export function addFollow(userId) {
  return request.post('/user/follow', {
    userId
  })
}

export function deleteFollow(userId) {
  return request.delete('/user/follow', {
    userId
  })
}

export function getFollowing(params) {
  return request.get('/user/following', {
    params
  })
}

export function getFollower(params) {
  return request.get('/user/follower', {
    params
  })
}

export function getUserList(params) {
  return request.get('/user/list', {
    params
  })
}

export function addBlack(userId) {
  return request.post('/user/blacklist', {
    userId
  })
}

export function deleteBlack(userId) {
  return request.delete('/user/blacklist', {
    userId
  })
}

export function getBlack() {
  return request.get('/user/blacklist');
}

export function getAction(params) {
  return request.get('/user/action', {
    params
  })
}