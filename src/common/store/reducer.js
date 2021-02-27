import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  showMessage: false,
  message: ""
})

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_SHOW_MESSAGE:
      return state.set("showMessage", action.showMessage);
    case actionTypes.CHANGE_MESSAGE:
      return state.set("message", action.message)
    default:
      return state
  }
}