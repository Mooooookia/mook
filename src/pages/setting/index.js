import React, { memo, useState, useEffect } from 'react'

export default memo(function MookSetting() {
  const [count, setCount] = useState(0);

  function add() {
    // setCount(count + 1)
    console.log(count)
    setCount(num => num + 1)
  }

  useEffect(() => {
    window.addEventListener('scroll', add)
    return () => {
      window.removeEventListener('scroll', add)
    }
  }, [])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{height: "10000px"}}>
      {count}<br/>
      <button onClick={e => add()}>+1</button>
    </div>
  )
})
