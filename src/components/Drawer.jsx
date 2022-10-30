import React, { useContext } from 'react'

import BottomElementContext from './BottomElementContext'

function Drawer(props) {
  const { shouldUpdateIntersectingElement, bottomElementHeight } =
    useContext(BottomElementContext)

  return (
    <div
      className="drawer"
      style={{
        bottom: shouldUpdateIntersectingElement ? bottomElementHeight : 0
      }}
    >
      Drawer
    </div>
  )
}

export default Drawer
