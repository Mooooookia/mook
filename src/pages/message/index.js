import React, { memo } from 'react'
import checkLogin from '../../components/check-login'

export default checkLogin(memo(function MookMessage() {
  return (
    <div>
      MookMessage
    </div>
  )
}))
