import React, { useContext } from 'react'

import BottomElementContext from './BottomElementContext'

function BackToTop(props) {
  const { setRef } = useContext(BottomElementContext)
  return (
    <div ref={setRef} className="back-to-top">
      BackToTop
    </div>
  )
}

export default BackToTop
