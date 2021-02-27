import * as actionTypes from './constants'
export const changeShowMessage = (showMessage) => ({
  type: actionTypes.CHANGE_SHOW_MESSAGE,
  showMessage
})

export const changeMessage = (message) => ({
  type: actionTypes.CHANGE_MESSAGE,
  message
})