import React, { useContext } from 'react'

import BottomElementContext from './BottomElementContext'

function Drawer(props) {
  const { shouldUpdateBottom, bottomElementHeight } =
    useContext(BottomElementContext)

  return (
    <div
      className="drawer"
      style={{
        bottom: shouldUpdateBottom ? bottomElementHeight : 0
      }}
    >
      Drawer
    </div>
  )
}

export default Drawer
