import React, { useContext } from 'react'

import BottomElementContext from './BottomElementContext'

function Drawer(props) {
  const { backToTopInView, backToTopHeight, reachedBottom } =
    useContext(BottomElementContext)

  return (
    <div
      className="drawer"
      style={{
        bottom: backToTopInView && reachedBottom ? backToTopHeight : 0
      }}
    >
      Drawer
    </div>
  )
}

export default Drawer
