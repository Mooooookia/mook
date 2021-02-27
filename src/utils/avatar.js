import {
  proBaseURL
} from '../common/config'

export function getAvatar(id) {
  return proBaseURL + `/user/avatar/${id}` 
}