import { changeMessage, changeShowMessage } from '@/common/store'

export default function toast(dispatch, message) {
  dispatch(changeMessage(message));
  dispatch(changeShowMessage(true));
}