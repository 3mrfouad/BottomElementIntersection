import React, { createContext } from 'react'

const BottomElementContext = createContext({
  shouldUpdateIntersectingElement: false,
  bottomElementHeight: 0,
  setRef: () => {}
})

export default BottomElementContext
